/**
 * urlCheckerService.js
 * Mock URL safety checker - analyzes URL patterns to simulate threat detection.
 */
import { suspiciousPatterns, dangerousPatterns } from '../data/mockData';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Check URL safety (mock implementation)
 * @param {string} url - URL to check
 * @returns {Promise<Object>} { status, score, details }
 */
export const checkUrlSafety = async (url) => {
  await delay(800 + Math.random() * 700); // 800-1500ms delay

  if (!url || url.trim() === '') throw new Error('Please enter a valid URL.');

  const lower = url.toLowerCase();
  let score = 100;
  const flags = [];

  // Check dangerous patterns
  for (const p of dangerousPatterns) {
    if (lower.includes(p)) { score -= 35; flags.push(`Contains dangerous keyword: "${p}"`); }
  }

  // Check suspicious patterns
  for (const p of suspiciousPatterns) {
    if (lower.includes(p)) { score -= 10; flags.push(`Contains suspicious keyword: "${p}"`); }
  }

  // Check for IP address instead of domain
  if (/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(lower)) {
    score -= 25; flags.push('Uses IP address instead of domain name');
  }

  // Check for excessive subdomains
  try {
    const hostname = new URL(lower.startsWith('http') ? lower : `https://${lower}`).hostname;
    if (hostname.split('.').length > 3) { score -= 15; flags.push('Excessive subdomains detected'); }
  } catch { /* ignore parse errors */ }

  // Check for no HTTPS
  if (lower.startsWith('http://')) { score -= 10; flags.push('Uses HTTP instead of HTTPS'); }

  // Check for unusual characters
  if (/[@!#$%^&*()+=]/.test(lower.replace(/^https?:\/\//, ''))) {
    score -= 15; flags.push('Contains unusual characters');
  }

  // Clamp score
  score = Math.max(0, Math.min(100, score));

  let status, message;
  if (score >= 70) {
    status = 'safe'; message = 'This URL appears to be safe.';
  } else if (score >= 40) {
    status = 'suspicious'; message = 'This URL contains suspicious patterns. Proceed with caution.';
  } else {
    status = 'dangerous'; message = 'This URL is potentially dangerous. Avoid visiting it.';
  }

  return { url, status, score, message, flags, checkedAt: new Date().toISOString() };
};

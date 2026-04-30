/**
 * mockData.js
 * Contains all mock/dummy data for the Cyber Threat Awareness App.
 * Includes threat data, cybersecurity tips, and URL patterns.
 */

// ============================
// Threat Categories
// ============================
export const THREAT_CATEGORIES = ['phishing', 'malware', 'spam', 'ransomware', 'ddos'];

// ============================
// Mock Threat Data (50+ entries)
// ============================
export const threatData = [
  { id: 1, name: 'PayPal Credential Harvester', category: 'phishing', severity: 'high', date: '2026-04-28', description: 'Fake PayPal login page stealing credentials via cloned UI.', source: 'Email Campaign', affectedUsers: 12500 },
  { id: 2, name: 'TrojanDownloader.Win32', category: 'malware', severity: 'critical', date: '2026-04-27', description: 'Trojan disguised as Windows update downloads additional malware.', source: 'Malicious Website', affectedUsers: 8900 },
  { id: 3, name: 'Nigerian Prince Scam v2.0', category: 'spam', severity: 'low', date: '2026-04-27', description: 'Advanced fee fraud with cryptocurrency twist.', source: 'Email', affectedUsers: 45000 },
  { id: 4, name: 'LockBit 4.0 Ransomware', category: 'ransomware', severity: 'critical', date: '2026-04-26', description: 'Latest LockBit variant with double extortion capabilities.', source: 'RDP Exploit', affectedUsers: 3200 },
  { id: 5, name: 'Volumetric UDP Flood', category: 'ddos', severity: 'high', date: '2026-04-26', description: 'Massive UDP flood attack targeting financial institutions.', source: 'Botnet', affectedUsers: 150000 },
  { id: 6, name: 'Microsoft 365 Phishing Kit', category: 'phishing', severity: 'high', date: '2026-04-25', description: 'Sophisticated M365 phishing kit with MFA bypass.', source: 'Phishing-as-a-Service', affectedUsers: 22000 },
  { id: 7, name: 'Emotet Resurgence', category: 'malware', severity: 'critical', date: '2026-04-25', description: 'Emotet botnet returns with new evasion techniques.', source: 'Macro-enabled Documents', affectedUsers: 67000 },
  { id: 8, name: 'Crypto Giveaway Spam', category: 'spam', severity: 'medium', date: '2026-04-24', description: 'Fake crypto giveaway campaigns on social media.', source: 'Social Media', affectedUsers: 89000 },
  { id: 9, name: 'Conti Successor Ransomware', category: 'ransomware', severity: 'critical', date: '2026-04-24', description: 'New ransomware group with Conti codebase targeting healthcare.', source: 'Phishing Email', affectedUsers: 5600 },
  { id: 10, name: 'HTTP/2 Rapid Reset', category: 'ddos', severity: 'high', date: '2026-04-23', description: 'Zero-day DDoS attack exploiting HTTP/2 protocol.', source: 'Protocol Exploit', affectedUsers: 200000 },
  { id: 11, name: 'DocuSign Impersonation', category: 'phishing', severity: 'medium', date: '2026-04-23', description: 'Fake DocuSign requests harvesting corporate credentials.', source: 'Email', affectedUsers: 15600 },
  { id: 12, name: 'ChromeLoader Variant', category: 'malware', severity: 'high', date: '2026-04-22', description: 'Browser hijacker distributed through fake game downloads.', source: 'Torrent Sites', affectedUsers: 34000 },
  { id: 13, name: 'Pharmacy Spam Network', category: 'spam', severity: 'low', date: '2026-04-22', description: 'Large-scale pharmacy spam campaign via compromised servers.', source: 'Compromised SMTP', affectedUsers: 120000 },
  { id: 14, name: 'Royal Ransomware', category: 'ransomware', severity: 'high', date: '2026-04-21', description: 'Targets education sector with callback phishing.', source: 'Phone Callback', affectedUsers: 4100 },
  { id: 15, name: 'DNS Amplification Attack', category: 'ddos', severity: 'medium', date: '2026-04-21', description: 'DNS amplification targeting government websites.', source: 'Open DNS Resolvers', affectedUsers: 75000 },
  { id: 16, name: 'Amazon Order Phishing', category: 'phishing', severity: 'medium', date: '2026-04-20', description: 'Fake order confirmation emails with malicious links.', source: 'Email Campaign', affectedUsers: 28000 },
  { id: 17, name: 'AsyncRAT Campaign', category: 'malware', severity: 'high', date: '2026-04-20', description: 'Remote access trojan spreading via OneNote attachments.', source: 'Email Attachments', affectedUsers: 11000 },
  { id: 18, name: 'SEO Poisoning Spam', category: 'spam', severity: 'medium', date: '2026-04-19', description: 'Search engine poisoning pushing malicious downloads.', source: 'Search Engines', affectedUsers: 56000 },
  { id: 19, name: 'BlackCat ALPHV', category: 'ransomware', severity: 'critical', date: '2026-04-19', description: 'Cross-platform ransomware written in Rust targeting VMware.', source: 'Compromised Credentials', affectedUsers: 7800 },
  { id: 20, name: 'SYN Flood Attack', category: 'ddos', severity: 'high', date: '2026-04-18', description: 'Classic SYN flood with spoofed source IPs.', source: 'Botnet', affectedUsers: 90000 },
  { id: 21, name: 'LinkedIn Job Scam', category: 'phishing', severity: 'medium', date: '2026-04-18', description: 'Fake recruiter profiles collecting personal information.', source: 'Social Media', affectedUsers: 19000 },
  { id: 22, name: 'Raccoon Stealer v2', category: 'malware', severity: 'high', date: '2026-04-17', description: 'Information stealer targeting browser credentials and crypto wallets.', source: 'Cracked Software', affectedUsers: 42000 },
  { id: 23, name: 'Lottery Winner Spam', category: 'spam', severity: 'low', date: '2026-04-17', description: 'Classic lottery scam updated with QR code payments.', source: 'SMS/Email', affectedUsers: 67000 },
  { id: 24, name: 'Hive Ransomware', category: 'ransomware', severity: 'high', date: '2026-04-16', description: 'Ransomware targeting hospitals with double extortion.', source: 'VPN Exploit', affectedUsers: 2900 },
  { id: 25, name: 'Application Layer DDoS', category: 'ddos', severity: 'critical', date: '2026-04-16', description: 'Layer 7 attacks targeting web application endpoints.', source: 'Sophisticated Botnet', affectedUsers: 180000 },
  { id: 26, name: 'IRS Tax Phishing', category: 'phishing', severity: 'high', date: '2026-04-15', description: 'Tax season phishing impersonating IRS communications.', source: 'Email/SMS', affectedUsers: 35000 },
  { id: 27, name: 'Vidar Stealer', category: 'malware', severity: 'high', date: '2026-04-15', description: 'Data exfiltration malware targeting financial applications.', source: 'Malvertising', affectedUsers: 23000 },
  { id: 28, name: 'Tech Support Scam', category: 'spam', severity: 'medium', date: '2026-04-14', description: 'Fake Microsoft support pop-ups with remote access requests.', source: 'Malvertising', affectedUsers: 98000 },
  { id: 29, name: 'Cl0p MOVEit Attack', category: 'ransomware', severity: 'critical', date: '2026-04-14', description: 'Mass exploitation of MOVEit Transfer vulnerability.', source: 'Zero-Day Exploit', affectedUsers: 15000 },
  { id: 30, name: 'Memcached Amplification', category: 'ddos', severity: 'high', date: '2026-04-13', description: 'Record-breaking amplification attack using memcached servers.', source: 'Open Memcached', affectedUsers: 250000 },
  { id: 31, name: 'Google Docs Phishing', category: 'phishing', severity: 'medium', date: '2026-04-13', description: 'Shared document notifications leading to credential theft.', source: 'Google Workspace', affectedUsers: 41000 },
  { id: 32, name: 'QakBot Revival', category: 'malware', severity: 'critical', date: '2026-04-12', description: 'QakBot returns with new C2 infrastructure.', source: 'WSF Files', affectedUsers: 55000 },
  { id: 33, name: 'Romance Scam Network', category: 'spam', severity: 'high', date: '2026-04-12', description: 'Organized romance scam network on dating platforms.', source: 'Dating Apps', affectedUsers: 31000 },
  { id: 34, name: 'Akira Ransomware', category: 'ransomware', severity: 'high', date: '2026-04-11', description: 'New ransomware group targeting SMBs via Cisco VPN.', source: 'VPN Vulnerability', affectedUsers: 6200 },
  { id: 35, name: 'NTP Amplification', category: 'ddos', severity: 'medium', date: '2026-04-11', description: 'NTP-based amplification attack on gaming infrastructure.', source: 'Open NTP Servers', affectedUsers: 110000 },
  { id: 36, name: 'Banking SMS Phishing', category: 'phishing', severity: 'critical', date: '2026-04-10', description: 'SMS-based phishing targeting mobile banking users.', source: 'Smishing', affectedUsers: 48000 },
  { id: 37, name: 'RedLine Stealer', category: 'malware', severity: 'high', date: '2026-04-10', description: 'Credential stealer sold as MaaS on dark web.', source: 'Telegram Channels', affectedUsers: 78000 },
  { id: 38, name: 'Investment Fraud Spam', category: 'spam', severity: 'high', date: '2026-04-09', description: 'AI-generated investment advice leading to fraud.', source: 'Social Media Ads', affectedUsers: 43000 },
  { id: 39, name: 'Medusa Ransomware', category: 'ransomware', severity: 'high', date: '2026-04-09', description: 'Ransomware with data leak site targeting critical infrastructure.', source: 'Brute Force', affectedUsers: 8500 },
  { id: 40, name: 'Carpet Bombing DDoS', category: 'ddos', severity: 'high', date: '2026-04-08', description: 'Distributed attack targeting entire subnet ranges.', source: 'IoT Botnet', affectedUsers: 300000 },
  { id: 41, name: 'Zoom Meeting Phishing', category: 'phishing', severity: 'medium', date: '2026-04-08', description: 'Fake Zoom meeting invitations stealing credentials.', source: 'Email', affectedUsers: 17000 },
  { id: 42, name: 'Agent Tesla v3', category: 'malware', severity: 'high', date: '2026-04-07', description: 'Keylogger with screenshot and clipboard stealing capabilities.', source: 'ISO Attachments', affectedUsers: 29000 },
  { id: 43, name: 'Sextortion Email Wave', category: 'spam', severity: 'medium', date: '2026-04-07', description: 'Mass sextortion emails using leaked passwords for credibility.', source: 'Data Breaches', affectedUsers: 150000 },
  { id: 44, name: 'Play Ransomware', category: 'ransomware', severity: 'high', date: '2026-04-06', description: 'Ransomware exploiting Exchange vulnerabilities.', source: 'Exchange Exploit', affectedUsers: 4700 },
  { id: 45, name: 'Slowloris Attack', category: 'ddos', severity: 'medium', date: '2026-04-06', description: 'Low-bandwidth DoS attack keeping connections open.', source: 'Single Machine', affectedUsers: 25000 },
  { id: 46, name: 'Instagram Verification Scam', category: 'phishing', severity: 'medium', date: '2026-04-05', description: 'Fake verification badge offers stealing Instagram credentials.', source: 'Direct Messages', affectedUsers: 52000 },
  { id: 47, name: 'FormBook Malware', category: 'malware', severity: 'high', date: '2026-04-05', description: 'Form grabber and keylogger targeting web browsers.', source: 'Phishing Email', affectedUsers: 36000 },
  { id: 48, name: 'Fake Antivirus Alerts', category: 'spam', severity: 'medium', date: '2026-04-04', description: 'Browser pop-ups mimicking antivirus warnings.', source: 'Ad Networks', affectedUsers: 88000 },
  { id: 49, name: 'NoEscape Ransomware', category: 'ransomware', severity: 'critical', date: '2026-04-04', description: 'RaaS operation with Linux and Windows encryptors.', source: 'Affiliate Program', affectedUsers: 9300 },
  { id: 50, name: 'HTTPS Flood Attack', category: 'ddos', severity: 'high', date: '2026-04-03', description: 'Encrypted HTTP flood evading traditional DDoS protection.', source: 'Proxy Network', affectedUsers: 165000 },
  { id: 51, name: 'WhatsApp QR Phishing', category: 'phishing', severity: 'high', date: '2026-04-03', description: 'QR code phishing attack hijacking WhatsApp Web sessions.', source: 'Social Engineering', affectedUsers: 21000 },
  { id: 52, name: 'Cobalt Strike Beacon', category: 'malware', severity: 'critical', date: '2026-04-02', description: 'Cracked Cobalt Strike used for post-exploitation activities.', source: 'Pirated Tools', affectedUsers: 14000 },
];

// ============================
// Monthly Threat Statistics (for charts)
// ============================
export const monthlyThreatStats = [
  { month: 'Jan', phishing: 1245, malware: 890, spam: 2100, ransomware: 340, ddos: 120 },
  { month: 'Feb', phishing: 1380, malware: 920, spam: 1950, ransomware: 280, ddos: 150 },
  { month: 'Mar', phishing: 1520, malware: 1100, spam: 2300, ransomware: 410, ddos: 180 },
  { month: 'Apr', phishing: 1680, malware: 1250, spam: 2150, ransomware: 520, ddos: 220 },
  { month: 'May', phishing: 1450, malware: 980, spam: 2400, ransomware: 380, ddos: 190 },
  { month: 'Jun', phishing: 1720, malware: 1350, spam: 2050, ransomware: 460, ddos: 250 },
  { month: 'Jul', phishing: 1890, malware: 1180, spam: 2600, ransomware: 540, ddos: 310 },
  { month: 'Aug', phishing: 2100, malware: 1420, spam: 2800, ransomware: 620, ddos: 280 },
  { month: 'Sep', phishing: 1950, malware: 1300, spam: 2500, ransomware: 490, ddos: 340 },
  { month: 'Oct', phishing: 2200, malware: 1550, spam: 2900, ransomware: 710, ddos: 390 },
  { month: 'Nov', phishing: 2350, malware: 1680, spam: 3100, ransomware: 580, ddos: 420 },
  { month: 'Dec', phishing: 2500, malware: 1800, spam: 3400, ransomware: 650, ddos: 450 },
];

// ============================
// Dashboard Summary Stats
// ============================
export const dashboardStats = {
  totalThreats: 52847,
  phishingAttacks: 18920,
  malwareDetected: 14230,
  spamBlocked: 28500,
  ransomwareIncidents: 5480,
  ddosAttacks: 3100,
  threatsBlockedToday: 1247,
  activeAlerts: 23,
};

// ============================
// Cybersecurity Awareness Tips
// ============================
export const awarenessTips = [
  {
    id: 1,
    category: 'phishing',
    title: 'Recognizing Phishing Emails',
    icon: '🎣',
    tips: [
      'Check the sender\'s email address carefully — look for misspellings or unusual domains.',
      'Hover over links before clicking to see the actual URL destination.',
      'Be suspicious of urgent language like "Your account will be closed!"',
      'Never provide passwords or sensitive data via email.',
      'Look for generic greetings like "Dear Customer" instead of your name.',
      'Verify unexpected attachments with the sender through a different communication channel.',
    ],
  },
  {
    id: 2,
    category: 'passwords',
    title: 'Strong Password Practices',
    icon: '🔐',
    tips: [
      'Use at least 12 characters with a mix of uppercase, lowercase, numbers, and symbols.',
      'Never reuse passwords across different accounts.',
      'Use a reputable password manager to generate and store passwords.',
      'Enable two-factor authentication (2FA) wherever possible.',
      'Avoid using personal information like birthdays or pet names.',
      'Change passwords immediately if you suspect a breach.',
    ],
  },
  {
    id: 3,
    category: 'social-engineering',
    title: 'Social Engineering Defense',
    icon: '🎭',
    tips: [
      'Verify the identity of anyone requesting sensitive information.',
      'Be cautious of unsolicited phone calls claiming to be from IT support.',
      'Don\'t plug in unknown USB drives — they could contain malware.',
      'Be wary of tailgating — someone following you through a secure door.',
      'Question unusual requests, even if they appear to come from management.',
      'Report suspicious interactions to your security team immediately.',
    ],
  },
  {
    id: 4,
    category: 'safe-browsing',
    title: 'Safe Browsing Habits',
    icon: '🌐',
    tips: [
      'Always check for HTTPS and a padlock icon before entering sensitive data.',
      'Keep your browser and extensions updated to the latest versions.',
      'Avoid downloading software from unofficial or unknown sources.',
      'Use an ad blocker to prevent malvertising attacks.',
      'Clear your browser cache and cookies regularly.',
      'Be cautious of pop-ups claiming your computer is infected.',
    ],
  },
  {
    id: 5,
    category: 'malware',
    title: 'Malware Prevention',
    icon: '🦠',
    tips: [
      'Keep your operating system and all software up to date.',
      'Install and maintain reputable antivirus software.',
      'Don\'t download email attachments from unknown senders.',
      'Scan all downloaded files before opening them.',
      'Be cautious with macro-enabled documents (Word, Excel).',
      'Regularly backup your data to an offline or cloud location.',
    ],
  },
  {
    id: 6,
    category: 'mobile-security',
    title: 'Mobile Device Security',
    icon: '📱',
    tips: [
      'Only install apps from official app stores (Google Play, Apple App Store).',
      'Review app permissions before installing — question excessive access requests.',
      'Enable device encryption and set a strong screen lock.',
      'Keep your mobile OS and apps updated.',
      'Avoid connecting to public Wi-Fi without a VPN.',
      'Enable remote wipe capability in case your device is lost or stolen.',
    ],
  },
  {
    id: 7,
    category: 'data-protection',
    title: 'Data Protection Essentials',
    icon: '🛡️',
    tips: [
      'Encrypt sensitive files before sharing them.',
      'Use secure file sharing services instead of email for sensitive documents.',
      'Regularly audit who has access to your shared files and folders.',
      'Shred physical documents containing sensitive information.',
      'Be mindful of what you share on social media — attackers use this info.',
      'Understand and comply with data protection regulations (GDPR, CCPA).',
    ],
  },
  {
    id: 8,
    category: 'network-security',
    title: 'Network Security Basics',
    icon: '🔗',
    tips: [
      'Change default passwords on your router and IoT devices.',
      'Use WPA3 encryption for your Wi-Fi network.',
      'Set up a guest network for visitors — don\'t share your main Wi-Fi.',
      'Use a VPN when working remotely or on public networks.',
      'Monitor your network for unauthorized devices.',
      'Disable WPS (Wi-Fi Protected Setup) on your router.',
    ],
  },
];

// ============================
// Suspicious URL Patterns (for mock URL checker)
// ============================
export const suspiciousPatterns = [
  'login', 'signin', 'account', 'verify', 'update', 'secure',
  'banking', 'paypal', 'amazon', 'microsoft', 'apple', 'google',
  'free', 'winner', 'prize', 'click', 'urgent', 'confirm',
];

export const dangerousPatterns = [
  'malware', 'hack', 'phish', 'scam', 'fraud', 'steal',
  'virus', 'trojan', 'keylog', 'ransom', 'exploit',
  '.tk', '.ml', '.ga', '.cf', '.xyz.evil',
];

// ============================
// Mock Users Database
// ============================
export const mockUsers = [
  { id: 1, email: 'admin@cyberaware.com', password: 'Admin@123', name: 'Admin User', role: 'admin' },
  { id: 2, email: 'user@cyberaware.com', password: 'User@123', name: 'John Doe', role: 'user' },
  { id: 3, email: 'demo@demo.com', password: 'Demo@123', name: 'Demo User', role: 'user' },
];

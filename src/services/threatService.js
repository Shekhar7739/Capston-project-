/**
 * threatService.js
 * Mock service for fetching and filtering threat data.
 */
import { threatData, monthlyThreatStats, dashboardStats } from '../data/mockData';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/** Get all threats with optional filters */
export const getThreats = async ({ category = '', search = '' } = {}) => {
  await delay(500);
  let filtered = [...threatData];
  if (category) filtered = filtered.filter((t) => t.category === category);
  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (t) => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)
    );
  }
  return filtered;
};

/** Get monthly stats for charts */
export const getMonthlyStats = async () => {
  await delay(300);
  return monthlyThreatStats;
};

/** Get dashboard summary stats */
export const getDashboardStats = async () => {
  await delay(300);
  return dashboardStats;
};

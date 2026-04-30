/**
 * authService.js
 * Mock authentication service using localStorage.
 */
import { mockUsers } from '../data/mockData';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const loginUser = async (email, password) => {
  await delay(800);
  const user = mockUsers.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  if (!user) throw new Error('Invalid email or password.');
  const sessionData = {
    id: user.id, email: user.email, name: user.name, role: user.role,
    token: `mock-jwt-${Date.now()}`, loginAt: new Date().toISOString(),
  };
  localStorage.setItem('cyberaware_user', JSON.stringify(sessionData));
  return sessionData;
};

export const signupUser = async ({ name, email, password }) => {
  await delay(1000);
  const existing = mockUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (existing) throw new Error('An account with this email already exists.');
  const newUser = {
    id: mockUsers.length + 1, email, name, role: 'user',
    token: `mock-jwt-${Date.now()}`, loginAt: new Date().toISOString(),
  };
  mockUsers.push({ ...newUser, password });
  localStorage.setItem('cyberaware_user', JSON.stringify(newUser));
  return newUser;
};

export const logoutUser = () => localStorage.removeItem('cyberaware_user');

export const getCurrentUser = () => {
  try {
    const d = localStorage.getItem('cyberaware_user');
    return d ? JSON.parse(d) : null;
  } catch { return null; }
};

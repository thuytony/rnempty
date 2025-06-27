export const API_ENDPOINTS = {
  LOGIN: '/auth/login',
  REFRESH: '/auth/refresh',
  ME: '/auth/me',
} as const;

export const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL || 'https://dummyjson.com'; 
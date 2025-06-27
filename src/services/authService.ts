import { API_ENDPOINTS } from '../constants/api';
import { LoginRequest, LoginResponse } from '../types/auth';
import { apiService } from './api';

export class AuthService {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    return apiService.post<LoginResponse>(API_ENDPOINTS.LOGIN, {
      ...credentials,
      expiresInMins: credentials.expiresInMins || 30,
    });
  }

  async getCurrentUser(): Promise<any> {
    return apiService.get(API_ENDPOINTS.ME);
  }

  async refreshToken(refreshToken: string): Promise<LoginResponse> {
    return apiService.post<LoginResponse>(API_ENDPOINTS.REFRESH, {
      refreshToken,
    });
  }
}

export const authService = new AuthService(); 
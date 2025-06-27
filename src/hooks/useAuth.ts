import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { clearError, loginAsync, logoutAsync } from '../store/authSlice';
import { LoginRequest } from '../types/auth';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector((state: RootState) => state.auth);

  const login = async (credentials: LoginRequest) => {
    return dispatch(loginAsync(credentials));
  };

  const logout = async () => {
    return dispatch(logoutAsync());
  };

  const clearAuthError = () => {
    dispatch(clearError());
  };

  return {
    ...authState,
    login,
    logout,
    clearError: clearAuthError,
  };
}; 
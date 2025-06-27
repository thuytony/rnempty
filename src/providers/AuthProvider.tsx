import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { checkAuthStatus } from '../store/authSlice';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Check auth status only once when app starts
    dispatch(checkAuthStatus());
  }, []); // Empty dependency array - run only once when component mount

  return <>{children}</>;
}; 
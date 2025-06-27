import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { AuthProvider } from './AuthProvider';
import { QueryProvider } from './QueryProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <QueryProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </QueryProvider>
    </Provider>
  );
}; 
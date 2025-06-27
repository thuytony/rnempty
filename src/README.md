# Authentication System

## Overview
This is a complete authentication system for React Native Expo applications with the following features:

- **Redux Toolkit** for state management
- **React Query** for API caching
- **Axios** for API requests
- **React Hook Form + Yup** for form validation
- **Secure Storage** for token management
- **TypeScript** for type safety
- **Expo Router** for navigation with auth guards

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Common components (Input, Button, etc.)
│   └── auth/            # Authentication specific components
├── constants/           # App constants (API endpoints, storage keys)
├── hooks/              # Custom React hooks
├── providers/          # React providers (Redux, React Query)
├── services/           # API services and external integrations
├── store/              # Redux store and slices
├── types/              # TypeScript type definitions
├── utils/              # Utility functions (storage, etc.)
└── validation/         # Form validation schemas
```

## Usage

### Demo Credentials
- **Username**: `emilys`
- **Password**: `emilyspass`

### Environment Variables
Create a `.env` file with:
```
EXPO_PUBLIC_API_BASE_URL=https://dummyjson.com
```

### Key Components

1. **AuthGuard**: Handles navigation based on authentication status
2. **LoginForm**: Complete login form with validation
3. **useAuth**: Custom hook for authentication operations

### API Integration
The system integrates with DummyJSON API for authentication:
- Login endpoint: `POST /auth/login`
- Secure token storage using Expo SecureStore
- Automatic token attachment to API requests

### Features
- ✅ Form validation with Yup
- ✅ Secure token storage
- ✅ Auto token refresh
- ✅ TypeScript support
- ✅ Clean architecture
- ✅ Error handling
- ✅ Loading states
- ✅ Responsive design 
'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { getUser, login as loginFn, logout as logoutFn } from '@/lib/auth';

interface User {
  name: string;
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  isAuthLoading: boolean;
  loginUser: (email: string, password: string) => boolean;
  logoutUser: () => void;
  profileImage: string | null;
  setProfileImage: (image: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    const storedUser = getUser();
    const logged = localStorage.getItem('isLoggedIn') === 'true';

    if (storedUser && logged) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }

    setIsAuthLoading(false);
  }, []);

  useEffect(() => {
    if (user?.email) {
      const savedImage = localStorage.getItem(`profileImage-${user.email}`);
      if (savedImage) setProfileImage(savedImage);
    }
  }, [user]);

  const loginUser = (email: string, password: string): boolean => {
    const success = loginFn(email, password);
    if (success) {
      const loggedUser = getUser();
      setUser(loggedUser);
      setIsLoggedIn(true);
    }
    return success;
  };

  const logoutUser = () => {
    logoutFn();
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        loginUser,
        logoutUser,
        isAuthLoading,
        profileImage,
        setProfileImage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext deve ser usado dentro de AuthProvider');
  }
  return context;
}

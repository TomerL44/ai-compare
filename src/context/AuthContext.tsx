import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User as FirebaseUser } from 'firebase/auth';
import { signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, googleProvider, appleProvider, microsoftProvider } from '../lib/firebase';

export interface User {
  id: string;
  email: string | null;
  displayName: string | null;
  photoUrl: string | null;
  provider: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  loginGoogle: () => Promise<void>;
  loginApple: () => Promise<void>;
  loginMicrosoft: () => Promise<void>;
  loginEmail: (e: string, p: string) => Promise<void>;
  signupEmail: (e: string, p: string, displayName: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        setUser({
          id: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName || 'User',
          photoUrl: firebaseUser.photoURL,
          provider: firebaseUser.providerData[0]?.providerId || 'unknown',
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google", error);
      throw error; // Re-throw so UI can catch and show error if needed
    }
  };

  const loginApple = async () => {
    try {
      await signInWithPopup(auth, appleProvider);
    } catch (error) {
      console.error("Error signing in with Apple", error);
      throw error;
    }
  };

  const loginEmail = async (email: string, pass: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
    } catch (error) {
      console.error("Error signing in with Email", error);
      throw error;
    }
  };

  const loginMicrosoft = async () => {
    try {
      await signInWithPopup(auth, microsoftProvider);
    } catch (error) {
      console.error("Error signing in with Microsoft", error);
      throw error;
    }
  };

  const signupEmail = async (email: string, pass: string, displayName: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      await updateProfile(userCredential.user, { displayName });
      setUser(prev => prev ? { ...prev, displayName } : null);
    } catch (error) {
      console.error("Error signing up with Email", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, loginGoogle, loginApple, loginMicrosoft, loginEmail, signupEmail, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

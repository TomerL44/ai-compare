import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
// User: You must provide your actual config in an environment file (.env) to use real auth!
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "mock-api-key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "mock-auth-domain.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "mock-project-id",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "mock-storage-bucket.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "000000000000",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:00000000:web:mockappid"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Providers
export const googleProvider = new GoogleAuthProvider();

export const appleProvider = new OAuthProvider('apple.com');
appleProvider.addScope('email');
appleProvider.addScope('name');

export const microsoftProvider = new OAuthProvider('microsoft.com');
microsoftProvider.addScope('mail.read');
microsoftProvider.addScope('User.Read');


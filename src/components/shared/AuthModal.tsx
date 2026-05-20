import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface AuthModalProps {
  onClose: () => void;
}

const getFriendlyErrorMessage = (error: any): string => {
  if (!error) return 'An unknown error occurred.';
  
  const code = error.code || '';
  const message = error.message || '';
  
  // 1. Weak password
  if (code === 'auth/weak-password' || message.includes('auth/weak-password')) {
    return 'Password is too weak. It must be at least 6 characters long.';
  }
  
  // 2. Invalid credentials (incorrect password, wrong email, user-not-found)
  if (
    code === 'auth/invalid-credential' || 
    code === 'auth/wrong-password' || 
    code === 'auth/user-not-found' ||
    message.includes('auth/invalid-credential') ||
    message.includes('auth/wrong-password') ||
    message.includes('auth/user-not-found')
  ) {
    return 'Incorrect email or password. Please try again.';
  }
  
  // 3. Email already in use
  if (code === 'auth/email-already-in-use' || message.includes('auth/email-already-in-use')) {
    return 'This email is already registered. Try signing in instead.';
  }
  
  // 4. Invalid email format
  if (code === 'auth/invalid-email' || message.includes('auth/invalid-email')) {
    return 'Please enter a valid email address.';
  }
  
  // 5. Too many failed attempts
  if (code === 'auth/too-many-requests' || message.includes('auth/too-many-requests')) {
    return 'Too many failed login attempts. Please try again later.';
  }

  // 6. Network error
  if (code === 'auth/network-request-failed' || message.includes('auth/network-request-failed')) {
    return 'Network connection error. Please check your internet connection and try again.';
  }

  // 7. Domain not authorized
  if (code === 'auth/unauthorized-domain' || message.includes('auth/unauthorized-domain')) {
    return 'Domain not authorized. Please make sure "aicomparator.vercel.app" is whitelisted in your Firebase Console Settings.';
  }
  
  // Clean up any other generic message
  let cleanMsg = message || String(error);
  if (cleanMsg.startsWith('Firebase: ')) {
    cleanMsg = cleanMsg.replace(/^Firebase:\s*(Error\s*\(auth\/[a-zA-Z-]+\)\.?\s*)?/i, '');
  }
  return cleanMsg;
};

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const { loginGoogle, loginApple, loginMicrosoft, loginEmail, signupEmail } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleOAuth = async (provider: 'google' | 'apple' | 'microsoft') => {
    setLoading(true);
    setError(null);
    try {
      if (provider === 'google') {
        await loginGoogle();
      } else if (provider === 'microsoft') {
        await loginMicrosoft();
      } else {
        await loginApple();
      }
      onClose();
    } catch (err: any) {
      console.error("Auth error", err);
      // Detailed error only if it's not simply "popup-closed-by-user" which is normal
      if (err.code !== 'auth/popup-closed-by-user' && err.code !== 'auth/cancelled-popup-request') {
        setError(getFriendlyErrorMessage(err));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    if (isSignUp && (!firstName.trim() || !lastName.trim())) {
      setError('Please enter your first and last name.');
      return;
    }
    
    setLoading(true);
    setError(null);
    try {
      if (isSignUp) {
        const fullName = `${firstName.trim()} ${lastName.trim()}`;
        await signupEmail(email, password, fullName);
      } else {
        await loginEmail(email, password);
      }
      onClose();
    } catch (err: any) {
      console.error("Email auth error", err);
      setError(getFriendlyErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 mb-safe">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-sm overflow-hidden flex flex-col bg-[#111116] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-indigo-500/20 blur-[100px] pointer-events-none" />

        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/[0.02] relative z-10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">Join the Community</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 relative z-10">
          <div className="text-center mb-6">
            <p className="text-white/60 text-sm">Sign in securely to vote and rank AI agents to help the community.</p>
          </div>

          {error && (
            <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs text-center font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleEmailAuth} className="flex flex-col gap-3 mb-6">
            {isSignUp && (
              <div className="grid grid-cols-2 gap-3 animate-in slide-in-from-top-2 duration-200">
                <input 
                  type="text" 
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm"
                  required
                />
                <input 
                  type="text" 
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm"
                  required
                />
              </div>
            )}
            <input 
              type="email" 
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm"
              required
            />
            <input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold transition-colors disabled:opacity-50 mt-1 shadow-[0_0_15px_rgba(79,70,229,0.3)]"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>

          <div className="relative flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-white/40 uppercase font-medium tracking-wider">or continue with</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleOAuth('google')}
              disabled={loading}
              className="flex justify-center items-center py-3 px-4 border border-white/10 rounded-xl shadow-sm bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-colors disabled:opacity-50"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button
              onClick={() => handleOAuth('microsoft')}
              disabled={loading}
              className="flex justify-center items-center py-3 px-4 border border-white/10 rounded-xl shadow-sm bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-colors disabled:opacity-50"
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 23 23">
                <path fill="#f35022" d="M0 0h11v11H0z" />
                <path fill="#80bb0a" d="M12 0h11v11H12z" />
                <path fill="#00a1f1" d="M0 12h11v11H0z" />
                <path fill="#ffb900" d="M12 12h11v11H12z" />
              </svg>
              Microsoft
            </button>
          </div>

          <div className="mt-6 text-center">
            <button 
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError(null);
              }}
              className="text-white/60 hover:text-white text-sm font-medium transition-colors"
            >
              {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

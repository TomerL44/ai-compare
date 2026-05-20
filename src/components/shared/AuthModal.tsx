import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const { loginGoogle, loginApple, loginEmail, signupEmail } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOAuth = async (provider: 'google' | 'apple') => {
    setLoading(true);
    setError(null);
    try {
      if (provider === 'google') {
        await loginGoogle();
      } else {
        await loginApple();
      }
      onClose();
    } catch (err: any) {
      console.error("Auth error", err);
      // Detailed error only if it's not simply "popup-closed-by-user" which is normal
      if (err.code !== 'auth/popup-closed-by-user' && err.code !== 'auth/cancelled-popup-request') {
        setError(err.message || 'Authentication failed. Please try again or check Firebase config.');
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
    
    setLoading(true);
    setError(null);
    try {
      if (isSignUp) {
        await signupEmail(email, password);
      } else {
        await loginEmail(email, password);
      }
      onClose();
    } catch (err: any) {
      console.error("Email auth error", err);
      setError(err.message || 'Authentication failed. Please check your credentials.');
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
            <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs text-center">
              {error}
              <div className="mt-1 text-white/40">Ensure your .env file has valid Firebase API keys.</div>
            </div>
          )}

          <form onSubmit={handleEmailAuth} className="flex flex-col gap-3 mb-6">
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

          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleOAuth('google')}
              disabled={loading}
              className="flex justify-center items-center py-3 px-4 border border-white/10 rounded-xl shadow-sm bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-colors disabled:opacity-50"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button
              onClick={() => handleOAuth('apple')}
              disabled={loading}
              className="flex justify-center items-center py-3 px-4 border border-white/10 rounded-xl shadow-sm bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-colors disabled:opacity-50"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.74.887-1.99 1.57-3.23 1.57-.12 0-.255-.008-.36-.015-.015-1.127.535-2.27 1.252-3.08.747-.86 1.956-1.54 3.14-1.56.02.008.02.015.02.015v.015a3.97 3.97 0 013.354-1.44z" />
                <path d="M17.59 7.03c-1.285-.02-2.56.84-3.225.84-.666 0-1.685-.734-2.735-.718-1.378.024-2.645.81-3.358 2.05-1.455 2.53-.37 6.27 1.05 8.35.69 1.015 1.492 2.14 2.57 2.1 1.05-.03 1.453-.67 2.72-.67 1.258 0 1.62.67 2.735.65 1.135-.02 1.838-1.045 2.52-2.05.79-1.157 1.115-2.275 1.13-2.335-.025-.015-2.185-.845-2.205-3.345-.015-2.09 1.705-3.085 1.785-3.13-.97-1.43-2.48-1.585-3.015-1.675v.005z" />
              </svg>
              Apple
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

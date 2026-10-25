import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Check } from 'lucide-react';

interface CookieBannerProps {
  forceOpen?: boolean;
  onCloseForce?: () => void;
}

export default function CookieBanner({ forceOpen, onCloseForce }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Delay showing by 1.5s for clean entrance
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (forceOpen) {
      setIsVisible(true);
    }
  }, [forceOpen]);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie_consent', 'accepted_all');
    setIsVisible(false);
    if (onCloseForce) onCloseForce();
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('cookie_consent', 'essential_only');
    setIsVisible(false);
    if (onCloseForce) onCloseForce();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 pointer-events-auto"
        >
          <div className="glass-panel p-5 rounded-2xl border border-cyan-400/40 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(0,240,255,0.2)] backdrop-blur-xl relative overflow-hidden">
            {/* Cyber Glow Accent */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/10 blur-xl pointer-events-none" />

            {/* Banner Header */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0">
                  <Cookie className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-white tracking-wider">
                    TELEMETRY & COOKIE PROTOCOL
                  </h4>
                  <div className="text-[10px] font-mono text-cyan-400">
                    STATUS: SECURE STORAGE
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsVisible(false);
                  if (onCloseForce) onCloseForce();
                }}
                className="text-slate-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
                title="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Banner Body */}
            <p className="mt-3 text-xs text-slate-300 leading-relaxed font-sans">
              This portfolio uses strictly local storage tokens to preserve your dark/light theme, audio preference, and terminal history across sessions. No third-party ad trackers.
            </p>

            {/* Action Buttons */}
            <div className="mt-4 pt-3 border-t border-cyan-500/20 flex items-center gap-2">
              <button
                onClick={handleAcceptAll}
                className="flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-mono font-bold text-xs hover:brightness-110 shadow-[0_0_12px_rgba(0,240,255,0.35)] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Check className="w-3.5 h-3.5" />
                <span>ACCEPT ALL</span>
              </button>

              <button
                onClick={handleEssentialOnly}
                className="py-2 px-3 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white font-mono text-xs transition-colors cursor-pointer"
              >
                <span>ESSENTIAL ONLY</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

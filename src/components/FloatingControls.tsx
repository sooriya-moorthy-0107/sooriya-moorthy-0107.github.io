import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Mail, MessageSquare, Send, CheckCircle2, X, Cookie } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FloatingControlsProps {
  onOpenCookieSettings?: () => void;
}

export default function FloatingControls({ onOpenCookieSettings }: FloatingControlsProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#00f0ff', '#3b82f6', '#ffffff']
    });

    setSent(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      {/* Floating Action Cluster */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        
        {/* Cookie Settings Trigger Button */}
        {onOpenCookieSettings && (
          <button
            onClick={onOpenCookieSettings}
            title="Privacy & Cookie Settings"
            className="w-9 h-9 rounded-full bg-[#0a1224]/80 border border-slate-700 text-slate-400 hover:text-cyan-300 hover:border-cyan-400 shadow-lg backdrop-blur-md flex items-center justify-center transition-all cursor-pointer"
          >
            <Cookie className="w-4 h-4" />
          </button>
        )}

        {/* Back To Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 15 }}
              onClick={scrollToTop}
              title="Return to Top"
              className="w-11 h-11 rounded-full bg-[#0a1224]/90 border border-cyan-400/40 text-cyan-400 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.25)] backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Contact Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          title="Direct Transmission / Contact"
          className="relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-mono font-bold text-xs tracking-wider shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:shadow-[0_0_35px_rgba(0,240,255,0.8)] hover:brightness-110 transition-all duration-300 cursor-pointer"
        >
          {/* Radar Beacon Pulse Ring */}
          <span className="absolute -inset-1 rounded-full border border-cyan-400/50 animate-ping opacity-40 pointer-events-none" />
          
          <MessageSquare className="w-4 h-4 text-black" />
          <span className="hidden sm:inline">TRANSMIT COMMS</span>
        </motion.button>
      </div>

      {/* Floating Quick Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-[#070e20] border border-cyan-400/50 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.3)] overflow-hidden"
            >
              {/* Header */}
              <div className="p-5 border-b border-cyan-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-mono text-white">
                      TRANSMISSION BEACON
                    </h3>
                    <div className="text-[10px] font-mono text-cyan-400">
                      SYS.TARGET: SOORIYA MOORTHY
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Form Body */}
              <div className="p-6">
                {sent ? (
                  <div className="py-8 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto animate-bounce" />
                    <h4 className="font-mono text-base font-bold text-white">
                      DISPATCH DISPATCHED
                    </h4>
                    <p className="text-xs text-slate-300">
                      Message registered in priority buffer. You can also direct email at:
                    </p>
                    <div className="text-xs font-mono text-cyan-400 font-bold">
                      {PORTFOLIO_DATA.profile.email}
                    </div>
                    <button
                      onClick={() => {
                        setSent(false);
                        setIsModalOpen(false);
                      }}
                      className="mt-4 px-4 py-2 bg-cyan-500 text-black font-mono font-bold text-xs rounded-lg cursor-pointer"
                    >
                      Close Beacon
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleQuickSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">
                        CALLSIGN / NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name or company"
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-cyan-500/30 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">
                        FREQUENCY / EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-cyan-500/30 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">
                        SIGNAL PAYLOAD
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your inquiry, project scope, or opportunity..."
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-cyan-500/30 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-mono font-bold text-xs flex items-center justify-center gap-1.5 hover:brightness-110 shadow-[0_0_15px_rgba(0,240,255,0.4)] cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>DISPATCH TRANSMISSION</span>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

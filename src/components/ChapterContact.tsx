import React, { useState } from 'react';
import { 
  Send, 
  Download, 
  Mail, 
  RotateCw, 
  CheckCircle2, 
  ArrowUp,
  MapPin,
  Radio
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ChapterContactProps {
  onReplayIntro?: () => void;
  onScrollToTop?: () => void;
}

export default function ChapterContact({ onReplayIntro, onScrollToTop }: ChapterContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#00f0ff', '#3b82f6', '#ffffff']
    });

    setFormSent(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative min-h-[80vh] py-20 sm:py-24 px-4 max-w-5xl mx-auto z-10 w-full overflow-hidden">
      
      {/* Chapter Marker Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>CHAPTER 04 // TRANSMISSION UPLINK</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
          Establish Direct Comms
        </h2>
        <p className="mt-2 text-slate-400 max-w-xl text-xs sm:text-sm font-sans px-2">
          Reach out for software engineering roles, distributed architecture consultation, or product collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Transmission Message Form (7 cols) */}
        <div className="lg:col-span-7 w-full">
          <div className="glass-panel p-5 sm:p-7 rounded-2xl border border-cyan-500/25 relative overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.1)]">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <Mail className="w-3.5 h-3.5" />
              <span>DIRECT TRANSMISSION DISPATCH</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-mono text-white mb-4">
              Send Priority Dispatch
            </h3>

            {formSent ? (
              <div className="p-6 bg-cyan-950/40 border border-cyan-400/40 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto animate-bounce" />
                <h4 className="font-mono text-base font-bold text-white">
                  TRANSMISSION ACKNOWLEDGED
                </h4>
                <p className="text-xs text-slate-300">
                  Your message has been captured into local telemetry buffer. You can also reach directly via email.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSent(false)}
                  className="px-4 py-1.5 rounded-lg bg-cyan-500 text-black font-mono font-bold text-xs cursor-pointer hover:brightness-110"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">
                    IDENTITY / NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Recruiters / Engineering Leads"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-cyan-500/25 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">
                    RETURN FREQUENCY (EMAIL)
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-cyan-500/25 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">
                    MESSAGE PAYLOAD
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Discuss project requirements, hiring opportunities, or systems architecture..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-cyan-500/25 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2 hover:brightness-110 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT DISPATCH</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: Direct Coordinates & Dossier Links (5 cols) */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6 w-full">
          
          {/* Coordinates Overview Card */}
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-cyan-500/20 space-y-4">
            <h4 className="text-sm font-bold font-mono text-cyan-300 flex items-center gap-2">
              <Radio className="w-4 h-4 text-cyan-400" />
              Direct Comms Coordinates
            </h4>

            <div className="space-y-3 text-xs font-mono">
              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="text-slate-500 text-[10px] block">DIRECT EMAIL</span>
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  className="text-cyan-300 hover:underline break-all font-semibold"
                >
                  {PORTFOLIO_DATA.profile.email}
                </a>
              </div>

              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <span className="text-slate-500 text-[10px] block">BASE LOCATION</span>
                  <span className="text-slate-200">{PORTFOLIO_DATA.profile.location}</span>
                </div>
              </div>

              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="text-slate-500 text-[10px] block">BROADCAST CALLSIGN</span>
                <span className="text-slate-200">VIT Community Radio 90.8 MHz</span>
              </div>
            </div>
          </div>

          {/* Social Badges Grid */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900/70 border border-cyan-500/20 hover:border-cyan-400 text-center flex flex-col items-center gap-1.5 transition-all text-slate-300 hover:text-cyan-400 hover:scale-105"
            >
              <GithubIcon className="w-5 h-5 text-cyan-400" />
              <span className="text-[11px] font-mono">GitHub</span>
            </a>

            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900/70 border border-cyan-500/20 hover:border-cyan-400 text-center flex flex-col items-center gap-1.5 transition-all text-slate-300 hover:text-cyan-400 hover:scale-105"
            >
              <LinkedinIcon className="w-5 h-5 text-cyan-400" />
              <span className="text-[11px] font-mono">LinkedIn</span>
            </a>

            <a
              href={PORTFOLIO_DATA.profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-cyan-950/70 border border-cyan-500/30 hover:border-cyan-400 text-center flex flex-col items-center gap-1.5 transition-all text-cyan-300 hover:text-white hover:scale-105"
            >
              <Download className="w-5 h-5 text-cyan-400" />
              <span className="text-[11px] font-mono font-bold">Resume</span>
            </a>
          </div>

        </div>

      </div>

      {/* Footer Navigation Bar */}
      <div className="mt-16 sm:mt-24 pt-6 sm:pt-8 border-t border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 text-center sm:text-left">
        <div>
          <span>SOORIYA MOORTHY PONNANGAI // 2026</span>
          <span className="mx-2 hidden sm:inline">•</span>
          <span className="text-cyan-400 block sm:inline mt-1 sm:mt-0">VIT RADIO 90.8 MHz</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {onReplayIntro && (
            <button
              type="button"
              onClick={onReplayIntro}
              className="hover:text-cyan-400 text-slate-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>REPLAY INTRO</span>
            </button>
          )}

          {onScrollToTop && (
            <button
              type="button"
              onClick={onScrollToTop}
              className="hover:text-cyan-400 text-slate-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>TOP OF SAGA</span>
            </button>
          )}
        </div>
      </div>

    </section>
  );
}

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Radio, 
  Download, 
  RotateCw, 
  ChevronDown, 
  ShieldCheck, 
  MapPin
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface VisitingCardHeroProps {
  onScrollToChapters: () => void;
  onReplayIntro?: () => void;
}

export default function VisitingCardHero({ onScrollToChapters, onReplayIntro }: VisitingCardHeroProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Mouse tilt physics using Framer Motion springs
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 25 });

  // Moderate tilt angles to avoid overflowing mobile screen edges
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="hero" className="relative min-h-[95vh] w-full max-w-full flex flex-col items-center justify-between py-16 sm:py-20 px-3 sm:px-6 z-10 overflow-hidden">
      
      {/* Top Banner Navigation Link */}
      <div className="w-full max-w-4xl flex items-center justify-between text-xs font-mono text-cyan-400/80 border-b border-cyan-500/20 pb-3 pt-2">
        <div className="flex items-center gap-2 truncate pr-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="font-semibold text-slate-200 truncate">SYS // INTERACTIVE VISITING CARD</span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {onReplayIntro && (
            <button
              type="button"
              onClick={onReplayIntro}
              className="hover:text-cyan-300 text-slate-400 transition-colors flex items-center gap-1 text-[11px] cursor-pointer"
            >
              <RotateCw className="w-3 h-3" />
              <span className="hidden xs:inline">REPLAY</span>
            </button>
          )}
          <span className="text-slate-600 hidden xs:inline">|</span>
          <span className="text-cyan-400 font-bold text-[11px]">ACTIVE</span>
        </div>
      </div>

      {/* Main 3D Card Stage */}
      <div className="my-auto w-full max-w-full flex flex-col items-center justify-center py-6 sm:py-8 overflow-hidden">
        
        {/* Subtle background glow anchor */}
        <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[350px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/20 to-purple-600/10 blur-[80px] rounded-full pointer-events-none" />

        {/* 3D Perspective Card Container */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full max-w-[580px] min-h-[380px] sm:min-h-[370px] cursor-grab active:cursor-grabbing [perspective:1200px]"
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateY: isFlipped ? 180 : 0,
            }}
            transition={{
              rotateY: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
            }}
            className="relative w-full h-full min-h-[380px] sm:min-h-[370px] rounded-2xl border border-cyan-400/40 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(0,240,255,0.2)] backdrop-blur-xl"
          >
            {/* Dynamic Glare Light Sheen */}
            <motion.div
              style={{
                background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(0, 240, 255, 0.22) 0%, transparent 60%)`,
              }}
              className="absolute inset-0 rounded-2xl pointer-events-none z-30"
            />

            {/* FRONT FACE OF THE VISITING CARD */}
            <div
              style={{ backfaceVisibility: 'hidden' }}
              className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-[#0c162e]/98 via-[#070e20]/98 to-[#040813] p-5 sm:p-7 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle circuit lines overlay */}
              <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

              {/* Card Header */}
              <div className="relative z-10 flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-cyan-400/50 overflow-hidden bg-cyan-950/40 p-0.5 shadow-[0_0_12px_rgba(0,240,255,0.3)] shrink-0">
                    <img
                      src={PORTFOLIO_DATA.profile.photo}
                      alt={PORTFOLIO_DATA.profile.name}
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-cyan-400/10 mix-blend-overlay" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[11px] sm:text-xs font-mono font-bold text-cyan-400 tracking-wider">
                        SYS.ID // SM-0107
                      </span>
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        ONLINE
                      </span>
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span className="truncate">{PORTFOLIO_DATA.profile.location}</span>
                    </div>
                  </div>
                </div>

                {/* Flip Card Action Button */}
                <button
                  type="button"
                  onClick={() => setIsFlipped(true)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/20 hover:text-white transition-all text-xs font-mono shadow-[0_0_12px_rgba(0,240,255,0.2)] shrink-0 cursor-pointer"
                >
                  <RotateCw className="w-3 h-3" />
                  <span>SPECS</span>
                </button>
              </div>

              {/* Card Center: Name & Tagline */}
              <div className="relative z-10 my-2" style={{ transform: 'translateZ(20px)' }}>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white font-mono flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span>SOORIYA MOORTHY</span>
                  <span className="text-cyan-400 font-normal">PONNANGAI</span>
                </h1>
                <div className="text-[11px] sm:text-xs font-mono text-cyan-300 font-semibold tracking-wider mt-1 flex flex-wrap items-center gap-1.5">
                  <span>SOFTWARE ENGINEER</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-blue-400">SYSTEMS ARCHITECT</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-2 sm:mt-2.5 leading-relaxed max-w-xl font-sans">
                  {PORTFOLIO_DATA.profile.tagline}
                </p>
              </div>

              {/* Card Footer: Badges & Direct Links */}
              <div className="relative z-10 pt-2.5 border-t border-cyan-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-950/60 border border-blue-500/30 text-blue-300 flex items-center gap-1">
                    <Radio className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
                    VIT RADIO 90.8 MHz
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                    VIT CSE '26 • 8.27 CGPA
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={PORTFOLIO_DATA.profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
                    title="GitHub Profile"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={PORTFOLIO_DATA.profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={PORTFOLIO_DATA.profile.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-mono font-bold text-xs hover:brightness-110 shadow-[0_0_12px_rgba(0,240,255,0.4)] transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>CV</span>
                  </a>
                </div>
              </div>
            </div>

            {/* BACK FACE OF THE VISITING CARD (ARCHITECTURAL SPECS) */}
            <div
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
              className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-[#070e20] via-[#050b1a] to-[#02050e] p-5 sm:p-7 flex flex-col justify-between border border-cyan-400/40 overflow-hidden"
            >
              <div className="relative z-10 flex items-center justify-between border-b border-cyan-500/20 pb-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">ARCHITECTURAL DOSSIER</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsFlipped(false)}
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 hover:text-white text-xs font-mono cursor-pointer shrink-0"
                >
                  <RotateCw className="w-3 h-3" />
                  <span>FRONT</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 my-2 text-[11px] sm:text-xs font-mono">
                <div className="p-2 sm:p-2.5 rounded-lg bg-slate-900/60 border border-cyan-500/20">
                  <div className="text-cyan-400 font-bold mb-0.5 text-[10px]">CORE DISCIPLINE</div>
                  <div className="text-slate-300 text-[11px]">Software Architecture & SQA</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-slate-900/60 border border-cyan-500/20">
                  <div className="text-cyan-400 font-bold mb-0.5 text-[10px]">BROADCAST OPS</div>
                  <div className="text-slate-300 text-[11px]">90.8 MHz Console Engineering</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-slate-900/60 border border-cyan-500/20">
                  <div className="text-cyan-400 font-bold mb-0.5 text-[10px]">ENTERPRISE POS</div>
                  <div className="text-slate-300 text-[11px]">FastAPI + PostgreSQL + Docker</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-slate-900/60 border border-cyan-500/20">
                  <div className="text-cyan-400 font-bold mb-0.5 text-[10px]">AI PIPELINES</div>
                  <div className="text-slate-300 text-[11px]">Yap-To-Tale Story Engine</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-cyan-500/20 pt-2">
                <span className="truncate pr-2">COMMS: {PORTFOLIO_DATA.profile.email}</span>
                <span className="text-cyan-400 shrink-0">VERIFIED // '26</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Card Hint */}
        <p className="mt-3 text-[11px] font-mono text-cyan-400/70 flex items-center gap-1.5">
          <span>TILT WITH CURSOR</span>
          <span>•</span>
          <span>CLICK 'SPECS' TO FLIP</span>
        </p>
      </div>

      {/* Bottom Scroll Call To Action */}
      <button
        type="button"
        className="flex flex-col items-center gap-1.5 cursor-pointer group pb-2"
        onClick={onScrollToChapters}
      >
        <span className="text-[11px] font-mono tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors">
          SCROLL TO COMMENCE NARRATIVE
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-7 h-7 rounded-full border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:bg-cyan-500/10 transition-all"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </button>
    </section>
  );
}

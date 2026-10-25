import { useEffect, useRef } from 'react';
import { Radio, ShieldCheck, Cpu, Mic, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ChapterFoundation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Audio waveform animation representing 90.8 MHz radio frequency
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let step = 0;

    const render = () => {
      step += 0.04;
      const width = (canvas.width = canvas.parentElement?.clientWidth || 300);
      const height = (canvas.height = 100);

      ctx.clearRect(0, 0, width, height);

      // Draw baseline
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      // Draw primary carrier wave (90.8 MHz broadcast simulation)
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 8;
      ctx.beginPath();

      for (let x = 0; x < width; x++) {
        const freq1 = Math.sin(x * 0.02 + step) * 20;
        const freq2 = Math.cos(x * 0.05 - step * 1.5) * 10;
        const freq3 = Math.sin(x * 0.008 + step * 0.5) * 6;
        const y = height / 2 + (freq1 + freq2 + freq3) * (0.3 + 0.7 * Math.sin(x / width * Math.PI));

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Secondary frequency harmonic wave
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 0;
      ctx.beginPath();
      for (let x = 0; x < width; x += 3) {
        const y = height / 2 + Math.sin(x * 0.03 - step * 2) * 14 * Math.sin(x / width * Math.PI);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section id="foundation" className="relative min-h-screen py-20 sm:py-24 px-4 max-w-6xl mx-auto z-10 w-full overflow-hidden">
      
      {/* Chapter Marker Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>CHAPTER 01 // THE SIGNAL & THE LOGIC</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-mono">
          Architectural Rigor × Live Composure
        </h2>
        <p className="mt-2 text-slate-400 max-w-2xl text-xs sm:text-base font-sans px-2">
          How mastering live broadcast consoles at VIT Radio forged a zero-downtime mindset for software systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
        
        {/* Left Column: Narrative & Radio Console (7 cols) */}
        <div className="lg:col-span-7 space-y-6 w-full">
          
          {/* Main Story Panel */}
          <div className="glass-panel p-5 sm:p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-2xl pointer-events-none" />

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4 border-b border-cyan-500/20 pb-2">
              <Mic className="w-3.5 h-3.5" />
              <span>TRANSMISSION ARCHIVE // VIT COMMUNITY RADIO</span>
            </div>

            <div className="space-y-4 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              <p>
                {PORTFOLIO_DATA.foundation.bio[0]}
              </p>
              <p className="border-l-2 border-cyan-400 pl-4 text-cyan-100 italic bg-cyan-950/20 py-2 rounded-r-lg">
                "{PORTFOLIO_DATA.foundation.bio[1]}"
              </p>
              <p>
                {PORTFOLIO_DATA.foundation.bio[2]}
              </p>
            </div>

            {/* Live Frequency Waveform Visualizer */}
            <div className="mt-6 pt-6 border-t border-cyan-500/20">
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-2 flex-wrap gap-1">
                <span className="flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  CARRIER: 90.8 MHz [ACTIVE]
                </span>
                <span className="text-slate-400 text-[11px]">GAIN: +3.2 dB</span>
              </div>
              <div className="w-full bg-[#030611] rounded-xl border border-cyan-500/30 p-2 overflow-hidden shadow-inner">
                <canvas ref={canvasRef} className="w-full h-[90px] block" />
              </div>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 w-full">
            {PORTFOLIO_DATA.foundation.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-panel p-4 sm:p-5 rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all hover:-translate-y-1"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                  {idx === 0 ? <Radio className="w-4 h-4" /> : idx === 1 ? <ShieldCheck className="w-4 h-4" /> : <Cpu className="w-4 h-4" />}
                </div>
                <h4 className="text-white font-mono text-xs font-bold tracking-wide mb-1.5">
                  {pillar.title}
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Workstation Telemetry & Stats (5 cols) */}
        <div className="lg:col-span-5 space-y-6 w-full">
          
          {/* Workstation Photo with Holographic Scanner Effect */}
          <div className="glass-panel p-3.5 sm:p-4 rounded-2xl relative overflow-hidden group w-full">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-cyan-500/40 w-full">
              <img
                src={PORTFOLIO_DATA.profile.workstationPhoto}
                alt="Sooriya Moorthy at Workstation"
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040813] via-transparent to-transparent opacity-80" />

              {/* Animated laser scan line */}
              <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff] animate-scanline" />

              {/* Overlay HUD Tags */}
              <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 backdrop-blur-md rounded border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                SUBJECT: SOORIYA MOORTHY
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-slate-300 bg-black/60 backdrop-blur-md p-2 rounded border border-slate-800">
                <span className="truncate pr-1">VELLORE INST. OF TECHNOLOGY</span>
                <span className="text-cyan-400 shrink-0">STATUS: VERIFIED</span>
              </div>
            </div>
          </div>

          {/* Quantitative Stats Matrix */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
            {PORTFOLIO_DATA.foundation.stats.map((stat, i) => (
              <div
                key={i}
                className="glass-panel p-3.5 sm:p-4 rounded-xl border border-cyan-500/20 text-center relative overflow-hidden"
              >
                <div className="text-xl sm:text-3xl font-extrabold text-cyan-400 font-mono tracking-tight text-glow-cyan">
                  {stat.value}
                </div>
                <div className="text-xs font-mono font-semibold text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">
                  {stat.note}
                </div>
              </div>
            ))}
          </div>

          {/* Academic Credential Card */}
          <div className="glass-panel p-4 sm:p-5 rounded-xl border border-cyan-500/20 flex items-center gap-3.5 sm:gap-4 w-full">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-950/60 border border-blue-500/40 flex items-center justify-center text-cyan-300 shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-[11px] sm:text-xs font-mono text-cyan-400 font-semibold">
                ACADEMIC ACCREDITATION
              </div>
              <div className="text-xs sm:text-sm font-bold text-white font-mono">
                Integrated M.Tech Software Engineering
              </div>
              <div className="text-[11px] text-slate-400">
                Vellore Institute of Technology • 2021 - 2026
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

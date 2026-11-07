import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, FastForward, ShieldAlert } from 'lucide-react';

interface CyberWitchIntroProps {
  onComplete: () => void;
}

export default function CyberWitchIntro({ onComplete }: CyberWitchIntroProps) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<'charging' | 'ready' | 'throwing' | 'done'>('charging');
  const [statusText, setStatusText] = useState('CALIBRATING NEURAL FREQUENCIES...');
  const matrixCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onComplete]);

  // Matrix rain effect
  useEffect(() => {
    const canvas = matrixCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '01\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE';
    const fontSize = 13;
    let columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      columns = Math.floor(canvas.width / fontSize);
      while (drops.length < columns) drops.push(Math.random() * -100);

      ctx.fillStyle = 'rgba(3, 6, 17, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        // Gradient: bright cyan head, fading green body
        const y = drops[i] * fontSize;
        if (y > 0 && y < canvas.height) {
          ctx.fillStyle = '#00f0ff';
          ctx.globalAlpha = 0.9;
          ctx.fillText(char, i * fontSize, y);
          ctx.fillStyle = '#00cc77';
          ctx.globalAlpha = 0.35;
          ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fontSize, y - fontSize);
        }
        ctx.globalAlpha = 1;

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    let animId: number;
    const loop = () => {
      draw();
      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStage('ready');
          setStatusText('CORE READY // FLICK CARD TO TRANSMIT');
          return 100;
        }

        if (prev === 25) setStatusText('ESTABLISHING SIGNAL LINK [90.8 MHz]...');
        if (prev === 55) setStatusText('SYNTHESIZING HOLOGRAPHIC CREDENTIALS...');
        if (prev === 85) setStatusText('CHARGING CYBER CARD ARMATURE...');

        return prev + 2;
      });
    }, 35);

    return () => clearInterval(interval);
  }, []);

  const triggerThrow = () => {
    if (stage === 'throwing' || stage === 'done') return;
    setStage('throwing');
    setStatusText('TRANSMITTING PROTOCOL TO HERO...');

    setTimeout(() => {
      setStage('done');
      setTimeout(() => {
        onComplete();
      }, 350);
    }, 1000);
  };

  // Swing/pendulum animation for witch
  const witchAnimation =
    stage === 'throwing'
      ? { scale: [1, 0.95, 1.02], x: [-5, 15, 0], rotate: [0, -8, 15, 0] }
      : { rotate: [-8, 8, -8], y: [-4, 4, -4] };

  const witchTransition: import('framer-motion').Transition =
    stage === 'throwing'
      ? { duration: 0.5 }
      : { duration: 3.5, repeat: Infinity, ease: 'easeInOut' as const };

  return (
    <AnimatePresence>
      {stage !== 'done' && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#030611] overflow-hidden select-none px-4 py-6 w-full max-w-full"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* Matrix Rain Canvas Background */}
          <canvas
            ref={matrixCanvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
          />

          {/* Cyber grid overlay */}
          <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />

          {/* Lokah-style sonic radar shockwaves */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <motion.div
              animate={{
                scale: [0.8, 1.8, 2.4],
                opacity: [0.5, 0.15, 0],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'easeOut',
              }}
              className="w-64 sm:w-96 h-64 sm:h-96 rounded-full border border-cyan-500/30"
            />
            <motion.div
              animate={{
                scale: [0.8, 1.5, 2.0],
                opacity: [0.4, 0.1, 0],
              }}
              transition={{
                duration: 2.4,
                delay: 0.8,
                repeat: Infinity,
                ease: 'easeOut',
              }}
              className="w-52 sm:w-80 h-52 sm:h-80 rounded-full border border-blue-500/20"
            />
          </div>

          {/* Top HUD Telemetry */}
          <div className="relative z-20 w-full max-w-2xl flex items-center justify-between text-[11px] sm:text-xs font-mono text-cyan-400/80 border-b border-cyan-500/20 pb-3">
            <div className="flex items-center gap-2 sm:gap-3 truncate pr-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
              <span className="truncate">SYS.INIT // LOKAH_RESONANCE_V2</span>
            </div>

            <button
              type="button"
              onClick={onComplete}
              className="flex items-center gap-1 px-3 py-1 bg-cyan-950/60 border border-cyan-500/40 rounded text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors shrink-0 cursor-pointer"
            >
              <span>SKIP</span>
              <FastForward className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Main Visual Arena: The Cyber Witch & Card */}
          <div className="relative w-full max-w-lg my-auto h-[320px] sm:h-[380px] flex items-center justify-center overflow-hidden">
            
            {/* The Stylized Cyber Witch Silhouette â€” swing/pendulum motion */}
            <motion.div
              className="relative z-10 flex flex-col items-center origin-top"
              animate={witchAnimation}
              transition={witchTransition}
            >
              {/* Cyber Witch Vector Art */}
              <svg
                width="220"
                height="260"
                viewBox="0 0 280 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_0_25px_rgba(0,240,255,0.35)] max-w-full"
              >
                {/* Flowing Cyber Cloak / Cowl */}
                <path
                  d="M140 20 L80 90 L60 210 L30 310 L140 290 L250 310 L220 210 L200 90 Z"
                  fill="#081026"
                  stroke="#00f0ff"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                />

                {/* Inner Shadows and Geometric Facets */}
                <path
                  d="M140 30 L105 100 L95 240 L140 280 L185 240 L175 100 Z"
                  fill="#050a18"
                />

                {/* High-Tech Visor / Eye Slit */}
                <motion.path
                  d="M110 95 L170 95"
                  stroke="#00f0ff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="filter drop-shadow-[0_0_8px_#00f0ff]"
                />

                {/* Cybernetic Arm holding the card */}
                <path
                  d="M175 130 L225 170 L245 150"
                  stroke="#00f0ff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="6 3"
                />

                {/* Runic Energy Nodes on Arm */}
                <circle cx="175" cy="130" r="4" fill="#00f0ff" />
                <circle cx="200" cy="150" r="3" fill="#38bdf8" />
                <circle cx="225" cy="170" r="4" fill="#00f0ff" />

                {/* Subtle digital crown / antennas */}
                <path
                  d="M130 15 L140 5 L150 15"
                  stroke="#00f0ff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              {/* Glowing Aura Beneath Feet */}
              <div className="w-44 h-6 -mt-3 bg-cyan-500/20 blur-xl rounded-full" />
            </motion.div>

            {/* The Floating / Thrown Holographic Card */}
            <motion.div
              className="absolute z-20 cursor-pointer"
              initial={{ x: 50, y: -20, rotateZ: 12, scale: 0.85 }}
              animate={
                stage === 'throwing'
                  ? {
                      scale: [0.85, 1.4, 3.8],
                      rotateX: [0, 45, 120],
                      rotateY: [12, -30, -720],
                      x: [50, 0, 0],
                      y: [-20, 0, 0],
                      opacity: [1, 1, 0.95],
                    }
                  : {
                      y: [-25, -15, -25],
                      rotateZ: [10, 16, 10],
                      scale: [0.85, 0.9, 0.85],
                    }
              }
              transition={
                stage === 'throwing'
                  ? { duration: 0.95, ease: [0.16, 1, 0.3, 1] }
                  : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
              }
              onClick={triggerThrow}
            >
              {/* Card Exterior Glow */}
              <div className="relative w-52 sm:w-64 h-32 sm:h-36 rounded-xl p-3 sm:p-4 bg-gradient-to-br from-cyan-950/80 via-blue-950/90 to-slate-950/90 border-2 border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.4)] backdrop-blur-md flex flex-col justify-between overflow-hidden">
                {/* Holographic light streak */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent skew-x-12"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
                />

                <div className="flex items-center justify-between text-[10px] font-mono text-cyan-300">
                  <span className="flex items-center gap-1 font-bold">
                    <Zap className="w-3 h-3 text-cyan-400" />
                    SOORIYA.CARD
                  </span>
                  <span className="px-1.5 py-0.5 bg-cyan-400/20 rounded text-[9px] text-cyan-300">
                    M.TECH // VIT
                  </span>
                </div>

                <div className="my-auto">
                  <div className="text-xs sm:text-sm font-bold tracking-wider text-white font-mono truncate">
                    SOORIYA MOORTHY
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-cyan-300 font-mono tracking-wide">
                    SOFTWARE ENGINEER
                  </div>
                </div>

                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 border-t border-cyan-500/30 pt-1">
                  <span>RJ SOMU @ VIT RADIO</span>
                  <span className="text-cyan-400 font-bold">FLICK</span>
                </div>
              </div>
            </motion.div>

            {/* Lens flare burst when throwing */}
            {stage === 'throwing' && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 overflow-hidden"
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: [0, 1, 0.8], scale: [0.2, 1.5, 2.5] }}
                transition={{ duration: 0.9 }}
              >
                <div className="w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full bg-radial from-cyan-400/50 via-blue-600/20 to-transparent blur-2xl" />
              </motion.div>
            )}
          </div>

          {/* Bottom HUD: Progress & Throw Button */}
          <div className="relative z-20 w-full max-w-md px-2 sm:px-6 flex flex-col items-center gap-3">
            <div className="w-full flex items-center justify-between text-[11px] sm:text-xs font-mono text-cyan-400/80">
              <span className="flex items-center gap-1.5 truncate pr-2">
                <ShieldAlert className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">{statusText}</span>
              </span>
              <span className="font-bold text-cyan-300 shrink-0">{progress}%</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1.5 bg-slate-900 border border-cyan-500/30 rounded-full overflow-hidden p-[1px]">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Interactive Throw Trigger Action */}
            <motion.button
              type="button"
              onClick={triggerThrow}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-4 rounded-lg font-mono text-xs sm:text-sm tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                stage === 'ready'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:brightness-110'
                  : stage === 'throwing'
                  ? 'bg-cyan-500 text-black shadow-[0_0_40px_rgba(0,240,255,0.9)]'
                  : 'bg-slate-900/80 text-cyan-400/50 border border-cyan-500/20 cursor-wait'
              }`}
            >
              <Zap className="w-4 h-4 shrink-0" />
              <span>
                {stage === 'ready'
                  ? 'THROW CARD // ENTER HERO CARD'
                  : stage === 'throwing'
                  ? 'TRANSITIONING TO HERO...'
                  : 'SYNTHESIZING PROTOCOL...'}
              </span>
            </motion.button>

            <p className="text-[10px] text-slate-500 font-mono tracking-widest text-center">
              PRESS [ESC] TO SKIP TO VISITING CARD
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


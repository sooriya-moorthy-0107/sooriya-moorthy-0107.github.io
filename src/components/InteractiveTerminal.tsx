import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Sparkles, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function InteractiveTerminal() {
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: 'sys.status',
      output: 'SOORIYA MOORTHY SYSTEM CONSOLE v2.6.0 [ONLINE]\nType "help" or select a quick routine below to query system metrics.'
    }
  ]);
  const [cliInput, setCliInput] = useState('');
  const [isLokahActive, setIsLokahActive] = useState(false);
  const terminalBoxRef = useRef<HTMLDivElement | null>(null);
  const matrixCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Matrix / Number Waterfall Canvas Effect during Lokah
  useEffect(() => {
    if (!isLokahActive) return;
    const canvas = matrixCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    canvas.width = canvas.parentElement?.clientWidth || 600;
    canvas.height = canvas.parentElement?.clientHeight || 300;

    const chars = '01234567890107LOKAHVIT908XYZ';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1).map(() => Math.floor(Math.random() * -50));

    const draw = () => {
      ctx.fillStyle = 'rgba(3, 6, 18, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Bright cyan head, green-cyan cascading body
        ctx.fillStyle = '#00f0ff';
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 8;
        ctx.fillText(char, x, y);

        ctx.fillStyle = '#38bdf8';
        ctx.shadowBlur = 0;
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], x, y - fontSize);

        if (y > canvas.height && Math.random() > 0.96) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animId = requestAnimationFrame(draw);
    };

    draw();

    // Auto-complete Lokah sequence after 7 seconds
    const timer = setTimeout(() => {
      setIsLokahActive(false);
    }, 7000);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(timer);
    };
  }, [isLokahActive]);

  const triggerLokah = () => {
    setIsLokahActive(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#3b82f6', '#a855f7', '#ffffff']
    });

    const reply = '⚡ [LOKAH RESONANCE ENGAGED]\n>> Cyber Witch flying sequence active in terminal window!\n>> High-octane runtime execution: 100% throughput.\n>> Matrix telemetry waterfall running behind neural mainframe.';
    setTerminalHistory((prev) => [...prev, { cmd: 'lokah', output: reply }]);

    setTimeout(() => {
      if (terminalBoxRef.current) {
        terminalBoxRef.current.scrollTop = terminalBoxRef.current.scrollHeight;
      }
    }, 50);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = cliInput.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'lokah') {
      triggerLokah();
      setCliInput('');
      return;
    }

    let reply = '';
    switch (trimmed) {
      case 'help':
        reply = 'Available routines:\n• about    : Engineering profile & VIT credentials\n• projects : Deployed software systems & architectures\n• skills   : Core technology constellation\n• campus   : Campus leadership, Gravitas timeline & radio ops\n• resume   : Open official PDF dossier\n• lokah    : Trigger Cyber Witch swing & Matrix waterfall\n• clear    : Purge terminal display';
        break;
      case 'about':
        reply = `${PORTFOLIO_DATA.profile.name}\n${PORTFOLIO_DATA.profile.title}\nIntegrated M.Tech Software Engineering, VIT (8.27 CGPA)\nLocation: ${PORTFOLIO_DATA.profile.location}`;
        break;
      case 'projects':
        reply = PORTFOLIO_DATA.projects
          .map((p, i) => `[0${i+1}] ${p.title} (${p.category})\n    Stack: ${p.architecture.join(', ')}\n    Metric: ${p.metrics[0]}`)
          .join('\n\n');
        break;
      case 'skills':
        reply = 'CORE STACK:\n• Languages : Python, Java, TypeScript, C/C++\n• Interface : React, Next.js, Tailwind CSS, Three.js\n• Backend   : FastAPI, PostgreSQL, Docker, Redis\n• Cloud     : AWS (EC2, S3, DynamoDB), CI/CD';
        break;
      case 'campus':
      case 'radio':
        reply = 'CAMPUS ACHIEVEMENTS:\n• Gravitas Timeline: Volunteer (24) → Coordinator (25) → Manager (26)\n• VIT Radio 90.8 MHz: RJ SOMU, Advisory Member & Former Vice Chairperson\n• Host of "Campus Quiz ! Can U Answer This ?" (Vox Pop street show)';
        break;
      case 'resume':
        window.open(PORTFOLIO_DATA.profile.resumeUrl, '_blank');
        reply = 'Initiated download protocol: opening Resume.pdf...';
        break;
      case 'clear':
        setTerminalHistory([]);
        setCliInput('');
        return;
      default:
        reply = `Command not recognized: "${trimmed}". Type "help" to view valid system subroutines.`;
    }

    setTerminalHistory((prev) => [...prev, { cmd: cliInput, output: reply }]);
    setCliInput('');

    // Scroll ONLY the internal terminal box, never the page window
    setTimeout(() => {
      if (terminalBoxRef.current) {
        terminalBoxRef.current.scrollTop = terminalBoxRef.current.scrollHeight;
      }
    }, 50);
  };

  const handleQuickCmd = (cmd: string) => {
    if (cmd === 'lokah') {
      triggerLokah();
    } else {
      setCliInput(cmd);
    }
  };

  return (
    <section id="terminal" className="relative py-16 sm:py-24 px-4 max-w-5xl mx-auto z-10 w-full overflow-hidden">
      
      {/* Chapter Marker Header */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>SYSTEM CONSOLE // THE COMMAND DECK</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
          Interactive Architecture Terminal
        </h2>
        <p className="mt-2 text-slate-400 max-w-xl text-xs sm:text-sm font-sans px-2">
          Execute system queries below to explore production metrics, software blueprints, or engage the <strong>lokah</strong> overdrive sequence.
        </p>
      </div>

      {/* Terminal Window */}
      <div className="glass-panel rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_35px_rgba(0,240,255,0.15)] flex flex-col w-full max-w-full relative">
        
        {/* Terminal Top Window Controls */}
        <div className="px-4 py-3 bg-slate-950/90 border-b border-cyan-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs font-mono text-cyan-400 ml-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              sooriya@mainframe:~$
            </span>
          </div>

          <div className="flex items-center gap-2">
            {isLokahActive && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 animate-pulse">
                <Zap className="w-3 h-3 text-cyan-400" />
                LOKAH ACTIVE
              </span>
            )}
            <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
              TTY-1 // UTF-8 // SDE
            </span>
          </div>
        </div>

        {/* Terminal Scrollable Output Area with Interactive Canvas Overlay */}
        <div className="relative w-full h-72 sm:h-80 overflow-hidden bg-[#030612]/95">
          
          {/* Matrix Waterfall Background Canvas (Only active during Lokah) */}
          <AnimatePresence>
            {isLokahActive && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
              >
                <canvas
                  ref={matrixCanvasRef}
                  className="w-full h-full block opacity-75"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Flying / Swinging Cyber Witch Animation during Lokah */}
          <AnimatePresence>
            {isLokahActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: '-60%', y: '10%' }}
                animate={{
                  opacity: [0, 1, 1, 0.9, 0],
                  scale: [0.7, 1.05, 0.95, 1.1, 0.8],
                  x: ['-20%', '35%', '65%', '110%'],
                  y: ['20%', '-15%', '25%', '-30%'],
                  rotate: [-15, 12, -18, 20],
                }}
                transition={{
                  duration: 6.8,
                  ease: 'easeInOut',
                }}
                className="absolute z-20 pointer-events-none drop-shadow-[0_0_25px_rgba(0,240,255,0.7)]"
                style={{ top: '15%', left: '10%' }}
              >
                <div className="relative flex flex-col items-center">
                  {/* Cyber Witch Hologram */}
                  <svg
                    width="140"
                    height="160"
                    viewBox="0 0 280 320"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="filter drop-shadow-[0_0_20px_#00f0ff]"
                  >
                    <path
                      d="M140 20 L80 90 L60 210 L30 310 L140 290 L250 310 L220 210 L200 90 Z"
                      fill="#0b1739"
                      stroke="#00f0ff"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M140 30 L105 100 L95 240 L140 280 L185 240 L175 100 Z"
                      fill="#04091a"
                    />
                    <path
                      d="M110 95 L170 95"
                      stroke="#00f0ff"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M175 130 L235 150 L255 130"
                      stroke="#00f0ff"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeDasharray="6 3"
                    />
                    <circle cx="255" cy="130" r="8" fill="#00f0ff" className="animate-ping" />
                  </svg>
                  
                  {/* Trailing energy glow */}
                  <div className="w-24 h-4 -mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent blur-md rounded-full" />
                  <span className="text-[10px] font-mono font-bold text-cyan-300 tracking-widest mt-1 bg-black/80 px-2 py-0.5 rounded border border-cyan-400/50">
                    LOKAH_OVERRIDE
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Lokah Active Banner Overlay Control */}
          {isLokahActive && (
            <div className="absolute top-2 right-2 z-30">
              <button
                type="button"
                onClick={() => setIsLokahActive(false)}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-black/80 border border-cyan-400/50 text-cyan-300 hover:text-white text-[10px] font-mono cursor-pointer"
              >
                <span>CLOSE OVERDRIVE</span>
                <X className="w-3 h-3" />
              </button>
            </div>
          )}

          {/* Terminal History Log */}
          <div
            ref={terminalBoxRef}
            className="relative z-10 p-4 sm:p-5 h-full overflow-y-auto font-mono text-xs text-slate-300 space-y-3 overscroll-contain"
          >
            {terminalHistory.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-cyan-400 flex items-center gap-1.5 flex-wrap">
                  <span className="text-emerald-400">guest@sooriya:~$</span>
                  <span className="text-white font-semibold">{item.cmd}</span>
                </div>
                <pre className="text-slate-300 font-mono text-xs whitespace-pre-wrap break-words leading-relaxed pl-2.5 border-l-2 border-cyan-500/40 bg-black/20 py-1 rounded-r">
                  {item.output}
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive CLI Input Line */}
        <form
          onSubmit={handleCommand}
          className="p-2.5 sm:p-3 bg-slate-950 border-t border-cyan-500/20 flex items-center gap-2 relative z-10"
        >
          <span className="text-emerald-400 font-mono text-xs pl-2 hidden xs:inline shrink-0">
            guest@sooriya:~$
          </span>
          <input
            type="text"
            value={cliInput}
            onChange={(e) => setCliInput(e.target.value)}
            placeholder="type 'help', 'projects', 'campus', or 'lokah'..."
            className="flex-1 min-w-0 bg-transparent font-mono text-xs text-cyan-300 outline-none placeholder:text-slate-600 px-1"
          />
          <button
            type="submit"
            className="px-3.5 py-1.5 bg-cyan-950 border border-cyan-500/40 text-cyan-300 rounded font-mono text-xs hover:bg-cyan-500/20 hover:text-white transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
          >
            <span>EXEC</span>
            <CornerDownLeft className="w-3 h-3" />
          </button>
        </form>
      </div>

      {/* Quick Interactive Command Pills */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs font-mono">
        <span className="text-slate-500 text-[11px] mr-1">QUICK QUERY:</span>
        {['help', 'projects', 'skills', 'campus', 'resume', 'lokah', 'clear'].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleQuickCmd(cmd)}
            className={`px-2.5 py-1 rounded text-[11px] transition-all cursor-pointer flex items-center gap-1 ${
              cmd === 'lokah'
                ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-bold hover:bg-cyan-400 hover:text-black shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                : 'bg-slate-900/90 border border-cyan-500/20 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-950/40'
            }`}
          >
            {cmd === 'lokah' && <Sparkles className="w-3 h-3 text-cyan-300 animate-spin" />}
            <span>{cmd}</span>
          </button>
        ))}
      </div>

    </section>
  );
}

import React, { useState, useRef } from 'react';
import { Terminal, CornerDownLeft } from 'lucide-react';
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
  const terminalBoxRef = useRef<HTMLDivElement | null>(null);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = cliInput.trim().toLowerCase();
    if (!trimmed) return;

    let reply = '';
    switch (trimmed) {
      case 'help':
        reply = 'Available routines:\n• about    : Engineering profile & VIT credentials\n• projects : Deployed software systems & architectures\n• skills   : Core technology constellation\n• radio    : VIT Community Radio 90.8 MHz ops\n• resume   : Open official PDF dossier\n• lokah    : Trigger high-octane resonance\n• clear    : Purge terminal display';
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
      case 'radio':
        reply = 'VIT COMMUNITY RADIO 90.8 MHz:\n• Role: Advisory Member & Former Vice Chairperson\n• Ops: Live broadcast console management, sub-second audio routing\n• Campus reach: 5+ major university events broadcast live';
        break;
      case 'resume':
        window.open(PORTFOLIO_DATA.profile.resumeUrl, '_blank');
        reply = 'Initiated download protocol: opening Resume.pdf...';
        break;
      case 'lokah':
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00f0ff', '#3b82f6', '#ffffff']
        });
        reply = '⚡ LOKAH RESONANCE ENGAGED: "High-octane execution under pressure. Fault tolerance guaranteed."';
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
    setCliInput(cmd);
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
          Execute system queries below to explore production metrics, VIT Radio console ops, and architecture blueprints.
        </p>
      </div>

      {/* Terminal Window */}
      <div className="glass-panel rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_35px_rgba(0,240,255,0.15)] flex flex-col w-full max-w-full">
        
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
          <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
            TTY-1 // UTF-8 // 90.8 MHz
          </span>
        </div>

        {/* Terminal Scrollable Output Area */}
        <div
          ref={terminalBoxRef}
          className="p-4 sm:p-5 h-64 sm:h-72 overflow-y-auto font-mono text-xs text-slate-300 space-y-3 bg-[#030612]/95 overscroll-contain"
        >
          {terminalHistory.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-cyan-400 flex items-center gap-1.5 flex-wrap">
                <span className="text-emerald-400">guest@sooriya:~$</span>
                <span className="text-white font-semibold">{item.cmd}</span>
              </div>
              <pre className="text-slate-300 font-mono text-xs whitespace-pre-wrap break-words leading-relaxed pl-2.5 border-l-2 border-cyan-500/40">
                {item.output}
              </pre>
            </div>
          ))}
        </div>

        {/* Interactive CLI Input Line */}
        <form
          onSubmit={handleCommand}
          className="p-2.5 sm:p-3 bg-slate-950 border-t border-cyan-500/20 flex items-center gap-2"
        >
          <span className="text-emerald-400 font-mono text-xs pl-2 hidden xs:inline shrink-0">
            guest@sooriya:~$
          </span>
          <input
            type="text"
            value={cliInput}
            onChange={(e) => setCliInput(e.target.value)}
            placeholder="type 'help', 'projects', 'skills', or 'lokah'..."
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
        {['help', 'projects', 'skills', 'radio', 'resume', 'lokah', 'clear'].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleQuickCmd(cmd)}
            className="px-2.5 py-1 rounded bg-slate-900/90 border border-cyan-500/20 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-950/40 text-[11px] transition-all cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>

    </section>
  );
}

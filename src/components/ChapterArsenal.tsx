import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Database, 
  Cloud, 
  Cpu, 
  Sparkles, 
  Activity 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ChapterArsenal() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [activeSkill, setActiveSkill] = useState<string | null>('FastAPI');

  const categories = PORTFOLIO_DATA.arsenal;

  return (
    <section id="arsenal" className="relative min-h-screen py-20 sm:py-24 px-4 max-w-6xl mx-auto z-10 w-full overflow-hidden">
      
      {/* Chapter Marker Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>CHAPTER 02 // THE ARSENAL</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-mono">
          The Engineering Constellation
        </h2>
        <p className="mt-2 text-slate-400 max-w-2xl text-xs sm:text-base font-sans px-2">
          Tools grouped by architecture discipline. Click and hover each node to inspect its production application.
        </p>

        {/* Category Filter Tabs */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 bg-slate-950/80 border border-cyan-500/20 rounded-xl backdrop-blur-md max-w-full">
          {categories.map((cat, idx) => {
            const isSelected = selectedCategory === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedCategory(idx)}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'text-slate-400 hover:text-cyan-300 hover:bg-slate-900'
                }`}
              >
                {idx === 0 && <Code2 className="w-3.5 h-3.5" />}
                {idx === 1 && <Layout className="w-3.5 h-3.5" />}
                {idx === 2 && <Database className="w-3.5 h-3.5" />}
                {idx === 3 && <Cloud className="w-3.5 h-3.5" />}
                <span className="truncate">{cat.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Arsenal Display Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
        
        {/* Category Detail Card & Skills Matrix (7 cols) */}
        <div className="lg:col-span-7 w-full">
          <div className="glass-panel p-5 sm:p-8 rounded-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4 mb-6 gap-3">
              <div className="min-w-0">
                <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider block truncate">
                  SUB-SYSTEM: {categories[selectedCategory].title.toUpperCase()}
                </span>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  {categories[selectedCategory].description}
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Activity className="w-5 h-5 text-cyan-400 animate-pulse" />
              </div>
            </div>

            {/* Interactive Skill Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {categories[selectedCategory].skills.map((skill, sIdx) => {
                const isActive = activeSkill === skill.name;
                return (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveSkill(skill.name)}
                    className={`cursor-pointer p-3.5 sm:p-4 rounded-xl border transition-all duration-300 ${
                      isActive
                        ? 'bg-cyan-950/60 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.25)]'
                        : 'bg-slate-900/50 border-cyan-500/20 hover:border-cyan-500/40 hover:bg-slate-900/80'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono font-bold text-white text-xs sm:text-sm truncate">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/80 border border-blue-500/30 text-cyan-300 shrink-0">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {skill.usage}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Node Telemetry & Architecture Scope (5 cols) */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6 w-full">
          
          {/* Active Node Telemetry Card */}
          <div className="glass-panel p-5 sm:p-6 rounded-2xl relative overflow-hidden border border-cyan-500/30 w-full">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>ACTIVE NODE INSPECTION</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-mono text-white mb-2">
              {activeSkill || 'Select a Node'}
            </h3>

            {/* Find matching skill object */}
            {(() => {
              const matchedSkill = categories
                .flatMap((c) => c.skills)
                .find((s) => s.name === activeSkill);

              if (!matchedSkill) {
                return (
                  <p className="text-slate-400 text-xs">
                    Hover or click any technology node to view architectural applications.
                  </p>
                );
              }

              return (
                <div className="space-y-3 sm:space-y-4 text-xs font-mono">
                  <div className="p-3 bg-slate-950/70 rounded-lg border border-cyan-500/20">
                    <span className="text-cyan-400 text-[10px] block mb-1">
                      PRODUCTION IMPLEMENTATION
                    </span>
                    <p className="text-slate-200 leading-relaxed font-sans text-xs">
                      {matchedSkill.usage}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-[11px]">
                    <div className="p-2.5 bg-slate-950/50 rounded border border-slate-800">
                      <span className="text-slate-400 block text-[9px]">PROFICIENCY</span>
                      <span className="text-cyan-300 font-bold">{matchedSkill.level}</span>
                    </div>
                    <div className="p-2.5 bg-slate-950/50 rounded border border-slate-800">
                      <span className="text-slate-400 block text-[9px]">DEPLOYMENT</span>
                      <span className="text-emerald-400 font-bold">VERIFIED</span>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Architecture Philosophy Card */}
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-cyan-500/20 w-full">
            <h4 className="text-xs sm:text-sm font-bold font-mono text-cyan-300 mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              System Architecture Standard
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              "No technology is chosen for novelty. Every layer—from FastAPI's async request routing to PostgreSQL transactional locking and Dockerized container isolation—is validated for sub-second response times and zero data leakage."
            </p>
            <div className="mt-4 pt-3 border-t border-cyan-500/20 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>ACID COMPLIANT</span>
              <span className="text-cyan-400">ASYNCHRONOUS I/O</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

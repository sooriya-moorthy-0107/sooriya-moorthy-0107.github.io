import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const techQuotes = [
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    role: "Computer Scientist, Inventor of OOP",
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    role: "Chief Scientist, ThoughtWorks",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    role: "Co-founder, Apple Inc.",
  },
  {
    quote: "Move fast and ship things that matter — but never ship something you wouldn't stake your reputation on.",
    author: "Engineering Maxim",
    role: "Silicon Valley Principle",
  },
];

export default function QuoteSection() {
  return (
    <section className="relative py-16 sm:py-20 px-4 max-w-6xl mx-auto z-10 w-full overflow-hidden">
      {/* Section Label */}
      <div className="flex items-center gap-3 mb-10 sm:mb-12">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest">
          <Quote className="w-3.5 h-3.5" />
          <span>WORDS THAT DRIVE THE BUILD</span>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4"
        >
          <div className="glass-panel rounded-2xl overflow-hidden border border-cyan-500/30 group relative">
            <div className="relative overflow-hidden bg-slate-900">
              <img
                src="/assets/images/personal/quote-photo.jpg"
                alt="Sooriya Moorthy"
                className="w-full h-full max-h-[380px] object-cover object-center filter contrast-110 group-hover:scale-105 transition-all duration-700"
                onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040813] via-[#040813]/20 to-transparent" />
              <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff] animate-scanline" />

              {/* Name overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4">
                <div className="text-white font-mono font-bold text-sm">SOORIYA MOORTHY</div>
                <div className="text-cyan-400 text-xs font-mono mt-0.5">SOFTWARE ENGINEER · RJ SOMU</div>
                <div className="text-slate-500 text-[10px] font-mono mt-0.5">VIT Vellore · M.Tech Software Engineering</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Quotes Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {techQuotes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-panel p-4 sm:p-5 rounded-xl border border-cyan-500/15 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/5 blur-xl pointer-events-none group-hover:bg-cyan-500/10 transition-all" />
              
              {/* Quote mark */}
              <div className="text-cyan-400/30 font-mono text-5xl font-bold leading-none mb-2 select-none">"</div>
              
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-sans mb-4 relative z-10">
                {item.quote}
              </p>
              
              <div className="border-t border-cyan-500/15 pt-3">
                <div className="font-mono text-xs text-cyan-300 font-bold">{item.author}</div>
                <div className="font-mono text-[10px] text-slate-500 mt-0.5">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


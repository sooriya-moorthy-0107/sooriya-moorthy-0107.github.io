import { motion } from 'framer-motion';
import { Radio, Mic, Trophy, Users, Calendar, Sparkles } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, SpotifyIcon } from './Icons';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const gravTimeline = [
  {
    year: '2024',
    event: "GRAVITAS '24",
    role: 'Volunteer',
    color: 'border-slate-500/40 bg-slate-900/40',
    badge: 'bg-slate-700/60 text-slate-300',
    dot: 'bg-slate-400',
    desc: "Stepped onto the ground of Gravitas — VIT's flagship international techno-management carnival — as a volunteer. Managed venue coordination, high-volume student crowds, and logistics across multi-track technical workshops and hackathons.",
  },
  {
    year: '2025',
    event: "GRAVITAS '25",
    role: 'Coordinator',
    color: 'border-blue-500/40 bg-blue-950/30',
    badge: 'bg-blue-600/40 text-blue-200 border border-blue-500/40',
    dot: 'bg-blue-400',
    desc: 'Promoted to Coordinator, taking end-to-end ownership of scheduling, external speaker logistics, stage synchronization, and contingency operations for premier technical competitions with hundreds of participants.',
  },
  {
    year: '2026',
    event: "GRAVITAS '26",
    role: 'Manager',
    color: 'border-cyan-400/50 bg-cyan-950/30',
    badge: 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/50 shadow-[0_0_12px_rgba(0,240,255,0.3)]',
    dot: 'bg-cyan-400',
    desc: "Elevated to Manager — directing core verticals of Gravitas 2026. Leading teams of coordinators and volunteers, orchestrating cross-functional workflows, budgeting, and delivering India's premier tech fest with zero-failure execution.",
    image: '/assets/images/personal/gravitas-26.jpg',
  },
];

export default function ChapterPersonal() {
  return (
    <section
      id="personal"
      className="relative min-h-screen py-20 sm:py-24 px-4 max-w-6xl mx-auto z-10 w-full overflow-hidden"
    >
      {/* Chapter Marker Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>CHAPTER 02.5 // CAMPUS ACHIEVEMENTS & MEDIA</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-mono">
          Leadership, Mic & Stage
        </h2>
        <p className="mt-2 text-slate-400 max-w-2xl text-xs sm:text-base font-sans px-2">
          Beyond lines of code — where broadcast engineering booths, street mic interviews, and major university leadership shaped my communication and high-pressure execution.
        </p>
      </div>

      {/* ── SECTION 1: VIT Community Radio ── */}
      <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-16 sm:mb-20">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest mb-6">
          <Radio className="w-4 h-4 animate-pulse" />
          <span>VIT COMMUNITY RADIO // 90.8 MHz</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Description */}
          <div className="lg:col-span-6 space-y-4">
            <div className="glass-panel p-5 sm:p-7 rounded-2xl border border-cyan-500/25 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4 border-b border-cyan-500/20 pb-2">
                <Mic className="w-3.5 h-3.5" />
                <span>ADVISORY MEMBER & FORMER VICE CHAIRPERSON</span>
              </div>

              <div className="space-y-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                <p>
                  VIT Community Radio <strong className="text-cyan-300">90.8 MHz</strong> is an authorized campus broadcast station broadcasting across Vellore and streaming online to thousands of listeners. Serving as <strong className="text-white">Advisory Member and Former Vice Chairperson</strong>, I drove broadcast console engineering, studio management, and multi-RJ program coordination.
                </p>
                <p>
                  Operating live audio consoles demands instant composure: balancing decibel gains, routing inputs seamlessly between callers and live tracks, and troubleshooting on-the-fly with zero dead air. When thousands listen in real-time, there is no rollback button — a discipline that directly elevates how I architect reliable software systems.
                </p>
              </div>

              {/* Social Media Handles */}
              <div className="mt-5 pt-4 border-t border-cyan-500/20">
                <div className="text-[11px] font-mono text-slate-400 mb-2.5 tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>OFFICIAL RADIO HANDLES — @vitradio</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href="https://www.instagram.com/vitradio"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pink-950/40 border border-pink-500/30 text-pink-300 hover:border-pink-400 hover:bg-pink-900/40 transition-all text-xs font-mono shadow-[0_0_10px_rgba(236,72,153,0.15)]"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>@vitradio</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@vitradio"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-950/40 border border-red-500/30 text-red-300 hover:border-red-400 hover:bg-red-900/40 transition-all text-xs font-mono shadow-[0_0_10px_rgba(239,68,68,0.15)]"
                  >
                    <YoutubeIcon className="w-3.5 h-3.5" />
                    <span>YouTube</span>
                  </a>
                  <a
                    href="https://open.spotify.com/show/vitradio"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 hover:border-emerald-400 hover:bg-emerald-900/40 transition-all text-xs font-mono shadow-[0_0_10px_rgba(16,185,129,0.15)]"
                  >
                    <SpotifyIcon className="w-3.5 h-3.5" />
                    <span>Spotify</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Radio Photos */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3.5">
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className="glass-panel rounded-xl overflow-hidden border border-cyan-500/25 group relative"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-900">
                <img
                  src="/assets/images/personal/radio-editing-1.jpg"
                  alt="Sooriya at radio console editing"
                  className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-all duration-700"
                  onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040813] via-transparent to-transparent opacity-70" />
                <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff] animate-scanline" />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/75 backdrop-blur-md rounded text-[9px] font-mono text-cyan-300 border border-cyan-500/30">
                  CONSOLE EDITING
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.15 }}
              className="glass-panel rounded-xl overflow-hidden border border-cyan-500/25 group relative"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-900">
                <img
                  src="/assets/images/personal/radio-editing-2.jpg"
                  alt="Sooriya in the radio studio"
                  className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-all duration-700"
                  onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040813] via-transparent to-transparent opacity-70" />
                <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff] animate-scanline" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/75 backdrop-blur-md rounded text-[9px] font-mono text-cyan-300 border border-cyan-500/30">
                  BROADCAST OPS
                </div>
              </div>
            </motion.div>

            {/* Live Status Badge */}
            <div className="col-span-2 glass-panel p-3 rounded-xl border border-cyan-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
                <span className="font-bold">ON AIR // 90.8 MHz BROADCAST</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">VIT COMMUNITY RADIO</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── SECTION 2: Campus Quiz Show ── */}
      <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="mb-16 sm:mb-20">
        <div className="flex items-center gap-2 text-purple-400 text-xs font-mono tracking-widest mb-6">
          <Mic className="w-4 h-4" />
          <span>CAMPUS SHOWCASE // CAMPUS QUIZ! CAN U ANSWER THIS?</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Quiz Photo */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 glass-panel rounded-2xl overflow-hidden border border-purple-500/30 group relative"
          >
            <div className="aspect-[4/3] relative overflow-hidden bg-slate-900">
              <img
                src="/assets/images/personal/campus-quiz.jpg"
                alt="Campus Quiz Show - Vox Pop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040813] via-transparent to-transparent opacity-60" />
              <div className="absolute top-3 left-3 px-2 py-1 bg-purple-900/80 backdrop-blur-md rounded border border-purple-400/40 text-[10px] font-mono text-purple-200">
                VOX POP // STREET MIC
              </div>
              <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-md rounded p-2.5 border border-purple-500/30">
                <div className="text-[11px] font-mono font-bold text-purple-300">CAMPUS QUIZ ! CAN U ANSWER THIS ?</div>
                <div className="text-[9px] font-mono text-slate-400 mt-0.5">VIT Community Radio 90.8 MHz • Host: RJ SOMU</div>
              </div>
            </div>
          </motion.div>

          {/* Quiz Description */}
          <div className="lg:col-span-7 space-y-4">
            <div className="glass-panel p-5 sm:p-7 rounded-2xl border border-purple-500/25 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl pointer-events-none" />

              <h3 className="text-lg sm:text-xl font-bold font-mono text-white mb-1">
                Campus Quiz ! <span className="text-purple-400">Can U Answer This ?</span>
              </h3>
              <div className="text-[11px] font-mono text-purple-300 mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>HOSTED BY RJ SOMU // VIT COMMUNITY RADIO 90.8 MHz</span>
              </div>

              <div className="space-y-3 text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                <p>
                  As an RJ at VIT Community Radio, I ideated and hosted the campus-wide hit show <strong className="text-white">"Campus Quiz ! Can U Answer This ?"</strong>. Instead of staying confined inside the studio recording booth, we took the radio outside to where the action was.
                </p>
                <p>
                  The centerpiece of the show was an energetic <strong className="text-purple-300 font-semibold">vox pop format</strong> (voice of the people) — walking up to random strangers, groups of students chilling between lectures, and even faculty members across the campus grounds, putting a microphone in front of them, and firing unexpected trivia, rapid-fire brain teasers, and fun logic puzzles.
                </p>
                <p>
                  The unpredictable reactions, hilarious misunderstandings, quick-witted banter, and spontaneous competitive rivalries made every episode intensely entertaining. Managing this show developed my ability to improvise instantly, build instant rapport with diverse people, and command an audience under dynamic conditions.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-purple-500/20 grid grid-cols-3 gap-2 text-center">
                {[
                  { label: 'SHOW FORMAT', value: 'VOX POP' },
                  { label: 'HOST IDENTITY', value: 'RJ SOMU' },
                  { label: 'CAMPUS REACH', value: '90.8 MHz' },
                ].map((item) => (
                  <div key={item.label} className="p-2 rounded-lg bg-purple-950/40 border border-purple-500/20">
                    <div className="text-purple-300 font-mono font-bold text-xs">{item.value}</div>
                    <div className="text-slate-500 text-[10px] font-mono mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── SECTION 3: Gravitas Timeline ── */}
      <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
        <div className="flex items-center gap-2 text-amber-400 text-xs font-mono tracking-widest mb-6">
          <Trophy className="w-4 h-4" />
          <span>GRAVITAS TECH FEST // 3-YEAR LEADERSHIP TRAJECTORY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Timeline Cards */}
          <div className="lg:col-span-7 space-y-4 relative">
            {/* Vertical connector line */}
            <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-gradient-to-b from-slate-600 via-blue-500 to-cyan-400 hidden sm:block" />

            {gravTimeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className={`relative pl-0 sm:pl-10 glass-panel p-4 sm:p-5 rounded-xl border ${item.color} transition-all hover:-translate-y-0.5`}
              >
                {/* Timeline node */}
                <div className={`absolute left-2.5 top-5 w-3 h-3 rounded-full ${item.dot} border-2 border-[#030611] shadow-[0_0_8px_rgba(0,240,255,0.5)] hidden sm:block`} />

                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.year}
                  </div>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs font-mono font-bold text-white">{item.event}</span>
                  <span className={`ml-auto px-2 py-0.5 rounded text-[10px] font-mono font-bold ${item.badge}`}>
                    {item.role.toUpperCase()}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.desc}</p>
              </motion.div>
            ))}

            {/* Trajectory Badge */}
            <div className="glass-panel p-3 rounded-xl border border-amber-500/25 flex items-center gap-2.5 text-xs font-mono text-amber-300">
              <Users className="w-4 h-4 shrink-0 text-amber-400" />
              <span>Volunteer (2024) → Coordinator (2025) → Manager (2026) at India's largest university tech fest</span>
            </div>
          </div>

          {/* Gravitas 26 Photo */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 glass-panel rounded-2xl overflow-hidden border border-cyan-400/40 group relative"
          >
            <div className="relative overflow-hidden bg-slate-900">
              <img
                src="/assets/images/personal/gravitas-26.jpg"
                alt="Gravitas 2026 — Manager"
                className="w-full h-full object-cover max-h-[420px] group-hover:scale-105 transition-transform duration-700"
                onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040813] via-transparent to-transparent opacity-60" />
              <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff] animate-scanline" />

              <div className="absolute top-3 left-3 px-2 py-1 bg-black/75 backdrop-blur-md rounded border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                GRAVITAS '26 — MANAGER
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-slate-300 bg-black/70 backdrop-blur-md p-2 rounded border border-slate-800">
                <span>VIT VELLORE // TECH FEST</span>
                <span className="text-cyan-400 font-bold">EXECUTIVE ROLE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

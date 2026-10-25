import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  X, 
  Maximize2, 
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

export default function ChapterArtifacts() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Enterprise', 'AI & ML', 'Algorithms'];

  const filteredProjects: Project[] = selectedCategory === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="artifacts" className="relative min-h-screen py-20 sm:py-24 px-4 max-w-6xl mx-auto z-10 w-full overflow-hidden">
      
      {/* Chapter Marker Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>CHAPTER 03 // THE ARTIFACTS</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-mono">
          Architectural Monoliths
        </h2>
        <p className="mt-2 text-slate-400 max-w-2xl text-xs sm:text-base font-sans px-2">
          Production software and AI pipelines built to withstand real-world operational friction.
        </p>

        {/* Filter Pills */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-400 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'bg-slate-900/80 text-slate-400 hover:text-cyan-300 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-panel rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 flex flex-col group w-full"
          >
            {/* Project Image Banner with Hologram Overlay */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-cyan-500/20">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060c1c] via-[#060c1c]/40 to-transparent" />

              {/* Category Badge */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                {project.category}
              </div>

              {/* Expand Blueprint Trigger */}
              <button
                type="button"
                onClick={() => setActiveModalProject(project)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-lg bg-black/70 backdrop-blur-md border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-500/30 transition-colors cursor-pointer"
                title="View Blueprint Specs"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Project Content */}
            <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="text-[10px] sm:text-[11px] font-mono text-cyan-400 font-semibold tracking-wider">
                  {project.subtitle}
                </div>
                <h3 className="text-lg sm:text-2xl font-bold font-mono text-white mt-1 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 sm:mt-3 leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              {/* Metrics Highlights */}
              <div className="space-y-1.5 py-2.5 sm:py-3 border-y border-cyan-500/15">
                {project.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{m}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips & Action Links */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.architecture.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/50 border border-cyan-500/20 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-400/50 text-xs font-mono text-cyan-300 hover:bg-cyan-500/30 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Blueprint</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Blueprint Specification Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#070e20] border border-cyan-400/50 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.25)] overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-cyan-500/20 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs font-mono text-cyan-400 truncate">
                    SYSTEM ARCHITECTURAL DOSSIER // {activeModalProject.category.toUpperCase()}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-mono text-white mt-0.5 truncate">
                    {activeModalProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="p-1.5 sm:p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors shrink-0 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-sm text-slate-300 font-sans">
                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-cyan-500/30">
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-xs font-mono text-cyan-400 font-bold tracking-wider uppercase mb-1.5">
                    Executive Summary
                  </h4>
                  <p className="leading-relaxed text-xs sm:text-sm">
                    {activeModalProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-cyan-400 font-bold tracking-wider uppercase mb-1.5">
                    Architectural Deep-Dive
                  </h4>
                  <p className="leading-relaxed text-slate-200 bg-cyan-950/20 p-3.5 sm:p-4 rounded-xl border border-cyan-500/20 text-xs sm:text-sm">
                    {activeModalProject.details}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-cyan-400 font-bold tracking-wider uppercase mb-1.5">
                    Key Performance Metrics
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeModalProject.metrics.map((m, i) => (
                      <div key={i} className="p-2.5 sm:p-3 bg-slate-900/60 rounded-lg border border-slate-800 text-xs font-mono flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span className="truncate">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-cyan-400 font-bold tracking-wider uppercase mb-1.5">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {activeModalProject.architecture.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-950/60 border border-blue-500/30 text-cyan-300 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-3.5 sm:p-4 border-t border-cyan-500/20 bg-slate-950/50 flex items-center justify-between gap-2">
                <span className="text-[10px] sm:text-xs font-mono text-slate-500 truncate">
                  REF // SOORIYA-PORTFOLIO-2026
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  {activeModalProject.githubUrl && (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-cyan-500 text-black font-mono font-bold text-xs hover:brightness-110 shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(null)}
                    className="px-3 py-1.5 sm:py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

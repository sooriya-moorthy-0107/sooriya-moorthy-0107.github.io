import { useState, useEffect } from 'react';
import { Download, RotateCw, Menu, X, Radio, Sun, Moon } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onReplayIntro?: () => void;
}

export default function Navbar({ onReplayIntro }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  // Scroll listener for sticky header styling and active section indicator
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'foundation', 'arsenal', 'terminal', 'artifacts', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: '00 // CARD', href: '#hero' },
    { id: 'foundation', label: '01 // FOUNDATION', href: '#foundation' },
    { id: 'arsenal', label: '02 // ARSENAL', href: '#arsenal' },
    { id: 'terminal', label: '03 // CONSOLE', href: '#terminal' },
    { id: 'artifacts', label: '04 // PROJECTS', href: '#artifacts' },
    { id: 'contact', label: '05 // CONTACT', href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full overflow-hidden ${
        isScrolled
          ? 'bg-[#040713]/85 dark:bg-[#040713]/85 bg-slate-900/85 backdrop-blur-md border-b border-cyan-500/20 py-2.5 sm:py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-4 flex items-center justify-between">
        
        {/* Brand / Call Sign */}
        <button
          type="button"
          onClick={() => scrollTo('#hero')}
          className="flex items-center gap-2 text-left group cursor-pointer shrink-0"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.3)] group-hover:border-cyan-300 group-hover:scale-105 transition-all">
            <Radio className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold font-mono tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              SOORIYA MOORTHY
            </div>
            <div className="text-[9px] sm:text-[10px] font-mono text-cyan-400/80 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>90.8 MHz // CSE ARCHITECT</span>
            </div>
          </div>
        </button>

        {/* Desktop Chapter Navigation with Active Highlighting */}
        <nav className="hidden lg:flex items-center gap-1 p-1 bg-slate-950/70 border border-cyan-500/20 rounded-full backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.href)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/40'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls: Theme Toggle, Intro Replay, CV */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Dark / Light Mode Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            className="p-1.5 sm:p-2 rounded-lg bg-slate-900/80 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:text-white transition-all hover:scale-105 cursor-pointer shadow-[0_0_10px_rgba(0,240,255,0.15)]"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Replay Intro */}
          {onReplayIntro && (
            <button
              type="button"
              onClick={onReplayIntro}
              title="Replay Cyber Witch Opening"
              className="p-1.5 sm:p-2 rounded-lg bg-slate-900/80 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:text-white transition-all hover:scale-105 cursor-pointer shadow-[0_0_10px_rgba(0,240,255,0.15)]"
            >
              <RotateCw className="w-4 h-4" />
            </button>
          )}

          {/* CV Button */}
          <a
            href={PORTFOLIO_DATA.profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-black font-mono font-bold text-xs hover:brightness-110 shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all hover:scale-105 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-400"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-400 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#040813]/98 border-b border-cyan-500/30 p-5 space-y-4 shadow-2xl backdrop-blur-xl max-w-full">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-3.5 py-2 rounded-lg font-mono text-xs transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500 text-black font-bold'
                      : 'text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/40'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-cyan-500/20 flex items-center justify-between gap-2">
            {onReplayIntro && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReplayIntro();
                }}
                className="flex items-center gap-1 text-xs font-mono text-cyan-400 p-2 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>Replay Intro</span>
              </button>
            )}

            <a
              href={PORTFOLIO_DATA.profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center py-2 bg-cyan-500 text-black font-mono font-bold text-xs rounded-lg shadow-[0_0_15px_rgba(0,240,255,0.4)]"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import CyberWitchIntro from './components/CyberWitchIntro';
import VisitingCardHero from './components/VisitingCardHero';
import ChapterFoundation from './components/ChapterFoundation';
import ChapterArsenal from './components/ChapterArsenal';
import InteractiveTerminal from './components/InteractiveTerminal';
import ChapterArtifacts from './components/ChapterArtifacts';
import ChapterContact from './components/ChapterContact';
import Navbar from './components/Navbar';
import BackgroundCanvas from './components/BackgroundCanvas';
import ScrollProgressBar from './components/ScrollProgressBar';
import CookieBanner from './components/CookieBanner';
import FloatingControls from './components/FloatingControls';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [forceCookieBanner, setForceCookieBanner] = useState(false);

  const handleScrollToChapters = () => {
    const el = document.getElementById('foundation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
    // Explicitly anchor user to the top Hero page upon throw completion
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <ThemeProvider>
      <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#050811] dark:bg-[#050811] text-slate-100 dark:text-slate-100 selection:bg-cyan-400 selection:text-black transition-colors duration-300">
        
        {/* Scroll Progress Bar at very top */}
        <ScrollProgressBar />

        {/* Dynamic 60fps Starfield Canvas */}
        <BackgroundCanvas />

        {/* Cyber Witch Opening Sequence */}
        {showIntro && (
          <CyberWitchIntro onComplete={handleIntroComplete} />
        )}

        {/* Top HUD Sticky Navigation Header */}
        <Navbar onReplayIntro={handleReplayIntro} />

        {/* Main Experience Flow */}
        <main className="relative z-10 w-full max-w-full overflow-x-hidden">
          {/* Chapter 0: The 3D Interactive Visiting Card */}
          <div id="hero">
            <VisitingCardHero
              onScrollToChapters={handleScrollToChapters}
              onReplayIntro={handleReplayIntro}
            />
          </div>

          {/* Chapter 1: The Foundation - The Signal & The Logic */}
          <ChapterFoundation />

          {/* Chapter 2: The Arsenal - The Interactive Constellation */}
          <ChapterArsenal />

          {/* Interactive Architecture Terminal Console (Placed directly above Projects) */}
          <InteractiveTerminal />

          {/* Chapter 3: The Artifacts - The Production Projects Space */}
          <ChapterArtifacts />

          {/* Chapter 4: Transmission Uplink - Direct Comms & Contact */}
          <ChapterContact
            onReplayIntro={handleReplayIntro}
            onScrollToTop={handleScrollToTop}
          />
        </main>

        {/* Floating Controls (Back to Top + Contact Action Beacon) */}
        <FloatingControls onOpenCookieSettings={() => setForceCookieBanner(true)} />

        {/* Working Cookie Consent Banner */}
        <CookieBanner
          forceOpen={forceCookieBanner}
          onCloseForce={() => setForceCookieBanner(false)}
        />

      </div>
    </ThemeProvider>
  );
}

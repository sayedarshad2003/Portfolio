import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [KolkataTime, setKolkataTime] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });
        setKolkataTime(formatter.format(now));
      } catch {
        // Fallback for UTC+4
        const d = new Date();
        const utc = d.getTime() + d.getTimezoneOffset() * 60000;
        const KolkataDate = new Date(utc + 3600000 * 4);
        setKolkataTime(KolkataDate.toTimeString().split(' ')[0]);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
        ? 'bg-[#0B0B0C]/85 backdrop-blur-md border-b border-[#27272A]/80 py-3.5'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg sm:text-xl font-serif tracking-tight text-[#F4F4F5] hover:text-[#FF4800] transition-colors"
        >
          {PERSONAL_INFO.name}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
          <a href="#work" className="hover-draw-line hover:text-[#F4F4F5] transition-colors">
            Selected Work
          </a>
          <a href="#experience" className="hover-draw-line hover:text-[#F4F4F5] transition-colors">
            Experience
          </a>
          <a href="#skills" className="hover-draw-line hover:text-[#F4F4F5] transition-colors">
            Technical Core
          </a>
          <a href="#about" className="hover-draw-line hover:text-[#F4F4F5] transition-colors">
            About
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions (Kolkata Time + Contact Action) */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#71717A] tabular-nums">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4800] animate-pulse" />
            <span>Ahmedabad</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#A1A1AA]">{KolkataTime || '11:21:00'} IST</span>
          </div>

          <a
            href="#contact"
            className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-black bg-[#F4F4F5] hover:bg-[#FF4800] hover:text-black transition-colors rounded-none whitespace-nowrap"
          >
            Initiate Contact
          </a>
        </div>
      </div>
    </header>
  );
};

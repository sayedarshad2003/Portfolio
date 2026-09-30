import React, { useEffect, useRef } from 'react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';

export const SkillsMarquee: React.FC = () => {
  const marqueeRef1 = useRef<HTMLDivElement>(null);
  const marqueeRef2 = useRef<HTMLDivElement>(null);

  // Flattened skill list for continuous ticker
  const allSkills = TECHNICAL_SKILLS.flatMap((cat) => cat.skills);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let x1 = 0;
    let x2 = 0;
    let velocity = 1;
    let lastScrollY = window.scrollY;
    let animationFrameId: number;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY);
      velocity = Math.min(8, 1 + delta * 0.12);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const animate = () => {
      // Decay velocity back to normal base speed
      velocity += (1 - velocity) * 0.05;

      x1 -= 0.8 * velocity;
      x2 += 0.8 * velocity;

      if (marqueeRef1.current) {
        if (Math.abs(x1) >= marqueeRef1.current.scrollWidth / 2) {
          x1 = 0;
        }
        marqueeRef1.current.style.transform = `translate3d(${x1}px, 0, 0)`;
      }

      if (marqueeRef2.current) {
        if (Math.abs(x2) >= marqueeRef2.current.scrollWidth / 2) {
          x2 = 0;
        }
        marqueeRef2.current.style.transform = `translate3d(${-x2}px, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="skills" className="relative bg-[#0B0B0C] border-b border-[#27272A]/70 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#27272A]/50 text-xs font-mono text-[#71717A]">
          <div className="flex items-center gap-3">
            <span className="text-[#FF4800]">04</span>
            <span>ENGINEERING STACK</span>
          </div>
          <div>SCROLL VELOCITY SYNCHRONIZED</div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#F4F4F5] tracking-tight">
              Technical Core
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#A1A1AA] mt-2 max-w-lg">
              Languages, frameworks, protocols, and deployment environments applied in production.
            </p>
          </div>
          <div className="text-xs font-mono text-[#71717A]">
            SCROLL TO ACCELERATE MARQUEE
          </div>
        </div>
      </div>

      {/* Row 1: Forward Marquee */}
      <div className="w-full overflow-hidden py-3 border-y border-[#27272A]/60 bg-[#0E0E11]">
        <div
          ref={marqueeRef1}
          className="flex gap-8 whitespace-nowrap will-change-transform"
          style={{ width: 'max-content' }}
        >
          {[...allSkills, ...allSkills].map((skill, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="font-serif text-2xl sm:text-4xl text-[#F4F4F5] tracking-tight hover:text-[#FF4800] transition-colors cursor-default">
                {skill}
              </span>
              <span className="text-[#FF4800] font-mono text-xs">/</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Reverse Marquee */}
      <div className="w-full overflow-hidden py-3 border-b border-[#27272A]/60 bg-[#0B0B0C]">
        <div
          ref={marqueeRef2}
          className="flex gap-8 whitespace-nowrap will-change-transform"
          style={{ width: 'max-content' }}
        >
          {[...allSkills, ...allSkills].reverse().map((skill, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="font-mono text-lg sm:text-xl text-[#A1A1AA] tracking-wider uppercase hover:text-[#F4F4F5] transition-colors cursor-default">
                {skill}
              </span>
              <span className="text-[#27272A] font-mono text-sm">▪</span>
            </div>
          ))}
        </div>
      </div>

      {/* Structured Categorized Grid below Marquee (Strict Anti-Pill, Human Editorial Formatting) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECHNICAL_SKILLS.map((group, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#121215] border border-[#27272A] hover:border-[#3F3F46] transition-colors"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#27272A]">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#FF4800]">
                  {group.category}
                </h3>
                <span className="font-mono text-[10px] text-[#71717A]">
                  0{idx + 1}
                </span>
              </div>

              <div className="mt-4 space-y-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between text-xs font-mono text-[#D4D4D8] py-1 border-b border-[#27272A]/30 last:border-none"
                  >
                    <span>{skill}</span>
                    <span className="text-[#71717A] text-[10px]">PRODUCTION</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

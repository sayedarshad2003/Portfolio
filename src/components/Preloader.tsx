import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const counterObj = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        // Slide up / clip out preloader
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: 'power4.inOut',
          onComplete: () => {
            onComplete();
          }
        });
      }
    });

    // Animate counter
    tl.to(counterObj, {
      value: 100,
      duration: 1.5,
      ease: 'power2.out',
      onUpdate: () => {
        setCount(Math.floor(counterObj.value));
      }
    });

    // Animate progress line
    tl.to(lineRef.current, {
      scaleX: 1,
      duration: 1.5,
      ease: 'power2.out'
    }, 0);

    // Fade out inner text slightly before sliding up
    tl.to([textRef.current, counterRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: 'power3.in'
    }, '+=0.1');

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <aside
      ref={containerRef}
      aria-label="Portfolio Initializing"
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0B0B0C] p-6 sm:p-12 text-[#F4F4F5] border-b border-[#27272A]"
    >
      <div className="flex justify-between items-start text-xs font-mono text-[#71717A] tracking-wider">
        <div>SAIYED ARSHAD</div>
        <div>23.5880° N, 58.3829° E · MUSCAT</div>
      </div>

      <div ref={textRef} className="max-w-2xl">
        <div className="text-xs font-mono text-[#FF4800] uppercase tracking-widest mb-3">
          Enterprise Systems & Runtime Architecture
        </div>
        <div className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F4F4F5] tracking-tight leading-tight">
          High-concurrency platforms. Real-time pipelines.
        </div>
      </div>

      <div>
        <div className="flex justify-between items-end mb-4">
          <span className="text-xs font-mono text-[#71717A] tracking-widest">
            INITIALIZING CORE / ASP.NET & SQL SERVER
          </span>
          <span
            ref={counterRef}
            className="font-mono text-5xl sm:text-7xl font-bold text-[#F4F4F5] tabular-nums"
          >
            {count.toString().padStart(2, '0')}%
          </span>
        </div>
        <div className="h-[2px] w-full bg-[#1C1C21] overflow-hidden">
          <div
            ref={lineRef}
            className="h-full w-full bg-[#FF4800] origin-left scale-x-0"
          />
        </div>
      </div>
    </aside>
  );
};

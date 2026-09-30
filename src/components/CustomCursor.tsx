import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);

  useEffect(() => {
    // Detect touch device or reduced motion
    const touchCheck = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (touchCheck || reducedMotion) {
      setIsTouch(true);
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Quick setters for maximum performance (60fps without layout thrashing)
    const setDotX = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power2.out' });
    const setDotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power2.out' });
    const setRingX = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3.out' });
    const setRingY = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3.out' });

    let isHovering = false;

    const onMouseMove = (e: MouseEvent) => {
      setDotX(e.clientX);
      setDotY(e.clientY);
      setRingX(e.clientX);
      setRingY(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [data-cursor-interactive], [data-cursor-project]');
      if (interactive) {
        isHovering = true;
        const projectLabel = interactive.getAttribute('data-cursor-project');
        if (projectLabel) {
          setCursorText(projectLabel);
          gsap.to(ring, {
            scale: 2.5,
            borderColor: '#FF4800',
            backgroundColor: 'rgba(255, 72, 0, 0.15)',
            duration: 0.25,
            ease: 'power2.out'
          });
          gsap.to(dot, { opacity: 0, duration: 0.15 });
        } else {
          setCursorText(null);
          gsap.to(ring, {
            scale: 1.8,
            borderColor: '#FF4800',
            backgroundColor: 'transparent',
            duration: 0.2,
            ease: 'power2.out'
          });
          gsap.to(dot, { scale: 0.6, duration: 0.2 });
        }
      } else {
        if (isHovering) {
          isHovering = false;
          setCursorText(null);
          gsap.to(ring, {
            scale: 1,
            borderColor: 'rgba(244, 244, 245, 0.4)',
            backgroundColor: 'transparent',
            duration: 0.25,
            ease: 'power2.out'
          });
          gsap.to(dot, { scale: 1, opacity: 1, duration: 0.2 });
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Precision center dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-[#FF4800] z-[9999]"
        style={{ willChange: 'transform' }}
      />
      {/* Outer easing ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 -ml-4 -mt-4 w-8 h-8 rounded-full border border-white/40 z-[9998] flex items-center justify-center text-[8px] font-mono font-bold text-white tracking-widest uppercase"
        style={{ willChange: 'transform' }}
      >
        {cursorText && (
          <span className="scale-75 whitespace-nowrap text-[#FF4800]">{cursorText}</span>
        )}
      </div>
    </>
  );
};

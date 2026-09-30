import React, { useEffect, useRef, useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import gsap from 'gsap';

export const Contact: React.FC = () => {
  const [KolkataTime, setKolkataTime] = useState<string>('');
  const emailRef = useRef<HTMLAnchorElement>(null);
  const magneticButtonRef = useRef<HTMLAnchorElement>(null);

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
        const d = new Date();
        const utc = d.getTime() + d.getTimezoneOffset() * 60000;
        const KolkataDate = new Date(utc + 3600000 * 4);
        setKolkataTime(KolkataDate.toTimeString().split(' ')[0]);
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Magnetic effect on main email CTA
    const button = magneticButtonRef.current;
    if (button) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion) {
        const setX = gsap.quickTo(button, 'x', { duration: 0.3, ease: 'power2.out' });
        const setY = gsap.quickTo(button, 'y', { duration: 0.3, ease: 'power2.out' });

        const onMouseMove = (e: MouseEvent) => {
          const rect = button.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = (e.clientX - centerX) * 0.3;
          const deltaY = (e.clientY - centerY) * 0.3;
          setX(deltaX);
          setY(deltaY);
        };

        const onMouseLeave = () => {
          setX(0);
          setY(0);
        };

        button.addEventListener('mousemove', onMouseMove);
        button.addEventListener('mouseleave', onMouseLeave);

        return () => {
          clearInterval(interval);
          button.removeEventListener('mousemove', onMouseMove);
          button.removeEventListener('mouseleave', onMouseLeave);
        };
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <footer id="contact" className="relative bg-[#08080A] text-[#F4F4F5] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#27272A]/50 text-xs font-mono text-[#71717A]">
          <div className="flex items-center gap-3">
            <span className="text-[#FF4800]">06</span>
            <span>CONTACT & ENGAGEMENT</span>
          </div>
          <div>DIRECT LINE</div>
        </div>

        {/* Massive Magnetic Email Hero Link */}
        <div className="py-16 sm:py-24 border-b border-[#27272A]">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF4800] block mb-4">
            Available For Engineering Roles & System Deployments
          </span>

          <a
            ref={emailRef}
            href={`mailto:${PERSONAL_INFO.email}`}
            data-cursor-interactive="true"
            className="group block font-serif tracking-tight text-[#F4F4F5] hover:text-[#FF4800] transition-colors leading-none text-[8vw] sm:text-[6.5vw] lg:text-[5vw] break-all sm:break-normal select-none"
          >
            <span className="hover-draw-line">{PERSONAL_INFO.email}</span>
          </a>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              ref={magneticButtonRef}
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#FF4800] text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-white transition-colors"
            >
              <span>Send An Email</span>
              <span>↗</span>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="text-xs font-mono text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors flex items-center gap-2"
            >
              <span>TEL:</span>
              <span className="text-[#F4F4F5]">{PERSONAL_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Network & Social Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-b border-[#27272A]/70 text-xs font-mono">
          <div>
            <span className="text-[#71717A] uppercase block mb-2">Location & Presence</span>
            <div className="text-[#F4F4F5] font-semibold">{PERSONAL_INFO.location}</div>
            <div className="text-[#71717A] mt-1">Origin: {PERSONAL_INFO.origin}</div>
          </div>

          <div>
            <span className="text-[#71717A] uppercase block mb-2">Online Profiles</span>
            <div className="space-y-1.5">
              <div>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover-draw-line text-[#F4F4F5] hover:text-[#FF4800]"
                >
                  GitHub (arshadsayed)
                </a>
              </div>
              <div>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover-draw-line text-[#F4F4F5] hover:text-[#FF4800]"
                >
                  LinkedIn (/in/saiyed-arshad)
                </a>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[#71717A] uppercase block mb-2">Ahmedabad Station Time</span>
            <div className="flex items-center gap-2 text-[#F4F4F5] text-sm tabular-nums font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#FF4800] animate-pulse" />
              <span>{KolkataTime || '11:21:00'} GST (UTC+4)</span>
            </div>
            <div className="text-[#71717A] text-[11px] mt-1">
              Coordinates: {PERSONAL_INFO.coordinates}
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#71717A]">
          <div>
            © {new Date().getFullYear()} Saiyed Arshad. All facts verified against commercial resume.
          </div>
          <div className="flex items-center gap-3">
            <span>ASP.NET</span>
            <span aria-hidden="true">·</span>
            <span>SQL SERVER</span>
            <span aria-hidden="true">·</span>
            <span>SIGNALR</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

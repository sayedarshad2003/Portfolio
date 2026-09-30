import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  readyToAnimate: boolean;
}

export const Hero: React.FC<HeroProps> = ({ readyToAnimate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const titleLine3Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const sideCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!readyToAnimate) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set([titleLine1Ref.current, titleLine2Ref.current, titleLine3Ref.current], {
        y: '0%',
        opacity: 1
      });
      gsap.set([subtitleRef.current, statsRef.current, sideCardRef.current], {
        opacity: 1,
        y: 0
      });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Staggered masked reveal of huge headline lines
    tl.fromTo(
      [titleLine1Ref.current, titleLine2Ref.current, titleLine3Ref.current],
      { y: '115%' },
      {
        y: '0%',
        duration: 1.2,
        stagger: 0.14,
        ease: 'power4.out'
      }
    );

    // Fade and translate subtitle & side content
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
      '-=0.7'
    );

    tl.fromTo(
      statsRef.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    );

    tl.fromTo(
      sideCardRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 1.0, ease: 'power3.out' },
      '-=0.7'
    );

    return () => {
      tl.kill();
    };
  }, [readyToAnimate]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-32 sm:pt-36 pb-20 flex flex-col justify-between border-b border-[#27272A]/70 overflow-hidden"
    >
      {/* Background subtle architectural hairline coordinate grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, #27272A 1px, transparent 1px), linear-gradient(to bottom, #27272A 1px, transparent 1px)',
          backgroundSize: '8vw 8vw'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 flex-1 flex flex-col justify-between">
        {/* Top Kicker Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#27272A]/40 text-xs font-mono text-[#71717A]">
          <div className="flex items-center gap-3">
            <span className="text-[#FF4800]">01</span>
            <span>SYSTEMS ENGINEERING & ENTERPRISE WEB APPLICATIONS</span>
          </div>
          <div className="flex items-center gap-3">
            <span>ASP.NET CORE MVC</span>
            <span aria-hidden="true">/</span>
            <span>SQL SERVER</span>
            <span aria-hidden="true">/</span>
            <span>SIGNALR</span>
          </div>
        </div>

        {/* Main 12-Column Asymmetric Hero Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 my-auto py-12 items-end">
          {/* Col 1-9: Huge Oversized Display Headline (10-14vw) */}
          <div className="lg:col-span-8 xl:col-span-9">
            <h1 className="font-serif tracking-tight text-[#F4F4F5] leading-[0.88] select-none text-[12vw] sm:text-[11vw] lg:text-[7.5vw] xl:text-[8vw]">
              <span className="line-mask block">
                <span ref={titleLine1Ref} className="block transform translate-y-full">
                  Architecting
                </span>
              </span>
              <span className="line-mask block">
                <span ref={titleLine2Ref} className="block transform translate-y-full italic text-[#A1A1AA]">
                  enterprise
                </span>
              </span>
              <span className="line-mask block">
                <span ref={titleLine3Ref} className="block transform translate-y-full text-[#F4F4F5]">
                  runtimes.
                </span>
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="mt-8 text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-2xl font-sans font-light leading-relaxed opacity-0"
              style={{ textWrap: 'balance' }}
            >
              Software developer with 3+ years delivering multi-tenant platforms, high-concurrency
              SQL Server schemas, and real-time SignalR communication channels. Engineered Crystal POS and MetFlora
              for the Omani market with bilingual Arabic/English interfaces and automated VAT compliance.
            </p>
          </div>

          {/* Col 10-12: Asymmetric Monospace Detail Panel breaking the grid */}
          <div
            ref={sideCardRef}
            className="lg:col-span-4 xl:col-span-3 opacity-0 flex flex-col justify-between p-6 bg-[#121215] border border-[#27272A] relative"
          >
            {/* Top corner accent */}
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#FF4800]" />

            <div>
              <div className="text-[10px] font-mono text-[#71717A] tracking-wider uppercase mb-2">
                Deployment Node
              </div>
              <div className="font-mono text-sm text-[#F4F4F5] font-semibold">
                {PERSONAL_INFO.location}
              </div>
              <div className="text-xs font-mono text-[#71717A] mt-1">
                {PERSONAL_INFO.coordinates}
              </div>
            </div>

            <div className="my-6 py-4 border-y border-[#27272A]/70 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-[#A1A1AA]">
                <span>CORE STACK</span>
                <span className="text-[#F4F4F5]">C# / .NET Core</span>
              </div>
              <div className="flex justify-between text-[#A1A1AA]">
                <span>PERSISTENCE</span>
                <span className="text-[#F4F4F5]">SQL Server (CTEs)</span>
              </div>
              <div className="flex justify-between text-[#A1A1AA]">
                <span>STREAMING</span>
                <span className="text-[#FF4800]">SignalR / Sockets</span>
              </div>
              <div className="flex justify-between text-[#A1A1AA]">
                <span>GATEWAY</span>
                <span className="text-[#F4F4F5]">Paymob REST</span>
              </div>
            </div>

            <div>
              <a
                href="#work"
                data-cursor-interactive="true"
                className="group flex items-center justify-between text-xs font-mono text-[#F4F4F5] hover:text-[#FF4800] transition-colors"
              >
                <span>EXPLORE CASE STUDIES</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar (Adjacent claim-to-proof) */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#27272A]/60 opacity-0"
        >
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-bold text-[#F4F4F5] tabular-nums">
              &gt;40%
            </div>
            <div className="text-xs font-mono text-[#71717A] mt-1">
              Query latency reduction via CTEs & stored procedures
            </div>
          </div>

          <div>
            <div className="font-mono text-3xl sm:text-4xl font-bold text-[#F4F4F5] tabular-nums">
              3+ YRS
            </div>
            <div className="text-xs font-mono text-[#71717A] mt-1">
              Full-stack production development experience
            </div>
          </div>

          <div>
            <div className="font-mono text-3xl sm:text-4xl font-bold text-[#FF4800] tabular-nums">
              100%
            </div>
            <div className="text-xs font-mono text-[#71717A] mt-1">
              Automated VAT & double-entry tax reconciliation
            </div>
          </div>

          <div>
            <div className="font-mono text-3xl sm:text-4xl font-bold text-[#F4F4F5] tabular-nums">
              EN / AR
            </div>
            <div className="text-xs font-mono text-[#71717A] mt-1">
              Bilingual RTL/LTR accessibility for Omani enterprises
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectIllustration } from './ProjectIllustrations';

gsap.registerPlugin(ScrollTrigger);

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const horizontalWrapperRef = useRef<HTMLDivElement>(null);
  const floatingPreviewRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  const leadProject = PROJECTS[0]; // Crystal POS & MetFlora
  const otherProjects = PROJECTS.slice(1);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Horizontal Scroll with ScrollTrigger on desktop
    const ctx = gsap.context(() => {
      const track = horizontalTrackRef.current;
      const wrapper = horizontalWrapperRef.current;
      if (!track || !wrapper) return;

      // Only enable pin on screens > 1024px
      const mm = gsap.matchMedia();
      mm.add('(min-width: 1024px)', () => {
        const totalScroll = track.scrollWidth - wrapper.clientWidth;

        if (totalScroll > 0) {
          gsap.to(track, {
            x: -totalScroll,
            ease: 'none',
            scrollTrigger: {
              trigger: wrapper,
              pin: true,
              scrub: 1,
              start: 'top top',
              end: () => `+=${totalScroll * 1.2}`,
              invalidateOnRefresh: true
            }
          });
        }
      });
    }, sectionRef);

    // Floating preview mouse tracker with GSAP quickTo
    const preview = floatingPreviewRef.current;
    if (preview) {
      const setX = gsap.quickTo(preview, 'x', { duration: 0.35, ease: 'power3.out' });
      const setY = gsap.quickTo(preview, 'y', { duration: 0.35, ease: 'power3.out' });

      const onMouseMove = (e: MouseEvent) => {
        setX(e.clientX + 24);
        setY(e.clientY - 120);
      };

      window.addEventListener('mousemove', onMouseMove, { passive: true });
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        ctx.revert();
      };
    }

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="work" ref={sectionRef} className="relative bg-[#0B0B0C] border-b border-[#27272A]/70">
      {/* Floating Hover Preview Box (Desktop) */}
      <div
        ref={floatingPreviewRef}
        className={`pointer-events-none fixed top-0 left-0 z-40 hidden lg:block w-72 h-48 bg-[#141417] border border-[#3F3F46] shadow-2xl overflow-hidden transition-opacity duration-300 ${
          hoveredProject ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'transform' }}
      >
        {hoveredProject && (
          <div className="w-full h-full relative">
            <ProjectIllustration id={hoveredProject.id} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
              <span className="text-[11px] font-mono text-[#F4F4F5] uppercase">
                {hoveredProject.title}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-24 pb-12">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#27272A]/50 text-xs font-mono text-[#71717A]">
          <div className="flex items-center gap-3">
            <span className="text-[#FF4800]">02</span>
            <span>PRODUCTION DELIVERABLES</span>
          </div>
          <div>ENTERPRISE SYSTEMS ARCHITECTURE</div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F4F4F5] tracking-tight">
              Selected Work
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#A1A1AA] mt-3 max-w-xl">
              Systems designed, optimized, and deployed in production. Lead case study featuring
              the Crystal POS & MetFlora multi-tenant enterprise retail platform.
            </p>
          </div>
          <div className="text-xs font-mono text-[#71717A]">
            <span>TOTAL MODULES: 06</span>
            <span className="mx-2">·</span>
            <span>CLICK TO EXPAND SPEC</span>
          </div>
        </div>
      </div>

      {/* LEAD CASE STUDY: Crystal POS & MetFlora */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-20">
        <div
          onClick={() => onSelectProject(leadProject)}
          data-cursor-project="INSPECT"
          className="group cursor-pointer bg-[#121215] border border-[#27272A] hover:border-[#FF4800] transition-colors p-6 sm:p-10 lg:p-12 relative"
        >
          {/* Subtle Top Flag */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#27272A]/70 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#FF4800]">
              <span className="w-2 h-2 bg-[#FF4800]" />
              <span className="tracking-wider">LEAD CASE STUDY // FLAGSHIP DEPLOYMENT</span>
            </div>
            <div className="text-[#71717A]">
              <span>OMANI MARKET</span>
              <span className="mx-2">·</span>
              <span>2023 – PRESENT</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#A1A1AA] tracking-widest uppercase">
                  {leadProject.category}
                </span>
                <h3 className="font-serif text-3xl sm:text-5xl text-[#F4F4F5] mt-1 group-hover:text-[#FF4800] transition-colors leading-tight">
                  {leadProject.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#A1A1AA] mt-2">
                  {leadProject.subtitle}
                </p>
              </div>

              {/* Problem & Role facts */}
              <div className="space-y-4 pt-4 border-t border-[#27272A]/60 font-sans text-xs sm:text-sm text-[#D4D4D8]">
                <div>
                  <span className="font-mono text-[11px] text-[#FF4800] uppercase block mb-1">
                    Problem & Context
                  </span>
                  <p className="leading-relaxed text-[#A1A1AA]">
                    {leadProject.problem}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[11px] text-[#FF4800] uppercase block mb-1">
                    My Architectural Role
                  </span>
                  <p className="leading-relaxed text-[#A1A1AA]">
                    {leadProject.role}: Designed full-stack schemas, Paymob payment integrations,
                    automated ClosedXML / iTextSharp VAT registers, and optimized T-SQL stored procedures.
                  </p>
                </div>
              </div>

              {/* Stack items */}
              <div className="pt-2">
                <span className="font-mono text-[11px] text-[#71717A] uppercase block mb-2">
                  Engineered With
                </span>
                <div className="flex flex-wrap gap-2">
                  {leadProject.stack.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 bg-[#18181D] text-[#D4D4D8] border border-[#27272A] text-xs font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 flex items-center gap-3 text-xs font-mono text-[#F4F4F5] group-hover:text-[#FF4800] transition-colors">
                <span className="uppercase tracking-wider font-semibold">VIEW FULL SYSTEM SPECIFICATION</span>
                <span className="group-hover:translate-x-1.5 transition-transform">→</span>
              </div>
            </div>

            {/* Right Graphic Column: Vector Interactive Schematic */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] bg-[#0A0A0C] border border-[#27272A] overflow-hidden group-hover:border-[#3F3F46] transition-colors">
                <ProjectIllustration id="crystal-pos" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PINNED HORIZONTAL SCROLL CONTAINER FOR REMAINING 5 PROJECTS */}
      <div
        ref={horizontalWrapperRef}
        className="w-full overflow-hidden bg-[#0D0D10] py-16 border-t border-[#27272A]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8 flex justify-between items-end">
          <div>
            <div className="text-xs font-mono text-[#FF4800] uppercase tracking-wider mb-1">
              Multi-Module Systems
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#F4F4F5]">
              Real-Time, LIMS & Accounting Work
            </h3>
          </div>
          <div className="hidden lg:block text-xs font-mono text-[#71717A]">
            SCROLL DOWN TO TRAVERSE PROJECTS →
          </div>
        </div>

        {/* Horizontal Track */}
        <div
          ref={horizontalTrackRef}
          className="flex gap-6 sm:gap-8 px-6 sm:px-8 lg:w-max overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0"
        >
          {otherProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              data-cursor-project="VIEW"
              className="flex-shrink-0 w-[85vw] sm:w-[500px] lg:w-[540px] bg-[#121215] border border-[#27272A] hover:border-[#FF4800] transition-all p-6 sm:p-8 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#71717A] pb-4 border-b border-[#27272A]">
                  <span>0{index + 2} // {project.year}</span>
                  <span className="text-[#FF4800] uppercase">{project.category}</span>
                </div>

                <div className="mt-5">
                  <h4 className="font-serif text-2xl sm:text-3xl text-[#F4F4F5] group-hover:text-[#FF4800] transition-colors">
                    {project.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] mt-1 line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>

                {/* SVG Blueprint Preview inside Card */}
                <div className="mt-6 aspect-[16/9] w-full bg-[#09090B] border border-[#27272A]/70 overflow-hidden">
                  <ProjectIllustration id={project.id} className="w-full h-full object-contain" />
                </div>

                {/* Key Metric highlight from resume */}
                <div className="mt-6 p-3 bg-[#16161A] border-l-2 border-[#FF4800] text-xs font-mono text-[#D4D4D8]">
                  <span className="text-[#71717A] block text-[10px] uppercase mb-0.5">Key Metric</span>
                  {project.metrics[0]}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#27272A] flex items-center justify-between text-xs font-mono">
                <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                  {project.stack.slice(0, 3).map((s) => (
                    <span key={s} className="px-2 py-0.5 bg-[#1A1A1F] text-[#A1A1AA] text-[10px]">
                      {s}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="text-[#71717A] text-[10px] py-0.5">+{project.stack.length - 3}</span>
                  )}
                </div>

                <span className="text-[#F4F4F5] group-hover:text-[#FF4800] group-hover:translate-x-1 transition-all flex items-center gap-1">
                  SPEC →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

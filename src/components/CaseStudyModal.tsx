import React, { useEffect, useRef } from 'react';
import { Project } from '../types';
import { ProjectIllustration } from './ProjectIllustrations';
import gsap from 'gsap';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    // Handle Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    // Prevent body scroll while modal is active
    document.body.style.overflow = 'hidden';

    // Animate entrance
    gsap.fromTo(
      modalRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.out' }
    );
    gsap.fromTo(
      contentRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power4.out', delay: 0.1 }
    );

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
    >
      {/* Backdrop click dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-5xl my-auto bg-[#121215] border border-[#27272A] shadow-2xl p-6 sm:p-10 text-[#F4F4F5] max-h-[90vh] overflow-y-auto"
      >
        {/* Top bar with back / close action */}
        <div className="flex items-center justify-between pb-6 border-b border-[#27272A] mb-8">
          <div className="flex items-center gap-3 text-xs font-mono text-[#71717A]">
            <span className="text-[#FF4800]">{project.year}</span>
            <span aria-hidden="true">·</span>
            <span className="uppercase">{project.category}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="px-3 py-1.5 text-xs font-mono text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-[#27272A] border border-[#3F3F46] transition-colors flex items-center gap-2"
          >
            <span>ESC</span>
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        {/* Title and Subtitle */}
        <div className="mb-8">
          <h2 id="case-study-title" className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F4F4F5] leading-tight">
            {project.title}
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#A1A1AA] mt-2">
            {project.subtitle}
          </p>
        </div>

        {/* Large Architectural Illustration Viewer */}
        <div className="w-full aspect-[16/10] sm:aspect-[16/9] bg-[#0A0A0C] border border-[#27272A] rounded-none mb-10 overflow-hidden">
          <ProjectIllustration id={project.id} className="w-full h-full object-contain" />
        </div>

        {/* 12-Column Technical Brief */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-[#27272A]">
          {/* Metadata Sidebar (Col 1-4) */}
          <div className="lg:col-span-4 space-y-6 text-xs font-mono">
            <div>
              <div className="text-[#71717A] uppercase mb-1">Sector & Variants</div>
              <div className="text-[#F4F4F5] font-semibold">{project.clientSector}</div>
            </div>

            <div>
              <div className="text-[#71717A] uppercase mb-1">My Role</div>
              <div className="text-[#F4F4F5] font-semibold">{project.role}</div>
            </div>

            <div>
              <div className="text-[#71717A] uppercase mb-2">Technology Stack</div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-[#18181D] border border-[#27272A] text-[#D4D4D8] text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[#71717A] uppercase mb-2">Verified Outcomes</div>
              <ul className="space-y-2">
                {project.metrics.map((metric, i) => (
                  <li key={i} className="text-[#A1A1AA] flex items-start gap-2">
                    <span className="text-[#FF4800] mt-0.5">▪</span>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Detailed Narrative & Features (Col 5-12) */}
          <div className="lg:col-span-8 space-y-8 font-sans">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#FF4800] mb-2">
                The Technical Problem
              </h3>
              <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#FF4800] mb-2">
                Architectural Solution
              </h3>
              <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#FF4800] mb-3">
                Key Features Delivered
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#161619] border border-[#27272A]/70 text-xs font-mono text-[#E4E4E7]"
                  >
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-[#18181D] border-l-2 border-[#FF4800]">
              <div className="text-[10px] font-mono text-[#71717A] uppercase mb-1">
                Database & Pipeline Notes
              </div>
              <p className="text-xs font-mono text-[#A1A1AA] leading-relaxed">
                {project.architectureNotes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

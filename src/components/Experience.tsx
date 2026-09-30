import React from 'react';
import { EXPERIENCE, EDUCATION } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative bg-[#0B0B0C] border-b border-[#27272A]/70 py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#27272A]/50 text-xs font-mono text-[#71717A]">
          <div className="flex items-center gap-3">
            <span className="text-[#FF4800]">03</span>
            <span>PROFESSIONAL TIMELINE</span>
          </div>
          <div>VERIFIED TRACK RECORD</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          {/* Left Title Column */}
          <div className="lg:col-span-4">
            <h2 className="font-serif text-4xl sm:text-6xl text-[#F4F4F5] tracking-tight leading-none sticky top-28">
              Work &<br />
              <span className="italic text-[#A1A1AA]">Education</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#71717A] mt-6 max-w-sm font-light">
              Hands-on engineering across multi-tenant production systems, database optimization, and deployment pipelines.
            </p>
          </div>

          {/* Right Timeline Column */}
          <div className="lg:col-span-8 space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <div
                key={idx}
                className="bg-[#121215] border border-[#27272A] p-6 sm:p-10 relative group hover:border-[#3F3F46] transition-colors"
              >
                {/* Accent marker */}
                <div className="absolute top-0 left-0 w-1 h-full bg-[#FF4800]" />

                <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-[#27272A]">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F4F5]">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-mono text-[#A1A1AA] mt-1">
                      {exp.company}
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-mono text-[#FF4800] bg-[#1C1513] px-2.5 py-1 border border-[#FF4800]/30 inline-block">
                      {exp.period}
                    </span>
                    <div className="text-xs font-mono text-[#71717A] mt-1">
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Resume Achievements */}
                <div className="mt-8 space-y-4 font-sans text-xs sm:text-sm text-[#D4D4D8]">
                  {exp.highlights.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <span className="text-[#FF4800] font-mono text-xs mt-1 shrink-0">▪</span>
                      <p className="leading-relaxed text-[#A1A1AA] group-hover:text-[#D4D4D8] transition-colors">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Education Node */}
            <div className="p-6 sm:p-8 bg-[#0E0E11] border border-[#27272A] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block mb-1">
                  Academic Background
                </span>
                <h4 className="font-serif text-2xl text-[#F4F4F5]">
                  {EDUCATION[0].degree}
                </h4>
                <div className="text-xs font-mono text-[#A1A1AA] mt-1">
                  {EDUCATION[0].institution}
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs font-mono text-[#F4F4F5] bg-[#18181C] px-3 py-1.5 border border-[#27272A]">
                  Expected Completion: {EDUCATION[0].year}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

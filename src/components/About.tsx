import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#0B0B0C] border-b border-[#27272A]/70 py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#27272A]/50 text-xs font-mono text-[#71717A]">
          <div className="flex items-center gap-3">
            <span className="text-[#FF4800]">05</span>
            <span>PHILOSOPHY & LOCATION</span>
          </div>
          <div>AHMEDABAD</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          {/* Col 1-5: Personal Snapshot & Direct Stance */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-4xl sm:text-6xl text-[#F4F4F5] tracking-tight leading-none">
              Systems first.<br />
              <span className="italic text-[#A1A1AA]">Clean data second.</span>
            </h2>

            <div className="p-6 bg-[#121215] border border-[#27272A] space-y-4 text-xs font-mono">
              <div className="flex justify-between pb-3 border-b border-[#27272A] text-[#A1A1AA]">
                <span>LOCATION</span>
                <span className="text-[#F4F4F5]">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex justify-between pb-3 border-b border-[#27272A] text-[#A1A1AA]">
                <span>COMMERCIAL EXPERIENCE</span>
                <span className="text-[#F4F4F5]">3+ Years (Palansoft)</span>
              </div>
              <div className="flex justify-between pb-3 border-b border-[#27272A] text-[#A1A1AA]">
                <span>SPECIALIZATION</span>
                <span className="text-[#F4F4F5]">Multi-Tenant .NET & SQL</span>
              </div>
              <div className="flex justify-between text-[#A1A1AA]">
                <span>REGIONAL TAX/GST</span>
                <span className="text-[#FF4800]">India GST Compliance</span>
              </div>
            </div>
          </div>

          {/* Col 6-12: Human, Plain Narrative */}
          <div className="lg:col-span-7 space-y-6 font-sans text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
            <p className="text-lg sm:text-xl text-[#F4F4F5] font-light">
              I write software that companies use to run their core operations every single day.
            </p>

            <p className="text-[#A1A1AA]">
              When an Omani boutique or supermarket rings up a customer, the POS terminal has to scan the barcode,
              calculate the 5% VAT rate according to tax authority guidelines, print the thermal receipt, and record
              the transaction in the double-entry ledger without making the cashier wait. That is what I build.
            </p>

            <p className="text-[#A1A1AA]">
              My foundation is in the Microsoft stack: C#, ASP.NET Core MVC, and SQL Server. Most of my work involves
              designing relational schemas, optimizing stored procedures with CTEs, and implementing SignalR WebSocket
              connections for live occupancy dashboards and kitchen display systems.
            </p>

            <p className="text-[#A1A1AA]">
              I also build the frontends needed to operate these backends—whether that means a responsive Arabic/English
              bilingual interface with RTL layout switching, or automated ClosedXML workbooks and iTextSharp PDFs so finance
              teams do not spend their weekends manually reconciling spreadsheets.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 bg-[#141418] border border-[#27272A]">
                <span className="text-[#FF4800] block mb-1">01 / RELIABILITY OVER FLASH</span>
                <span className="text-[#A1A1AA]">
                  Production software must remain stable during high-volume hours. No unhandled edge cases or memory leaks.
                </span>
              </div>
              <div className="p-4 bg-[#141418] border border-[#27272A]">
                <span className="text-[#FF4800] block mb-1">02 / MEASURED PERFORMANCE</span>
                <span className="text-[#A1A1AA]">
                  Query speed matters. A 40% reduction in reporting latency means business decisions happen in real time.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

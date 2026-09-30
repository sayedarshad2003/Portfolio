/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Experience } from './components/Experience';
import { SkillsMarquee } from './components/SkillsMarquee';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Project } from './types';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F4F4F5] relative selection:bg-[#FF4800] selection:text-black">
      {/* Short Counter Preloader */}
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      {/* Bespoke Easing Cursor */}
      <CustomCursor />

      {/* Top 3-Zone Navigation with Kolkata Live Station Time */}
      <Navbar />

      {/* Main Content Flow */}
      <main id="main-content">
        <Hero readyToAnimate={preloaderDone} />
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />
        <Experience />
        <SkillsMarquee />
        <About />
      </main>

      {/* Contact Section & Footer */}
      <Contact />

      {/* Deep-Dive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

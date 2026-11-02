import React, { useEffect } from 'react';
import { portfolioData } from './data/portfolioData';

import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * App Root Component
 * Central coordinator for Magdaline Blessy's Portfolio.
 * Data-driven architecture with smooth scroll-reveal and micro-animations.
 */
function App() {
  const { sectionVisibility } = portfolioData;

  // IntersectionObserver for smooth scroll reveals across sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const revealElements = document.querySelectorAll(
      '.portfolio-section, .editorial-card, .skill-card, .project-card, .timeline-card, .cert-card'
    );

    revealElements.forEach((el) => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app-root position-relative">
      {/* 3D Animated Background System */}
      <Background3D />

      {/* Top Capsule Navigation */}
      <Navbar data={portfolioData} />

      {/* Main Sections */}
      <main className="position-relative" style={{ zIndex: 1 }}>
        {sectionVisibility.hero && <Hero data={portfolioData} />}
        {sectionVisibility.about && <About data={portfolioData} />}
        {sectionVisibility.skills && <Skills data={portfolioData} />}
        {sectionVisibility.projects && <Projects data={portfolioData} />}
        {sectionVisibility.education && <Education data={portfolioData} />}
        {sectionVisibility.experience && <Experience data={portfolioData} />}
        {sectionVisibility.certifications && <Achievements data={portfolioData} />}
        {sectionVisibility.contact && <Contact data={portfolioData} />}
      </main>

      {/* Editorial Footer */}
      <Footer data={portfolioData} />
    </div>
  );
}

export default App;

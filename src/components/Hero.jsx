import React from 'react';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';
import TiltCard from './TiltCard';
import heroPortraitFallback from '../assets/images/hero-portrait-sample.jpg';

/**
 * Hero Component
 * Recreates the exact high-fashion editorial composition from the reference image,
 * elevated with 3D parallax tilt physics and delicate depth framing.
 */
const Hero = ({ data }) => {
  const { personal } = data;

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId.replace('#', ''));
    if (target) {
      const offset = 80;
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth',
      });
    }
  };

  const imageSrc = personal.heroImage || heroPortraitFallback;

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="row hero-row align-items-center gx-lg-3">
          {/* Left Column: Architectural Arched Portrait with 3D Tilt */}
          <div className="col-lg-5 col-md-10 mx-auto mx-lg-0">
            <div className="hero-portrait-wrapper">
              <div className="hero-arch-composition">
                {/* Outer Architectural Contour Rings */}
                <div className="arch-outer-ring" aria-hidden="true"></div>
                <div className="arch-halo-backdrop" aria-hidden="true"></div>

                {/* Main Arched Frame with 3D Tilt */}
                <TiltCard
                  maxTilt={10}
                  perspective={1100}
                  scale={1.02}
                  style={{
                    borderRadius: '250px 250px 30px 30px',
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <div className="arch-portrait-frame">
                    <img
                      src={imageSrc}
                      alt={personal.name}
                      className="arch-portrait-img"
                      loading="eager"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = heroPortraitFallback;
                      }}
                    />
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Introduction */}
          <div className="col-lg-7 col-md-12">
            <div className="hero-intro-content">
              {/* Greeting Tag with Divider Line */}
              <div className="hero-greeting-group">
                <span className="hero-greeting-text">{personal.greeting}</span>
                <div className="hero-greeting-line" aria-hidden="true"></div>
              </div>

              {/* Main Script Name with Twinkle Sparkle */}
              <div className="hero-name-container">
                <h1 className="hero-script-name">{personal.name}</h1>
                <span className="hero-sparkle-icon" aria-hidden="true">✦</span>
              </div>

              {/* Motto / Tagline */}
              <div className="hero-motto">
                {personal.motto ? (
                  personal.motto.split(' • ').map((word, idx, arr) => (
                    <React.Fragment key={idx}>
                      <span>{word}</span>
                      {idx < arr.length - 1 && <span className="bullet">•</span>}
                    </React.Fragment>
                  ))
                ) : (
                  <>
                    <span>ANALYZE</span>
                    <span className="bullet">•</span>
                    <span>PREDICT</span>
                    <span className="bullet">•</span>
                    <span>IMPACT</span>
                  </>
                )}
              </div>

              {/* Bio & Professional Subtitle */}
              <p className="hero-bio-lead">{personal.bio}</p>

              {/* Action Buttons */}
              <div className="hero-cta-group">
                <a
                  href={personal.cta.primary.href}
                  className="btn-hero-primary"
                  onClick={(e) => scrollToSection(e, personal.cta.primary.href)}
                >
                  <span>{personal.cta.primary.text}</span>
                  <FaArrowRight size={13} />
                </a>

                <a
                  href={personal.cta.secondary.href}
                  className="btn-hero-secondary"
                  onClick={(e) => scrollToSection(e, personal.cta.secondary.href)}
                >
                  <span>{personal.cta.secondary.text}</span>
                  <FaEnvelope size={13} />
                </a>
              </div>

              {/* Status Pill */}
              {personal.status?.available && (
                <div className="hero-status-pill">
                  <span className="hero-status-indicator"></span>
                  <span>{personal.status.label}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Scroll Down Indicator (Bottom Right) */}
      <a
        href="#about"
        className="scroll-down-indicator"
        onClick={(e) => scrollToSection(e, '#about')}
        aria-label="Scroll to About Section"
      >
        <span className="scroll-down-text">Scroll Down</span>
        <div className="scroll-down-line"></div>
        <div className="scroll-down-icon">
          <div className="scroll-dot"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;

import React from 'react';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import { FaLightbulb, FaPuzzlePiece, FaBookOpen } from 'react-icons/fa';

/**
 * About Me Component
 * Editorial layout featuring background narrative, three 3D interactive capability cards,
 * key stats, and an aesthetic workspace image with 3D tilt.
 */
const About = ({ data }) => {
  const { about } = data;

  const renderFeatureIcon = (type) => {
    switch (type) {
      case 'creative':
        return <FaLightbulb />;
      case 'puzzle':
        return <FaPuzzlePiece />;
      case 'learner':
        return <FaBookOpen />;
      default:
        return <FaLightbulb />;
    }
  };

  return (
    <section id="about" className="portfolio-section alt-bg position-relative">
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center g-5">
          {/* Left Column: Heading, Narrative, and 3 Feature Cards */}
          <div className="col-lg-7">
            <SectionHeading
              label={about.label || 'ABOUT ME'}
              title={about.heading}
              subtitle={null}
              align="start"
            />

            <p className="fs-5 text-dark fw-medium mb-3" style={{ lineHeight: '1.7' }}>
              {about.lead}
            </p>

            <p className="text-secondary mb-4" style={{ lineHeight: '1.75' }}>
              {about.detailedBio}
            </p>

            {/* Three Feature Highlights (Creative Thinker, Problem Solver, Continuous Learner) with 3D Tilt */}
            <div className="about-features-grid">
              {about.features.map((feat) => (
                <TiltCard
                  key={feat.id}
                  maxTilt={10}
                  perspective={800}
                  scale={1.03}
                  style={{ borderRadius: '16px' }}
                >
                  <div className="about-feature-card h-100">
                    <div className="about-feature-icon">
                      {renderFeatureIcon(feat.iconType)}
                    </div>
                    <h3 className="about-feature-title">{feat.title}</h3>
                    <p className="about-feature-desc">{feat.description}</p>
                  </div>
                </TiltCard>
              ))}
            </div>

            {/* Quick Stats / Highlights */}
            {about.stats && (
              <div className="about-stats-grid">
                {about.stats.map((stat, idx) => (
                  <div key={idx} className="about-stat-item">
                    <div className="stat-label">{stat.label}</div>
                    <div className="stat-value">{stat.value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Supporting Professional Workspace Image with 3D Tilt */}
          <div className="col-lg-5">
            <TiltCard maxTilt={8} perspective={1000} scale={1.02} style={{ borderRadius: '22px' }}>
              <div className="about-image-wrapper">
                <div className="about-image-frame">
                  <img
                    src={about.supportingImage}
                    alt="Magdaline Blessy Workspace & Development Studio"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = '/images/about-workspace-sample.jpg';
                    }}
                  />
                </div>

                {/* Floating 3D Badge */}
                <div className="about-experience-badge">
                  <div className="badge-title">86%</div>
                  <div className="badge-subtitle">Data Analytics</div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

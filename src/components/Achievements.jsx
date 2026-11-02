import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import { FaCertificate, FaTrophy, FaAward } from 'react-icons/fa';

/**
 * Achievements & Certifications Component
 * Features filterable credential cards with hover lift animations.
 */
const Achievements = ({ data }) => {
  const { certifications, sectionVisibility } = data;
  const [activeFilter, setActiveFilter] = useState('all');

  if (!sectionVisibility.certifications || !certifications || !certifications.items || certifications.items.length === 0) {
    return null;
  }

  const items = certifications.items;
  const filteredItems =
    activeFilter === 'all'
      ? items
      : items.filter((item) => item.category.toLowerCase() === activeFilter.toLowerCase());

  const renderIcon = (category) => {
    switch (category?.toLowerCase()) {
      case 'achievement':
        return <FaTrophy />;
      case 'award':
        return <FaAward />;
      default:
        return <FaCertificate />;
    }
  };

  return (
    <section id="certifications" className="portfolio-section">
      <div className="container">
        <SectionHeading
          label={certifications.label || 'CREDENTIALS & MILESTONES'}
          title={certifications.heading}
          subtitle={certifications.subheading}
          notice={certifications.notice}
        />

        {/* Filter Pills */}
        <div className="skills-filter-wrapper">
          <button
            className={`filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Milestones
          </button>
          <button
            className={`filter-pill ${activeFilter === 'certification' ? 'active' : ''}`}
            onClick={() => setActiveFilter('certification')}
          >
            Certifications
          </button>
          <button
            className={`filter-pill ${activeFilter === 'achievement' ? 'active' : ''}`}
            onClick={() => setActiveFilter('achievement')}
          >
            Honors & Achievements
          </button>
        </div>

        {/* Cards Grid with 3D Tilt */}
        <div className="certs-grid">
          {filteredItems.map((item) => (
            <TiltCard
              key={item.id}
              maxTilt={8}
              perspective={900}
              scale={1.02}
              style={{ borderRadius: '16px', height: '100%' }}
            >
              <div className="cert-card h-100">
                <div className="cert-header">
                  <div className="cert-icon-box">{renderIcon(item.category)}</div>
                  <span className="cert-type-pill">{item.category}</span>
                </div>

                <h3 className="cert-title">{item.title}</h3>
                <div className="cert-issuer">
                  {item.issuer} • <span className="text-secondary">{item.date}</span>
                </div>

                <p className="cert-desc">{item.description}</p>

                {item.credentialUrl && item.credentialUrl !== '#' && (
                  <div className="mt-auto pt-2">
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-project-view"
                    >
                      <span>Verify Credential</span>
                      <span>→</span>
                    </a>
                  </div>
                )}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

import React from 'react';
import SectionHeading from './SectionHeading';
import { FaBriefcase } from 'react-icons/fa';

/**
 * Experience Component
 * Displays professional or academic contributions and internships.
 * Respects section visibility and handles graceful states.
 */
const Experience = ({ data }) => {
  const { experience, sectionVisibility } = data;

  if (!sectionVisibility.experience || !experience || !experience.items || experience.items.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="portfolio-section alt-bg">
      <div className="container">
        <SectionHeading
          label={experience.label || 'JOURNEY & EXPERIENCE'}
          title={experience.heading}
          subtitle={experience.subheading}
          notice={experience.notice}
        />

        <div className="timeline-container">
          <div className="timeline-track" aria-hidden="true"></div>

          {experience.items.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-node" aria-hidden="true"></div>

              <div className="timeline-card">
                <div className="timeline-meta">
                  <span className="timeline-period">{item.period}</span>
                  {item.employmentType && (
                    <span className="timeline-status">{item.employmentType}</span>
                  )}
                </div>

                <h3 className="timeline-degree">{item.role}</h3>

                <div className="timeline-institution">
                  <FaBriefcase />
                  <span>
                    {item.organization} • {item.location}
                  </span>
                </div>

                {item.description && <p className="timeline-desc">{item.description}</p>}

                {item.responsibilities && (
                  <ul className="experience-responsibilities">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                )}

                {item.technologies && (
                  <div className="mt-3">
                    <span className="d-block fs-7 fw-bold text-uppercase text-muted mb-2 tracking-wider">
                      Applied Tools:
                    </span>
                    <div className="timeline-courses">
                      {item.technologies.map((tech, idx) => (
                        <span key={idx} className="course-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

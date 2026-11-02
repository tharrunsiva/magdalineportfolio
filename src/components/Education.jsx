import React from 'react';
import SectionHeading from './SectionHeading';
import { FaGraduationCap } from 'react-icons/fa';

/**
 * Education Component
 * Vertical editorial timeline showcasing academic progression,
 * degrees, coursework, and milestones.
 */
const Education = ({ data }) => {
  const { education } = data;

  return (
    <section id="education" className="portfolio-section">
      <div className="container">
        <SectionHeading
          label={education.label || 'ACADEMIC BACKGROUND'}
          title={education.heading}
          subtitle={education.subheading}
          notice={education.notice}
        />

        <div className="timeline-container">
          <div className="timeline-track" aria-hidden="true"></div>

          {education.timeline.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-node" aria-hidden="true"></div>

              <div className="timeline-card">
                <div className="timeline-meta">
                  <span className="timeline-period">{item.period}</span>
                  {item.status && <span className="timeline-status">{item.status}</span>}
                </div>

                <h3 className="timeline-degree">{item.degree}</h3>

                <div className="timeline-institution">
                  <FaGraduationCap />
                  <span>
                    {item.specialization} • {item.institution}
                  </span>
                </div>

                <p className="timeline-desc">{item.description}</p>

                {item.keyCourses && (
                  <div>
                    <span className="d-block fs-7 fw-bold text-uppercase text-muted mb-2 tracking-wider">
                      Relevant Subjects & Disciplines:
                    </span>
                    <div className="timeline-courses">
                      {item.keyCourses.map((course, idx) => (
                        <span key={idx} className="course-pill">
                          {course}
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

export default Education;

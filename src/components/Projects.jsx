import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import ProjectModal from './ProjectModal';
import TiltCard from './TiltCard';
import { FaArrowRight, FaGithub } from 'react-icons/fa';

/**
 * Projects Component
 * Modern editorial project showcase cards with category filtering,
 * interactive 3D parallax tilt, and rich detail modal.
 */
const Projects = ({ data }) => {
  const { projects } = data;
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === 'all'
      ? projects.items
      : projects.items.filter((item) => item.category === activeCategory);

  return (
    <section id="projects" className="portfolio-section alt-bg">
      <div className="container">
        <SectionHeading
          label={projects.label || 'SELECTED WORK'}
          title={projects.heading}
          subtitle={projects.subheading}
          notice={projects.notice}
        />

        {/* Filter Pills */}
        <div className="projects-filter-wrapper">
          {projects.categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid with 3D Tilt & Elevation Animation */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              maxTilt={8}
              perspective={1000}
              scale={1.02}
              style={{ borderRadius: '20px', height: '100%' }}
            >
              <div className="project-card h-100">
                {/* Preview Image Container */}
                <div
                  className="project-image-box"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="project-thumbnail"
                    loading="lazy"
                  />
                  <div className="project-category-overlay">
                    {project.categoryLabel || project.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="project-card-body">
                  <h3
                    className="project-title"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </h3>

                  <p className="project-desc">{project.shortDescription}</p>

                  {/* Technology Badges */}
                  <div className="project-tech-tags">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="project-tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="project-tech-tag">+{project.technologies.length - 4}</span>
                    )}
                  </div>

                  {/* Card Footer Actions */}
                  <div className="project-card-footer">
                    <button
                      className="btn-project-view"
                      onClick={() => setSelectedProject(project)}
                    >
                      <span>View Project</span>
                      <FaArrowRight size={11} />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-project-github"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;

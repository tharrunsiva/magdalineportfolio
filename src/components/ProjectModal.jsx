import React, { useEffect } from 'react';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

/**
 * ProjectModal Component
 * Full-screen accessible modal providing extensive details on a selected project.
 */
const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="project-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close Project Details Modal"
        >
          <FaTimes />
        </button>

        {/* Modal Image */}
        <img
          src={project.previewImage}
          alt={project.title}
          className="project-modal-img"
        />

        {/* Modal Content */}
        <div className="project-modal-body">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <span className="tag-badge">{project.categoryLabel || project.category}</span>
            {project.placeholder && (
              <span className="placeholder-indicator">✦ Prototype Model</span>
            )}
          </div>

          <h3 id="modal-project-title" className="fs-3 fw-bold text-dark mb-2">
            {project.title}
          </h3>

          <p className="text-muted fw-semibold mb-3">{project.subtitle}</p>

          <p className="text-secondary mb-4" style={{ lineHeight: '1.75' }}>
            {project.fullDescription || project.shortDescription}
          </p>

          {/* Technologies Stack */}
          <div className="mb-4">
            <h4 className="fs-6 fw-bold text-dark text-uppercase tracking-wider mb-2">
              Key Technologies
            </h4>
            <div className="d-flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="project-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="d-flex align-items-center gap-3 pt-3 border-top">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-monochrome-primary"
              >
                <span>Live Preview</span>
                <FaExternalLinkAlt size={12} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-monochrome-secondary"
              >
                <FaGithub size={16} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

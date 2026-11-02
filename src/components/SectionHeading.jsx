import React from 'react';

/**
 * Reusable SectionHeading Component
 * Provides consistent typography, label badge, and lead text.
 */
const SectionHeading = ({
  label,
  title,
  subtitle,
  align = 'center',
  notice = null,
}) => {
  return (
    <div className={`section-header text-${align}`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className={`section-lead ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>}
      {notice && (
        <div className="mt-2">
          <span className="placeholder-indicator">
            <span style={{ fontSize: '0.85rem' }}>ℹ</span> {notice}
          </span>
        </div>
      )}
    </div>
  );
};

export default SectionHeading;

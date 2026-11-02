import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';

/**
 * Footer Component
 * Minimalist monochromatic footer with monogram, navigation links,
 * social links, back to top trigger, and copyright.
 */
const Footer = ({ data }) => {
  const { personal, socialLinks, footer, sectionVisibility } = data;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home', show: sectionVisibility.hero },
    { label: 'About', href: '#about', show: sectionVisibility.about },
    { label: 'Skills', href: '#skills', show: sectionVisibility.skills },
    { label: 'Projects', href: '#projects', show: sectionVisibility.projects },
    { label: 'Education', href: '#education', show: sectionVisibility.education },
    { label: 'Contact', href: '#contact', show: sectionVisibility.contact },
  ].filter((link) => link.show);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.getElementById(href.replace('#', ''));
    if (target) {
      const offset = 80;
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row align-items-center justify-content-between gy-4">
          {/* Brand & Monogram */}
          <div className="col-lg-5 col-md-12">
            <div className="footer-brand">
              <a
                href="#home"
                className="brand-monogram mb-2 d-inline-block"
                onClick={scrollToTop}
                aria-label="Back to top"
              >
                <span className="monogram-mark">
                  {footer.monogram || personal.monogram}
                  <span className="crown-icon">✦</span>
                </span>
              </a>
              <h4 className="fs-5 fw-bold text-dark mb-1">{personal.name}</h4>
              <p className="fs-7 text-secondary mb-3">{personal.title}</p>
              <p className="fs-7 text-muted max-w-sm mb-0" style={{ maxWidth: '420px' }}>
                {footer.quote}
              </p>
            </div>
          </div>

          {/* Quick Navigation & Social Links */}
          <div className="col-lg-6 col-md-12">
            <div className="d-flex flex-column align-items-lg-end">
              <ul className="footer-nav-list">
                {navLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="footer-nav-link"
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Icons */}
              <div className="d-flex align-items-center gap-2 mt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target={social.url.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noreferrer"
                    className="social-circle-btn"
                    aria-label={social.ariaLabel}
                    title={social.name}
                  >
                    {social.iconType === 'linkedin' && <FaLinkedinIn />}
                    {social.iconType === 'github' && <FaGithub />}
                    {social.iconType === 'email' && <FaEnvelope />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright mb-0">
            © {footer.copyrightYear} {personal.name}. All rights reserved. Designed with precision & elegance.
          </p>

          <button
            onClick={scrollToTop}
            className="btn-scroll-top"
            aria-label="Back to Top of Page"
          >
            <span>Back to top</span>
            <FaArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

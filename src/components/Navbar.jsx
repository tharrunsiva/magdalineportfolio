import React, { useState, useEffect } from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaBars, FaTimes, FaDownload } from 'react-icons/fa';

/**
 * Navbar Component
 * Features floating capsule pill menu, active section highlighting,
 * circular social icons, and mobile responsive drawer.
 */
const Navbar = ({ data }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { personal, socialLinks, sectionVisibility } = data;

  // Build nav items dynamically based on enabled sections
  const navItems = [
    { id: 'home', label: 'Home', show: sectionVisibility.hero },
    { id: 'about', label: 'About', show: sectionVisibility.about },
    { id: 'skills', label: 'Skills', show: sectionVisibility.skills },
    { id: 'projects', label: 'Projects', show: sectionVisibility.projects },
    { id: 'education', label: 'Education', show: sectionVisibility.education },
    { id: 'experience', label: 'Experience', show: sectionVisibility.experience },
    { id: 'certifications', label: 'Certifications', show: sectionVisibility.certifications },
    { id: 'contact', label: 'Contact', show: sectionVisibility.contact },
  ].filter((item) => item.show);

  // Handle scroll detection for background glass and active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const offset = 80;
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth',
      });
    }
  };

  const renderSocialIcon = (type) => {
    switch (type) {
      case 'linkedin':
        return <FaLinkedinIn />;
      case 'github':
        return <FaGithub />;
      case 'email':
        return <FaEnvelope />;
      default:
        return <FaEnvelope />;
    }
  };

  return (
    <header className={`navbar-custom ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          {/* Left: Monogram Logo */}
          <a
            href="#home"
            className="brand-monogram"
            onClick={(e) => handleNavClick(e, 'home')}
            aria-label="Magdaline Blessy Home"
          >
            <span className="monogram-mark">
              {personal.monogram || 'MB'}
              <span className="crown-icon">✦</span>
            </span>
          </a>

          {/* Center: Desktop Capsule Navigation */}
          <nav className="nav-pill-wrapper" aria-label="Main Navigation">
            <ul className="nav-pill-container">
              {navItems.map((item) => (
                <li key={item.id} className="nav-pill-item">
                  <a
                    href={`#${item.id}`}
                    className={`nav-pill-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: Circular Social Action Icons & Resume */}
          <div className="nav-social-actions">
            <a
              href={personal.resumeUrl || '/resume.pdf'}
              download={personal.resumeFilename || 'Magdaline_Blessy_Resume.pdf'}
              className="nav-resume-pill"
              title="Download Resume (PDF)"
            >
              <FaDownload size={11} />
              <span>Resume</span>
            </a>

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
                {renderSocialIcon(social.iconType)}
              </a>
            ))}
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                <span>{item.label}</span>
                <span>→</span>
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href={personal.resumeUrl || '/resume.pdf'}
              download={personal.resumeFilename || 'Magdaline_Blessy_Resume.pdf'}
              className="mobile-nav-link text-dark fw-bold"
            >
              <span>Download Resume (PDF)</span>
              <span>↓</span>
            </a>
          </li>
        </ul>

        <div className="mobile-socials">
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
              {renderSocialIcon(social.iconType)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

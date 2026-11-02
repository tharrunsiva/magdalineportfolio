import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
  FaInfoCircle,
} from 'react-icons/fa';

/**
 * Contact Component
 * Direct communication channels, social connections, and an interactive
 * client-validated contact form with clear frontend state messaging.
 */
const Contact = ({ data }) => {
  const { contact, socialLinks } = data;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format.';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message should be at least 15 characters long.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      // Send real email delivery via FormSubmit to Magdaline Blessy's verified address
      const response = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}: ${formData.subject}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await response.json();
      if (response.ok || result.success === 'true' || result.success === true) {
        setSubmitted(true);
        setSubmissionStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error(result.message || 'Transmission failed');
      }
    } catch (err) {
      console.warn('Direct API delivery exception, initiating mailto client fallback:', err);
      // Smart Fallback: opens visitor's default email composer pre-populated with their typed content
      const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
      setSubmissionStatus('fallback');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="portfolio-section alt-bg">
      <div className="container">
        <SectionHeading
          label={contact.label || 'GET IN TOUCH'}
          title={contact.heading}
          subtitle={contact.subheading}
        />

        <div className="row g-5">
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="col-lg-5">
            <div className="contact-info-card">
              <h3 className="fs-4 fw-bold text-dark mb-4">Direct Communication</h3>

              {/* Email */}
              <div className="contact-channel-item">
                <div className="contact-channel-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="contact-channel-label">Email Address</div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="contact-channel-value text-decoration-none text-dark"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              {contact.phone && (
                <div className="contact-channel-item">
                  <div className="contact-channel-icon">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <div className="contact-channel-label">Phone Number</div>
                    <a
                      href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                      className="contact-channel-value text-decoration-none text-dark"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
              )}

              {/* Location */}
              {contact.location && (
                <div className="contact-channel-item">
                  <div className="contact-channel-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <div className="contact-channel-label">Location</div>
                    <div className="contact-channel-value">{contact.location}</div>
                  </div>
                </div>
              )}

              {/* Social Profiles */}
              <div className="mt-4 pt-4 border-top">
                <span className="d-block fs-7 fw-bold text-uppercase text-muted mb-3 tracking-wider">
                  Professional Networks
                </span>
                <div className="d-flex align-items-center gap-2">
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

              {/* Availability Note */}
              <div className="mt-4 pt-3">
                <div className="p-3 bg-light rounded-3 border border-light-subtle">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="hero-status-indicator"></span>
                    <span className="fs-7 fw-bold text-dark">Currently Open</span>
                  </div>
                  <p className="fs-7 text-secondary mb-0">
                    Actively seeking undergraduate summer internships, student developer roles, and open-source collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form-card">
              <h3 className="fs-4 fw-bold text-dark mb-4">Send a Message</h3>

              {submitted && (
                <div className="form-feedback-alert success" role="alert">
                  <FaCheckCircle size={20} />
                  <div>
                    <strong>
                      {submissionStatus === 'success'
                        ? 'Message Dispatched Successfully!'
                        : 'Email Composer Opened!'}
                    </strong>
                    <div className="fs-7 mt-1">
                      {submissionStatus === 'success' ? (
                        <>
                          Your inquiry has been sent directly to Magdaline Blessy's verified inbox (
                          <span className="text-dark fw-bold">{contact.email}</span>). She will
                          reply to you shortly.
                        </>
                      ) : (
                        <>
                          Your email client has been prepared with your message ready to send
                          directly to{' '}
                          <a href={`mailto:${contact.email}`} className="text-dark fw-bold">
                            {contact.email}
                          </a>
                          .
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  {/* Name */}
                  <div className="col-md-6 form-group-custom">
                    <label htmlFor="contact-name" className="form-label-custom">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={contact.form?.namePlaceholder || 'Your Name'}
                      className={`form-input-custom ${errors.name ? 'border-danger' : ''}`}
                    />
                    {errors.name && (
                      <span className="text-danger fs-7 mt-1 d-block">{errors.name}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="col-md-6 form-group-custom">
                    <label htmlFor="contact-email" className="form-label-custom">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={contact.form?.emailPlaceholder || 'your@email.com'}
                      className={`form-input-custom ${errors.email ? 'border-danger' : ''}`}
                    />
                    {errors.email && (
                      <span className="text-danger fs-7 mt-1 d-block">{errors.email}</span>
                    )}
                  </div>

                  {/* Subject */}
                  <div className="col-12 form-group-custom">
                    <label htmlFor="contact-subject" className="form-label-custom">
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={contact.form?.subjectPlaceholder || 'Opportunity / Discussion'}
                      className={`form-input-custom ${errors.subject ? 'border-danger' : ''}`}
                    />
                    {errors.subject && (
                      <span className="text-danger fs-7 mt-1 d-block">{errors.subject}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="col-12 form-group-custom">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <label htmlFor="contact-message" className="form-label-custom mb-0">
                        Message *
                      </label>
                      <span className="fs-8 text-muted">
                        {formData.message.length} characters
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={contact.form?.messagePlaceholder || 'Write your message...'}
                      className={`form-textarea-custom ${errors.message ? 'border-danger' : ''}`}
                    ></textarea>
                    {errors.message && (
                      <span className="text-danger fs-7 mt-1 d-block">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 mt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-monochrome-primary w-100 py-3"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Message...</span>
                      ) : (
                        <>
                          <span>{contact.form?.submitButtonText || 'Send Message'}</span>
                          <FaPaperPlane size={14} />
                        </>
                      )}
                    </button>

                    <div className="d-flex align-items-center gap-1 mt-2 text-muted fs-8 justify-content-center">
                      <FaInfoCircle size={12} />
                      <span>Direct email delivery enabled to {contact.email}</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

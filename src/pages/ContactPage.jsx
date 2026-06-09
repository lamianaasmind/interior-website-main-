import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImg from '../assets/Website Image/img1296.jpg';
import aboutSecondary from '../assets/Website Image/img1265.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const handleSubmit = (e) => { e.preventDefault(); alert('Thank you! We will contact you soon.'); };

  return (
    <>
      {/* Banner / Hero Section */}
      <section className="subpage-header-banner" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay"></div>
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="hero-content"
        >
          <span className="sub-title" style={{ color: 'var(--primary-color)' }}>Get In Touch</span>
          <h1 style={{ fontSize: '50px', color: '#ffffff' }}>Contact Us</h1>
        </motion.div>

        {/* Overlapping Breadcrumb */}
        <div className="portfolio-breadcrumb-box">
          <Link to="/" className="breadcrumb-home">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: '-1.5px' }}>
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Home
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Contact</span>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="contact-cards-section">
        <div className="container">
          <div className="contact-cards-grid">
            
            {/* Card 1: Phone */}
            <div className="contact-card">
              <div className="card-badge">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="card-content">
                <p>+880 1779-800700</p>
                <p>+880 0133-5123688</p>
              </div>
            </div>

            {/* Card 2: Email */}
            <div className="contact-card">
              <div className="card-badge">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="card-content">
                <p>office@lemonade.com</p>
                <p>info@lemonade.com</p>
              </div>
            </div>

            {/* Card 3: Address */}
            <div className="contact-card">
              <div className="card-badge">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="card-content">
                <p>House No#153, Road#4 (2nd Floor),</p>
                <p>Mohakhali DOHS, Dhaka-1206, Bangladesh</p>
              </div>
            </div>

            {/* Card 4: Working Hours */}
            <div className="contact-card">
              <div className="card-badge">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="card-content">
                <p>Sat - Thu: 9.00 - 6.00</p>
                <p>Friday: Closed</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section" style={{ padding: '0 0 100px 0', background: '#ffffff' }}>
        <div className="container">
          <div className="contact-form-grid">
            
            {/* Left Column: Chat Banner */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}
              className="chat-banner" style={{ backgroundImage: `url(${aboutSecondary})` }}
            >
              <div className="chat-overlay"></div>
              <div className="chat-content">
                <h2>Chat With A Live</h2>
                <p>Let's chat with our live experts to get answer your questions.</p>
                <a href="#" className="live-chat-btn" onClick={(e) => { e.preventDefault(); window.openLiveChat && window.openLiveChat(); }} aria-label="Open live chat">
                  <span className="btn-line-t"></span>
                  <span className="btn-line-b"></span>
                  <span className="btn-line-l"></span>
                  <span className="btn-line-r"></span>
                  Live Chat
                </a>
              </div>
            </motion.div>

            {/* Right Column: Message Form */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}
              className="message-form-container"
            >
              <h2>Send Your Message To Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row-2">
                  <input type="text" placeholder="First Name..." required />
                  <input type="text" placeholder="Last Name..." required />
                </div>
                <div className="form-row-2">
                  <input type="email" placeholder="Email Address..." required />
                  <input type="tel" placeholder="Phone Number..." />
                </div>
                <div className="form-textarea-row">
                  <textarea placeholder="Enter Message Here..." rows="6" required></textarea>
                </div>
                
                <div className="form-checkbox-row">
                  <label className="checkbox-container">
                    <input type="checkbox" />
                    Save my name, email in this browser for the next time Send message
                  </label>
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="post-comment-btn">
                    <span className="btn-line-t"></span>
                    <span className="btn-line-b"></span>
                    <span className="btn-line-l"></span>
                    <span className="btn-line-r"></span>
                    Post Comment
                  </button>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
      {/* Contact Map Section */}
      <section className="contact-map-section" style={{ width: '100%', height: '480px', display: 'block', overflow: 'hidden', borderTop: '1px solid rgba(0, 0, 0, 0.05)' }}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <iframe 
            src="https://www.google.com/maps?q=House%20No%23153%2C%20Road%234%20(2nd%20Floor)%2C%20Mohakhali%20DOHS%2C%20Dhaka%201206%2C%20Bangladesh&z=16&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Lemonade Office Location Map"
          ></iframe>

          {/* Visual label overlay so address appears on the map area */}
          <div style={{ position: 'absolute', left: 7, top: 51, background: 'rgba(255,255,255,0.95)', padding: '10px 12px', borderRadius: 6, boxShadow: '0 6px 18px rgba(0,0,0,0.12)', maxWidth: '320px' }}>
            <strong style={{ display: 'block', marginBottom: 4 }}>Lemonade Office</strong>
            <span style={{ fontSize: 13, color: '#333', lineHeight: '1.3' }}>
              House No#153, Road#4 (2nd Floor),<br />
              Mohakhali DOHS, Dhaka-1206, Bangladesh
            </span>
            <div style={{ marginTop: 8 }}>
              <a href="https://www.google.com/maps?q=House%20No%23153%2C%20Road%234%20(2nd%20Floor)%2C%20Mohakhali%20DOHS%2C%20Dhaka%201206%2C%20Bangladesh" target="_blank" rel="noreferrer" style={{ color: '#1a73e8', fontSize: 13 }}>Open in Maps</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from 'react-router-dom';
import logo from '../assets/Website Image/logo-footer.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Newsletter Upper Section */}
      <div className="footer-newsletter">
        <div className="container-full">
          <div className="newsletter-grid">
            <div className="newsletter-left">
              <h2>Sign Up To Get Latest Update</h2>
              <p>Sign up for our monthly newsletter for the latest news & articles</p>
            </div>
            <div className="newsletter-right">
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group-wrapper">
                  <label htmlFor="newsletter-email">Email address</label>
                  <div className="form-input-row">
                    <input 
                      type="email" 
                      id="newsletter-email" 
                      placeholder="Email address" 
                      required 
                    />
                    <button type="submit">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Info Grid */}
      <div className="footer-main">
        <div className="container-full">
          <div className="footer-main-grid">
            {/* Logo & Description */}
            <div className="footer-col about-col">
              <img alt="Lemonade" src={logo} className="footer-logo" />
              <p className="footer-desc">
                We are an interior design and architecture consultancy specializing in luxury spaces for restaurants, hotels, offices, and homes across Bangladesh. We also offer custom furniture and comprehensive design services.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-col links-col">
              <h3 className="footer-widget-title">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/about">+ About</Link></li>
                <li><Link to="/services">+ Services</Link></li>
                <li><Link to="/portfolio">+ Portfolio</Link></li>
                <li><Link to="/contact">+ Contact</Link></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="footer-col contact-col">
              {/* Phone Number */}
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-text">
                  <h4>Phone Number</h4>
                  <p>+88 01765 936330</p>
                  <p>+88 01912 527273</p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-text">
                  <h4>Email Address</h4>
                  <p><a href="mailto:csd@lemonade-bd.com">csd@lemonade-bd.com</a></p>
                </div>
              </div>
    {/* Website */}
              <div className="contact-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                </div>
                <div className="contact-text">
                  <h4>Website</h4>
                  <p><a
  href="https://www.lemonade-bd.com"
  target="_blank"
  rel="noopener noreferrer"
>
  www.lemonade-bd.com
</a></p>
                </div>
              </div>
              {/* Office Hours */}
<div className="contact-item">
  <div className="contact-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  </div>

  <div className="contact-text">
    <h4>Office Hours</h4>
    <p>Sun – Thu: 10:00 AM – 6:00 PM</p>
    <p>Fri & Sat: Closed</p>
  </div>
</div>
              {/* Location */}
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>House No#153,Road#4 (2nd  Floor),
 Mohakhali DOHS, Dhaka-1206,Bangladesh.
</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container-full">
          <div className="footer-bottom-inner">
            <p className="copyright-text">
              Copyright © {new Date().getFullYear()} Lemonade Theme. All rights reserved.
            </p>
            <div className="footer-social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <button type="button" className="social-box" onClick={(e) => { e.preventDefault(); window.openLiveChat && window.openLiveChat(); }} aria-label="Open live chat">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

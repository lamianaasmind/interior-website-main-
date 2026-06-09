import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImg from '../assets/Website Image/img1268.jpg';
import svc1 from '../assets/Website Image/img1689.jpg';
import svc2 from '../assets/Website Image/img1268.jpg';
import svc3 from '../assets/Website Image/img1271.jpg';
import svc4 from '../assets/Website Image/img2174.jpg';
import svc5 from '../assets/Website Image/img1378.jpg';
import lemonadeImg from '../assets/Website Image/img1262.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

/* Animated counter hook */
function useCountUp(target, duration = 2000, startOnView = false) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(!startOnView);
  const ref = useRef(null);

  useEffect(() => {
    if (!startOnView) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

function StatItem({ number, label }) {
  const { count, ref } = useCountUp(number, 2000, true);
  return (
    <div className="svc-stat-item" ref={ref}>
      <div className="svc-stat-number">{count}+</div>
      <div className="svc-stat-label">{label}</div>
    </div>
  );
}

export default function ServicesPage() {
  const imgFrameRef = useRef(null);

  /* In-view detection for corner animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      },
      { threshold: 0.3 }
    );
    if (imgFrameRef.current) observer.observe(imgFrameRef.current);
    return () => observer.disconnect();
  }, []);

  const servicesProvidingList = [
    { 
      title: 'Residential Interior Design', 
      desc: 'Transform your home into a sanctuary of comfort and style with bespoke interiors tailored to your lifestyle.', 
      link: '/service/interior-design',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    { 
      title: 'Commercial Interior Design', 
      desc: 'Design dynamic workspaces that inspire productivity, reflect your brand, and engage customers.', 
      link: '/service/interior-design',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    },
    { 
      title: 'Hospitality Interior Design', 
      desc: 'Reimagine hotels and guest spaces with warm, inviting designs that delight every visitor.', 
      link: '/service/interior-design',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M2 12c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6z" />
          <path d="M6 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
        </svg>
      )
    },
    { 
      title: 'Architecture', 
      desc: 'Delivering precise 2D and 3D architectural plans to shape spaces with innovation and functionality.', 
      link: '/service/architecture',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        </svg>
      )
    },
    { 
      title: 'Custom Furniture', 
      desc: 'Craft unique furniture pieces that perfectly complement your interior vision and brand identity.', 
      link: '/service/custom-furniture',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M2 4v16M22 4v16M2 8h20M2 17h20" />
          <rect x="4" y="8" width="16" height="6" rx="1" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Services Header Banner */}
      <section className="subpage-header-banner" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay"></div>
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="hero-content"
        >
          <span className="sub-title" style={{ color: 'var(--primary-color)' }}>WHAT WE DO</span>
          <h1 style={{ fontSize: '50px', color: '#ffffff', fontWeight: 600 }}>Services</h1>
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
          <span className="breadcrumb-current">Services</span>
        </div>
      </section>

      {/* lemonade-Style "Why Choose" Section */}
      <section className="lemonade-section">
  <div className="container">
    <div className="lemonade-grid">
      <div className="lemonade-text">
        
        {/* নতুন যোগ করা টেক্সট কন্টেইনার */}
        <div className="lemonade-text-container">
          <div className="header-wrapper">
            <span className="subtitle">WELCOME TO LEMONADE</span>
            <h2 className="title">Defining Excellence in <br /> Interior Architecture</h2>
          </div>

          <p className="description">
            We believe that a space is more than just four walls—it is a reflection of your personality and a canvas for your lifestyle. At Lemonade, we bridge the gap between imagination and reality through rigorous design, precision, and an unwavering commitment to quality.
          </p>

          <div className="expert-card">
            <div className="card-indicator"></div>
            <div className="card-content">
              <h4 className="card-title">The Lemonade Standard</h4>
              <p className="card-desc">
                Our multidisciplinary team of <strong>expert designers and architects</strong> brings extensive industry mastery to every project. We handle everything from concept to completion, ensuring your journey with us is seamless, transparent, and results-driven.
              </p>
            </div>
          </div>

          <div className="feature-grid">
            <div className="feature-item">
              <h5>Bespoke Design</h5>
              <p>Customized solutions tailored to your unique functional requirements.</p>
            </div>
            <div className="feature-item">
              <h5>Strategic Planning</h5>
              <p>Optimizing space for maximum utility and aesthetic harmony.</p>
            </div>
          </div>
        </div>

        {/* Stats Counter */}
        <div className="svc-stats-divider"></div>
        <div className="svc-stats-row">
          <StatItem number={115} label="Design" />
          <StatItem number={112} label="Happy Clients" />
          <StatItem number={90} label="Completed Projects" />
        </div>
      </div>

      <div className="lemonade-image-box">
        <div className="img-frame" ref={imgFrameRef}>
          <img src={lemonadeImg} alt="Lemonade Interior" />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Services Providing Section (Full Width, No container) */}
      <section className="services-providing">
        <div className="container-full">
          <div className="services-providing-grid">
            {/* Cell 1: Intro Block */}
            <div className="services-intro-card">
              <span className="sub-title">BEST SERVICES</span>
              <h2>Services We’re Providing</h2>
              <p className="desc">Crafting premium interiors that blend creativity with nature. Inspired by wood, texture, and organic patterns, we bring the essence of nature into every home.</p>
            </div>

            {/* Cell 2-X: Service Cards */}
            {servicesProvidingList.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="border-lines">
                  <span className="line-t"></span>
                  <span className="line-b"></span>
                  <span className="line-l"></span>
                  <span className="line-r"></span>
                </div>
                <div className="service-card-inner">
                  <div className="card-icon-wrap">
                    {s.icon}
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="read-more-wrap">
                    <Link to={s.link} className="read-more-btn">Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* End-to-End Interior Experience Section */}
      <section className="lemonade-process-section">
        <div className="container-full">
          <div className="sec-title center">
            <span className="sub-title">OUR WORKING PROCESS BREAKDOWN</span>
            <h2>End-to-End Interior Experience with Lemonade</h2>
          </div>

          <div className="process-zigzag-grid">
            {/* Step 1 */}
            <div className="process-zigzag-item step-down">
              <div className="step-start-indicator">
                <span className="indicator-text">Starting Here</span>
                <span className="indicator-arrow">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </span>
              </div>
              <div className="process-zigzag-icon-box">
                <div className="outer-border">
                  <div className="inner-border">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M3 10h18M3 14h18M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M2 14v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4" />
                      <circle cx="12" cy="7" r="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="process-zigzag-content">
                <h3>Initial Survey</h3>
                <p>We visit your site to assess current conditions, take measurements...</p>
              </div>
            </div>

            {/* Connection 1 */}
            <div className="process-connection">
              <svg viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
                <path d="M 0,70 L 50,70 L 50,30 L 100,30" stroke="#b48b76" strokeWidth="1.2" strokeDasharray="4,4" />
                <path d="M 94,26 L 100,30 L 94,34" stroke="#b48b76" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="process-zigzag-item step-up">
              <div className="process-zigzag-icon-box">
                <div className="outer-border">
                  <div className="inner-border">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="process-zigzag-content">
                <h3>Layout Planning</h3>
                <p>We create an optimized layout that balances functionality, flow, and...</p>
              </div>
            </div>

            {/* Connection 2 */}
            <div className="process-connection">
              <svg viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
                <path d="M 0,30 L 50,30 L 50,70 L 100,70" stroke="#b48b76" strokeWidth="1.2" strokeDasharray="4,4" />
                <path d="M 94,66 L 100,70 L 94,74" stroke="#b48b76" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="process-zigzag-item step-down">
              <div className="process-zigzag-icon-box">
                <div className="outer-border">
                  <div className="inner-border">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M19 19v-4h-4v-4h-4V7H7V3" />
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="process-zigzag-content">
                <h3>Conceptual Presentation</h3>
                <p>We present the design concept along with the 2D floor plan for...</p>
              </div>
            </div>

            {/* Connection 3 */}
            <div className="process-connection">
              <svg viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
                <path d="M 0,70 L 50,70 L 50,30 L 100,30" stroke="#b48b76" strokeWidth="1.2" strokeDasharray="4,4" />
                <path d="M 94,26 L 100,30 L 94,34" stroke="#b48b76" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 4 */}
            <div className="process-zigzag-item step-up">
              <div className="process-zigzag-icon-box">
                <div className="outer-border">
                  <div className="inner-border">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M4 19h16M4 15h16M8 11h8M12 3v8" />
                      <circle cx="12" cy="3" r="1" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="process-zigzag-content">
                <h3>3D Design Development & BOQ</h3>
                <p>We hand over the completed site in polished condition and stay...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stages Renovation Process Section */}
      <section className="renovation-stages-section">
        <div className="container-full">
          <div className="stages-grid">
            {/* Left Column */}
            <div className="stages-left">
              <div className="sec-title">
                <span className="sub-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '25px', height: '1px', backgroundColor: 'var(--primary-color)' }}></span>
                  OUR SERVICES
                </span>
                <h2>Stages Renovation Proceess</h2>
              </div>

              <div className="stages-list">
                {/* Item 1 */}
                <div className="stage-list-item">
                  <div className="stage-num num-brown">1</div>
                  <div className="stage-info">
                    <h3>Innovative Wall Decoration & Designs</h3>
                    <p>Add texture and visual warmth with personalized wall designs at competitive prices.</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="stage-list-item">
                  <div className="stage-num num-blue">2</div>
                  <div className="stage-info">
                    <h3>Modern Living Quarter Decoration & Designs</h3>
                    <p>Upgrade your interiors with smart solutions for homes, restaurants, offices, and more.</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="stage-list-item">
                  <div className="stage-num num-blue">3</div>
                  <div className="stage-info">
                    <h3>Home Interior & Art Design</h3>
                    <p>Enhance your home with detailed art installations and decor elements that reflect your style.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="stages-right">
              {/* Stepper Timeline */}
              <div className="stages-timeline">
                <div className="timeline-line"></div>
                <div className="timeline-steps">
                  <div className="timeline-step active">
                    <span className="step-dot"></span>
                    <span className="step-text">Material Sourcing</span>
                  </div>
                  <div className="timeline-step">
                    <span className="step-dot"></span>
                    <span className="step-text">Site Execution & Fit-Out</span>
                  </div>
                  <div className="timeline-step">
                    <span className="step-dot"></span>
                    <span className="step-text">Furniture Installation</span>
                  </div>
                  <div className="timeline-step">
                    <span className="step-dot"></span>
                    <span className="step-text">QC Check & Handover</span>
                  </div>
                </div>
              </div>

              {/* Large Image Frame */}
              <div className="stages-image-wrap">
                <img src={heroImg} alt="Renovation Stage Preview" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

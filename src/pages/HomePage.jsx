import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Hero slides
import heroImg1 from '../assets/Website Image/img94.jpg';
import heroImg2 from '../assets/Website Image/img100.jpg';
import heroImg3 from '../assets/Website Image/img1378.jpg';

// About images
import aboutMain from '../assets/Website Image/img1262.jpg';

// Service images
import svcArch from '../assets/Website Image/img1689.jpg';
import svcInterior from '../assets/Website Image/img1268.jpg';
import svcFurniture from '../assets/Website Image/img1271.jpg';

// Portfolio projects source of truth
import { projects } from '../data/projects';


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [heroImg1, heroImg2, heroImg3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-slider">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="hero-slide active"
            style={{ position: 'absolute', width: '100%', height: '100%' }}
          >
            <img src={heroSlides[currentSlide]} alt="Interior Design" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="hero-overlay"></div>
          </motion.div>
        </AnimatePresence>
        
        <div className="hero-nav-arrows">
          <button className="hero-arrow prev" onClick={prevSlide}>
            <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button className="hero-arrow next" onClick={nextSlide}>
            <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        <div className="hero-content">
          <div className="container" style={{ padding: '0 80px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={staggerContainer}
                className="hero-text-wrapper"
              >
                <motion.span variants={fadeUp} className="sub-title">WELCOME TO LEMONADE</motion.span>
                <motion.h1 variants={fadeUp}>
                  Your Trusted <span>Design & Build</span> Partner
                </motion.h1>
                <motion.p variants={fadeUp}>
                  We specialize in crafting thoughtful spaces through an integrated design and build process. From creative concept to flawless execution, we deliver end-to-end interior and architectural solutions on time, on budget, and beyond expectations.
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
      {/* lemonade About Section (new) */}
      <section className="lemonade-section">
        <div className="container">
          <div className="lemonade-grid">
          <div className="lemonade-text">
  {/* <span className="sub-title">WELCOME TO LEMONADE</span>
  
  <h2 className="main-title">
    Defining Excellence in <br /> Interior Architecture
  </h2>
  
  <p className="lead-text">
    At Lemonade, we transform spaces into timeless experiences. Our approach fuses sophisticated design intelligence with master craftsmanship, delivering environments where uncompromising functionality meets elegant, modern aesthetics.
  </p>

  <div className="team-highlight">
    <h4 className="highlight-heading">Why Our Team Stands Out:</h4>
    <p className="highlight-desc">
      Our multidisciplinary team of <strong>expert designers and architects</strong> brings extensive industry mastery to every project, ensuring every detail is executed with precision and professional finesse.
    </p>
  </div> */}

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

  {/* নতুন যোগ করা ফিচারস */}
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

  {/* <div className="cta-wrapper">
    <Link to="/contact" className="btn-book">BOOK A CONSULTATION</Link>
  </div> */}
</div>

  <div className="lemonade-cta">
    <Link to="/contact" className="tm-btn tm-btn-primary">Book A Consultation</Link>
  </div>
</div>

            <div className="lemonade-image-box">
              <div className="img-frame">
                <img src={aboutMain} alt="Lemonade" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Providing - new section */}
      <section className="services-providing">
        <div className="container-full">
          <div className="services-providing-grid">
            {/* Cell 1: Intro Block */}
            <div className="services-intro-card">
              <span className="sub-title">BEST SERVICES</span>
              <h2>Services We’re Providing</h2>
              <p className="desc">Crafting premium interiors that blend creativity with nature. Inspired by wood, texture, and organic patterns, we bring the essence of nature into every home.</p>
            </div>

            {/* Cell 2-6: Service Cards */}
            {[
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
            ].map((s, i) => (
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

      {/* About Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="about-img-box"
            >
              <img src={aboutMain} alt="About" className="img-1" />
              <div className="exp-box">
                <div className="exp-icon" aria-hidden>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3 6 6 .5-4.5 3 1.5 6L12 15l-6 3 1.5-6L3 8.5 9 8 12 2z" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.9" fill="none" />
                  </svg>
                </div>
                <span className="num">13</span>
                <span className="text">Years<br/>Of<br/>Experiences</span>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="about-content-box">
                <div className="sec-title">
                  <motion.span variants={fadeUp} className="sub-title">About Our Company</motion.span>
                  <motion.h2 variants={fadeUp}>The Best Solutions By Professional Designers</motion.h2>
                  <motion.p variants={fadeUp} className="desc">We believe great design should be accessible, seamless, and enduring. As a redefined leader in the interior and lifestyle industry, we specialize in crafting modern, functional, and elegant spaces.</motion.p>
                </div>
                <motion.ul variants={staggerContainer} className="about-list">
                  <motion.li variants={fadeUp}>Interior Design</motion.li>
                  <motion.li variants={fadeUp}>Architecture</motion.li>
                  <motion.li variants={fadeUp}>Custom Furniture</motion.li>
                  <motion.li variants={fadeUp}>Sourcing & Import</motion.li>
                  <motion.li variants={fadeUp}>Residential</motion.li>
                  <motion.li variants={fadeUp}>Commercial</motion.li>
                  <motion.li variants={fadeUp}>Hospitality</motion.li>
                  <motion.li variants={fadeUp}>Retail</motion.li>
                </motion.ul>

                <motion.div variants={fadeUp}>
                  <Link to="/about" className="tm-btn tm-btn-outline read-more-btn">Read More</Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Image Cards — exact match to reference site */}
     
      {/* Portfolio / Completed Project Section */}
      <section className="portfolio-section">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="portfolio-heading"
          >
            <h2>Completed Project</h2>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="pf-grid"
          >
            {projects.slice(0, 6).map((port, i) => (
              <motion.div variants={fadeUp} className="pf-item" key={i}>
                <div className="pf-img">
                  <img src={port.img} alt={port.title} loading="lazy" />
                </div>
                <div className="pf-overlay">
                  <div className="pf-overlay-frame">
                    <h3>{port.title}</h3>
                    <div className="pf-details">
                      <p><span>Project Name:</span> {port.title}</p>
                      <p><span>Client:</span> {port.client}</p>
                      <p><span>Location:</span> {port.location}</p>
                      <p><span>Job Role:</span> {port.jobRole}</p>
                    </div>
                    <Link to={`/project/${port.slug}`} className="pf-readmore">Read More +</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/portfolio" className="tm-btn tm-btn-primary">More Project</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Lemonade Section */}
      <section className="why-choose-section">
        <div className="why-choose-grid">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="why-choose-content"
          >
            <h2>Why Choose Lemonade?</h2>
            <p className="why-choose-desc">
              We offer a complete interior solution with everything managed under one roof: design, architecture, furniture, and sourcing. Our team works closely with clients to create personalized spaces that reflect their lifestyle and needs. We are committed to quality, professionalism, and timely project delivery, making us a trusted name in the industry.
            </p>
            <div className="why-choose-cards">
              <div className="why-choose-card">
                <div className="wc-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v6"></path>
                    <path d="M6 11V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"></path>
                    <path d="M2 14h20"></path>
                    <rect x="9" y="3" width="6" height="3" rx="0.5"></rect>
                  </svg>
                </div>
                <h4>All-in-One Solution</h4>
              </div>

              <div className="why-choose-card">
                <div className="wc-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="3" width="16" height="18" rx="1"></rect>
                    <path d="M4 3c2 4 4 6 4 10v8M20 3c-2 4-4 6-4 10v8"></path>
                    <path d="M4 11h16"></path>
                  </svg>
                </div>
                <h4>Personalized Design</h4>
              </div>

              <div className="why-choose-card">
                <div className="wc-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" strokeDasharray="3 3"></circle>
                    <polyline points="12 7 12 12 15 14"></polyline>
                  </svg>
                </div>
                <h4>Quality & Timely</h4>
              </div>
            </div>
          </motion.div>
          <div className="why-choose-image-side" style={{ backgroundImage: `url(${svcInterior})` }}></div>
        </div>
      </section>
    </>
  );
}


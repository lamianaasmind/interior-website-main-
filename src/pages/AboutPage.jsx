import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutMain from '../assets/Website Image/img1262.jpg';

// Portfolio projects source of truth
import { projects } from '../data/projects';

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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function AboutPage() {
  const [activeAccordion, setActiveAccordion] = useState('philosophy');

  return (
    <>
      {/* Banner / Hero Section */}
      <section className="subpage-header-banner" style={{ backgroundImage: `url(${aboutMain})` }}>
        <div className="hero-overlay"></div>
        <motion.div
          initial="hidden" animate="visible" variants={fadeUp}
          className="hero-content"
        >
          <span className="sub-title" style={{ color: 'var(--primary-color)' }}>Who We Are</span>
          <h1 style={{ fontSize: '50px', color: '#ffffff' }}>About Lemonade</h1>
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
          <span className="breadcrumb-current">About</span>
        </div>
      </section>

      {/* About Section 1: Company Profile */}
      <section className="about-profile-section">
        <div className="container">
          <div className="about-profile-grid">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeLeft}
              className="about-profile-img"
            >
              <img src={aboutMain} alt="Lemonade Living Room Design" />
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeRight}
              className="about-profile-text"
            >
              <span className="sub-title">DESIGN & BUILD WITH PURPOSE</span>
              <h2>Lemonade</h2>
              <p>Lemonade is a professionally managed design and consultancy firm comprising experienced management professionals, architects, and engineers with strong creative and technical expertise. We provide comprehensive architectural consultancy, building design and construction, and commercial and residential interior and exterior design services.</p> 


              <div className="quote-box">
                <p>Our integrated, end-to-end approach covers the full project lifecycle from concept and design coordination to execution and completion ensuring functional efficiency, aesthetic excellence, regulatory compliance, and timely delivery. Guided by contemporary design principles, sustainability, and advanced technologies, Lemonade delivers tailored, high-quality solutions supported by a dedicated client service team committed to transparency, responsiveness, and long-term client satisfaction.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section 2: Philosophy & Accordion */}
      <section className="about-philosophy-section">
        <div className="container">
          <div className="about-philosophy-grid">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeLeft}
              className="about-philosophy-left"
            >
              <span className="sub-title">LEMONADE</span>
              <h2>We Shape Good Lives</h2>
              <p className="desc">We believe outstanding design comes from dedication and integrity.</p>

              <div className="progress-circles-wrap">
                <div className="progress-circle-item">
                  <div className="circle-wrap">
                    <svg width="90" height="90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" stroke="rgba(180, 139, 118, 0.15)" strokeWidth="5" fill="transparent" />
                      <circle cx="50" cy="50" r="42" stroke="var(--primary-color)" strokeWidth="5" fill="transparent"
                        strokeDasharray="264" strokeDashoffset="2.64"
                        strokeLinecap="round" transform="rotate(-90 50 50)" />
                    </svg>
                    <div className="circle-text">80%</div>
                  </div>
                  <div className="circle-label">Interior Design</div>
                </div>

                <div className="progress-circle-item">
                  <div className="circle-wrap">
                    <svg width="90" height="90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" stroke="rgba(180, 139, 118, 0.15)" strokeWidth="5" fill="transparent" />
                      <circle cx="50" cy="50" r="42" stroke="var(--primary-color)" strokeWidth="5" fill="transparent"
                        strokeDasharray="264" strokeDashoffset="2.64"
                        strokeLinecap="round" transform="rotate(-90 50 50)" />
                    </svg>
                    <div className="circle-text">78%</div>
                  </div>
                  <div className="circle-label">Architecture</div>
                </div>

                <div className="progress-circle-item">
                  <div className="circle-wrap">
                    <svg width="90" height="90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" stroke="rgba(180, 139, 118, 0.15)" strokeWidth="5" fill="transparent" />
                      <circle cx="50" cy="50" r="42" stroke="var(--primary-color)" strokeWidth="5" fill="transparent"
                        strokeDasharray="264" strokeDashoffset="2.64"
                        strokeLinecap="round" transform="rotate(-90 50 50)" />
                    </svg>
                    <div className="circle-text">99%</div>
                  </div>
                  <div className="circle-label">Custom Furniture</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeRight}
              className="about-philosophy-right"
            >
              <div className="about-accordion">
                <div className={`accordion-item ${activeAccordion === 'philosophy' ? 'active' : ''}`}>
                  <div className="accordion-header" onClick={() => setActiveAccordion(activeAccordion === 'philosophy' ? null : 'philosophy')}>
                    <h3>Our Philosophy</h3>
                    <span className="icon">{activeAccordion === 'philosophy' ? '−' : '＋'}</span>
                  </div>
                  {activeAccordion === 'philosophy' && (
                    <div className="accordion-content">
                      <p>We design more than just spaces we craft experiences. Each space we deliver reflects a perfect balance of beauty, functionality, and comfort, tailored to the lifestyle and needs of those who live or work within it.</p>
                    </div>
                  )}
                </div>

                <div className={`accordion-item ${activeAccordion === 'approach' ? 'active' : ''}`}>
                  <div className="accordion-header" onClick={() => setActiveAccordion(activeAccordion === 'approach' ? null : 'approach')}>
                    <h3>Our Approach</h3>
                    <span className="icon">{activeAccordion === 'approach' ? '−' : '＋'}</span>
                  </div>
                  {activeAccordion === 'approach' && (
                    <div className="accordion-content">
                      <p>We take a collaborative approach, working closely with our clients to understand their needs and bring their vision to life. From initial consultation to final inspection, we ensure a seamless and stress-free process.</p>
                    </div>
                  )}
                </div>

                <div className={`accordion-item ${activeAccordion === 'services' ? 'active' : ''}`}>
                  <div className="accordion-header" onClick={() => setActiveAccordion(activeAccordion === 'services' ? null : 'services')}>
                    <h3>Our Services</h3>
                    <span className="icon">{activeAccordion === 'services' ? '−' : '＋'}</span>
                  </div>
                  {activeAccordion === 'services' && (
                    <div className="accordion-content">
                      <p>We offer a comprehensive range of interior design and architectural services, including space planning, 3D visualization, custom furniture manufacturing, and project management.</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Providing Section (Blueprint grid) */}
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

      {/* Completed Project Section */}
      <section className="portfolio-section" style={{ background: '#fff', padding: '100px 0' }}>
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
    </>
  );
}

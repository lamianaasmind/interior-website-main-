import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');

  // Dynamically extract unique sectors from projects list
  const categories = ['All', ...new Set(projects.map(p => p.sector).filter(Boolean))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.sector?.toLowerCase() === filter.toLowerCase() || p.cat?.toLowerCase() === filter.toLowerCase());

  return (
    <>
      {/* Portfolio Header Banner */}
      <section className="portfolio-header-banner">
        <div className="container-full" style={{ position: 'relative', height: '100%' }}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Portfolio
          </motion.h1>
          
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
            <span className="breadcrumb-current">Portfolio</span>
          </div>
        </div>
      </section>

      {/* Portfolio Projects Section */}
      <section className="portfolio-page-section">
        <div className="container-full">
          {/* Centered filter tabs */}
          <div className="portfolio-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab-btn ${((cat === 'All' && filter === 'All') || filter === cat) ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat === 'All' ? 'All Projects' : cat}
              </button>
            ))}
          </div>

          {/* 4-column portfolio grid */}
          <motion.div layout className="pf-page-grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((port) => (
                <motion.div
                  layout
                  key={port.slug}
                  variants={cardVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="pf-page-item"
                  tabIndex={0}
                >
                  <div className="pf-page-img">
                    <img src={port.img} alt={port.title} loading="lazy" />
                  </div>
                  <div className="pf-page-overlay">
                    <div className="pf-page-overlay-frame">
                      <h3>{port.title}</h3>
                      <div className="pf-page-details">
                        <p><span>Project Name:</span> {port.title}</p>
                        <p><span>Client:</span> {port.client}</p>
                        <p><span>Location:</span> {port.location}</p>
                        <p><span>Job Role:</span> {port.jobRole}</p>
                      </div>
                      <Link to={`/project/${port.slug}`} className="pf-page-readmore">Read More +</Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}

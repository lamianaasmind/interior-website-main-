import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const [sliderIndex, setSliderIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const gallery = project?.gallery || (project ? [project.img] : []);

  const goNext = useCallback(() => {
    setDirection(1);
    setSliderIndex((i) => (i + 1) % gallery.length);
  }, [gallery.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setSliderIndex((i) => (i - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  const lightboxNext = useCallback(() => {
    setDirection(1);
    setLightboxIndex((i) => (i + 1) % gallery.length);
  }, [gallery.length]);

  const lightboxPrev = useCallback(() => {
    setDirection(-1);
    setLightboxIndex((i) => (i - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e) => {
      if (e.key === 'ArrowRight') lightboxNext();
      if (e.key === 'ArrowLeft') lightboxPrev();
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxOpen, lightboxNext, lightboxPrev]);

  // Auto-advance slider every 8 seconds, pausing if hovered
  useEffect(() => {
    if (lightboxOpen || gallery.length <= 1 || isPaused) return;
    const timer = setInterval(goNext, 8000);
    return () => clearInterval(timer);
  }, [goNext, lightboxOpen, gallery.length, isPaused]);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  if (!project) {
    return (
      <section className="section-padding" style={{ textAlign: 'center', paddingTop: '180px' }}>
        <h2>Project Not Found</h2>
        <p style={{ margin: '20px 0 30px' }}>The project you're looking for doesn't exist.</p>
        <Link to="/portfolio" className="tm-btn tm-btn-primary">View All Projects</Link>
      </section>
    );
  }

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.02
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'tween', duration: 0.85, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.5, ease: 'easeOut' },
        scale: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'tween', duration: 0.85, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.5, ease: 'easeIn' },
        scale: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
      }
    })
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="hero-slider" style={{ height: '55vh', minHeight: '400px' }}>
        <div className="hero-slide active">
          <img src={project.img} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="hero-overlay"></div>
        </div>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="hero-content" style={{ textAlign: 'center' }}>
          <span className="sub-title">PROJECT DETAILS</span>
          <h1 style={{ fontSize: '50px' }}>{project.title}</h1>
        </motion.div>
      </section>

      {/* Project Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="project-detail-grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="project-detail-image-box">
              <img src={project.img} alt={project.title} className="project-main-img" />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="project-detail-info-box">
              <div className="sec-title">
                <span className="sub-title">Project Details</span>
                <h2>{project.title}</h2>
              </div>

              <div className="project-info-specs">
                <div className="spec-row">
                  <span className="spec-label">Project Name</span>
                  <span className="spec-val">{project.title}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Client Name</span>
                  <span className="spec-val">{project.client}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Location</span>
                  <span className="spec-val">{project.location}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Job Role</span>
                  <span className="spec-val">{project.jobRole}</span>
                </div>
              </div>

              <div className="project-detail-body">
                <h3>Overview</h3>
                <p>{project.desc}</p>
              </div>

              <div className="project-detail-actions">
                <Link to="/portfolio" className="tm-btn tm-btn-outline">Back to Portfolio</Link>
                <Link to="/contact" className="tm-btn tm-btn-primary" style={{ marginLeft: '15px' }}>Start Your Project</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Image Gallery Slider ─── */}
      {gallery.length > 1 && (
        <section className="section-padding" style={{ paddingTop: 0 }}>
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="sec-title"
              style={{ textAlign: 'center', marginBottom: '40px' }}
            >
              <span className="sub-title">PROJECT GALLERY</span>
              <h2>More Views</h2>
            </motion.div>

            {/* Main Slider */}
            <div
              className="proj-slider-wrap"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className="proj-slider-stage"
                onClick={() => {
                  if (!isDragging) {
                    openLightbox(sliderIndex);
                  }
                }}
              >
                <AnimatePresence custom={direction} mode="popLayout">
                  <motion.img
                    key={sliderIndex}
                    src={gallery[sliderIndex]}
                    alt={`${project.title} — view ${sliderIndex + 1}`}
                    className="proj-slider-img"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.6}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={(e, info) => {
                      const swipe = info.offset.x;
                      if (swipe < -60) {
                        goNext();
                      } else if (swipe > 60) {
                        goPrev();
                      }
                      setTimeout(() => setIsDragging(false), 50);
                    }}
                    style={{ cursor: 'grab' }}
                    whileDrag={{ cursor: 'grabbing' }}
                  />
                </AnimatePresence>
                <div className="proj-slider-zoom-hint">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  Click to enlarge
                </div>
              </div>

              {/* Prev / Next arrows */}
              {gallery.length > 1 && (
                <>
                  <button className="proj-slider-arrow proj-slider-prev" onClick={goPrev} aria-label="Previous">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button className="proj-slider-arrow proj-slider-next" onClick={goNext} aria-label="Next">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </>
              )}

              {/* Dots */}
              <div className="proj-slider-dots">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    className="proj-slider-dot-container"
                    onClick={() => { setDirection(i > sliderIndex ? 1 : -1); setSliderIndex(i); }}
                    aria-label={`Go to image ${i + 1}`}
                  >
                    {i === sliderIndex && (
                      <motion.span
                        layoutId="activeDot"
                        className="proj-slider-dot-active"
                        transition={{ type: 'spring', stiffness: 100, damping: 18 }}
                      />
                    )}
                    <span className="proj-slider-dot-dot" />
                  </button>
                ))}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="proj-thumb-strip">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  className={`proj-thumb${i === sliderIndex ? ' active' : ''}`}
                  onClick={() => { setDirection(i > sliderIndex ? 1 : -1); setSliderIndex(i); }}
                  aria-label={`Thumbnail ${i + 1}`}
                  style={{ position: 'relative' }}
                >
                  <img src={img} alt={`thumb-${i}`} />
                  {i === sliderIndex && (
                    <motion.div
                      layoutId="activeThumbBorder"
                      className="proj-thumb-active-border"
                      transition={{ type: 'spring', stiffness: 100, damping: 18 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Lightbox ─── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="proj-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              className="proj-lightbox-inner"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="proj-lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <AnimatePresence custom={direction} mode="popLayout">
                <motion.img
                  key={lightboxIndex}
                  src={gallery[lightboxIndex]}
                  alt={`Lightbox view ${lightboxIndex + 1}`}
                  className="proj-lightbox-img"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={(e, info) => {
                    const swipe = info.offset.x;
                    if (swipe < -60) {
                      lightboxNext();
                    } else if (swipe > 60) {
                      lightboxPrev();
                    }
                    setTimeout(() => setIsDragging(false), 50);
                  }}
                  style={{ cursor: 'grab' }}
                  whileDrag={{ cursor: 'grabbing' }}
                />
              </AnimatePresence>

              <button className="proj-lightbox-arrow proj-lightbox-prev" onClick={lightboxPrev} aria-label="Previous">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button className="proj-lightbox-arrow proj-lightbox-next" onClick={lightboxNext} aria-label="Next">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              <div className="proj-lightbox-counter">{lightboxIndex + 1} / {gallery.length}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

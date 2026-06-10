import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Service images
import archImg1 from '../assets/Website Image/img1689.jpg';
import archImg2 from '../assets/Website Image/img2138.jpg';
import archImg3 from '../assets/Website Image/img2174.jpg';
import intImg1 from '../assets/Website Image/img1268.jpg';
import intImg2 from '../assets/Website Image/img1262.jpg';
import intImg3 from '../assets/Website Image/img1265.jpg';
import furnImg1 from '../assets/Website Image/img1279.jpg';
import furnImg2 from '../assets/Website Image/img1271.jpg';
import furnImg3 from '../assets/Website Image/img1282.jpg';
import buildImg1 from '../assets/Website Image/img2174.jpg';
import buildImg2 from '../assets/Website Image/img2138.jpg';
import buildImg3 from '../assets/Website Image/img1689.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const services = {
  'architecture': {
    title: 'Architecture',
    subtitle: 'ARCHITECTURE SERVICE',
    hero: archImg1,
    desc: 'Delivering precise 2D and 3D architectural plans to shape spaces with innovation and functionality. Our architectural services cover everything from initial concept development to detailed construction documentation.',
    features: [
      '2D & 3D Floor Plans',
      'Structural Design',
      'Building Permits & Approvals',
      'Construction Documentation',
      'Site Analysis & Planning',
      'Sustainable Design Solutions',
    ],
    gallery: [archImg1, archImg2, archImg3],
    process: [
       { step: '01', title: 'Initial Survey', desc: "Initial project survey with clients' requirement brief." },
    { step: '02', title: 'Layout Planning', desc: '2D layout planning with conceptual presentation.' },
    { step: '03', title: 'Estimating Budget', desc: 'Calculating and finalizing the project budget.' },
    { step: '04', title: 'Detailed Design', desc: 'Finalizing 3D designs and Bill of Quantities (BOQ).' },
    { step: '05', title: 'Material Sourcing', desc: 'Sourcing the required materials for your space.' },
    { step: '06', title: 'Project Planning', desc: 'Scheduling and logistics for implementation.' },
    { step: '07', title: 'Interior Construction', desc: 'Professional execution of the interior works.' },
    { step: '08', title: 'QC & Handover', desc: 'Final quality control checks and project handover.' },
    ],
  },
  'interior-design': {
    title: 'Interior Design',
    subtitle: 'INTERIOR DESIGN SERVICE',
    hero: intImg1,
    desc: 'Comprehensive interior design services including residential, commercial, and hospitality solutions. We transform ordinary spaces into extraordinary experiences through thoughtful design, premium materials, and meticulous attention to detail.',
    features: [
      'Space Planning & Layout',
      'Material & Finish Selection',
      'Furniture Design & Procurement',
      'Lighting Design',
      'Color Consultation',
      'Project Management',
    ],
    gallery: [intImg1, intImg2, intImg3],
    process: [
     { step: '01', title: 'Initial Survey', desc: "Initial project survey with clients' requirement brief." },
    { step: '02', title: 'Layout Planning', desc: '2D layout planning with conceptual presentation.' },
    { step: '03', title: 'Estimating Budget', desc: 'Calculating and finalizing the project budget.' },
    { step: '04', title: 'Detailed Design', desc: 'Finalizing 3D designs and Bill of Quantities (BOQ).' },
    { step: '05', title: 'Material Sourcing', desc: 'Sourcing the required materials for your space.' },
    { step: '06', title: 'Project Planning', desc: 'Scheduling and logistics for implementation.' },
    { step: '07', title: 'Interior Construction', desc: 'Professional execution of the interior works.' },
    { step: '08', title: 'QC & Handover', desc: 'Final quality control checks and project handover.' },
    ],
  },
  'custom-furniture': {
    title: 'Custom Furniture Design',
    subtitle: 'CUSTOM FURNITURE DESIGN SERVICE',
    hero: furnImg2,
    desc: 'We design and build custom furniture with an emphasis on fit, finish and longevity. Every piece is tailored to your space, measured precisely, and finished with premium materials so it looks and feels premium for years.',
    features: [
      'Tailored Joinery & Fit',
      'Solid Wood & Engineered Options',
      'Custom Finishes & Hardware',
      'Upholstery & Cushioning',
      'Built-in & Space-Saving Solutions',
      'On-site Installation & Handover',
    ],
    gallery: [furnImg2, furnImg3, furnImg1],
   process: [
     { step: '01', title: 'Initial Survey', desc: "Initial project survey with clients' requirement brief." },
   { step: '02', title: 'Concept & Layout', desc: 'Concept sketches and 2D layout planning with material options.' },
   { step: '03', title: 'Estimating Budget', desc: 'Calculating and finalizing the project budget and timelines.' },
   { step: '04', title: 'Detailed Design', desc: 'Preparing detailed joinery drawings and fabrication documents.' },
   { step: '05', title: 'Material Sourcing', desc: 'Selecting and procuring premium materials and hardware.' },
   { step: '06', title: 'Prototype & Approval', desc: 'Create mockups or prototypes for client approval.' },
   { step: '07', title: 'Manufacturing & Installation', desc: 'Handcrafted fabrication followed by professional on-site installation.' },
   { step: '08', title: 'QC & Handover', desc: 'Final quality control checks and client handover with care instructions.' },
   ],
  },
  'building-design': {
    title: 'Building Design',
    subtitle: 'BUILDING DESIGN SERVICE',
    hero: buildImg1,
    desc: 'Comprehensive building design services including residential, commercial, and institutional structures. We focus on structural integrity, efficient layouts, and elegant façades that suit the client program and site context.',
    features: [
      'Concept & Schematic Design',
      'Structural Coordination',
      'Façade & Elevation Design',
      'Permit & Regulatory Drawings',
      'Construction Documentation',
      'Material & Finish Specification',
    ],
    gallery: [buildImg1, buildImg2, buildImg3],
    process: [
      { step: '01', title: 'Site Analysis', desc: "Survey and analysis of site constraints and opportunities." },
      { step: '02', title: 'Concept Design', desc: 'Schematic layouts and massing studies.' },
      { step: '03', title: 'Design Development', desc: 'Refinement of plans, elevations and sections.' },
      { step: '04', title: 'Structural Coordination', desc: 'Integrating structural design and MEP coordination.' },
      { step: '05', title: 'Permitting', desc: 'Preparing drawings and documentation for approvals.' },
      { step: '06', title: 'Construction Documentation', desc: 'Detailed drawings for construction and tendering.' },
      { step: '07', title: 'Site Supervision', desc: 'Overseeing construction for design intent compliance.' },
      { step: '08', title: 'Handover', desc: 'Final inspection and client handover.' },
    ],
  },
  'exterior-design': {
    title: 'Exterior Design',
    subtitle: 'EXTERIOR DESIGN SERVICE',
    hero: archImg2,
    desc: 'Delivering stunning exterior facade designs, elevation plans, and landscape integration to create impressive structural aesthetics.',
    features: [
      'Facade Design & Materials',
      '3D Elevation Renderings',
      'Outdoor Lighting Integration',
      'Sustainable Materials Sourcing',
      'Cladding & Texture Planning',
      'Structural Facade Engineering',
    ],
    gallery: [archImg2, archImg3, archImg1],
    process: [
       { step: '01', title: 'Initial Survey', desc: "Initial project survey with clients' requirement brief." },
    { step: '02', title: 'Layout Planning', desc: '2D layout planning with conceptual presentation.' },
    { step: '03', title: 'Estimating Budget', desc: 'Calculating and finalizing the project budget.' },
    { step: '04', title: 'Detailed Design', desc: 'Finalizing 3D designs and Bill of Quantities (BOQ).' },
    { step: '05', title: 'Material Sourcing', desc: 'Sourcing the required materials for your space.' },
    { step: '06', title: 'Project Planning', desc: 'Scheduling and logistics for implementation.' },
    { step: '07', title: 'Interior Construction', desc: 'Professional execution of the interior works.' },
    { step: '08', title: 'QC & Handover', desc: 'Final quality control checks and project handover.' },
    ],
  },
  'landscape-design': {
    title: 'Landscape Design',
    subtitle: 'LANDSCAPE DESIGN SERVICE',
    hero: intImg3,
    desc: 'Designing lush outdoor environments, garden layouts, pathways, and water features that seamlessly blend nature with architecture.',
    features: [
      'Garden & Greenery Layouts',
      'Hardscape & Pathway Designs',
      'Water Feature Integration',
      'Outdoor Leisure Spaces',
      'Terrace & Balcony Gardens',
      'Irrigation & Drainage Systems',
    ],
    gallery: [intImg3, archImg2, intImg2],
    process: [
       { step: '01', title: 'Initial Survey', desc: "Initial project survey with clients' requirement brief." },
    { step: '02', title: 'Layout Planning', desc: '2D layout planning with conceptual presentation.' },
    { step: '03', title: 'Estimating Budget', desc: 'Calculating and finalizing the project budget.' },
    { step: '04', title: 'Detailed Design', desc: 'Finalizing 3D designs and Bill of Quantities (BOQ).' },
    { step: '05', title: 'Material Sourcing', desc: 'Sourcing the required materials for your space.' },
    { step: '06', title: 'Project Planning', desc: 'Scheduling and logistics for implementation.' },
    { step: '07', title: 'Interior Construction', desc: 'Professional execution of the interior works.' },
    { step: '08', title: 'QC & Handover', desc: 'Final quality control checks and project handover.' },
    ],
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services[slug];

  if (!service) {
    return (
      <section className="section-padding" style={{ textAlign: 'center', paddingTop: '180px' }}>
        <h2>Service Not Found</h2>
        <p style={{ margin: '20px 0 30px' }}>The service you're looking for doesn't exist.</p>
        <Link to="/services" className="tm-btn tm-btn-primary">View All Services</Link>
      </section>
    );
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="hero-slider" style={{ height: '50vh', minHeight: '350px' }}>
        <div className="hero-slide active">
          <img src={service.hero} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="hero-overlay"></div>
        </div>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="hero-content" style={{ textAlign: 'center' }}>
          <span className="sub-title">{service.subtitle}</span>
          <h1 style={{ fontSize: '50px' }}>{service.title}</h1>
        </motion.div>
      </section>

      {/* Service Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="svc-detail-grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="sec-title">
                <span className="sub-title">What We Offer</span>
                <h2>{service.title}</h2>
              </div>
              <p className="svc-detail-desc">{service.desc}</p>
              <ul className="svc-features">
                {service.features.map((f, i) => (
                  <li key={i}><span className="svc-check">✓</span> {f}</li>
                ))}
              </ul>
              <Link to="/contact" className="tm-btn tm-btn-primary" style={{ marginTop: '30px' }}>Get a Quote</Link>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <img src={service.gallery[0]} alt={service.title} className="svc-detail-img" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-light">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="sec-title center">
            <span className="sub-title">Our Work</span>
            <h2>{service.title} Gallery</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="svc-gallery-grid">
            {service.gallery.map((img, i) => (
              <motion.div key={i} variants={fadeUp} className="svc-gallery-item">
                <img src={img} alt={`${service.title} ${i + 1}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="sec-title center">
            <span className="sub-title">How We Work</span>
            <h2>Our Process</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="svc-process-grid">
            {service.process.map((p, i) => (
              <motion.div key={i} variants={fadeUp} className="svc-process-step">
                <div className="svc-step-num">{p.step}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="svc-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 style={{ color: '#fff', fontSize: '42px', marginBottom: '20px' }}>Ready to Start Your Project?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', marginBottom: '35px', maxWidth: '600px', margin: '0 auto 35px' }}>Let's discuss how we can transform your space with our {service.title.toLowerCase()} expertise.</p>
            <Link to="/contact" className="tm-btn tm-btn-primary">Book a Consultation</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

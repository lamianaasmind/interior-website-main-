import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Service images
import archImg1 from '../assets/Website Image/img1689.jpg';
import archImg2 from '../assets/Website Image/img2138.jpg';
import archImg3 from '../assets/Website Image/img2174.jpg';
import intImg1 from '../assets/Website Image/img1268.jpg';
import intImg2 from '../assets/Website Image/img1262.jpg';
import intImg3 from '../assets/Website Image/img1265.jpg';
import furnImg1 from '../assets/Website Image/img1271.jpg';
import furnImg2 from '../assets/Website Image/img1279.jpg';
import furnImg3 from '../assets/Website Image/img1282.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const services = {
  architecture: {
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
      { step: '01', title: 'Site Analysis', desc: 'We begin with a thorough analysis of your site, understanding the terrain, climate, and local regulations.' },
      { step: '02', title: 'Concept Design', desc: 'Our architects develop initial concepts that align with your vision, budget, and functional requirements.' },
      { step: '03', title: 'Design Development', desc: 'Detailed drawings, 3D renderings, and material specifications are prepared for your approval.' },
      { step: '04', title: 'Construction', desc: 'We oversee the construction process to ensure the design is executed with precision and quality.' },
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
    title: 'Custom Furniture',
    subtitle: 'CUSTOM FURNITURE SERVICE',
    hero: furnImg1,
    desc: 'Craft unique furniture pieces that perfectly complement your interior vision and brand identity. From concept sketches to finished products, we create bespoke furniture that stands the test of time.',
    features: [
      'Bespoke Design',
      'Premium Materials',
      'Handcrafted Quality',
      'Custom Upholstery',
      'Built-in Solutions',
      'Restoration Services',
    ],
    gallery: [furnImg1, furnImg2, furnImg3],
    process: [
      { step: '01', title: 'Brief & Inspiration', desc: 'We discuss your requirements, style preferences, and the specific needs of your space.' },
      { step: '02', title: 'Design & Prototyping', desc: 'Detailed drawings and material samples are prepared. We may create prototypes for complex pieces.' },
      { step: '03', title: 'Crafting', desc: 'Our skilled craftsmen bring the designs to life using premium materials and traditional techniques.' },
      { step: '04', title: 'Delivery & Installation', desc: 'Each piece is carefully delivered and installed, with final adjustments made on-site.' },
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
      { step: '01', title: 'Site & Climate Study', desc: 'We examine your building location, orientation, climate, and structural specifications.' },
      { step: '02', title: 'Concept Design', desc: 'Our team designs custom facades and outdoor elements representing your desired aesthetic.' },
      { step: '03', title: 'Material Selection', desc: 'We curate premium exterior materials that offer durability, aesthetics, and energy efficiency.' },
      { step: '04', title: 'Detail Engineering', desc: 'Final blueprints and facade specifications are drafted for accurate structural construction.' },
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
      { step: '01', title: 'Natural Survey', desc: 'We analyze soil conditions, sunlight exposure, and space dynamics to understand the land.' },
      { step: '02', title: 'Layout & Flow Design', desc: 'We map out green beds, pathways, water points, and relaxation zones for smooth circulation.' },
      { step: '03', title: 'Plant & Material Selection', desc: 'We select native flora and high-quality hardscape materials matching the aesthetic.' },
      { step: '04', title: 'Implementation & Styling', desc: 'Our landscape experts oversee the planting and installation of features to bring nature to your doorstep.' },
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

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Website Image/Logo.jpg';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  // Close menus when route changes
  useEffect(() => {
    setIsOpen(false);
    setSubmenuOpen(false);
  }, [location]);

  // Disable body scroll when menu is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className="site-header">
      <div className="container-full">
        <div className="header-inner">
          <div className="site-logo">
            <Link to="/">
              <img src={logo} alt="Lemonade" onError={(e) => { e.target.style.display = 'none'; const txt = document.createElement('span'); txt.className = 'nav-text-logo'; txt.textContent = 'Lemonade'; e.target.parentNode.appendChild(txt); }} />
            </Link>
          </div>
          
          <nav className={`main-menu ${isOpen ? 'mobile-active' : ''}`}>
            <ul>
              <li><Link to="/" className={isActive('/')}>Home</Link></li>
              <li><Link to="/about" className={isActive('/about')}>About</Link></li>
              <li className={`has-dropdown ${submenuOpen ? 'submenu-active' : ''}`}>
                <Link 
                  to="/services" 
                  className={isActive('/services')}
                  onClick={() => {
                    setSubmenuOpen(!submenuOpen);
                  }}
                >
                  Services <span className={`arrow ${submenuOpen ? 'arrow-up' : ''}`}></span>
                </Link>
                <ul className="dropdown-menu">
                  <li><Link to="/service/interior-design" className={isActive('/service/interior-design')}>Interior Design</Link></li>
                  <li><Link to="/service/architecture" className={isActive('/service/architecture')}>Architecture</Link></li>
                  <li><Link to="/service/exterior-design" className={isActive('/service/exterior-design')}>Exterior Design</Link></li>
                  <li><Link to="/service/landscape-design" className={isActive('/service/landscape-design')}>Landscape Design</Link></li>
                </ul>
              </li>
              <li><Link to="/portfolio" className={isActive('/portfolio')}>Portfolio</Link></li>
              <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
            </ul>

            {/* Mobile Drawer Live Chat Button */}
            <div className="mobile-drawer-footer">
              <a href="https://wa.me/+8801765936330" onClick={(e) => { e.preventDefault(); window.openLiveChat && window.openLiveChat(); }} className="mobile-live-chat-btn">
                Live Chat
              </a>
            </div>
          </nav>

          <div className="header-right">
            <a href="https://wa.me/+8801765936330" onClick={(e) => { e.preventDefault(); window.openLiveChat && window.openLiveChat(); }} className="live-chat-link">
              Live Chat
            </a>
            
            {/* Mobile Menu Toggle Button */}
            <button 
              className={`mobile-menu-toggle ${isOpen ? 'active' : ''}`} 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

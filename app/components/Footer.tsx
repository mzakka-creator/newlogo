import { Instagram } from 'lucide-react';
import { Language } from '../translations';

interface FooterProps {
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  t: {
    contactUs: string;
    phone: string;
    email: string;
    quickLinks: string;
    ourLocation: string;
    address: {
      line1: string;
      line2: string;
      line3: string;
    };
    viewOnMap: string;
    copyright: string;
    tagline: string;
  };
  language: Language;
}

export default function Footer({ handleNavClick, t, language }: FooterProps) {
  const navLinks = [
    { name: language === 'en' ? 'Home' : 'الرئيسية', href: '#home' },
    { name: language === 'en' ? 'Who Are We' : 'من نحن', href: '#about' },
    { name: language === 'en' ? 'Philosophy' : 'فلسفتنا', href: '#philosophy' },
    { name: language === 'en' ? 'Services' : 'خدماتنا', href: '#services' },
    { name: language === 'en' ? 'Clients' : 'عملاؤنا', href: '#clients' },
  ];
  return (
    <footer id="contact" className="footer" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="footer-content">
          {/* Contact Information */}
          <div className="footer-column fade-in">
            <h3>{t.contactUs}</h3>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-text">
                <span className="contact-label">{t.phone}</span>
                <a href="tel:+966536211111" className="contact-value">+966 53 621 1111</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉</div>
              <div className="contact-text">
                <span className="contact-label">{t.email}</span>
                <a href="mailto:info@newlogo.sa" className="contact-value">info@newlogo.sa</a>
              </div>
            </div>

            <div className="social-links">
              <a 
                href="https://www.instagram.com/newlogo?igsh=MTNzZXMyM2o3eHBsbQ%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link" 
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <span className="social-account">@newlogo</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column fade-in delay-1">
            <h3>{t.quickLinks}</h3>
            <nav className="quick-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="quick-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Location */}
          <div className="footer-column fade-in delay-2">
            <h3>{t.ourLocation}</h3>
            <div className="location-address">
              <div className="location-icon">📍</div>
              <div className="location-text">
                {t.address.line1}<br />
                {t.address.line2}<br />
                {t.address.line3}
              </div>
            </div>
            <a 
              href="https://maps.app.goo.gl/gRShmRqjUvCc8z3L9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="map-placeholder"
            >
              {t.viewOnMap}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {t.copyright} 
            {t.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}


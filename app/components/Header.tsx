import Image from 'next/image';
import logo from '../assets/logo.png';
import { Language } from '../translations';

interface HeaderProps {
  isScrolled: boolean;
  isAtTop: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: {
    home: string;
    whoAreWe: string;
    philosophy: string;
    services: string;
    clients: string;
    contact: string;
  };
}

export default function Header({
  isScrolled,
  isAtTop,
  mobileMenuOpen,
  setMobileMenuOpen,
  handleNavClick,
  language,
  setLanguage,
  t,
}: HeaderProps) {
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { name: t.home, href: '#home' },
    { name: t.whoAreWe, href: '#about' },
    { name: t.philosophy, href: '#philosophy' },
    { name: t.services, href: '#services' },
    { name: t.clients, href: '#clients' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isAtTop ? 'at-top' : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container">
        <a href="#home" className="logo-link" onClick={(e) => handleNavClick(e, '#home')}>
          <Image
            src={logo}
            alt="New Logo"
            width={150}
            height={60}
            priority
            className="header-logo"
          />
        </a>
        
        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}


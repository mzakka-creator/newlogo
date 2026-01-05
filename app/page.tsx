'use client';

import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Clients from './components/Clients';
import Footer from './components/Footer';
import { translations, Language } from './translations';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll effects for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsAtTop(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Small delay to ensure DOM is updated after language change
    const timeoutId = setTimeout(() => {
      const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in');
      animatedElements.forEach((el) => {
        // Check if element is already in viewport
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        // Re-observe all elements
        observer.observe(el);
        
        // If element is already in viewport, immediately make it visible
        if (isInViewport) {
          el.classList.add('visible');
        }
      });
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [isLoading, language]);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Loading isLoading={isLoading} />
      
      <Header
        isScrolled={isScrolled}
        isAtTop={isAtTop}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleNavClick={handleNavClick}
        language={language}
        setLanguage={setLanguage}
        t={t.header}
      />

      <Hero handleNavClick={handleNavClick} t={t.hero} />
      
      <About t={t.about} />
      
      <Philosophy t={t.philosophy} />
      
      <Services t={t.services} />
      
      <Clients t={t.clients} />
      
      <Footer handleNavClick={handleNavClick} t={t.footer} language={language} />

      {/* Floating Language Toggle Button */}
      <button 
        className="floating-language-toggle"
        onClick={toggleLanguage}
        aria-label="Toggle language"
      >
        {language === 'en' ? 'AR' : 'EN'}
      </button>
    </div>
  );
}

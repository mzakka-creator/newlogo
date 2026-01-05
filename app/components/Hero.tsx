interface HeroProps {
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  t: {
    title: string;
    tagline: string;
    cta: string;
    scroll: string;
  };
}

export default function Hero({ handleNavClick, t }: HeroProps) {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ display: 'block' }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-gradient"></div>
      </div>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          {t.title}
        </h1>
        <p className="hero-tagline">
          {t.tagline}
        </p>
        <a href="#about" className="hero-cta" onClick={(e) => handleNavClick(e, '#about')}>
          {t.cta}
        </a>
      </div>

      <div className="scroll-indicator">
        <span>{t.scroll}</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
}


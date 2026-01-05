interface PhilosophyProps {
  t: {
    title: string;
    text: string;
  };
}

export default function Philosophy({ t }: PhilosophyProps) {
  return (
    <section id="philosophy" className="philosophy">
      <div className="container">
        <div className="philosophy-content">
          <div className="section-header fade-in">
            <h2>{t.title}</h2>
          </div>
          <p className="philosophy-text fade-in delay-1">
            {t.text}
          </p>
        </div>
      </div>
    </section>
  );
}


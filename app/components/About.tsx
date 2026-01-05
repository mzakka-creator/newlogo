interface AboutProps {
  t: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    highlight1: string;
    highlight2: string;
  };
}

export default function About({ t }: AboutProps) {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text fade-in">
            <h2>{t.title}</h2>
            <p>
              {t.paragraph1.split(t.highlight1)[0]}
              <span className="highlight">{t.highlight1}</span>
              {t.paragraph1.split(t.highlight1)[1].split(t.highlight2)[0]}
              <span className="highlight">{t.highlight2}</span>
              {t.paragraph1.split(t.highlight2)[1]}
            </p>
            <p>
              {t.paragraph2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


import { Sparkles, Layers, Target } from 'lucide-react';

interface ServicesProps {
  t: {
    title: string;
    subtitle: string;
    service1: { title: string; description: string };
    service2: { title: string; description: string };
    service3: { title: string; description: string };
  };
}

export default function Services({ t }: ServicesProps) {
  const services = [
    {
      icon: Sparkles,
      title: t.service1.title,
      description: t.service1.description,
    },
    {
      icon: Layers,
      title: t.service2.title,
      description: t.service2.description,
    },
    {
      icon: Target,
      title: t.service3.title,
      description: t.service3.description,
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header fade-in">
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={service.title} className={`service-card fade-in delay-${index + 1}`}>
                <div className="service-icon">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


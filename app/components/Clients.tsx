import Image from 'next/image';

// Import client logos
import client1 from '../assets/clients/1 2 M-01.svg';
import clientAlhaddab from '../assets/clients/Alhaddab-01.svg';
import clientAlnemer from '../assets/clients/Alnemer Co-01.svg';
import clientAlrajhi from '../assets/clients/Alrajhi-01.svg';
import clientAwaser from '../assets/clients/Awaser-01.svg';
import clientFonte from '../assets/clients/Fonte-01.svg';
import clientHorizon from '../assets/clients/Horizon-01.svg';
import clientKafaah from '../assets/clients/Kafaah-01.svg';
import clientMasic from '../assets/clients/Masic-01.svg';
import clientMkan from '../assets/clients/mkan-01.svg';
import clientNobtha from '../assets/clients/Nobtha-01.svg';
import clientNUMU from '../assets/clients/NUMU-01.svg';
import clientQudrah from '../assets/clients/Qudrah-01.svg';
import clientSTILY from '../assets/clients/STILY-01.svg';
import client1Arabic from '../assets/clients/ج-01.svg';
import client2Arabic from '../assets/clients/عائد-01.svg';

const clients = [
  { name: '1 2 M', logo: client1 },
  { name: 'Alhaddab', logo: clientAlhaddab },
  { name: 'Alnemer Co', logo: clientAlnemer },
  { name: 'Alrajhi', logo: clientAlrajhi },
  { name: 'Awaser', logo: clientAwaser },
  { name: 'Fonte', logo: clientFonte },
  { name: 'Horizon', logo: clientHorizon },
  { name: 'Kafaah', logo: clientKafaah },
  { name: 'Masic', logo: clientMasic },
  { name: 'Mkan', logo: clientMkan },
  { name: 'Nobtha', logo: clientNobtha },
  { name: 'NUMU', logo: clientNUMU },
  { name: 'Qudrah', logo: clientQudrah },
  { name: 'STILY', logo: clientSTILY },
  { name: 'ج', logo: client1Arabic },
  { name: 'عائد', logo: client2Arabic },
];

interface ClientsProps {
  t: {
    title: string;
    subtitle: string;
  };
}

export default function Clients({ t }: ClientsProps) {
  return (
    <section id="clients" className="clients">
      <div className="container">
        <div className="section-header fade-in">
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>
      </div>
      <div className="container">
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={`client-${index}`} className="client-item fade-in">
              <div className="client-logo-wrapper">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={80}
                  className="client-logo-img"
                />
              </div>
              <div className="client-tooltip">{client.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

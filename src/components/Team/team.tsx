import Image, { StaticImageData } from 'next/image';
import { CardsContainer, TeamContainer, Card } from './teamStyle';

import jp from '../../assets/jp.png';
import adriano from '../../assets/adriano.png';
import caleb from '../../assets/cleb.png';

import vectorBlack from '../../assets/vetorBlack.svg';
import vetorBlue from '../../assets/vetorBlue.svg';
import vetorGreen from '../../assets/vetorGreen.svg';

import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';
import Link from 'next/link';

type CardProps = {
  background: 'black' | 'blue' | 'green';
  vector: StaticImageData;
  imageProfile: StaticImageData;
  description: string;
  name: string;
  role: string;
  linkedinUrl: string;
  githubUrl: string;
};

const cards: CardProps[] = [
  {
    background: 'black',
    vector: vectorBlack,
    imageProfile: jp,
    description: 'Foto do CEO da Equipe Decola',
    name: 'José Pires',
    role: 'Chief Executive Officer (CEO)',
    linkedinUrl:
      'https://www.linkedin.com/in/jos%C3%A9-pires-oliveira-a97430237/',
    githubUrl: 'https://github.com/jose-pires-neto',
  },
  {
    background: 'blue',
    vector: vetorBlue,
    imageProfile: caleb,
    description: 'Foto do desenvolvedor Front-end',
    name: 'Caleb Lima',
    role: 'Front-end Developer',
    linkedinUrl: 'https://www.linkedin.com/in/caleb-lima/',
    githubUrl: 'https://github.com/jovemcleb',
  },
  {
    background: 'green',
    vector: vetorGreen,
    imageProfile: adriano,
    description: 'Foto do desenvolvedor Back-end',
    name: 'Adriano Santos',
    role: 'Back-end Developer',
    linkedinUrl: 'https://www.linkedin.com/in/adriano-rdg/',
    githubUrl: 'https://github.com/AdrianoRdg',
  },
];

export default function Team() {
  return (
    <TeamContainer>
      <h1>Conheça a nossa equipe.</h1>
      <p>
        Nossa equipe de profissionais altamente treinados trabalhará com você
        para entender sua empresa e seu mercado, e desenvolver uma estratégia
        personalizada para atingir seus objetivos.
      </p>
      <CardsContainer>
        {cards.map((card) => (
          <Card
            key={card.name}
            background={card.background}
            data-aos="zoom-in-up"
          >
            <Image src={card.vector} alt="" className="vector" />
            <Image
              src={card.imageProfile}
              alt={card.description}
              className="imageProfile"
              placeholder="blur"
            />
            <h2>{card.name}</h2>
            <span>{card.role}</span>
            <div>
              <Link href={card.linkedinUrl} target="_blank">
                <Image
                  src={linkedin}
                  alt="Ícone do Linkedin"
                  className="socialIcons"
                />
              </Link>
              <Link href={card.githubUrl} target="_blank">
                <Image
                  src={github}
                  alt="Ícone do Github"
                  className="socialIcons"
                />
              </Link>
            </div>
          </Card>
        ))}
      </CardsContainer>
    </TeamContainer>
  );
}

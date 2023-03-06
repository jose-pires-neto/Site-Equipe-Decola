import Image from 'next/image';
import { CardsContainer, TeamContainer, Card } from './teamStyle';

import jp from '../../assets/jp.png';
import goreh from '../../assets/adriano.png';
import caleb from '../../assets/cleb.png';

import black from '../../assets/vetorBlack.svg';
import vetorBlue from '../../assets/vetorBlue.svg';
import vetorGreen from '../../assets/vetorGreen.svg';

import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';
import Link from 'next/link';

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
        <Card background={'black'} data-aos="zoom-in-up">
          <Image src={black} alt="" className="vector" />
          <Image
            src={jp}
            alt="Foto do CEO da Equipe Decola"
            className="imageProfile"
            placeholder="blur"
          />
          <h2>José Pires</h2>
          <span>Chief Executive Officer (CEO)</span>
          <div>
            <Link
              href="https://www.linkedin.com/in/jos%C3%A9-pires-oliveira-a97430237/"
              target="_blank"
            >
              <Image
                src={linkedin}
                alt="Ícone do Linkedin"
                className="socialIcons"
              />
            </Link>
            <Link href="https://github.com/jose-pires-neto" target="_blank">
              <Image
                src={github}
                alt="Ícone do Github"
                className="socialIcons"
              />
            </Link>
          </div>
        </Card>
        <Card background={'blue'} data-aos="zoom-in-up">
          <Image src={vetorBlue} alt="" className="vector" />
          <Image
            src={caleb}
            alt="Foto do desenvolvedor Front-end"
            className="imageProfile"
            placeholder="blur"
          />
          <h2>Caleb Lima</h2>
          <span>Front-end Developer</span>
          <div>
            <Link
              href="https://www.linkedin.com/in/caleb-lima/"
              target="_blank"
            >
              <Image
                src={linkedin}
                alt="Ícone do Linkedin"
                className="socialIcons"
              />
            </Link>
            <Link href="https://github.com/jovemcleb" target="_blank">
              <Image
                src={github}
                alt="Ícone do Github"
                className="socialIcons"
              />
            </Link>
          </div>
        </Card>
        <Card background={'green'} data-aos="zoom-in-up">
          <Image src={vetorGreen} alt="" className="vector" />
          <Image
            src={goreh}
            alt="Foto do desenvolvedor Back-end"
            className="imageProfile"
            placeholder="blur"
          />
          <h2>Adriano Rodrigues</h2>
          <span>Back-end Developer</span>
          <div>
            <Link
              href="https://www.linkedin.com/in/adriano-rdg/"
              target="_blank"
            >
              <Image
                src={linkedin}
                alt="Ícone do Linkedin"
                className="socialIcons"
              />
            </Link>
            <Link href="https://github.com/AdrianoRdg" target="_blank">
              <Image
                src={github}
                alt="Ícone do Github"
                className="socialIcons"
              />
            </Link>
          </div>
        </Card>
      </CardsContainer>
    </TeamContainer>
  );
}

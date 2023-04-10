import { AboutSection, AboutContent, AboutText } from './aboutStyle';
import Image from 'next/image';

import AboutGraph from '../../assets/grafismoAbout.png';

import whatsAppIcon from '../../assets/icons/whatsIcon.svg';
import Link from 'next/link';

export default function About() {
  return (
    <AboutSection id="about">
      <Link
        data-aos="fade-up"
        href="https://api.whatsapp.com/send?phone=5591984490280"
        target="_blank"
      >
        <button>
          <Image src={whatsAppIcon} alt="Ícone do Whatsapp" />
          Faça seu orçamento
        </button>
      </Link>
      <AboutContent
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="100"
      >
        <Image
          alt="about me"
          src={AboutGraph}
          className="imageContent"
          placeholder="blur"
          blurDataURL="../../assets/grafismoAbout.png"
        />
        <AboutText>
          <span>
            {`SOBRE NÓS ]`}
            <hr />
          </span>
          <h2>Venha fazer o seu negócio decolar conosco!</h2>
          <Image
            alt="about me"
            src={AboutGraph}
            className="imageText"
            placeholder="blur"
            blurDataURL="../../assets/grafismoAbout.png"
          />
          <p>
            A Equipe Decola é uma empresa especializada em serviços de
            marketing, melhorando os resultados dos negócios com planos e
            estratégias personalizados de acordo com o perfil de cada empresa.
          </p>
        </AboutText>
      </AboutContent>
    </AboutSection>
  );
}

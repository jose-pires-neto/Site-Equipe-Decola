import { AboutSection, AboutContent, AboutText } from './aboutStyle';
import Image from 'next/image';

import AboutGraph from '../../assets/grafismoAbout.png';

export default function About() {
  return (
    <AboutSection id="about">
      <AboutContent data-aos="fade-up">
        <Image alt="about me" src={AboutGraph} className="imageContent" />
        <AboutText>
          <span>
            {`SOBRE NÓS ]`}
            <hr />
          </span>
          <h2>Venha fazer o seu negócio decolar conosco!</h2>
          <Image alt="about me" src={AboutGraph} className="imageText" />
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

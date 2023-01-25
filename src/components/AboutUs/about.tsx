import {
  AboutSection,
  AboutContent,
  AboutText,
  AboutTopcs,
} from './aboutStyle';
import Image from 'next/image';

import AboutGraph from '../../assets/grafismoAbout.png';
import missionIcon from '../../assets/icons/missaoIcon.svg';
import valueIcon from '../../assets/icons/valueIcon.svg';
import visionIcon from '../../assets/icons/visaoIcon.svg';

export default function About() {
  return (
    <AboutSection id="about">
      <AboutContent>
        <Image alt="about me" src={AboutGraph} />
        <AboutText>
          <span>
            {`SOBRE NÓS ]`}
            <hr />
          </span>
          <h2>Entenda quem somos e por que existimos.</h2>
          <p>
            Somos a Equipe Decola. Uma empresa especializada em serviços de
            marketing, melhorando os resultados dos negócios com planos e
            estratégias personalizadas de acordo com o perfil de cada empresa
          </p>
          <p>
            Acreditamos que o sucesso do nosso negócio depende do sucesso de
            nossos clientes. Por isso, nos dedicamos a fornecer soluções de
            marketing de alta qualidade que ajudam nossos clientes a atingir
            seus objetivos de negócios e crescer.
          </p>
        </AboutText>
      </AboutContent>
      <AboutTopcs>
        <div>
          <Image src={missionIcon} alt="Ícone de gráfico de missão" />
          <h2>Missão</h2>
          <hr />
          <p>
            Fornecer aos nossos clientes soluções de marketing estratégicas e
            inovadoras que aumentem sua presença e rentabilidade no mercado.
          </p>
        </div>
        <div>
          <Image src={visionIcon} alt="Ícone de gráfico de missão" />
          <h2>Visão</h2>
          <hr />
          <p>
            Ser reconhecida como a líder em consultoria de marketing no mercado,
            fornecendo soluções de alto impacto para nossos clientes e
            ajudando-os a alcançar seus objetivos de negócios.
          </p>
        </div>
        <div>
          <Image src={valueIcon} alt="Ícone de gráfico de missão" />
          <h2>Valores</h2>
          <hr />
          <p>
            Agilidade e flexibilidade Transparência Integridade Excelência
            Inovação Respeito
          </p>
        </div>
      </AboutTopcs>
    </AboutSection>
  );
}

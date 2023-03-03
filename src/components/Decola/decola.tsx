import {
  DecolaSection,
  DecolaContent,
  DecolaImage,
  DecolaTopcs,
  DecolaText,
} from './decolaStyle';
import Image from 'next/image';

import missionIcon from '../../assets/icons/missaoIcon.svg';
import valueIcon from '../../assets/icons/valueIcon.svg';
import visionIcon from '../../assets/icons/visaoIcon.svg';
import cell from '../../assets/cellphone.png';

export default function Decola() {
  return (
    <DecolaSection>
      <DecolaContent>
        <DecolaImage data-aos="zoom-out-right">
          <Image src={cell} alt="" />
        </DecolaImage>
        <DecolaText data-aos="zoom-out-left">
          <Image src={cell} alt="" />
          <h1>
            Fundada em 2022, a Equipe Decola se orgulha de oferecer soluções
            criativas e eficazes para ajudar os clientes a atingir o sucesso.
          </h1>
        </DecolaText>
        <DecolaTopcs>
          <div data-aos="fade-down">
            <Image src={missionIcon} alt="Ícone de gráfico de missão" />
            <h2>Missão</h2>
            <hr className="hrMission" />
            <p>
              Fornecer aos nossos clientes soluções de marketing estratégicas e
              inovadoras que aumentem sua presença e rentabilidade no mercado.
            </p>
          </div>
          <div data-aos="fade-down">
            <Image src={visionIcon} alt="Ícone de um telescópio" />
            <h2>Visão</h2>
            <hr className="hrVision" />
            <p>
              Ser reconhecida como a líder em consultoria de marketing no
              mercado, fornecendo soluções de alto impacto para nossos clientes
              e ajudando-os a alcançar seus objetivos de negócios.
            </p>
          </div>
          <div data-aos="fade-down">
            <Image src={valueIcon} alt="Ícone de uma lâmpada" />
            <h2>Valores</h2>
            <hr />
            <p>
              Agilidade e flexibilidade Transparência Integridade Excelência
              Inovação Respeito
            </p>
          </div>
        </DecolaTopcs>
      </DecolaContent>
    </DecolaSection>
  );
}

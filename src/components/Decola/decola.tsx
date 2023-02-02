import { AboutTopcs } from './decolaStyle';
import Image from 'next/image';

import missionIcon from '../../assets/icons/missaoIcon.svg';
import valueIcon from '../../assets/icons/valueIcon.svg';
import visionIcon from '../../assets/icons/visaoIcon.svg';

export default function decola() {
  return (
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
        <Image src={visionIcon} alt="Ícone de um telescópio" />
        <h2>Visão</h2>
        <hr />
        <p>
          Ser reconhecida como a líder em consultoria de marketing no mercado,
          fornecendo soluções de alto impacto para nossos clientes e ajudando-os
          a alcançar seus objetivos de negócios.
        </p>
      </div>
      <div>
        <Image src={valueIcon} alt="Ícone de uma lâmpada" />
        <h2>Valores</h2>
        <hr />
        <p>
          Agilidade e flexibilidade Transparência Integridade Excelência
          Inovação Respeito
        </p>
      </div>
    </AboutTopcs>
  );
}

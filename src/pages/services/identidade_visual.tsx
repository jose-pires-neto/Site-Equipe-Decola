import {
  ServiceSection,
  ServiceContainer,
  TextAndImageContainer,
  ContentContainer,
} from '../../components/ServicesPage/containerStyles';
import Image from 'next/image';
import BudgetButton from '../../components/BudgetButton/budgetButton';

import identidadeVisualImage from '../../assets/pages/identidadeVisualImage.png';

export default function IdentidadeVisual() {
  return (
    <ServiceSection>
      <ServiceContainer>
        <h1>Identidade Visual</h1>
        <hr />
        <TextAndImageContainer>
          <Image
            src={identidadeVisualImage}
            alt="identidade-visual-image"
            placeholder="blur"
          />
          <div>
            <p>
              A criação da identidade visual de uma empresa é um processo
              importante para estabelecer a marca e a personalidade da empresa
              no mercado. Isso inclui elementos como o logotipo, tipografia,
              cores, imagens e elementos gráficos usados em toda a comunicação
              da empresa, incluindo site, material de marketing e redes sociais.
            </p>
          </div>
        </TextAndImageContainer>
        <ContentContainer>
          <p>
            Para criar a identidade visual de uma empresa, nós seguimos um
            processo rigoroso. Isso inclui reunir informações sobre os objetivos
            e valores da empresa, bem como o público-alvo que a empresa deseja
            atingir. Com base nessas informações, criamos várias opções de
            design para o cliente escolher.
          </p>
          <p>
            O cliente tem a oportunidade de revisar as opções e fornecer
            feedback para a nossa equipe. Uma vez que o design final é aprovado
            pelo cliente, nós fornecemos todos os arquivos e instruções
            necessárias para o cliente usar a nova identidade visual em sua
            comunicação.
          </p>
          <p>
            Além disso, a nossa equipe pode oferecer suporte adicional, como
            criação de cartões de visita, folhetos e outros materiais de
            marketing.
          </p>
        </ContentContainer>
        <BudgetButton />
      </ServiceContainer>
    </ServiceSection>
  );
}

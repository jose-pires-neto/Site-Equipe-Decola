import {
  ServiceSection,
  ServiceContainer,
  TextAndImageContainer,
  ContentContainer,
  LandingPageContainer,
} from "../../components/ServicesPage/containerStyles";
import Image from "next/image";
import BudgetButton from "../../components/BudgetButton/budgetButton";

import LandingPageImage from "../../assets/pages/landingPageImage.svg";
import LandingPageIconImage from "../../assets/pages/landingPageIconImage.svg";

export default function LandingPage() {
  return (
    <ServiceSection>
      <ServiceContainer>
        <h1>Landing Page</h1>
        <hr />
        <TextAndImageContainer>
          <Image src={LandingPageImage} alt="landing-page-image" />
          <div>
            <p>
              Os serviços de criação de landing pages são uma parte importante
              da estratégia de marketing digital de muitas empresas. As landing
              pages são páginas de destino específicas criadas para promover um
              produto ou serviço e convertem visitantes em clientes potenciais.
            </p>
          </div>
        </TextAndImageContainer>
        <p>
          Oferecemos serviços de criação de landing pages com as melhores
          tecnologias do mercado, para ajudar os nossos clientes a terem páginas
          de destino eficazes que atraem e convertem visitantes.
        </p>
        <hr />
        <ContentContainer>
          <LandingPageContainer>
            <Image src={LandingPageIconImage} alt="landing-page-icon-image" />
            <div>
              <p>
                Além disso, oferecemos serviços de gerenciamento de campanhas de
                marketing, que incluem a criação de anúncios online e a
                segmentação de público-alvo para maximizar o retorno sobre o
                investimento em publicidade.
              </p>
            </div>
          </LandingPageContainer>

          <p>
            Esses serviços podem ser úteis para empresas que desejam promover
            produtos ou serviços específicos para um público-alvo específico e
            aumentar a visibilidade de sua marca online.
          </p>
        </ContentContainer>
        <BudgetButton />
      </ServiceContainer>
    </ServiceSection>
  );
}

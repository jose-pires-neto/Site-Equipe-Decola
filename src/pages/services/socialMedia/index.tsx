import {
  MarketingSection,
  MarketingContainer,
  MarketingImageContainer,
  MarketingContent,
} from "../../../components/ServicesPage/marketingStyle";
import SocialMediaImage from "../../../assets/socialMediaImage.svg";
import Image from "next/image";
import BudgetButton from "../../../components/BudgetButton/budgetButton";

export default function SocialMedia() {
  return (
    <MarketingSection>
      <MarketingContainer>
        <h1>Social Media</h1>
        <hr />
        <MarketingImageContainer>
          <Image src={SocialMediaImage} alt="social-media-image" />
          <div>
            <p>
              O social media é uma parte importante da estratégia de marketing
              digital de uma empresa, pois permite que ela atinja um público
              amplo e segmentado, além de fornecer uma plataforma para medir o
              sucesso das campanhas e ajustar as estratégias de acordo com os
              resultados obtidos.
            </p>
          </div>
        </MarketingImageContainer>
        <MarketingContent>
          <p>
            Social media é o uso das redes sociais como uma plataforma para
            promover um negócio ou marca e atrair novos clientes. Isso pode
            incluir a criação de conteúdo e publicações em redes sociais, a
            realização de campanhas publicitárias paga em plataformas como o
            Facebook e o Instagram, o uso de hashtags para aumentar a
            visibilidade e o envolvimento dos seguidores, bem como a interação
            com os clientes através de comentários e mensagens privadas.
          </p>
        </MarketingContent>
        <BudgetButton />
      </MarketingContainer>
    </MarketingSection>
  );
}

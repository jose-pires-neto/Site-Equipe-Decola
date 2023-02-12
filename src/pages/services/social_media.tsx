import {
  ServiceSection,
  ServiceContainer,
  TextAndImageContainer,
  ContentContainer,
} from '../../components/ServicesPage/containerStyles';
import Image from 'next/image';
import BudgetButton from '../../components/BudgetButton/budgetButton';

import SocialMediaImage from '../../assets/pages/socialMediaImage.png';

export default function SocialMedia() {
  return (
    <ServiceSection>
      <ServiceContainer>
        <h1>Social Media</h1>
        <hr />
        <TextAndImageContainer>
          <Image
            src={SocialMediaImage}
            alt="social-media-image"
            placeholder="blur"
          />
          <div>
            <p>
              O social media é uma parte importante da estratégia de marketing
              digital de uma empresa, pois permite que ela atinja um público
              amplo e segmentado, além de fornecer uma plataforma para medir o
              sucesso das campanhas e ajustar as estratégias de acordo com os
              resultados obtidos.
            </p>
          </div>
        </TextAndImageContainer>
        <ContentContainer>
          <p>
            Social media é o uso das redes sociais como uma plataforma para
            promover um negócio ou marca e atrair novos clientes. Isso pode
            incluir a criação de conteúdo e publicações em redes sociais, a
            realização de campanhas publicitárias paga em plataformas como o
            Facebook e o Instagram, o uso de hashtags para aumentar a
            visibilidade e o envolvimento dos seguidores, bem como a interação
            com os clientes através de comentários e mensagens privadas.
          </p>
        </ContentContainer>
        <BudgetButton />
      </ServiceContainer>
    </ServiceSection>
  );
}

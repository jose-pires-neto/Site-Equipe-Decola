import BudgetButton from '../../components/BudgetButton/budgetButton';
import {
  ServiceSection,
  ServiceContainer,
  TextAndImageContainer,
  ContentContainer,
} from '../../components/ServicesPage/containerStyles';
import MarketingImage from '../../assets/pages/marketingImage.png';

import Image from 'next/image';
import Head from 'next/head';

export default function Marketing() {
  return (
    <>
      <Head>
        <title>Consultoria de Marketing | Equipe Decola</title>
      </Head>
      <ServiceSection>
        <ServiceContainer>
          <h1>A Consultoria de Marketing</h1>
          <hr />
          <TextAndImageContainer>
            <Image
              src={MarketingImage}
              alt="marketingImage"
              placeholder="blur"
            />
            <div>
              <p>
                O objetivo da consultoria de marketing é ajudar a empresa a
                alcançar seus objetivos de negócio, como aumentar as vendas,
                atrair novos clientes e fortalecer a sua marca.
              </p>
            </div>
          </TextAndImageContainer>
          <ContentContainer>
            <p>
              As consultorias de marketing podem oferecer serviços de
              assessoria, treinamento e implementação de estratégias, bem como
              realizar análises de mercado e pesquisas de mercado para ajudar a
              empresa a tomar decisões informadas sobre suas campanhas de
              marketing.
            </p>
            <p>
              Se você está procurando uma empresa de consultoria de marketing
              confiável e experiente, entre em contato conosco hoje mesmo.
              Estamos ansiosos para ajudá-lo a alcançar o sucesso.
            </p>
          </ContentContainer>
          <BudgetButton />
        </ServiceContainer>
      </ServiceSection>
    </>
  );
}

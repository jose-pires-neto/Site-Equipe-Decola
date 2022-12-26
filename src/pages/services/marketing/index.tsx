import BudgetButton from "../../../components/BudgetButton/budgetButton";
import {
  MarketingSection,
  MarketingContainer,
  MarketingImageContainer,
  MarketingContent,
} from "./marketingStyle";
import MarketingImage from "../../../assets/marketingImage.svg";
import Image from "next/image";

export default function Marketing() {
  return (
    <MarketingSection>
      <MarketingContainer>
        <h1>A Consultoria de Marketing</h1>
        <hr />
        <MarketingImageContainer>
          <Image src={MarketingImage} alt="marketingImage" />
          <div>
            <h2>Objetivos</h2>
            <p>
              O objetivo da consultoria de marketing é ajudar a empresa a
              alcançar seus objetivos de negócio, como aumentar as vendas,
              atrair novos clientes e fortalecer a sua marca.
            </p>
          </div>
        </MarketingImageContainer>
        <MarketingContent>
          <p>
            As consultorias de marketing podem oferecer serviços de assessoria,
            treinamento e implementação de estratégias, bem como realizar
            análises de mercado e pesquisas de mercado para ajudar a empresa a
            tomar decisões informadas sobre suas campanhas de marketing.
          </p>
          <p>
            Se você está procurando uma empresa de consultoria de marketing
            confiável e experiente, entre em contato conosco hoje mesmo. Estamos
            ansiosos para ajudá-lo a alcançar o sucesso.
          </p>
        </MarketingContent>
        <BudgetButton />
      </MarketingContainer>
    </MarketingSection>
  );
}

import Image from "next/image";
import { ServicesSection, ServicesField, ServicesCard } from "./servicesStyle";
import browser from "../../assets/icons/LandingPageIcon.svg";
import bulb from "../../assets/icons/MarketingIcon.svg";
import code from "../../assets/icons/SiteIcon.svg";
import presentation from "../../assets/icons/CriacaoDeConteudoIcon.svg";
import strategy from "../../assets/icons/IdentidadeVisualIcon.svg";
import thumbsUp from "../../assets/icons/SocialMediaIcon.svg";

export default function Services() {
  return (
    <ServicesSection>
      <h2>Como podemos ajudar no seu negócio?</h2>
      <ServicesField>
        <ServicesCard>
          <Image src={bulb} alt="logo-bulb" />
          <h3>Consultoria de Marketing</h3>
          <p>
          A consultoria de marketing ajuda as empresas a atingir 
          objetivos de negócios, como atrair novos clientes e fortalecer a sua marca.
          </p>
        </ServicesCard>
        <ServicesCard>
          <Image src={browser} alt="logo-browser" />
          <h3>Landing Page</h3>
          <p>
            Uma landing page coverte os visitantes em leads, informações de
            contato de pessoas interessadas no produto ou serviço oferecido pela
            empresa.
          </p>
        </ServicesCard>
        <ServicesCard>
          <Image src={code} alt="logo-code" />
          <h3>Criação de sites/blog</h3>
          <p>
            Os sites são utilizados para difundir informações, promover produtos
            e serviços, estabelecer uma presença online para a sua empresa.
          </p>
        </ServicesCard>
        <ServicesCard>
          <Image src={thumbsUp} alt="logo-thumbsUp" />
          <h3>Social Media</h3>
          <p>
            Social media é o uso das redes sociais como como o Facebook e o
            Instagram para promover o seu negócio ou marca e atrair novos
            clientes.
          </p>
        </ServicesCard>
        <ServicesCard>
          <Image src={strategy} alt="logo-strategy" />
          <h3>Identidade Visual</h3>
          <p>
            É a forma como sua empresa ou marca é apresentada visualmente ao
            público. Inclui elementos como logotipos, tipografia, cores e design
            gráfico.
          </p>
        </ServicesCard>
        <ServicesCard>
          <Image src={presentation} alt="logo-presentation" />
          <h3>Produção de conteúdo</h3>
          <p>
            Produção e publicação de postagens em uma conta de Instagram, com o
            objetivo de atrair e envolver seguidores e promover a sua marca ou
            negócio.
          </p>
        </ServicesCard>
      </ServicesField>
    </ServicesSection>
  );
}

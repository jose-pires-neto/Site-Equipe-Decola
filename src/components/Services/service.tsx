import Image from "next/image";
import { ServicesSection, ServicesField, ServicesCard } from "./servicesStyle";
import browser from "../../assets/icons/browser.svg";
import bulb from "../../assets/icons/bulb.svg";
import code from "../../assets/icons/code.svg";
import presentation from "../../assets/icons/presentation.svg";
import strategy from "../../assets/icons/strategy.svg";
import thumbsUp from "../../assets/icons/thumbsUp.svg";

export default function Services() {
  return (
    <ServicesSection>
      <h2>Como podemos ajudar no seu negócio?</h2>
      <ServicesField>
        <ServicesCard>
          <Image src={bulb} alt="logo-bulb" />
          <h3>Consultoria de Marketing</h3>
          <p>
            A consultoria de marketing ajuda a desenvolver uma estratégia de
            marketing eficaz. de a ajudar os clientes.
          </p>
        </ServicesCard>
        <ServicesCard>
          <Image src={browser} alt="logo-browser" />
          <h3>Landing Page</h3>
          <p>
            A consultoria de marketing ajuda a desenvolver uma estratégia de
            marketing eficaz. de a ajudar os clientes.
          </p>
        </ServicesCard>
        <ServicesCard>
          <Image src={code} alt="logo-code" />
          <h3>Criação de sites/blog</h3>
          <p>
            A consultoria de marketing ajuda a desenvolver uma estratégia de
            marketing eficaz. de a ajudar os clientes.
          </p>
        </ServicesCard>
        <ServicesCard>
          <Image src={thumbsUp} alt="logo-thumbsUp" />
          <h3>Social Media</h3>
          <p>
            A consultoria de marketing ajuda a desenvolver uma estratégia de
            marketing eficaz. de a ajudar os clientes.
          </p>
        </ServicesCard>
        <ServicesCard>
          <Image src={strategy} alt="logo-strategy" />
          <h3>Tráfego Pago</h3>
          <p>
            A consultoria de marketing ajuda a desenvolver uma estratégia de
            marketing eficaz. de a ajudar os clientes.
          </p>
        </ServicesCard>
        <ServicesCard>
          <Image src={presentation} alt="logo-presentation" />
          <h3>Produção de conteúdo</h3>
          <p>
            A consultoria de marketing ajuda a desenvolver uma estratégia de
            marketing eficaz. de a ajudar os clientes.
          </p>
        </ServicesCard>
      </ServicesField>
    </ServicesSection>
  );
}

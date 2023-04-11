import Image from 'next/image';
import Link from 'next/link';
import { ServicesSection, ServicesField, ServicesCard } from './servicesStyle';

import browser from '../../assets/icons/landingPageIcon.svg';
import bulb from '../../assets/icons/marketingIcon.svg';
import code from '../../assets/icons/siteIcon.svg';
import presentation from '../../assets/icons/criacaoDeConteudoIcon.svg';
import strategy from '../../assets/icons/identidadeVisualIcon.svg';
import thumbsUp from '../../assets/icons/socialMediaIcon.svg';
import arrow from '../../assets/icons/arrow.svg';

export default function Services() {
  return (
    <ServicesSection id="services">
      <span>
        <hr />
        {`[ SERVIÇOS ]`}
        <hr />
      </span>
      <h2>Como podemos ajudar no seu negócio?</h2>
      <ServicesField>
        <Link href="/services/marketing">
          <ServicesCard data-aos="zoom-in">
            <Image src={bulb} alt="logo-bulb" height={36} />
            <h3>Consultoria de Marketing</h3>
            <p>
              A consultoria de marketing ajuda as empresas a atingir objetivos
              de negócios, como atrair novos clientes e fortalecer a sua marca.
            </p>
            <span>
              Saiba mais
              <Image src={arrow} alt="seta de saiba mais"></Image>
            </span>
          </ServicesCard>
        </Link>
        <Link href="services/landing_page">
          <ServicesCard data-aos="zoom-in">
            <Image src={browser} alt="logo-browser" />
            <h3>Landing Page</h3>
            <p>
              Uma landing page coverte os visitantes em leads, informações de
              contato de pessoas interessadas no produto ou serviço oferecido
              pela empresa.
            </p>
            <span>
              Saiba mais
              <Image src={arrow} alt="seta de saiba mais"></Image>
            </span>
          </ServicesCard>
        </Link>
        <Link href="services/criacao_de_sites">
          <ServicesCard data-aos="zoom-in">
            <Image src={code} alt="logo-code" />
            <h3>Criação de sites/blog</h3>
            <p>
              Os sites são utilizados para difundir informações, promover
              produtos e serviços, estabelecer uma presença online para a sua
              empresa.
            </p>
            <span>
              Saiba mais
              <Image src={arrow} alt="seta de saiba mais"></Image>
            </span>
          </ServicesCard>
        </Link>
        <Link href="services/social_media">
          <ServicesCard data-aos="zoom-in">
            <Image src={thumbsUp} alt="logo-thumbsUp" />
            <h3>Social Media</h3>
            <p>
              Social media é o uso das redes sociais como como o Facebook e o
              Instagram para promover o seu negócio ou marca e atrair novos
              clientes.
            </p>
            <span>
              Saiba mais
              <Image src={arrow} alt="seta de saiba mais"></Image>
            </span>
          </ServicesCard>
        </Link>
        <Link href="services/identidade_visual">
          <ServicesCard data-aos="zoom-in">
            <Image src={strategy} alt="logo-strategy" />
            <h3>Identidade Visual</h3>
            <p>
              É a forma como sua empresa ou marca é apresentada visualmente ao
              público. Inclui elementos como logotipos, tipografia, cores e
              design gráfico.
            </p>
            <span>
              Saiba mais
              <Image src={arrow} alt="seta de saiba mais"></Image>
            </span>
          </ServicesCard>
        </Link>
        <Link href="services/producao_de_conteudo">
          <ServicesCard data-aos="zoom-in">
            <Image src={presentation} alt="logo-presentation" />
            <h3>Produção de conteúdo</h3>
            <p>
              Produção e publicação de postagens nas redes sociais, com o
              objetivo de atrair e envolver seguidores e promover a sua marca ou
              negócio.
            </p>
            <span>
              Saiba mais
              <Image src={arrow} alt="seta de saiba mais"></Image>
            </span>
          </ServicesCard>
        </Link>
      </ServicesField>
    </ServicesSection>
  );
}

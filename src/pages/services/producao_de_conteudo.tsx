import {
  ServiceSection,
  ServiceContainer,
  TextAndImageContainer,
  ContentContainer,
  IconsContainer,
} from '../../components/ServicesPage/containerStyles';
import Image from 'next/image';
import BudgetButton from '../../components/BudgetButton/budgetButton';

import ProducaoDeConteudoImage from '../../assets/pages/producaoDeConteudoImage.png';
import engajamentoIcon from '../../assets/icons/producaoDeConteudoIcons/engajamentoIcon.svg';
import SEOIcon from '../../assets/icons/producaoDeConteudoIcons/SEOIcon.svg';
import autoridadeIcon from '../../assets/icons/producaoDeConteudoIcons/autoridadeIcon.svg';
import leadsIcon from '../../assets/icons/producaoDeConteudoIcons/leadsIcon.svg';

export default function ProducaoDeConteudo() {
  return (
    <ServiceSection>
      <ServiceContainer>
        <h1>Produção de conteúdo</h1>
        <hr />
        <TextAndImageContainer>
          <Image
            src={ProducaoDeConteudoImage}
            alt="producao-de-conteudo-image"
            placeholder="blur"
          />
          <div>
            <p>
              A produção de conteúdo é uma parte importante do marketing, pois
              permite que as empresas comuniquem sua mensagem a um público-alvo
              específico de maneira criativa e eficaz. O conteúdo pode ser
              produzido em vários formatos, incluindo textos, imagens, vídeos,
              áudio e muito mais.
            </p>
          </div>
        </TextAndImageContainer>
        <ContentContainer>
          <p>
            Existem várias razões pelas quais a sua empresa precise de produção
            de conteúdo. Algumas das principais razões incluem:
          </p>
          <IconsContainer>
            <div>
              <Image src={engajamentoIcon} alt="engajamento-icon" />
              <h3>Engajamento ao público</h3>
            </div>
            <div>
              <Image src={SEOIcon} alt="SEO-icon" />
              <h3>SEO</h3>
            </div>
            <div>
              <Image src={leadsIcon} alt="leads-icon" />
              <h3>Geração de leads</h3>
            </div>
            <div>
              <Image src={autoridadeIcon} alt="autoridade-icon" />
              <h3>Autoridade</h3>
            </div>
          </IconsContainer>
          <p>
            Nossa equipe é composta por profissionais experientes e criativos
            que trabalham em estreita colaboração com nossos clientes para criar
            conteúdo de alta qualidade que seja relevante para seu público-alvo
            e que ajude a estabelecer sua marca como líder em seu campo.
          </p>
        </ContentContainer>
        <BudgetButton />
      </ServiceContainer>
    </ServiceSection>
  );
}

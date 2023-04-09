import {
  ServiceSection,
  ServiceContainer,
  TextAndImageContainer,
  ContentContainer,
  CriacaoDeSitesContainer,
  StepsCard,
  CardImage,
} from '../../components/ServicesPage/containerStyles';
import Image from 'next/image';
import BudgetButton from '../../components/BudgetButton/budgetButton';

import CriacaoDeSitesImage from '../../assets/pages/criacaoDeSitesImage.png';
import TestsIcon from '../../assets/icons/testsIcon.svg';
import Code from '../../assets/icons/siteIcon.svg';
import Presentation from '../../assets/icons/criacaoDeConteudoIcon.svg';
import Head from 'next/head';

export default function CriacaoDeConteudo() {
  return (
    <>
      <Head>
        <title>Criação de sites | Equipe Decola</title>
      </Head>
      <ServiceSection>
        <ServiceContainer>
          <h1>Criação de sites/blog</h1>
          <hr />
          <TextAndImageContainer>
            <Image
              src={CriacaoDeSitesImage}
              alt="criação-de-sites-image"
              placeholder="blur"
            />
            <div>
              <p>
                A criação de um site pode ser um processo complexo que envolve a
                escolha do domínio, a criação de conteúdo e a programação da
                estrutura e funcionalidades do site.
              </p>
              <p>
                A nossa equipe irá se reunir com o cliente para entender o
                objetivo do site, o público-alvo e as expectativas em relação ao
                projeto. Também é importante discutir orçamento e prazos.
              </p>
            </div>
          </TextAndImageContainer>
          <ContentContainer>
            <p>
              Com base nas informações reunidas na reunião inicial, nos iremos
              criar um plano de projeto detalhado, incluindo o conteúdo, as
              funcionalidades, a estrutura e o design do site. Este plano será
              revisado e aprovado pelo cliente antes de avançar para as próximas
              etapas:
            </p>
            <CriacaoDeSitesContainer>
              <StepsCard>
                <CardImage>
                  <div>
                    <Image src={Presentation} alt="presentation-icon" />
                  </div>
                  <h3>Criação de conteúdo.</h3>
                </CardImage>
                <p>
                  A nossa equipe pode trabalhar com o cliente para criar o
                  conteúdo do site realizando pesquisas para garantir que o
                  conteúdo seja relevante e otimizado para mecanismos de busca.
                </p>
              </StepsCard>
              <StepsCard>
                <CardImage>
                  <div>
                    <Image src={Code} alt="code-icon" />
                  </div>
                  <h3>Design e programação.</h3>
                </CardImage>
                <p>
                  Depois que o conteúdo estiver pronto, a nossa equipe irá
                  começar a trabalhar na estrutura e nas funcionalidades do
                  site. Como também, a programação de elementos interativos,
                  como formulários de contato ou botões de compra.
                </p>
              </StepsCard>
              <StepsCard>
                <CardImage>
                  <div>
                    <Image src={TestsIcon} alt="tests-icon" />
                  </div>

                  <h3>Testes e lançamento.</h3>
                </CardImage>
                <p>
                  Antes de lançar o site, a nossa equipe irá realizar testes
                  para garantir que tudo esteja funcionando corretamente para
                  garantir a compatibilidade e acessibilidade. Quando tudo
                  estiver pronto, o site será lançado e tornado acessível ao
                  público.
                </p>
              </StepsCard>
            </CriacaoDeSitesContainer>
            <p>
              Depois que o site estiver no ar, nós podemos oferecer serviços de
              manutenção para garantir que o site esteja sempre atualizado e
              funcionando corretamente. Isso pode incluir a realização de
              backups regulares, correção de erros e atualização de conteúdo.
            </p>
          </ContentContainer>
          <BudgetButton />
        </ServiceContainer>
      </ServiceSection>
    </>
  );
}

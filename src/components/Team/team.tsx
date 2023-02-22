import Image from 'next/image';
import { CardsContainer, TeamContainer, Card } from './teamStyle';

import jp from '../../assets/jp.png';
import goreh from '../../assets/adriano.png';
import caleb from '../../assets/cleb.png';

import black from '../../assets/vetorBlack.svg';
import vetorBlue from '../../assets/vetorBlue.svg';
import vetorGreen from '../../assets/vetorGreen.svg';

export default function Team() {
  return (
    <TeamContainer>
      <h1>Conheça a nossa equipe.</h1>
      <p>
        Nossa equipe de profissionais altamente treinados trabalhará com você
        para entender sua empresa e seu mercado, e desenvolver uma estratégia
        personalizada para atingir seus objetivos.
      </p>
      <CardsContainer>
        <Card>
          <Image src={black} alt="" />
          <Image
            src={jp}
            alt="Foto do CEO da Equipe Decola"
            className="JPImage"
            placeholder="blur"
          />
          <h2>José Pires</h2>
          <span>Chief Executive Officer (CEO)</span>
        </Card>
        <Card>
          <Image src={vetorBlue} alt="" />
          <Image
            src={caleb}
            alt="Foto do desenvolvedor Front-end"
            className="ClebImage"
            placeholder="blur"
          />
          <h2>Caleb Lima</h2>
          <span>Front-end Developer</span>
        </Card>
        <Card>
          <Image src={vetorGreen} alt="" />
          <Image
            src={goreh}
            alt="Foto do desenvolvedor Back-end"
            className="GorehImage"
            placeholder="blur"
          />
          <h2>Adriano Rodrigues</h2>
          <span>Back-end Developer</span>
        </Card>
      </CardsContainer>
    </TeamContainer>
  );
}

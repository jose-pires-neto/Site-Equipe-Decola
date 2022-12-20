import { AboutSection, AboutContent } from "./aboutStyle";
import Image from "next/image";
import AboutImage from "../../assets/AboutImage.svg";

export default function About() {
  return (
    <AboutSection>
      <Image alt="abut-me" src={AboutImage} />
      <AboutContent>
        <h2>Entenda quem somos e por que existimos.</h2>
        <p>
          Somos a Equipe Decola. Uma empresa especializada em serviços de
          marketing, melhorando os resultados dos negócios com planos e
          estratégias personalizadas de acordo com o perfil de cada empresa
        </p>
        <p>
          Acreditamos que o sucesso do nosso negócio depende do sucesso de
          nossos clientes. Por isso, nos dedicamos a fornecer soluções de
          marketing de alta qualidade que ajudam nossos clientes a atingir seus
          objetivos de negócios e crescer.
        </p>
      </AboutContent>
    </AboutSection>
  );
}

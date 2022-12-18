import Image from "next/image";
import logo from "../assets/logo.svg";

export default function Home() {
  return (
    <>
      <header>
        <Image src={logo} alt="Logo da Equipe Decola"></Image>
        <nav>
          <ul>
            <li>Início</li>
            <li>Sobre</li>
            <li>Serviços</li>
            <li>Depoimentos</li>
          </ul>
        </nav>
        <button type="button">FAÇA O SEU ORÇAMENTO</button>
      </header>
      <main>
        <section>
          <h1>Marketing simplicado para a sua empresa</h1>
          <p>
            Os serviços da Equipe Decola vão além do marketing, traçamos as
            melhores estratégias para garantir o crescimento de longo prazo do
            seu negócio.
          </p>
        </section>
      </main>
    </>
  );
}

import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { Header, Wrapper } from "../styles/_app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Header>
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
      </Header>

      <Component {...pageProps} />
    </Wrapper>
  );
}

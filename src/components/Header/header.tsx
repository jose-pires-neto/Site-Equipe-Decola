import Image from "next/image";
import logo from "../../assets/logo.svg";
import { HeaderStyle } from "./headerStyle";

export function Header() {
  return (
    <HeaderStyle>
      <Image src={logo} alt="Logo da Equipe Decola" />
      <nav>
        <ul>
          <li>Início</li>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Depoimentos</li>
        </ul>
      </nav>
      <button type="button">FAÇA O SEU ORÇAMENTO</button>
    </HeaderStyle>
  );
}

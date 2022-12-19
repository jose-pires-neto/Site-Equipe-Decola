import Image from "next/image";
import logo from "../../assets/logo.svg";
import { HeaderStyle, Navbar, Button } from "./headerStyle";

export function Header() {
  return (
    <HeaderStyle>
      <div>
        <Image src={logo} alt="Logo da Equipe Decola" />
        <Navbar>
          <li>Início</li>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Depoimentos</li>
        </Navbar>
        <Button type="button">FAÇA O SEU ORÇAMENTO</Button>
      </div>
    </HeaderStyle>
  );
}

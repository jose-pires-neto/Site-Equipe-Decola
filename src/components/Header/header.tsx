import { useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import {
  HeaderStyle,
  Navbar,
  Button,
  Menu,
  Hamburger,
  Container,
} from "./headerStyle";

export function Header() {
  const [menuOn, setMenuOn] = useState(false);
  return (
    <HeaderStyle>
      <Container>
        <Image src={logo} alt="Logo da Equipe Decola" />
        <Navbar>
          <li>Início</li>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Depoimentos</li>
        </Navbar>
        <Button type="button">FAÇA O SEU ORÇAMENTO</Button>
        <Menu
          Appearance={menuOn ? "fullScreen" : "hidden"}
          onClick={() => setMenuOn(!menuOn)}
        >
          <Hamburger>
            <div></div>
            <div></div>
            <div></div>
          </Hamburger>
        </Menu>
      </Container>
    </HeaderStyle>
  );
}

import { useState } from "react";
import { Turn } from "hamburger-react";
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
        {!menuOn && <Image src={logo} alt="Logo da Equipe Decola" />}
        <Navbar isHidden={menuOn ? "false" : "true"}>
          <li>Início</li>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Depoimentos</li>
        </Navbar>
        <Button type="button">FAÇA O SEU ORÇAMENTO</Button>
        <Menu Appearance={menuOn ? "fullScreen" : "hidden"}>
          <Hamburger onClick={() => setMenuOn(!menuOn)}>
            <Turn color="#FFFFFF" />
          </Hamburger>
        </Menu>
      </Container>
    </HeaderStyle>
  );
}

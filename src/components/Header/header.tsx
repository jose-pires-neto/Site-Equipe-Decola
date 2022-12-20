import { useState } from "react";
import Image from "next/image";

import { Turn } from "hamburger-react";
import logo from "../../assets/logo.svg";
import instagramIcon from "../../assets/instagram 1.svg";
import facebookIcon from "../../assets/facebook 1.svg";
import youtubeIcon from "../../assets/youtube 1.svg";

import {
  HeaderStyle,
  Navbar,
  Button,
  Menu,
  Hamburger,
  Container,
  Footer,
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
          <Footer>
            <Image src={instagramIcon} alt="Instagram Icon" />
            <Image src={facebookIcon} alt="Facebook Icon" />
            <Image src={youtubeIcon} alt="Youtube Icon" />
          </Footer>
        </Menu>
      </Container>
    </HeaderStyle>
  );
}

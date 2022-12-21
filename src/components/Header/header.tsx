import { useState } from "react";
import Image from "next/image";
import { Turn } from "hamburger-react";

import logo from "../../assets/logo.svg";
import whiteLogo from "../../assets/logo-branca.svg";

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
  ButtonMenu,
} from "./headerStyle";

export function Header() {
  const [menuOn, setMenuOn] = useState(false);
  return (
    <HeaderStyle>
      <Container>
        <Image src={logo} alt="Logo da Equipe Decola" />
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
          {menuOn && (
            <>
              <Image src={whiteLogo} alt="Logo da Decola branca" />
              <Navbar isHidden="false">
                <li>Início</li>
                <li>Sobre</li>
                <li>Serviços</li>
                <li>Depoimentos</li>
                <ButtonMenu>FAÇA O SEU ORÇAMENTO</ButtonMenu>
                <Footer>
                  <Image src={instagramIcon} alt="Instagram Icon" />
                  <Image src={facebookIcon} alt="Facebook Icon" />
                  <Image src={youtubeIcon} alt="Youtube Icon" />
                </Footer>
              </Navbar>
            </>
          )}
        </Menu>
      </Container>
    </HeaderStyle>
  );
}

import { useState, useEffect } from "react";
import Image from "next/image";
import { Turn } from "hamburger-react";
import Link from "next/link";

import logo from "../../assets/logo.svg";
import whiteLogo from "../../assets/logo-branca.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import youtubeIcon from "../../assets/icons/youtube.svg";
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
  const [scroll, setScroll] = useState(0);
  const [menuOn, setMenuOn] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderStyle color={scroll > 50 ? "BrandBlue" : "Blue"}>
      <Container>
        <Link href="/">
          <Image
            src={scroll > 50 ? whiteLogo : logo}
            alt="Logo da Equipe Decola"
          />
        </Link>
        <Navbar isHidden={menuOn ? "false" : "true"}>
          <Link href="/">
            <li>Início</li>
          </Link>
          <Link href="#about">
            <li>Sobre</li>
          </Link>
          <Link href="#services">
            <li>Serviços</li>
          </Link>
          <li>Depoimentos</li>
        </Navbar>
        <Button type="button" color={scroll > 50 ? "White" : "BrandBlue"}>
          FAÇA O SEU ORÇAMENTO
        </Button>
        <Menu Appearance={menuOn ? "fullScreen" : "hidden"}>
          <Hamburger
            color={scroll < 50 ? "#0090A5" : "white"}
            onClick={() => setMenuOn(!menuOn)}
          >
            <Turn color={scroll < 50 ? "#0090A5" : "white"} />
          </Hamburger>

          {menuOn && (
            <>
              <Image src={whiteLogo} alt="Logo da Decola branca" />
              <Navbar isHidden="false">
                <li>Início</li>
                <li>Sobre</li>
                <Link href="#service">
                  <li>Serviços</li>
                </Link>
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

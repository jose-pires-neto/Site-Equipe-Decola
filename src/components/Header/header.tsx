import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Turn } from 'hamburger-react';
import Link from 'next/link';

import logo from '../../assets/logo.png';
import whiteLogo from '../../assets/logo-branca2.png';
import instagramIcon from '../../assets/icons/instagram.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import youtubeIcon from '../../assets/icons/youtube.svg';
import {
  HeaderStyle,
  Navbar,
  Button,
  Menu,
  Hamburger,
  Container,
  Footer,
  ButtonMenu,
} from './headerStyle';

type LinksNavProps = {
  name: string;
  path: string;
};

const linksNav: LinksNavProps[] = [
  {
    name: 'Início',
    path: '/',
  },
  {
    name: 'Sobre',
    path: '/#about',
  },
  {
    name: 'Serviços',
    path: '/#services',
  },
  {
    name: 'Depoimentos',
    path: '/',
  },
];

export function Header() {
  const [scroll, setScroll] = useState(0);
  const [menuOn, setMenuOn] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOn) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOn]);

  return (
    <HeaderStyle color={scroll > 50 ? 'BrandBlue' : 'Blue'}>
      <Container>
        <Link href="/">
          <Image
            src={scroll > 50 ? whiteLogo : logo}
            alt="Logo da Equipe Decola"
            width={160}
            height={64}
          />
        </Link>
        <Navbar isHidden={menuOn ? 'false' : 'true'}>
          {linksNav.map(({ name, path }) => (
            <li key={name}>
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </Navbar>
        <Button type="button" color={scroll > 50 ? 'White' : 'BrandBlue'}>
          <Link href="https://api.whatsapp.com/send?phone=5591984490280">
            FAÇA O SEU ORÇAMENTO
          </Link>
        </Button>
        <Menu Appearance={menuOn ? 'fullScreen' : 'hidden'}>
          <Hamburger
            onClick={() => {
              setMenuOn(!menuOn);
            }}
          >
            <Turn
              color={scroll > 50 || menuOn ? 'white' : '#0090A5'}
              toggled={menuOn}
            />
          </Hamburger>

          {menuOn && (
            <>
              <Image
                src={whiteLogo}
                alt="Logo da Decola branca"
                width={160}
                height={64}
              />
              <Navbar isHidden="false">
                <Link
                  href="/"
                  onClick={() => {
                    setMenuOn(!menuOn);
                  }}
                >
                  <li>Início</li>
                </Link>
                <Link
                  href="/#about"
                  onClick={() => {
                    setMenuOn(!menuOn);
                  }}
                >
                  <li>Sobre</li>
                </Link>
                <Link
                  href="/#services"
                  onClick={() => {
                    setMenuOn(!menuOn);
                  }}
                >
                  <li>Serviços</li>
                </Link>
                <li>Depoimentos</li>
                <Link
                  href="https://api.whatsapp.com/send?phone=5591984490280"
                  onClick={() => {
                    setMenuOn(!menuOn);
                  }}
                >
                  <ButtonMenu>FAÇA O SEU ORÇAMENTO</ButtonMenu>
                </Link>
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

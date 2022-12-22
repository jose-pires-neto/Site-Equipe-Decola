import {
  FooterContent,
  LogoAndCopyright,
  SocialMediaAndCNPJ,
} from "./footerStyle";
import Image from "next/image";
import LogoDecola from "../../assets/logo-branca.svg";
import instagramIcon from "../../assets/instagram 1.svg";
import facebookIcon from "../../assets/facebook 1.svg";
import youtubeIcon from "../../assets/youtube 1.svg";

export default function Footer() {
  return (
    <FooterContent>
      <LogoAndCopyright>
        <Image src={LogoDecola} alt="logo-equipe-decola" />
        <p>©2022 - Equipe Decola.</p>
        <p>Todos os direitos reservados.</p>
      </LogoAndCopyright>
      <SocialMediaAndCNPJ>
        <div>
          <Image src={instagramIcon} alt="Instagram Icon" />
          <Image src={facebookIcon} alt="Facebook Icon" />
          <Image src={youtubeIcon} alt="Youtube Icon" />
        </div>
        <p>CNPJ: 47.887.795/0001-65</p>
      </SocialMediaAndCNPJ>
    </FooterContent>
  );
}

import {
  FooterContent,
  LogoAndCopyright,
  SocialMediaAndCNPJ,
} from "./footerStyle";
import Image from "next/image";
import LogoDecola from "../../assets/logo-branca.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import youtubeIcon from "../../assets/icons/youtube.svg";
import Link from "next/link";

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
          <Link
            href={"https://www.instagram.com/equipedecola/"}
            target="_blank"
          >
            <Image src={instagramIcon} alt="Instagram Icon" />
          </Link>
          <Link
            href={
              "https://web.facebook.com/profile.php?id=100088935826965&is_tour_dismissed=true"
            }
            target="_blank"
          >
            <Image src={facebookIcon} alt="Facebook Icon" />
          </Link>
          <Link
            href={"https://www.youtube.com/channel/UCibK4kbYrAKj91roWYkOJug"}
            target="_blank"
          >
            <Image src={youtubeIcon} alt="Youtube Icon" />
          </Link>
        </div>
        <p>CNPJ: 47.887.795/0001-65</p>
      </SocialMediaAndCNPJ>
    </FooterContent>
  );
}

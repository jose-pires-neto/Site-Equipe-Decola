import { ContactSection, ContactContent } from "./contactStyle";
import Image from "next/image";
import ContactImage from "../../assets/contactUs.png";
import WhatsIcon from "../../assets/icons/whatsIcon.svg";

export default function Contact() {
  return (
    <ContactSection>
      <ContactContent>
        <h2>Entre em contato com a gente!</h2>
        <p>Paragominas - PA</p>
        <p>equipedecola.adm@gmail.com</p>
        <button type="button">
          <Image src={WhatsIcon} alt="whats-icon" />
          Faça o seu orçamento
        </button>
      </ContactContent>
      <Image src={ContactImage} alt="conteact-image" />
    </ContactSection>
  );
}

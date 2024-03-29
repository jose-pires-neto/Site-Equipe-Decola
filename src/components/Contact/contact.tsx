import { ContactSection, ContactContent } from './contactStyle';
import Image from 'next/image';
import ContactImage from '../../assets/contactUs.png';
import WhatsIcon from '../../assets/icons/whatsIcon.svg';
import MapIcon from '../../assets/icons/mapIcon.svg';
import EmailIcon from '../../assets/icons/emailIcon.svg';
import Link from 'next/link';

export default function Contact() {
  return (
    <ContactSection>
      <ContactContent data-aos="zoom-in-up">
        <span>
          {`CONTATO ]`}
          <hr />
        </span>
        <h2>Entre em contato com a gente!</h2>
        <div>
          <Image src={MapIcon} alt="map-icon" />
          <p>Paragominas - PA</p>
        </div>
        <div>
          <Image src={EmailIcon} alt="email-icon" />
          <p>equipedecola.adm@gmail.com</p>
        </div>
        <Link
          href="https://api.whatsapp.com/send?phone=5591984490280"
          target="_blank"
        >
          <button type="button">
            <Image src={WhatsIcon} alt="whats-icon" />
            Faça o seu orçamento
          </button>
        </Link>
      </ContactContent>
      <Image
        src={ContactImage}
        alt="contact-image"
        placeholder="blur"
        data-aos="zoom-in-up"
        className="contact-image"
      />
    </ContactSection>
  );
}

import {
  ClientsSection,
  ClientsField,
  ClientsContent,
  ClientsLogos,
} from './clientsStyle';

import clientOne from '../../assets/cliente1.jpg';
import clientTwo from '../../assets/cliente2.jpg';
import clientThree from '../../assets/cliente3.jpg';
import clientFour from '../../assets/cliente4.jpg';

import Image from 'next/image';

export default function Clients() {
  return (
    <ClientsSection className="custom-shape-divider-top">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="shape-fill"
        ></path>
      </svg>

      <ClientsField>
        <span>
          <hr />
          {`[ CLIENTES ]`}
          <hr />
        </span>
        <h1>Nossos clientes, parceiros de sucesso.</h1>
        <ClientsContent>
          <ClientsLogos>
            <Image src={clientOne} alt="" />
          </ClientsLogos>
          <ClientsLogos>
            <Image src={clientTwo} alt="" />
          </ClientsLogos>
          <ClientsLogos>
            <Image src={clientThree} alt="" />
          </ClientsLogos>
          <ClientsLogos>
            <Image src={clientFour} alt="" />
          </ClientsLogos>
        </ClientsContent>
      </ClientsField>
    </ClientsSection>
  );
}

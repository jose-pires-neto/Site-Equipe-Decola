import { useEffect } from 'react';
import About from '../components/AboutUs/about';
import Clients from '../components/Clients/clients';
import Contact from '../components/Contact/contact';
import Decola from '../components/Decola/decola';
import Hero from '../components/Hero/hero';
import Services from '../components/ServicesSection/service';
import Head from 'next/head';
import Team from '../components/Team/team';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1300, once: true });
  }, []);

  return (
    <>
      <Head>
        <title>Equipe Decola</title>
      </Head>
      <main style={{ backgroundColor: '#F0F8FF' }}>
        <Hero />
        <About />
        <Services />
        {/* <Clients /> */}
        <Decola />
        <Team />
        <Contact />
      </main>
    </>
  );
}

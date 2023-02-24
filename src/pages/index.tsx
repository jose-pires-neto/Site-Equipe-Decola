import About from '../components/AboutUs/about';
import Clients from '../components/Clients/clients';
import Contact from '../components/Contact/contact';
import Decola from '../components/Decola/decola';
import Hero from '../components/Hero/hero';
import Services from '../components/ServicesSection/service';
import Head from 'next/head';
import Team from '../components/Team/team';

export default function Home() {
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

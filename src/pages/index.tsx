import About from '../components/AboutUs/about';
import Contact from '../components/Contact/contact';
import Hero from '../components/Hero/hero';
import Services from '../components/ServicesSection/service';
import Head from 'next/head';

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
        <Contact />
      </main>
    </>
  );
}

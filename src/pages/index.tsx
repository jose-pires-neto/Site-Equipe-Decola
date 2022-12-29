import About from "../components/AboutUs/about";
import Contact from "../components/Contact/contact";
import Hero from "../components/Hero/hero";
import Services from "../components/ServicesSection/service";
import Info from "../components/Info/info";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        {/* <section>
          <h1>Marketing simplicado para a sua empresa</h1>
          <p>
            Os serviços da Equipe Decola vão além do marketing, traçamos as
            melhores estratégias para garantir o crescimento de longo prazo do
            seu negócio.
          </p>
        </section> */}

        {/* <section>
          <div>Clientes atentidos</div>
          <div>Trabalhos concluídos</div>
          <div>Meses no mercado</div>
        </section> */}
        <Info />
        <Services />
        <About />
        <Contact />
      </main>
    </>
  );
}

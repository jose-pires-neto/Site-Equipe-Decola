import About from "../components/AboutUs/about";
import Contact from "../components/Contact/contact";
import Services from "../components/Services/service";

export default function Home() {
  return (
    <>
      <main>
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
        {/* <Services /> */}
        <About />
        <Contact />
      </main>
    </>
  );
}

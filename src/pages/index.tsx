import Image from "next/image";
import logo from "../assets/logo.svg";
import Services from "../components/Services/service";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <h1>Marketing simplicado para a sua empresa</h1>
          <p>
            Os serviços da Equipe Decola vão além do marketing, traçamos as
            melhores estratégias para garantir o crescimento de longo prazo do
            seu negócio.
          </p>
        </section>

        <section>
          <div>Clientes atentidos</div>
          <div>Trabalhos concluídos</div>
          <div>Meses no mercado</div>
        </section>

        <Services />

        <section>
          <Image alt="abut-me" src={logo} width={500} height={500} />
          <h2>Entenda quem somos e por que existimos.</h2>
          <p>
            Somos a Equipe Decola. Uma empresa especializada em serviços de
            marketing, melhorando os resultados dos negócios com planos e
            estratégias personalizadas de acordo com o perfil de cada empresa
          </p>
          <p>
            Acreditamos que o sucesso do nosso negócio depende do sucesso de
            nossos clientes. Por isso, nos dedicamos a fornecer soluções de
            marketing de alta qualidade que ajudam nossos clientes a atingir
            seus objetivos de negócios e crescer.
          </p>
        </section>

        <section>
          <h2>Entre em contato com a gente!</h2>
          <p>Paragominas - PA</p>
          <p>equipedecola.adm@gmail.com</p>
          <button type="button">Faça o seu orçamento</button>
        </section>
      </main>
    </>
  );
}

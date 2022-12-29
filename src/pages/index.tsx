import About from "../components/AboutUs/about";
import Contact from "../components/Contact/contact";
import Hero from "../components/Hero/hero";
import Services from "../components/Services/service";
import Info from "../components/Info/info";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        {/* <Info /> */}
        <Services />
        <About />
        <Contact />
      </main>
    </>
  );
}

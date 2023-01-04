import About from "../components/AboutUs/about";
import Contact from "../components/Contact/contact";
import Hero from "../components/Hero/hero";
import Services from "../components/ServicesSection/service";
import Info from "../components/Info/info";

export default function Home() {
  return (
    <>
      <main style={{ backgroundColor: "#F0F8FF" }}>
        <Hero />
        <Info />
        <Services />
        <About />
        <Contact />
      </main>
    </>
  );
}

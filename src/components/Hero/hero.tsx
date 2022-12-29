import Image from "next/image";
import { SlideContent } from "./heroStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

import carrossel1 from "../../assets/gif1.gif";
import carrossel2 from "../../assets/carrossel2.png";
import carrossel3 from "../../assets/carrossel3.png";

export default function Hero() {
  return (
    <Carousel>
      <Carousel.Item interval={15000}>
        <Image
          src={carrossel1}
          alt="First slide"
          style={{ height: "96vh", width: "100vw" }}
        />
        <Carousel.Caption>
          <SlideContent>
            <h1>Marketing simplificado para a sua empresa.</h1>
            <h3>
              Traçamos as melhores estratégias para garantir que o seu negócio
              decole.
            </h3>
          </SlideContent>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          src={carrossel2}
          alt="Second slide"
          style={{ height: "96vh", width: "100vw" }}
        />
        <Carousel.Caption>
          <SlideContent>
            <h1>Expanda a sua presença nas redes sociais.</h1>
            <button>{`SAIBA MAIS >>>`}</button>
          </SlideContent>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          src={carrossel3}
          alt="Third slide"
          style={{ height: "96vh", width: "100vw" }}
        />
        <Carousel.Caption>
          <SlideContent>
            <h1>Conquiste a sua visibilidade na web.</h1>
            <button>{`SAIBA MAIS >>>`}</button>
          </SlideContent>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

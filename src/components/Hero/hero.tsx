import Image from "next/image";
import { HeroStyle } from "./heroStyle";
import Slider from "react-slick";

import carrossel1 from "../../assets/gif1.gif";
import carrossel2 from "../../assets/carrossel2.png";
import carrossel3 from "../../assets/carrossel3.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    pauseOnHover: true,
  };

  return (
    <HeroStyle>
      <Slider {...settings}>
        <Image src={carrossel1} alt="" />

        <Image src={carrossel2} alt="" />

        <Image src={carrossel3} alt="" />
      </Slider>
    </HeroStyle>
  );
}

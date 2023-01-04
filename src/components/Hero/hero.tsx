import { useEffect, useState } from "react";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Carousel, SlideContent, SlideCaption } from "./heroStyle";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import carrossel1 from "../../assets/gif1.gif";
import carrossel2 from "../../assets/carrossel2.png";
import carrossel3 from "../../assets/carrossel3.png";

export default function Hero() {
  const [navigation, setNavigation] = useState<boolean | number>(true);

  useEffect(() => {
    function handleResize() {
      setNavigation(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Carousel>
      <style>{`
        .swiper-button-prev {
          color: #ffff;
        }
        
        .swiper-button-next {
          color: #ffff;
        }
      `}</style>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={navigation <= 768 ? false : true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 15000,
          disableOnInteraction: true,
        }}
      >
        <SwiperSlide>
          <SlideContent>
            <SlideCaption ColorText={"lightBlue"}>
              <h1>Marketing simplificado para a sua empresa.</h1>
              <h3>
                Traçamos as melhores estratégias para garantir que o seu negócio
                decole.
              </h3>
            </SlideCaption>
            <Image src={carrossel1} alt="" />
          </SlideContent>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent>
            <SlideCaption ColorText={"white"}>
              <h1>Expanda a sua presença nas redes sociais.</h1>
            </SlideCaption>
            <Image src={carrossel2} alt=""></Image>
          </SlideContent>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent>
            <SlideCaption ColorText={"brandBlue"}>
              <h1>Conquiste a sua visibilidade na web.</h1>
            </SlideCaption>
            <Image src={carrossel3} alt=""></Image>
          </SlideContent>
        </SwiperSlide>
      </Swiper>
    </Carousel>
  );
}

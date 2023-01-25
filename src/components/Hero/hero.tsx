import Image from 'next/image';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Carousel, SlideContent, SlideCaption, ButtonSlide } from './heroStyle';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import carrossel1 from '../../assets/gif1.gif';
import carrossel2 from '../../assets/carrossel2.png';
import carrossel3 from '../../assets/carrossel3.png';

import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <Carousel>
        <style>{`
        .swiper-button-prev {
          color: #ffff;
        }
        
        .swiper-button-next {
          color: #ffff;
        }

        @media (max-width: 768px) {
          .swiper-button-prev {
            display: none;
          }
          
          .swiper-button-next {
            display: none;
          }
        }
      `}</style>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 15000,
            disableOnInteraction: true,
          }}
        >
          <SwiperSlide>
            <SlideContent>
              <SlideCaption ColorText={'lightBlue'}>
                <h1>Marketing simplificado para a sua empresa.</h1>
                <h3>
                  Traçamos as melhores estratégias para garantir que o seu
                  negócio decole.
                </h3>
              </SlideCaption>
              <video autoPlay muted loop>
                <source src="/video.mp4" type="video/mp4" />
              </video>
              {/* <Image src={carrossel1} alt="" /> */}
            </SlideContent>
          </SwiperSlide>
          <SwiperSlide>
            <SlideContent>
              <SlideCaption ColorText={'white'}>
                <h1>Expanda a sua presença nas redes sociais.</h1>
                <Link href="/services/social_media">
                  <ButtonSlide
                    backgroundColor={'blue'}
                  >{`SAIBA MAIS >>>`}</ButtonSlide>
                </Link>
              </SlideCaption>
              <Image src={carrossel2} alt=""></Image>
            </SlideContent>
          </SwiperSlide>
          <SwiperSlide>
            <SlideContent>
              <SlideCaption ColorText={'brandBlue'}>
                <h1>Conquiste a sua visibilidade na web.</h1>
                <hr />
                <Link href="/services/landing_page">
                  <ButtonSlide
                    backgroundColor={'transparent'}
                  >{`SAIBA MAIS >>>`}</ButtonSlide>
                </Link>
              </SlideCaption>
              <Image src={carrossel3} alt=""></Image>
            </SlideContent>
          </SwiperSlide>
        </Swiper>
      </Carousel>
    </>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

export function FantartCarousel() {
  const images = [
    {
      id: 1,
      url: "/assets/fanarts/1.jpg",
      link: "https://twitter.com/davidsuzu/status/1788406912691658974",
    },
    {
      id: 2,
      url: "/assets/fanarts/2.jpg",
      link: "https://twitter.com/_SlashEX_/status/1788091585114026421/photo/1",
    },
    {
      id: 3,
      url: "/assets/fanarts/3.jpg",
      link: "https://twitter.com/Gaby_Joestar/status/1786862628305797164",
    },
    {
      id: 4,
      url: "/assets/fanarts/4.jpg",
      link: "https://twitter.com/0HatMaster0/status/1788397126256635968",
    },
    {
      id: 5,
      url: "/assets/fanarts/5.jpg",
      link: "https://twitter.com/lp0000_k/status/1786557839122813373",
    },
    {
      id: 6,
      url: "/assets/fanarts/6.jpg",
      link: "https://twitter.com/_Mewth/status/1786557522075156917",
    },
    {
      id: 7,
      url: "/assets/fanarts/7.jpg",
      link: "https://twitter.com/estebaneishon1/status/1786582786687574094",
    },
    {
      id: 8,
      url: "/assets/fanarts/8.jpg",
      link: "https://twitter.com/crisosstomo_/status/1784339008497111332",
    },
    {
      id: 9,
      url: "/assets/fanarts/9.jpg",
      link: "https://twitter.com/0HatMaster0/status/1786498188951654867",
    },
    {
      id: 10,
      url: "/assets/fanarts/10.jpg",
      link: "https://twitter.com/davidsuzu/status/1787346973634306551/photo/1",
    },
    {
      id: 11,
      url: "/assets/fanarts/11.jpg",
      link: "https://twitter.com/DayxShocker/status/1785350604610498731",
    },
    {
      id: 12,
      url: "/assets/fanarts/12.jpg",
      link: "https://twitter.com/HikariLuzW/status/1784605927783403822",
    },
  ];
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <a href={image.link} target="_blank" rel="noopener noreferrer">
            <img src={image.url} alt={`Fanart ${image.id}`} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

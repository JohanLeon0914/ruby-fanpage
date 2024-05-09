import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

export function FantartCarousel() {
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
      <SwiperSlide className="w-[300px] h-[300px]">
        <a href="https://twitter.com/davidsuzu/status/1788406912691658974">
          <img src="/assets/fanarts/1.jpg" />
        </a>
      </SwiperSlide>
      <SwiperSlide className="w-[300px] h-[300px]">
        <a href="https://twitter.com/_SlashEX_/status/1788091585114026421/photo/1">
          <img src="/assets/fanarts/2.jpg" />
        </a>
      </SwiperSlide>
      <SwiperSlide className="w-[300px] h-[300px]">
        <a href="https://twitter.com/Gaby_Joestar/status/1786862628305797164" target="_BLANK">
          <img src="/assets/fanarts/3.jpg" />
        </a>
      </SwiperSlide>
      <SwiperSlide className="w-[300px] h-[300px]">
        <a href="https://twitter.com/0HatMaster0/status/1788397126256635968" target="_BLANK">
          <img src="/assets/fanarts/4.jpg" />
        </a>
      </SwiperSlide>
      <SwiperSlide className="w-[300px] h-[300px]">
        <a href="https://twitter.com/lp0000_k/status/1786557839122813373" target="_BLANK">
          <img src="/assets/fanarts/5.jpg" />
        </a>
      </SwiperSlide>
      <SwiperSlide className="w-[300px] h-[300px]">
        <a href="https://twitter.com/_Mewth/status/1786557522075156917" target="_BLANK">
          <img src="/assets/fanarts/6.jpg" />
        </a>
      </SwiperSlide>
      <SwiperSlide className="w-[300px] h-[300px]">
        <a href="https://twitter.com/estebaneishon1/status/1786582786687574094" target="_BLANK">
          <img src="/assets/fanarts/7.jpg" />
        </a>
      </SwiperSlide>
      <SwiperSlide className="w-[300px] h-[300px]">
        <a href="https://twitter.com/crisosstomo_/status/1784339008497111332" target="_BLANK">
          <img src="/assets/fanarts/8.jpg" />
        </a>
      </SwiperSlide>
      <SwiperSlide className="w-[300px] h-[300px]">
        <a href="https://twitter.com/0HatMaster0/status/1786498188951654867" target="_BLANK">
          <img src="/assets/fanarts/9.jpg" />
        </a>
      </SwiperSlide>
      <SwiperSlide className="w-[300px] h-[300px]">
        <a href="https://twitter.com/davidsuzu/status/1787346973634306551/photo/1" target="_BLANK">
          <img src="/assets/fanarts/10.jpg" />
        </a>
      </SwiperSlide>
      <SwiperSlide className="w-[300px] h-[300px]">
        <a href="https://twitter.com/DayxShocker/status/1785350604610498731" target="_BLANK">
          <img src="/assets/fanarts/11.jpg" />
        </a>
      </SwiperSlide>
      <SwiperSlide className="w-[300px] h-[300px]">
        <a href="https://twitter.com/HikariLuzW/status/1784605927783403822" target="_BLANK">
          <img src="/assets/fanarts/12.jpg" />
        </a>
      </SwiperSlide>
    </Swiper>
  );
}

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export function Carousel() {
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <img src="/assets/ruby1.jpg" className='max-h-[900px] w-full' alt="ruby_carrousel" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/horario.jpg" className='max-h-[900px] w-full' alt="ruby_carrousel" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/ruby2.jpg" className='max-h-[900px] w-full' alt="ruby_carrousel" />
      </SwiperSlide>
      
    </Swiper>
  );
};
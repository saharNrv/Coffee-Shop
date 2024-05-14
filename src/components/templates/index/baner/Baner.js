"use client"
import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation , Autoplay} from 'swiper/modules';

export default function Baner() {
  return (
    <Swiper navigation={true} autoplay={{delay:2000}} modules={[Navigation ,Autoplay]} className="mySwiper" loop='true'>
    <SwiperSlide>
      <img src="/images/baner-2.jpeg" alt="Baner" />
    </SwiperSlide>
    <SwiperSlide>
        <img src="/images/baner-1.jpeg" alt="Baner" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/images/baner-3.jpeg" alt="Baner" />
    </SwiperSlide>
    
  </Swiper>
  );
}

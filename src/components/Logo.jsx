import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

// Keep your imports exactly as they are
import kuleanpay from '../assets/kuleanpay.png';
import bulkwave from '../assets/bulkwave.png';
import finedge from '../assets/finedge.png';
import smerp from '../assets/smerp.png';
import ucp from '../assets/ucp.png';
import beetvas from '../assets/beetvas.png';

export default function ImageMarquee() {
  const dummyImages = [
    kuleanpay,
    bulkwave,
    finedge,
    smerp,
    ucp,
    beetvas,
  ];

  const swiperSettings = {
    modules: [Autoplay],
    spaceBetween: 0,
    slidesPerView: 'auto',
    loop: true,
    speed: 6000,
    allowTouchMove: false,
  };

  return (
    <section className="w-full overflow-hidden flex flex-col relative bg-transparent">

      <style>
        {`
          .swiper-wrapper {
            transition-timing-function: linear;
          }
        `}
      </style>

      {/* --- TOP ROW: Moves Left --- */}
      <Swiper
        {...swiperSettings}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="w-full h-31 bg-transparent"
      >
        {[...dummyImages, ...dummyImages, ...dummyImages].map((src, index) => (
          <SwiperSlide key={`top-${index}`} style={{ width: 'auto' }}>
            <img 
              src={src} 
              alt="Brand"
              className="w-80 object-contain select-none"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- BOTTOM ROW: Moves Right --- */}
      <Swiper
        {...swiperSettings}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        className="w-full bg-transparent"
      >
        {[...dummyImages.slice(2), ...dummyImages, ...dummyImages].map((src, index) => (
          <SwiperSlide key={`bottom-${index}`} style={{ width: 'auto' }}>
            <img 
              src={src} 
              alt="Brand"
              className="w-80 object-contain select-none"
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

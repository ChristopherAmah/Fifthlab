import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

// Logo imports
import kuleanpay from '../assets/kuleanpaylogo.png';
import bulkwave from '../assets/bulkwavelogo.png';
import finedge from '../assets/finedgephone.png';
import smerp from '../assets/smerplogo.png';
import smerpgo from '../assets/smerpgologo.png';
import ucp from '../assets/ucplogo.png';
import beetvas from '../assets/beetvaslogo.png'; // Will not be displayed

export default function LogoCardMarquee() {
  const cards = [
    { logo: finedge, title: 'Finedge' },
    { logo: bulkwave, title: 'Bulkwave' },
    { logo: smerp, title: 'Smerp' },
    { logo: null, title: 'beetVAS' }, // No logo
    { logo: ucp, title: 'UCP' },
    { logo: kuleanpay, title: 'Kuleanpay' },
    { logo: ucp, title: 'UCP' },
    { logo: smerpgo, title: 'Smerp Go' },
  ];

  const swiperSettings = {
    modules: [Autoplay],
    spaceBetween: 16, // smaller gap on mobile
    slidesPerView: 'auto',
    loop: true,
    speed: 6000,
    allowTouchMove: true, // enable swipe on mobile
  };

  return (
    <section className="w-full overflow-hidden flex flex-col relative bg-transparent py-6 sm:py-8">

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
        autoplay={{ delay: 0, disableOnInteraction: false }}
        className="w-full"
      >
        {[...cards, ...cards, ...cards].map((card, index) => (
          <SwiperSlide key={`top-${index}`} style={{ width: 'auto' }}>
            <div className="flex flex-row items-center justify-center bg-[#E9F5FF] rounded-full px-4 sm:px-8 py-3 sm:py-6">
              {card.logo && (
                <img 
                  src={card.logo} 
                  alt={card.title} 
                  className="w-6 sm:w-10 h-6 sm:h-10 object-contain mr-2 sm:mr-3" 
                />
              )}
              <p className="whitespace-nowrap font-medium text-sm sm:text-lg md:text-[40px] text-[#262626]">
                {card.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- BOTTOM ROW: Moves Right --- */}
      <Swiper
        {...swiperSettings}
        autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
        className="w-full mt-3 sm:mt-4"
      >
        {[...cards.slice(3), ...cards, ...cards].map((card, index) => (
          <SwiperSlide key={`bottom-${index}`} style={{ width: 'auto' }}>
            {/* Use same style as top row */}
            <div className="flex flex-row items-center justify-center bg-[#E9F5FF] rounded-full px-4 sm:px-8 py-3 sm:py-6">
              {card.logo && (
                <img 
                  src={card.logo} 
                  alt={card.title} 
                  className="w-6 sm:w-10 h-6 sm:h-10 object-contain mr-2 sm:mr-3" 
                />
              )}
              <p className="whitespace-nowrap font-medium text-sm sm:text-lg md:text-[40px] text-[#262626]">
                {card.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

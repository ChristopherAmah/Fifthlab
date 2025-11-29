import React from 'react';
import bulkwavehero from '../assets/bulkwavehero.png';
import finedgehero from '../assets/finedgehero.png';
import ucphero from '../assets/ucphero.png';
import kuleanpayhero from '../assets/kuleanpayhero.png';
import smerphero from '../assets/smerphero.png';
import beetvashero from '../assets/beetvashero.png';
import smerpgohero from '../assets/smerpgohero.png';

export default function HeroSection() {
  const images = [
    smerphero,
    kuleanpayhero,
    bulkwavehero,
    finedgehero,
    ucphero,
    beetvashero,
    smerpgohero,
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white text-center overflow-hidden px-4">
      
      {/* Continuous Horizontal Slider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden py-8">
        <div className="flex animate-marquee gap-8">
          {/* Duplicate the array to create a seamless loop */}
          {[...images, ...images].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`hero-${index}`}
              className="w-44 sm:w-52 md:w-60 lg:w-72 h-auto object-contain"
            />
          ))}
        </div>
      </div>

      {/* Hero text content */}
      <div className="relative z-10 max-w-4xl mx-auto mt-52 sm:mt-64 md:mt-72">
        <h1 className="text-4xl md:text-[62px] font-medium text-[#0E0E0E] mb-6">
          Building the Future of <br className="hidden sm:inline" /> Integrated Solutions.
        </h1>
        <p className="text-lg md:text-[23.42px] text-[#5F5F7A] mb-10 max-w-2xl mx-auto">
          Empowering Your Business Growth With User-Centric Solutions that make life and business easy.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="px-8 py-3 bg-[#00B4D8] text-white font-semibold rounded-full text-[18px] font-sans hover:bg-cyan-600 transition duration-300">
            See Our Solutions
          </button>
          <button className="px-8 py-3 text-[#000000] font-bold font-sans text-[18px] cursor-pointer hover:rounded-full hover:bg-cyan-50 transition duration-300 flex items-center gap-2">
            Book A Demo <span className="font-bold text-[18px]">&rarr;</span>
          </button>
        </div>
      </div>

      {/* Tailwind animation for horizontal marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } /* Move by half because we duplicated images */
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}

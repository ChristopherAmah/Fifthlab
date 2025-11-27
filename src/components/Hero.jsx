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
      
      {/* Rotating top semicircle */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center items-start z-0 mt-4">
        <div className="relative w-full h-full">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`hero-${index}`}
              className="absolute w-70 h-auto top-0 left-1/2 transform -translate-x-1/2 animate-rotate"
              style={{
                transformOrigin: '50% 700px', // ⬅️ increased radius (more middle space)
                rotate: `${index * (360 / images.length)}deg`,
                marginRight: '5px', // ⬅️ spacing between images
                marginBottom: '40px', // ⬅️ vertical spacing
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero text content */}
      <div className="relative z-10 max-w-4xl mx-auto mt-70">
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

      {/* Tailwind animation for rotation */}
      <style jsx>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-rotate {
          animation: rotate 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

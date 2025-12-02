import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import images
import bulkwavehero from "../assets/bulkwavehero.png";
import finedgehero from "../assets/finedgehero.png";
import ucphero from "../assets/ucphero.png";
import kuleanpayhero from "../assets/kuleanpayhero.png";
import smerphero from "../assets/smerphero.png";
import beetvashero from "../assets/beetvashero.png";
import smerpgohero from "../assets/smerpgohero.png";

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

  // Duplicate for infinite loop
  const loopedImages = [...images, ...images, ...images];

  const [offset, setOffset] = useState(0);
  const speed = 0.5; // scroll speed

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + speed) % (images.length * 220));
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white text-center overflow-hidden px-4">
      
      {/* 🔵 CURVED INFINITE SCROLL */}
      <div className="absolute top-0 left-0 w-full overflow-hidden py-8">
        <div
          className="flex gap-8"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {loopedImages.map((img, index) => {
            const itemWidth = 220;
            const xPosition =
              index * itemWidth - offset + window.innerWidth / 2;

            // Normalize between -1 and 1 (center = 0)
            const normalized = xPosition / (window.innerWidth / 2);

            // Semicircle curve
            const curveY = Math.sin(normalized * Math.PI) * 40;

            // Scale toward center
            const scale = 1 - Math.abs(normalized) * 0.25;

            // Tilt
            const rotate = normalized;

            // Depth (center always on top)
            const zIndex = Math.round((1 - Math.abs(normalized)) * 10);

            return (
              <motion.div
                key={index}
                className="flex-shrink-0"
                style={{
                  transform: `translateY(${curveY}px) rotate(${rotate}deg) scale(${scale})`,
                  zIndex,
                  transition: "transform 0.3s ease",
                }}
              >
                <img
                  src={img}
                  alt={`hero-${index}`}
                  className="w-44 sm:w-52 md:w-60 lg:w-72 h-auto object-contain"
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 🔵 TEXT CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto mt-52 sm:mt-64 md:mt-72 md:mb-20">
        <h1 className="text-4xl md:text-[62px] font-medium text-[#0E0E0E] mb-6">
          Building the Future of <br className="hidden sm:inline" /> Integrated Solutions.
        </h1>

        <p className="text-lg md:text-[23.42px] text-[#5F5F7A] mb-10 max-w-2xl mx-auto">
          Empowering Your Business Growth With User-Centric Solutions that make life and business easy.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="px-8 py-3 bg-[#00B4D8] text-white font-semibold rounded-full text-[18px] hover:bg-cyan-600 transition duration-300">
            See Our Solutions
          </button>

          <button className="px-8 py-3 text-[#000000] font-bold text-[18px] cursor-pointer hover:rounded-full hover:bg-cyan-50 transition duration-300 flex items-center gap-2">
            Book A Demo <span className="font-bold text-[18px]">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}

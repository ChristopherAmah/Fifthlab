import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
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

  // Duplicate images for seamless infinite scroll
  const loopedImages = [...images, ...images, ...images];

  const semicircleTransforms = [
    { y: 20, scale: 0.9, z: -20 },
    { y: 10, scale: 0.95, z: -10 },
    { y: 0, scale: 1, z: 0 },
    { y: -10, scale: 1.05, z: 10 },
    { y: 0, scale: 1, z: 0 },
    { y: 10, scale: 0.95, z: -10 },
    { y: 20, scale: 0.9, z: -20 },
  ];

  const [offset, setOffset] = useState(0); // virtual scroll offset
  const speed = 0.5; // px per frame

  // Animate the scroll offset
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + speed) % (images.length * 200)); // 200px per image approx
    }, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white text-center overflow-hidden px-4">
      
      {/* Infinite Horizontal Marquee */}
      <div className="absolute top-0 left-0 w-full overflow-hidden py-8">
        <div className="flex gap-8" style={{ transform: `translateX(-${offset}px)` }}>
          {loopedImages.map((img, index) => {
            const t = semicircleTransforms[index % semicircleTransforms.length];

            // Calculate which is the "center" image
            const totalImages = loopedImages.length;
            const centerIndex = Math.floor((offset + window.innerWidth / 2) / 200) % images.length; // 200px per image
            const isCenter = index % images.length === centerIndex;

            return (
              <motion.div
                key={index}
                className="flex-shrink-0"
                style={{
                  y: t.y,
                  zIndex: isCenter ? 20 : t.z,
                  scale: isCenter ? 1.2 : t.scale,
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

      {/* Hero Text Content */}
      <div className="relative z-10 max-w-4xl mx-auto mt-52 sm:mt-64 md:mt-72 md:mb-20">
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
    </section>
  );
}

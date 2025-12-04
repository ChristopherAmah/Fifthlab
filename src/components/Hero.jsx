import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import images
import bulkwavehero from "../assets/bulkwavehero.png";
import finedgehero from "../assets/finedgehero.png";
import ucphero from "../assets/ucphero.png";
import kuleanpayhero from "../assets/kuleanpayhero.png";
import smerphero from "../assets/smerphero.png";
import beetvashero from "../assets/beetvashero.png";
import smerpgohero from "../assets/smerpgohero.png";

// Define the base component
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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // --- 1. Responsive Size Function ---
  // Calculates card dimensions based on screen size
  const getCardSize = () => {
    let cardWidth = 180; // Default for small screens
    let cardGap = 20;

    if (screenWidth >= 1024) { // Large screens (lg)
        cardWidth = 260; // Larger card width
        cardGap = 40;
    } else if (screenWidth >= 768) { // Medium screens (md)
        cardWidth = 220; // Medium card width
        cardGap = 30;
    }
    
    return { 
        cardWidth, 
        cardGap, 
        itemWidthWithGap: cardWidth + cardGap 
    };
  };

  const { cardWidth, cardGap, itemWidthWithGap } = getCardSize();
  const speed = 0.5; // scroll speed

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Calculate total track width for a full loop reset
    const trackWidth = images.length * itemWidthWithGap;

    const interval = setInterval(() => {
      // Use a function to ensure we capture the latest itemWidthWithGap if it changes on resize
      const currentTrackWidth = images.length * getCardSize().itemWidthWithGap;
      setOffset((prev) => (prev + speed) % currentTrackWidth);
    }, 16);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth, itemWidthWithGap]); // Add dependencies for correct recalculation on resize

  // --- Key Arch/Curve Customization Variables ---
  const screenCenter = screenWidth / 2;
  // Increase maxDistanceFromCenter to match the wider track and items
  const maxDistanceFromCenter = screenWidth / 1.5; 
  // Scale curve height proportionally to card size
  const curveHeight = cardWidth < 200 ? 150 : 250; 
  const maxRotation = screenWidth < 640 ? 15 : 25; 
  const minScale = screenWidth < 640 ? 0.5 : 0.6; 

  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden px-4">

      {/* 🔵 CURVED INFINITE SCROLL */}
      <div className="absolute top-40 md:top-70 left-0 w-full overflow-visible py-6 sm:py-10">
        <div
          className="flex" 
          style={{ 
            transform: `translateX(-${offset}px)`,
            // Use the calculated gap
            gap: `${cardGap}px` 
          }}
        >
          {loopedImages.map((img, index) => {
            const itemCenter = index * itemWidthWithGap + itemWidthWithGap / 2 - offset;
            
            // Calculate distance from center of the screen
            const distance = itemCenter - screenCenter;

            // Normalized distance (-1 to 1) relative to the maxDistanceFromCenter
            let normalizedDistance = distance / maxDistanceFromCenter;
            
            // Clamp value between -1 and 1
            normalizedDistance = Math.max(-1, Math.min(1, normalizedDistance));

            // Use a curve that rises steeply towards the center (parabola: x^2)
            const centerFactor = 1 - Math.pow(Math.abs(normalizedDistance), 2);

            // Calculate vertical offset (curveY) and scale
            const curveY = -centerFactor * curveHeight; 
            const scale = minScale + centerFactor * (1 - minScale); 
            
            // Calculate rotation (rotate items outward from the center)
            const rotate = normalizedDistance * maxRotation; 

            // Calculate Z-Index for layering (closest to camera = highest Z)
            const zIndex = Math.round(centerFactor * 100); 

            return (
              <motion.div
                key={index}
                className="shrink-0"
                style={{
                  // 2. Use the responsive cardWidth for the container
                  width: `${cardWidth}px`, 
                  transform: `translateY(${curveY}px) rotate(${rotate}deg) scale(${scale})`,
                  zIndex,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <img
                  src={img}
                  alt={`hero-${index}`}
                  // 3. Use the responsive cardWidth for the image
                  className={`w-[${cardWidth}px] h-auto object-contain transform transition duration-300 hover:scale-110`} 
                  // Fallback for Tailwind CSS if dynamic class isn't parsed correctly:
                  style={{ width: `${cardWidth}px` }} 
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 🔵 TEXT CONTENT (Kept separate for clarity) */}
      <div className="relative z-10 max-w-4xl mx-auto mt-50 sm:mt-50 md:mt-70 mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-[62px] font-medium text-[#0E0E0E] mb-6">
          Building the Future of <br className="hidden sm:inline" /> Integrated Solutions.
        </h1>

        <p className="text-base sm:text-lg md:text-[23px] text-[#5F5F7A] mb-8 max-w-2xl mx-auto">
          Empowering Your Business Growth With User-Centric Solutions that make life and business easy.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/solutions">
            <button className="px-6 sm:px-8 py-3 bg-[#00B4D8] text-white font-semibold rounded-full text-[16px] sm:text-[18px] hover:bg-cyan-600 transition duration-300">
            See Our Solutions
          </button>
          </Link>

          <button className="px-6 sm:px-8 py-3 text-[#000000] font-bold text-[16px] sm:text-[18px] cursor-pointer hover:rounded-full hover:bg-cyan-50 transition duration-300 flex items-center gap-2">
            Book A Demo <span className="font-bold text-[18px]">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
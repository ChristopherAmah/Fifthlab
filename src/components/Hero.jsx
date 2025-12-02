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
  // Doubling is usually enough, but tripling helps buffer against large screen sizes.
  const loopedImages = [...images, ...images, ...images]; 

  const [offset, setOffset] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const itemWidthWithGap = 200; // Total width per item (e.g., 180px item + 20px gap)
  const speed = 0.5; // scroll speed

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Calculate total track width for a full loop reset
    const trackWidth = images.length * itemWidthWithGap;

    const interval = setInterval(() => {
      setOffset((prev) => (prev + speed) % trackWidth);
    }, 16);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Depend on images.length and itemWidthWithGap if they change, otherwise empty array is fine.

  // --- Key Arch/Curve Customization Variables ---
  const screenCenter = screenWidth / 2;
  const maxDistanceFromCenter = screenWidth / 1.5; // Area where curve is visible
  const curveHeight = screenWidth < 640 ? 150 : 250; // Max height of the curve (how far up the center item is)
  const maxRotation = screenWidth < 640 ? 15 : 25; // Max rotation angle in degrees
  const minScale = screenWidth < 640 ? 0.5 : 0.6; // Minimum scale for items far away

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4">

      {/* 🔵 CURVED INFINITE SCROLL */}
      <div className="absolute top-40 md:top-70 left-0 w-full overflow-visible py-6 sm:py-10">
        <div
          className="flex" // Removed gap-6/gap-8, spacing is now managed by itemWidthWithGap
          style={{ 
            transform: `translateX(-${offset}px)`,
            gap: `${itemWidthWithGap - 180}px` // Using a fixed item width of 180px for the image, adjust gap accordingly
          }}
        >
          {loopedImages.map((img, index) => {
            const itemCenter = index * itemWidthWithGap + itemWidthWithGap / 2 - offset;
            
            // Calculate distance from center of the screen
            const distance = itemCenter - screenCenter;

            // Normalized distance (-1 to 1) relative to the maxDistanceFromCenter
            // This is the key change for the arched effect
            let normalizedDistance = distance / maxDistanceFromCenter;
            
            // Clamp value between -1 and 1
            normalizedDistance = Math.max(-1, Math.min(1, normalizedDistance));

            // Use a curve that rises steeply towards the center (parabola: x^2)
            // 1 - normalizedDistance^2 gives a value from 0 (far away) to 1 (center)
            const centerFactor = 1 - Math.pow(Math.abs(normalizedDistance), 2);

            // Calculate vertical offset (curveY) and scale
            const curveY = -centerFactor * curveHeight; // Negative to move items UP (creating the arch)
            const scale = minScale + centerFactor * (1 - minScale); // Scale from minScale up to 1 (center)
            
            // Calculate rotation (rotate items outward from the center)
            const rotate = normalizedDistance * maxRotation; 

            // Calculate Z-Index for layering (closest to camera = highest Z)
            const zIndex = Math.round(centerFactor * 100); 

            return (
              <motion.div
                key={index}
                className="shrink-0"
                style={{
                  width: `180px`, // Explicitly set width to the image size
                  transform: `translateY(${curveY}px) rotate(${rotate}deg) scale(${scale})`,
                  zIndex,
                  // Use `motion.div`'s `transition` property or a CSS class for smooth animation
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <img
                  src={img}
                  alt={`hero-${index}`}
                  // Keep image size consistent, using w-[180px] to match the explicit width
                  className="w-[180px] h-auto object-contain" 
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 🔵 TEXT CONTENT (Keep this section as is) */}
      <div className="relative z-10 max-w-4xl mx-auto mt-40 sm:mt-60 md:mt-72 mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-[62px] font-medium text-[#0E0E0E] mb-6 leading-tight">
          Building the Future of <br className="hidden sm:inline" /> Integrated Solutions.
        </h1>

        <p className="text-base sm:text-lg md:text-[23px] text-[#5F5F7A] mb-8 max-w-2xl mx-auto">
          Empowering Your Business Growth With User-Centric Solutions that make life and business easy.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="px-6 sm:px-8 py-3 bg-[#00B4D8] text-white font-semibold rounded-full text-[16px] sm:text-[18px] hover:bg-cyan-600 transition duration-300">
            See Our Solutions
          </button>

          <button className="px-6 sm:px-8 py-3 text-[#000000] font-bold text-[16px] sm:text-[18px] cursor-pointer hover:rounded-full hover:bg-cyan-50 transition duration-300 flex items-center gap-2">
            Book A Demo <span className="font-bold text-[18px]">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
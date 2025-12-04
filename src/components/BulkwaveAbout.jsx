import React, { useEffect, useState } from "react";

import kul1 from "../assets/bulk1.jpg";
import kul2 from "../assets/bulk2.jpg";
import kul3 from "../assets/bulk3.jpg";
import kul4 from "../assets/bulk4.jpg";

const sections = [
  {
    title: "Bulk Airtime & Data",
    text: "Send airtime and data to hundreds or thousands of recipients at once customers, staff, partners, and more.",
    img: kul1,
  },
  {
    title: "Bulk SMS Campaigns",
    text: "Launch targeted SMS campaigns with ease. Upload contacts, craft your message, and track delivery in real time.",
    img: kul2,
  },
  {
    title: "E-Wallet System",
    text: "Fund your wallet and use it to process airtime, data, and SMS transactions instantly—all in one place.",
    img: kul3,
  },
  {
    title: "Real-Time Reporting & Analytics",
    text: "Track every send, monitor delivery, analyze spend, and optimize performance with transparent, real-time insights.",
    img: kul4,
  },
];

const KuleanPayScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Scroll sync logic
  const handleScroll = () => {
    if (isMobile) return;

    const wrapper = document.getElementById("scroll-wrapper");
    if (!wrapper) return;

    const rect = wrapper.getBoundingClientRect();
    const offset = window.innerHeight * 0.3;
    const progress = -(rect.top - offset);
    const sectionHeight = wrapper.clientHeight / sections.length;

    let index = Math.floor(progress / sectionHeight);
    index = Math.max(0, Math.min(sections.length - 1, index));
    setCurrentIndex(index);
  };

  // Detect mobile & add scroll listener
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  // Autoplay effect for desktop
  useEffect(() => {
    if (isMobile) return; // No autoplay on mobile

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sections.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="w-full py-10">
      {!isMobile ? (
        <div
          id="scroll-wrapper"
          className="mx-auto grid grid-cols-2 gap-10 px-6 md:px-16 lg:px-32 relative"
          style={{ minHeight: `${sections.length * 100}vh` }}
        >
          {/* LEFT IMAGE */}
          <div className="sticky top-24 h-[80vh] rounded-[20px] overflow-hidden">
            <img
              src={sections[currentIndex].img}
              alt="scroll-img"
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="sticky top-24 space-y-6 md:space-y-10">
              <h1 className="text-2xl sm:text-3xl md:text-[42px] font-medium text-[#03045E] leading-snug md:leading-tight mb-6 md:mb-10">
                Your One-Stop Platform for Bulk Communication & Top-Ups
              </h1>

              <div className="flex flex-col space-y-6 md:space-y-10">
                {sections.map((sec, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-4 md:gap-5 items-start cursor-pointer transition-all duration-300 ${
                      idx === currentIndex ? "opacity-100" : "opacity-70"
                    }`}
                    onClick={() => setCurrentIndex(idx)} // Update currentIndex on click
                  >
                    {/* Highlight Bar */}
                    <div
                      className={`w-1 rounded-full h-16 md:h-20 transition-all duration-500 ${
                        idx === currentIndex ? "bg-[#222222]" : "bg-gray-300"
                      }`}
                    ></div>

                    {/* Text */}
                    <div>
                      <h3
                        className={`text-lg sm:text-[20px] md:text-[22px] font-medium mb-1 transition-all duration-500 ${
                          idx === currentIndex ? "text-[#000000]" : "text-[#848687]"
                        }`}
                      >
                        {sec.title}
                      </h3>
                      <p
                        className={`text-sm sm:text-[15px] md:text-[16px] leading-relaxed transition-all duration-500 ${
                          idx === currentIndex ? "text-[#484A4B]" : "text-[#848687]"
                        }`}
                      >
                        {sec.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-8 px-4 sm:px-6 max-w-xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#03045E] leading-snug mb-4">
            Your One-Stop Platform for Bulk Communication & Top-Ups
          </h1>

          {sections.map((sec, i) => (
            <div key={i} className="flex flex-col gap-2">
              <img
                src={sec.img}
                className="w-full h-52 sm:h-60 object-cover rounded-xl mb-2"
                alt="mobile-scroll"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-[#03045E]">
                {sec.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">{sec.text}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default KuleanPayScroll;

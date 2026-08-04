import React, { useEffect, useState } from "react";

import kul1 from "../assets/fin1.jpg";
import kul2 from "../assets/fin2.jpg";
import kul3 from "../assets/fin3.jpg";
import kul4 from "../assets/fin4.jpg";

const sections = [
  {
    title: "Deposits",
    text: "You can get access to different account types such as current and savings, term deposits, top up deposits, recurring deposits and fixed rate deposits",
    img: kul1,
  },
  {
    title: "Lending",
    text: "You have access to personal loans, vehicle loans, student loans, home loans, school loans, overdrafts, group loans, term loans and restructuring.",
    img: kul2,
  },
  {
    title: "Placements",
    text: "You have access to call placement, Fixed placements, treasury bills and commercial papers",
    img: kul3,
  },
  {
    title: "Banking Operation",
    text: "You have access to cash withdrawals, cash deposit, cheque management, bulk upload and remittance posting.",
    img: kul4,
  },
];

const KuleanPayScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // *** SCROLL SYNC LOGIC (handleScroll) REMOVED ***

  // Detect mobile & remove scroll listener for desktop to disable image-on-scroll
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    // *** SCROLL EVENT LISTENER REMOVED ***

    return () => {
      // *** SCROLL EVENT REMOVAL REMOVED ***
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  // Autoplay effect for desktop (RETAINED)
  useEffect(() => {
    if (isMobile) return; // No autoplay on mobile

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sections.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isMobile]);

  // The onClick handler below handles manual clicks (RETAINED)

  return (
    <section className="w-full py-10">
      {!isMobile ? (
        <div
          id="scroll-wrapper"
          className="mx-auto grid grid-cols-2 gap-10 px-6 md:px-16 lg:px-32 relative"
          // *** MODIFIED: Set a normal height to prevent scroll-linked image change ***
          style={{ minHeight: "80vh" }}
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
                Advanced Core Banking Designed for Modern Financial Institutions
              </h1>

              <div className="flex flex-col space-y-6 md:space-y-10">
                {sections.map((sec, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-4 md:gap-5 items-start cursor-pointer transition-all duration-300 ${
                      idx === currentIndex ? "opacity-100" : "opacity-70"
                    }`}
                    onClick={() => setCurrentIndex(idx)} // Update currentIndex on click (RETAINED)
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
            Advanced Core Banking Designed for Modern Financial Institutions
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
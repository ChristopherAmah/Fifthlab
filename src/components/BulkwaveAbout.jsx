import React, { useEffect, useState } from "react";

import kul1 from "../assets/kul1.jpg";
import kul2 from "../assets/kul2.png";
import kul3 from "../assets/kul3.jpg";
import kul4 from "../assets/kul4.jpg";

const sections = [
  {
    title: "Buyer & seller security",
    text: "Buyers and sellers are protected with funds held in a third party escrow. Payments are released only after orders are fulfilled.",
    img: kul1,
  },
  {
    title: "Financing opportunities",
    text: "We provide financing options for our buyers and sellers on our own net terms while increasing their cash flow.",
    img: kul2,
  },
  {
    title: "Partnership Opportunities",
    text: "Grow your business and earn more by partnering with KuleanPay. Our world-class API lets you accept secure payments in just a few lines of code.",
    img: kul3,
  },
  {
    title: "Track Transactions",
    text: "Track your transaction every step of the way. Your money will be held securely until you’re satisfied with the services you received.",
    img: kul4,
  },
];

const KuleanPayScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <section className="w-full py-10">
      {/* DESKTOP VIEW */}
      {!isMobile ? (
        <div
          id="scroll-wrapper"
          className="max-w-7xl mx-auto grid grid-cols-2 gap-10 px-4"
          style={{ minHeight: "100vh" }}
        >
          {/* LEFT IMAGE */}
          <div className="sticky top-24 h-[100vh] rounded-[20px] overflow-hidden">
            <img
              src={sections[currentIndex].img}
              alt="scroll-img"
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>

          {/* RIGHT SIDE (Heading + Scrolling Sections) */}
          <div className="relative flex flex-col space-y-2">
            
            {/* --- FIXED HEADING (Not affected by scroll) --- */}
            <h1 className="text-3xl md:text-[42px] font-medium text-[#03045E] leading-tight mb-10">
              Fast, Seamless Daily Payments for Individuals and Businesses
            </h1>

            {/* SCROLL-SYNC ITEMS */}
            <div className="flex flex-col sticky top-24 space-y-20">
              {sections.map((sec, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  {/* Highlight Bar */}
                  <div
                    className={`w-1 rounded-[100px] h-20 transition-all duration-500 ${
                      idx === currentIndex ? "bg-[#222222]" : "bg-gray-300"
                    }`}
                  ></div>

                  {/* Text */}
                  <div>
                    <h3
                      className={`text-[22px] font-medium mb-1 transition-all duration-500 ${
                        idx === currentIndex
                          ? "text-[#000000]"
                          : "text-[#848687] font-medium"
                      }`}
                    >
                      {sec.title}
                    </h3>
                    <p
                      className={`text-[16px] leading-relaxed transition-all duration-500 ${
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
      ) : (
        /* MOBILE VIEW */
        <div className="flex flex-col gap-10 px-4 max-w-xl mx-auto">
          <h1 className="text-3xl font-semibold text-[#03045E] leading-tight mb-6">
            Fast, Seamless Daily Payments for Individuals and Businesses
          </h1>

          {sections.map((sec, i) => (
            <div key={i} className="flex flex-col">
              <img
                src={sec.img}
                className="w-full h-60 object-cover rounded-xl mb-4"
                alt="mobile-scroll"
              />
              <h3 className="text-lg font-semibold text-[#03045E] mb-1">
                {sec.title}
              </h3>
              <p className="text-gray-700 text-sm">{sec.text}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default KuleanPayScroll;

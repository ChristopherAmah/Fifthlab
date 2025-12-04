import React from 'react';
import bulkwavelogo from '../assets/bulkwavelogo.png';
import bulkwavephone from '../assets/bulkphone.png';
import { MdOutlineArrowOutward } from "react-icons/md";

const KuleanPaySection = () => {
  return (
    <div className="py-8 md:py-16 px-4 sm:px-6 lg:px-[98px]">
      <div className="mx-auto flex flex-col lg:flex-row items-center -gap-5 justify-between">

        {/* --- TEXT SECTION --- */}
        <div className="lg:w-1/2 text-center lg:text-left">

          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start gap-3 bg-[#F1F2FF] px-4 py-2 rounded-full w-fit mx-auto lg:mx-0 mb-3">
            <img src={bulkwavelogo} alt="Bulkwave Logo" className="h-8 w-auto" />
            <span className="text-lg sm:text-[20.15px] font-semibold text-[#242424]">
              Bulkwave
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] 
                         font-medium text-[#0E0E0E]
                          mb-1">
            Fast, Seamless <br />
            Bulk Messaging, <br />
            Data & Airtime.
          </h1>

          {/* CTA */}
          <div className="mt-4 sm:mt-5">
            <a 
              href="#" 
              className="inline-flex items-center text-lg sm:text-[19.65px] 
                         font-medium text-[#00B4D8] transition"
            >
              Visit Website
              <MdOutlineArrowOutward className="ml-2 sm:ml-4 text-xl sm:text-[24px]" />
            </a>
          </div>
        </div>

        {/* --- IMAGE SECTION --- */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="
            w-64 sm:w-80 md:w-[420px] lg:w-full
            h-auto 
            flex items-center justify-center
          ">
            <img 
              src={bulkwavephone}
              alt="Bulkwave App Mockup"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default KuleanPaySection;

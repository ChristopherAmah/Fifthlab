import React from 'react';
import finedgelogo from '../assets/finedgephone.png';
import finedgephone from '../assets/finedgep.png';
import { MdOutlineArrowOutward } from "react-icons/md";

const FinEdgeSection = () => {
  return (
    <div className="py-8 md:py-16 px-4 sm:px-6 lg:px-[174.5px]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center 
        gap-6 sm:gap-8 md:gap-10 lg:gap-[40.65px] justify-between">

        {/* --- Text Content Section --- */}
        <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">

          {/* Logo/Brand */}
          <div className="flex items-center justify-center lg:justify-start gap-3 
            bg-[#F1F2FF] px-3 sm:px-4 py-2 rounded-full w-fit mb-3">
            
            <img 
              src={finedgelogo} 
              alt="FinEdge Logo" 
              className="h-7 w-auto sm:h-8"
            />

            <span className="text-[17px] sm:text-[20px] font-semibold text-[#242424]">
              FinEdge
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="
            text-[28px] leading-[1.2]
            sm:text-3xl sm:leading-tight
            md:text-4xl
            lg:text-[64px] lg:leading-tight
            font-medium text-[#0E0E0E] tracking-tight mb-1
          ">
            Your <br />
            Finances <br />
            At Your <br />
            Fingertips.
          </h1>

          {/* Call To Action */}
          <div className="mt-4 sm:mt-5">
            <a
              href="#"
              className="inline-flex items-center 
              text-[16px] sm:text-lg md:text-[19.65px] 
              font-medium text-[#00B4D8] transition"
            >
              Visit Website
              <MdOutlineArrowOutward 
                className="ml-2 sm:ml-4 text-[20px] sm:text-[24px]"
              />
            </a>
          </div>

        </div>

        {/* --- Image Section --- */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
          <div className="
            w-52 h-60
            sm:w-64 sm:h-72
            md:w-80 md:h-96
            lg:w-auto lg:h-[32rem]
            overflow-hidden rounded-xl
          ">
            <img 
              src={finedgephone}
              alt="FinEdge App Mockup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default FinEdgeSection;

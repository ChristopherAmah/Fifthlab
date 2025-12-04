import React from 'react';
import Smerpgologo from '../assets/smerpgologo.png';
import Smerpgohero from '../assets/smerpgophone.png';
import { MdOutlineArrowOutward } from "react-icons/md";

const KuleanPaySection = () => {
  return (
    <div className="py-8 md:py-16 px-4 sm:px-6 lg:px-[191.5px]">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between">

        {/* --- Text Content Section --- */}
        <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* Logo/Brand */}
          <div className="flex items-center justify-center lg:justify-start gap-3 bg-[#F1F2FF] px-4 py-2 rounded-full w-fit mb-3">
            <img src={Smerpgologo} alt="KuleanPay Logo" className="h-8 w-auto" />
            <span className="text-lg sm:text-[20.15px] font-sans font-semibold text-[#242424]">Smerpgo</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[64px] font-medium text-[#0E0E0E] mb-1">
            Real-Time, <br />
            Smart <br />
            Inventory <br />
            Control. 
          </h1>
          
          {/* Call to Action */}
          <div className="mt-4 sm:mt-5">
            <a 
              href="#" 
              className="inline-flex items-center text-base sm:text-lg md:text-[19.65px] font-medium text-[#00B4D8] hover:text-[#00B4D8] transition duration-150 ease-in-out"
            >
              Visit Website
              <MdOutlineArrowOutward className='ml-2 sm:ml-4 text-lg sm:text-[24px]'/>
            </a>
          </div>
        </div>

        {/* --- Image Section --- */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
          <div className="w-56 sm:w-64 md:w-80 lg:w-auto h-54 sm:h-72 md:h-80 lg:h-128 overflow-hidden rounded-xl">
            <img 
              src={Smerpgohero}
              alt="KuleanPay Main App Screen Mockup" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default KuleanPaySection;

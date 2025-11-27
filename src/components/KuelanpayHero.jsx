import React from 'react';
import kuleanpaylogo from '../assets/kuleanpaylogo.png';
import kuleanhero from '../assets/kuleanhero.png';
import { MdOutlineArrowOutward } from "react-icons/md";

const KuleanPaySection = () => {
  return (
    <div className="py-8 md:py-16 px-4 sm:px-6 lg:px-[174.5px]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-[40.65px] justify-between">

        {/* --- Text Content Section --- */}
        <div className="lg:w-1/2 text-center lg:text-left">
          
          {/* Logo/Brand */}
          <div className="flex items-center justify-center lg:justify-start gap-3 bg-[#F1F2FF] px-4 py-2 rounded-full w-fit mx-auto lg:mx-0 mb-6">
            <img src={kuleanpaylogo} alt="KuleanPay Logo" className="h-8 w-auto" />
            <span className="text-lg sm:text-[20.15px] font-sans font-semibold text-[#242424]">KuleanPay</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-medium text-[#0E0E0E] leading-snug sm:leading-tight lg:leading-tight tracking-tight mb-4 sm:mb-6">
            Protecting <br />
            Both Parties <br />
            On All <br />
            Transactions.
          </h1>
          
          {/* Call to Action */}
          <div className="mt-6 sm:mt-8">
            <a 
              href="#" 
              className="inline-flex items-center text-lg sm:text-[19.65px] font-medium text-[#00B4D8] hover:text-[#00B4D8] transition duration-150 ease-in-out"
            >
              Visit Website
              <MdOutlineArrowOutward className='ml-2 sm:ml-4 text-xl sm:text-[24px]'/>
            </a>
          </div>
        </div>

        {/* --- Image Section --- */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-64 sm:w-80 md:w-96 lg:w-auto h-80 sm:h-[28rem] md:h-[32rem] overflow-hidden">
            <img 
              src={kuleanhero}
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

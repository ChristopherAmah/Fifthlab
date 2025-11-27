import React from 'react';
import access from '../assets/access.png';
import bankly from '../assets/bankly.png';
import uba from '../assets/uba.png';
import trustbanck from '../assets/trustbanc.png';
import wema from '../assets/wema.png';
import stanbic from '../assets/stanbic.png';
import itex from '../assets/itex.png';
import firstbank from '../assets/firstbank.png';

// IMPORT YOUR BACKGROUND IMAGE
import morebg from '../assets/morebg.png';

const ImpactSection = () => {
  const logos = [
    { src: access, alt: 'Access Bank' },
    { src: bankly, alt: 'Bankly' },
    { src: firstbank, alt: 'FirstBank' },
    { src: itex, alt: 'Itex' },
    { src: stanbic, alt: 'Stanbic Bank' },
    { src: wema, alt: 'Wema Bank' },
    { src: trustbanck, alt: 'TrustBanc' },
    { src: uba, alt: 'UBA' },
  ];

  return (
    <div
      className="
        pb-12 min-h-screen
        bg-cover bg-center bg-no-repeat
        relative
      "
      style={{ backgroundImage: `url(${morebg})` }} // ⭐ This is the correct way
    >
      {/* CONTENT */}
      <div className="relative z-10">
        
        {/* Logos */}
        <div className="flex flex-wrap items-center bg-[#EDEDEDB2] gap-x-10 gap-y-4 mb-16 sm:mb-20 justify-center">
          {logos.map((logo, index) => (
            <div key={index} className="h-2 max-w-25 flex items-center py-12">
              <img src={logo.src} alt={logo.alt} className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 px-[84.97px] ">
          
          {/* Left Column */}
          <div className="flex flex-col justify-start py-6">
            <h1 className="text-7xl sm:text-[121.44px] font-medium text-black">
              Be<br />more
            </h1>
          </div>

          {/* Top Right Box */}
          <div>
            <div className="bg-[#0090AD] text-white px-8 sm:px-[56.92px] py-5 rounded-[66.42px] h-full">
              <p className="text-xl sm:text-[38px] font-normal max-w-5xl">
                Live your best life, create more and multiply your impact with the tools and solutions we provide.
              </p>
            </div>
          </div>

          {/* Bottom Left Box */}
          <div>
            <div className="bg-[#E6F8FB] text-[#121212] p-8 sm:p-10 sm:px-[56.92px] rounded-[66.42px] relative h-full">
              <p className="text-[32px] font-normal">
                The reward for a great idea is the tools to make it happen. We provide you with financial and operational tools that help you do business differently and with ease.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-end items-end lg:pl-10 mt-10 lg:mt-0">
            <h1 className="text-7xl sm:text-[133.61px] font-medium text-[#000000]">
              Do<br /><span className="text-[#15949B]">more</span>
            </h1>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ImpactSection;

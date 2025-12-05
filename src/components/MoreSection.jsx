import React from 'react';
import access from '../assets/access.png';
import bankly from '../assets/bankly.png';
import uba from '../assets/uba.png';
import trustbanck from '../assets/trustbanc.png';
import wema from '../assets/wema.png';
import stanbic from '../assets/stanbic.png';
import itex from '../assets/itex.png';
import firstbank from '../assets/firstbank.png';
import morebg from '../assets/morebg.png';
import remita from '../assets/remita.webp';
import providus from '../assets/providus.png';
import covenant from '../assets/covenant.png';
import npf from '../assets/npf.png';
import firs from '../assets/firs.png';

const ImpactSection = () => {
  const logos = [
    { src: access, alt: 'Access Bank' },
    { src: bankly, alt: 'Bankly' },
    { src: firstbank, alt: 'FirstBank' },
    { src: itex, alt: 'Itex' },
    { src: stanbic, alt: 'Stanbic Bank' },
    { src: wema, alt: 'Wema Bank' },
    { src: trustbanck, alt: 'TrustBanc' },
    { src: remita, alt: 'Remita' },
    { src: providus, alt: 'Providus' },
    { src: covenant, alt: 'Covenant mfb' },
    { src: npf, alt: 'Nigeria Police Force mfb' },
    { src: firs, alt: 'FIRS mfb' },
    { src: uba, alt: 'UBA' },
  ];

  return (
    <div
      className="pb-8 sm:pb-12 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${morebg})` }}
    >
      <div className="relative z-10">

        {/* Logos */}
        <div className="flex flex-wrap items-center bg-[#EDEDEDB2] gap-x-10 gap-y-4 mb-4 justify-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="h-10 flex items-center py-12"
              // Smaller screens adjustments
              style={{ minWidth: '3rem' }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-20 h-20 object-contain sm:w-25"
              />
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 px-8 sm:px-[84.97px] pb-[51.1px] gap-y-[28.56px]">

          {/* Left Column */}
          <div className="flex flex-col justify-start py-6">
            <h1
              className="text-5xl font-medium text-black sm:text-[121.44px]"
              style={{ lineHeight: 1.1 }}
            >
              Be<br />more
            </h1>
          </div>

          {/* Top Right Box */}
          <div>
            <div className="bg-[#0090AD] text-white rounded-[66.42px] h-full flex items-center justify-center">
              <p className="text-base text-center font-normal py-8 px-6 sm:text-[32px] sm:py-12 sm:px-12">
                Live your best life, create more and multiply your impact with the tools and solutions we provide.
              </p>
            </div>
          </div>


          {/* Bottom Left Box */}
          <div>
            <div className="bg-[#E6F8FB] text-[#121212] rounded-[66.42px] h-full flex items-center justify-center">
              <p className="text-base text-center font-normal py-8 px-6 sm:text-[26px] sm:py-12 sm:px-12">
                The reward for a great idea is the tools to make it happen. We provide you with financial and operational tools that help you do business differently and with ease.
              </p>
            </div>
          </div>


          {/* Right Column */}
          <div className="flex flex-col justify-end items-end">
            <h1
              className="text-5xl font-medium text-[#000000] leading-none sm:text-[133.61px]"
            >
              Do<br /><span className="text-[#15949B]">more</span>
            </h1>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ImpactSection;

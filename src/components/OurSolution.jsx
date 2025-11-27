import React from 'react';
import bulkwavelogo from '../assets/bulkwavelogo.png';
import finedgelogo from '../assets/finedgelogo.png';
import solution1 from '../assets/solution1.png';
import smerplogo from '../assets/smerplogo.png'; 
import beetvaslogo from '../assets/beetvaslogo.png'; 
import ucplogo from '../assets/ucplogo.png'; 
import smerpgologo from '../assets/smerpgologo.png'; 
import kuleanpaylogo from '../assets/kuleanpaylogo.png';
import smerpphone from '../assets/smerpphone.png';
import ucpphone from '../assets/ucpphone.png';
import smerpgophone from '../assets/smerpgophone.png';
import kuleanpayphone from '../assets/kuleanpayphone.png';
import finedgephone from '../assets/finedgephone.png'; 
import beetvasphone from '../assets/beetvasphone.png'; 
import { MdOutlineArrowOutward } from "react-icons/md";

const SolutionCard = ({
  logo,
  mockupImage,
  title,
  description,
  buttonText,
  bgColor,
  mockupAlt,
  reverse = false,
  showTopHalf = true,
  gradientBg = false
}) => {
  return (
    <div className={`flex-1 ${bgColor} ${gradientBg ? 'bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50' : ''} rounded-3xl px-6 text-center`}>
      {reverse ? (
        <>
          <div className='pt-8'>
            
            {/* Text first */}
            {logo && (
              <div className="flex justify-center mb-4">
                <img src={logo} alt={`${title} logo`} className="w-10 h-10 object-contain"/>
              </div>
            )}

            <h3 className="text-2xl sm:text-[36px] font-medium text-[#0E0E0E] mb-2">{title}</h3>
            <p className="text-base sm:text-[18px] text-[#828282] mb-8 max-w-md mx-auto">{description}</p>
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 text-[18px] font-semibold rounded-[36.65px] text-white bg-[#0E0E0E] hover:bg-gray-800 transition-colors duration-200 mb-[38px]">
              {buttonText}
              <span><MdOutlineArrowOutward className='ml-2'/></span>
            </a>

            {/* ⭐ UPDATED MOCKUP BLOCK (UCP special styling) */}
            <div
              className={`
                relative overflow-hidden max-w-sm mx-auto
                ${title === "Unified Cooperative Platform (UCP)"
                  ? "h-[450px] sm:h-[520px] lg:h-[300px] "
                  : "h-[180px] sm:h-[250px] lg:h-[400px]"}
              `}
            >
              {showTopHalf ? (
                <img
                  src={mockupImage}
                  alt={mockupAlt}
                  className={`
                    w-full object-cover object-top rounded-xl
                    ${title === "Unified Cooperative Platform (UCP)"
                      ? "h-[750px] "
                      : "h-[620.884765625px]"}
                  `}
                />
              ) : (
                <img
                  src={mockupImage}
                  alt={mockupAlt}
                  className={`
                    w-full object-cover rounded-xl absolute bottom-0
                    ${title === "Unified Cooperative Platform (UCP)"
                      ? "h-[750px] scale-95"
                      : "h-[620.884765625px]"}
                  `}
                />
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Mockup first (normal cards) */}
          <div className="relative overflow-hidden h-[180px] sm:h-[250px] lg:h-[300px] mb-6 max-w-xs mx-auto">
            {showTopHalf ? (
              <img src={mockupImage} alt={mockupAlt} className="w-full h-auto object-cover object-top rounded-xl"/>
            ) : (
              <img src={mockupImage} alt={mockupAlt} className="w-full h-auto object-cover rounded-xl absolute bottom-0"/>
            )}
          </div>

          {/* Text below */}
          {logo && (
            <div className="flex justify-center mb-4">
              <img src={logo} alt={`${title} logo`} className="w-10 h-10 object-contain"/>
            </div>
          )}

          <h3 className="text-2xl sm:text-[36px] font-medium text-[#0E0E0E] mb-2">{title}</h3>
          <p className="text-base sm:text-[18px] text-[#828282] mb-8 max-w-md mx-auto">{description}</p>
          <a href="#" className="inline-flex items-center justify-center px-6 py-3 text-[18px] font-semibold rounded-[36.65px] text-white bg-[#0E0E0E] hover:bg-gray-800 transition-colors duration-200 mb-[38px]">
            {buttonText}
            <span><MdOutlineArrowOutward className='ml-2'/></span>
          </a>
        </>
      )}
    </div>
  );
};

const SolutionsSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-[86px]">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-[56px] font-medium text-[#0E0E0E] ">Our Solutions</h2>
          <p className="text-base sm:text-[18px] font-normal text-[#828282] max-w-xl mx-auto">
            We see simplified products and solutions as the foundation for growth and progress in commerce and society.
          </p>
        </div>

        {/* Bulkwave */}
        <div className="bg-[#F4F4FF] rounded-[25px] pt-[50px] text-center mb-5">
          <div className="flex justify-center mb-2"><img src={bulkwavelogo} alt="Bulkwave Logo" className="w-12 h-12 object-contain"/></div>
          <h3 className="text-3xl sm:text-[36px] font-medium text-[#0E0E0E] mb-2">Bulkwave</h3>
          <p className="text-base sm:text-[18px] text-[#828282] max-w-xl mx-auto mb-8">
            Simplify bulk communication and reward programs with Bulkwave. Effortlessly distribute airtime, data, and SMS to large groups, keeping your teams and customers connected and engaged.
          </p>
          <button className="inline-flex items-center justify-center px-7 py-3 text-[18px] font-semibold rounded-[36.65px] text-white bg-[#0E0E0E] hover:bg-gray-800 transition-colors duration-200 mb-[21px]">
            Read More
            <span><MdOutlineArrowOutward className='ml-2'/></span>
          </button>
          <div className="relative overflow-hidden h-[250px] sm:h-80 lg:h-[404.62px] rounded-xl -mt-20 lg:-mt-30">
            <img src={solution1} alt="Bulkwave Dashboard Mockup" className="w-full object-cover object-top" />
          </div>
        </div>

        {/* Smerp & Kuleanpay */}
        <div className="flex flex-col lg:flex-row gap-x-5 mb-5">
          <SolutionCard
            logo={smerplogo}
            mockupImage={smerpphone}
            title="Smerp"
            description="Take control of your business operations with SMERP, our comprehensive Enterprise Resource Planning (ERP) software. SMERP streamlines tasks like inventory management."
            buttonText="Read More"
            bgColor="bg-[#FCEDFF]"
            mockupAlt="Smerp Mobile App Mockup"
            reverse={true}
            showTopHalf={true}
          />
          <SolutionCard
            logo={kuleanpaylogo}
            mockupImage={kuleanpayphone}
            title="Kuleanpay"
            description="Kuleanpay is a smart AI-driven escrow engine that makes payments secure, transparent, and seamless."
            buttonText="Read More"
            bgColor="bg-[#E6F8FB80]"
            mockupAlt="Kuleanpay Mobile App Mockup"
            showTopHalf={false}
          />
        </div>

        {/* Duplicate Bulkwave */}
        <div className="bg-[#E6F8FB] rounded-[25px] pt-[50px] text-center mb-5">
          <div className="flex justify-center mb-2"><img src={finedgephone} alt="Bulkwave Logo" className="w-12 h-12 object-contain"/></div>
          <h3 className="text-3xl sm:text-[36px] font-medium text-[#0E0E0E] mb-2">Finedge</h3>
          <p className="text-base sm:text-[18px] text-[#828282] max-w-xl mx-auto mb-8">
            Finedge is an all-in-one banking solution that helps MFBs streamline operations.
          </p>
          <button className="inline-flex items-center justify-center px-7 py-3 text-[18px] font-semibold rounded-[36.65px] text-white bg-[#0E0E0E] hover:bg-gray-800 transition-colors duration-200 mb-[21px]">
            Read More
            <span><MdOutlineArrowOutward className='ml-2'/></span>
          </button>
          <div className="relative overflow-hidden h-[250px] sm:h-80 lg:h-[404.62px] rounded-xl -mt-20 lg:-mt-30">
            <img src={finedgelogo} alt="Bulkwave Dashboard Mockup" className="w-full object-cover object-top" />
          </div>
        </div>

        {/* Smerp Go + UCP */}
        <div className="flex flex-col lg:flex-row gap-8 mt-5 mb-5">

          <SolutionCard
            logo={smerpgologo}
            mockupImage={smerpgophone}
            title="Smerp Go"
            description="Take control of your business operations with SMERP Go."
            buttonText="Read More"
            bgColor="bg-[#EEEBFF]"
            mockupAlt="Smerp Go"
            showTopHalf={false}
          />

          <SolutionCard
            logo={ucplogo}
            mockupImage={kuleanpayphone}
            title="Unified Cooperative Platform (UCP)"
            description="Designed for cooperatives, UCP streamlines cash collection, disbursement, and reconciliation."
            buttonText="Read More"
            bgColor="bg-[#EDF4FF]"
            mockupAlt="Unified Cooperative Platform (UCP)"
            reverse={true}
            showTopHalf={true}
          />
        </div>

        {/* Beetvas */}
        <div className="bg-[#E7F1FF] rounded-[25px] pt-[50px] text-center mb-5">
          <div className="flex justify-center mb-2"><img src={beetvaslogo} alt="Bulkwave Logo" className="w-40 h-12 object-contain"/></div>
          <p className="text-base sm:text-[18px] text-[#828282] max-w-xl mx-auto mb-8">
            Beetvas description can go here.
          </p>
          <button className="inline-flex items-center justify-center px-7 py-3 text-[18px] font-semibold rounded-[36.65px] text-white bg-[#0E0E0E] hover:bg-gray-800 transition-colors duration-200 mb-[21px]">
            Read More
            <span><MdOutlineArrowOutward className='ml-2'/></span>
          </button>
          <div className="relative overflow-hidden h-[250px] sm:h-80 lg:h-[404.62px] rounded-xl -mt-20 lg:-mt-30">
            <img src={beetvasphone} alt="Bulkwave Dashboard Mockup" className="w-full object-cover object-top" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;

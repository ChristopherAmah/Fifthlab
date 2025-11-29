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
    <div className={`flex-1 ${bgColor} ${gradientBg ? 'bg-linear-to-br from-indigo-50 via-purple-50 to-blue-50' : ''} rounded-3xl px-4 sm:px-6 text-center mb-6 sm:mb-0`}>
      {reverse ? (
        <>
          <div className='pt-6 sm:pt-8'>
            {logo && (
              <div className="flex justify-center mb-3 sm:mb-4">
                <img src={logo} alt={`${title} logo`} className="w-8 h-8 sm:w-10 sm:h-10 object-contain"/>
              </div>
            )}
            <h3 className="text-xl sm:text-2xl md:text-[36px] font-medium text-[#0E0E0E] mb-2">{title}</h3>
            <p className="text-sm sm:text-base md:text-[18px] text-[#828282] mb-6 sm:mb-8 max-w-md mx-auto">{description}</p>
            <a href="#" className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-[18px] font-semibold rounded-[36.65px] text-white bg-[#0E0E0E] hover:bg-gray-800 transition-colors duration-200 mb-4 sm:mb-[38px]">
              {buttonText}
              <MdOutlineArrowOutward className='ml-2'/>
            </a>

            <div
              className={`relative overflow-hidden max-w-full mx-auto
                ${title === "Unified Cooperative Platform (UCP)"
                  ? "h-[350px] sm:h-[520px] lg:h-[300px]"
                  : "h-[180px] sm:h-[250px] lg:h-[400px]"}`}
            >
              {showTopHalf ? (
                <img
                  src={mockupImage}
                  alt={mockupAlt}
                  className={`w-full object-cover object-top rounded-xl
                    ${title === "Unified Cooperative Platform (UCP)"
                      ? "h-[400px] sm:h-[750px]"
                      : "h-[180px] sm:h-[620px]"}`}
                />
              ) : (
                <img
                  src={mockupImage}
                  alt={mockupAlt}
                  className={`w-full object-cover rounded-xl absolute bottom-0
                    ${title === "Unified Cooperative Platform (UCP)"
                      ? "h-[400px] sm:h-[750px] scale-95"
                      : "h-[180px] sm:h-[620px]"}`}
                />
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="relative overflow-hidden h-[180px] sm:h-[250px] lg:h-[300px] mb-4 sm:mb-6 max-w-full mx-auto">
            {showTopHalf ? (
              <img src={mockupImage} alt={mockupAlt} className="w-full h-auto object-cover object-top rounded-xl"/>
            ) : (
              <img src={mockupImage} alt={mockupAlt} className="w-full h-auto object-cover rounded-xl absolute bottom-0"/>
            )}
          </div>
          {logo && (
            <div className="flex justify-center mb-3 sm:mb-4">
              <img src={logo} alt={`${title} logo`} className="w-8 h-8 sm:w-10 sm:h-10 object-contain"/>
            </div>
          )}
          <h3 className="text-xl sm:text-2xl md:text-[36px] font-medium text-[#0E0E0E] mb-2">{title}</h3>
          <p className="text-sm sm:text-base md:text-[18px] text-[#828282] mb-6 sm:mb-8 max-w-md mx-auto">{description}</p>
          <a href="#" className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-[18px] font-semibold rounded-[36.65px] text-white bg-[#0E0E0E] hover:bg-gray-800 transition-colors duration-200 mb-4 sm:mb-[38px]">
            {buttonText}
            <MdOutlineArrowOutward className='ml-2'/>
          </a>
        </>
      )}
    </div>
  );
};

const SolutionsSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-[86px]">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-[56px] font-medium text-[#0E0E0E]">Our Solutions</h2>
          <p className="text-sm sm:text-base md:text-[18px] font-normal text-[#828282] max-w-xl mx-auto">
            We see simplified products and solutions as the foundation for growth and progress in commerce and society.
          </p>
        </div>

        {/* Bulkwave */}
        <div className="bg-[#F4F4FF] rounded-[25px] pt-10 sm:pt-[50px] text-center mb-5">
          <div className="flex justify-center mb-2"><img src={bulkwavelogo} alt="Bulkwave Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain"/></div>
          <h3 className="text-2xl sm:text-3xl md:text-[36px] font-medium text-[#0E0E0E] mb-2">Bulkwave</h3>
          <p className="text-sm sm:text-base md:text-[18px] text-[#828282] max-w-xl mx-auto mb-6 sm:mb-8">
            Simplify bulk communication and reward programs with Bulkwave. Effortlessly distribute airtime, data, and SMS to large groups, keeping your teams and customers connected and engaged.
          </p>
          <button className="inline-flex items-center justify-center px-4 sm:px-7 py-2 sm:py-3 text-sm sm:text-[18px] font-semibold rounded-[36.65px] text-white bg-[#0E0E0E] hover:bg-gray-800 transition-colors duration-200 mb-4 sm:mb-[21px]">
            Read More
            <MdOutlineArrowOutward className='ml-2'/>
          </button>
          <div className="relative overflow-hidden h-[200px] sm:h-80 lg:h-[404.62px] rounded-xl -mt-16 sm:-mt-20 lg:-mt-30">
            <img src={solution1} alt="Bulkwave Dashboard Mockup" className="w-full object-cover object-top" />
          </div>
        </div>

        {/* Smerp & Kuleanpay */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-5">
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

        {/* Finedge */}
        <div className="bg-[#E6F8FB] rounded-[25px] pt-10 sm:pt-[50px] text-center mb-5">
          <div className="flex justify-center mb-2"><img src={finedgephone} alt="Finedge Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain"/></div>
          <h3 className="text-2xl sm:text-3xl md:text-[36px] font-medium text-[#0E0E0E] mb-2">Finedge</h3>
          <p className="text-sm sm:text-base md:text-[18px] text-[#828282] max-w-xl mx-auto mb-6 sm:mb-8">
            Finedge is an all-in-one banking solution that helps MFBs streamline operations.
          </p>
          <button className="inline-flex items-center justify-center px-4 sm:px-7 py-2 sm:py-3 text-sm sm:text-[18px] font-semibold rounded-[36.65px] text-white bg-[#0E0E0E] hover:bg-gray-800 transition-colors duration-200 mb-4 sm:mb-[21px]">
            Read More
            <MdOutlineArrowOutward className='ml-2'/>
          </button>
          <div className="relative overflow-hidden h-[200px] sm:h-80 lg:h-[404.62px] rounded-xl sm:-mt-20 lg:-mt-30">
            <img src={finedgelogo} alt="Finedge Dashboard Mockup" className="w-full object-cover object-top" />
          </div>
        </div>

        {/* Smerp Go + UCP */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-5 mb-5">
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
        <div className="bg-[#E7F1FF] rounded-[25px] pt-10 sm:pt-[50px] text-center mb-5">
          <div className="flex justify-center mb-2"><img src={beetvaslogo} alt="Beetvas Logo" className="w-32 h-10 sm:w-40 sm:h-12 object-contain"/></div>
          <p className="text-sm sm:text-base md:text-[18px] text-[#828282] max-w-xl mx-auto mb-6 sm:mb-8">
            Beetvas description can go here.
          </p>
          <button className="inline-flex items-center justify-center px-4 sm:px-7 py-2 sm:py-3 text-sm sm:text-[18px] font-semibold rounded-[36.65px] text-white bg-[#0E0E0E] hover:bg-gray-800 transition-colors duration-200 mb-4 sm:mb-[21px]">
            Read More
            <MdOutlineArrowOutward className='ml-2'/>
          </button>
          <div className="relative overflow-hidden h-[200px] sm:h-80 lg:h-[404.62px] rounded-xl -mt-10 sm:-mt-20 lg:-mt-30">
            <img src={beetvasphone} alt="Beetvas Dashboard Mockup" className="w-full object-cover object-top" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;

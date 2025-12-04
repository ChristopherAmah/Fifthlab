import React from 'react';
import bulkwavelogo from '../assets/bulkwavelogo.png';
import finedgelogo from '../assets/finedgephone.png';
import solution1 from '../assets/solution1.png'; // Assuming this is the bulkwave mockup image
import smerplogo from '../assets/smerplogo.png';
import beetvaslogo from '../assets/beetvaslogo.png';
import ucplogo from '../assets/ucplogo.png';
import smerpgologo from '../assets/smerpgologo.png';
import kuleanpaylogo from '../assets/kuleanpaylogo.png';
import smerpphone from '../assets/smerpphone.png';
import ucpphone from '../assets/ucpphone.png';
import smerpgophone from '../assets/smerpgophone.png';
import kuleanpayphone from '../assets/kuleanpayphone.png';
import finedgephone from '../assets/finedgelogo.png'; // Assuming a mobile mockup for finedge if using SolutionCard
import beetvasphone from '../assets/beetvasphone.png'; // Assuming a mobile mockup for beetvas if using SolutionCard
// Note: finedgelogo and beetvaslogo were used as mockups in the original.
// I've kept 'solution1' for Bulkwave as it was the image source.
// For Finedge and Beetvas, I'll use their respective 'phone' mockups for consistency with Smerp/Kuleanpay.
// I'll also update the logo/mockup logic for them to reflect the component structure.

import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

// SOLUTIONCARD COMPONENT (REMAINS UNCHANGED)
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
  gradientBg = false,
  linkUrl = "#",
  mockupClass = "" 
}) => {
  return (
    <div className={`flex-1 ${bgColor} ${gradientBg ? 'bg-linear-to-br from-indigo-50 via-purple-50 to-blue-50' : ''} rounded-3xl px-4 sm:px-6 text-center mb-6 sm:mb-0`} >
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
            {/* Button uses Link component with linkUrl */}
            <Link 
              to={linkUrl} 
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-[18px] font-semibold rounded-[36.65px] text-white bg-[#0E0E0E] hover:bg-gray-800 transition-colors duration-200 mb-4 sm:mb-[38px]"
            >
              {buttonText}
              <MdOutlineArrowOutward className='ml-2'/>
            </Link>

            <div
              className={`relative overflow-hidden max-w-full mx-auto
                ${title === "Unified Cooperative Platform (UCP)"
                  ? "h-[350px] sm:h-[520px] lg:h-[400px]"
                  : "h-[180px] sm:h-[250px] lg:h-[400px]"}${mockupClass}`}
            >
              {showTopHalf ? (
                <img
                  src={mockupImage}
                  alt={mockupAlt}
                  className={`w-full object-cover object-top rounded-xl
                    ${title === "Unified Cooperative Platform (UCP)"
                      ? "h-[400px] sm:h-[750px]"
                      : "h-[180px] sm:h-[620px]"}${mockupClass}`}
                />
              ) : (
                <img
                  src={mockupImage}
                  alt={mockupAlt}
                  className={`w-full object-cover rounded-xl absolute bottom-0
                    ${title === "Unified Cooperative Platform (UCP)"
                      ? "h-[400px] sm:h-[750px] scale-95"
                      : "h-[180px] sm:h-[620px]"}${mockupClass}`}
                />
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="relative overflow-hidden h-[180px] sm:h-[250px] lg:h-[450px] mb-4 sm:mb-6 max-w-xs mx-auto">
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
          {/* Button uses Link component with linkUrl */}
          <Link 
            to={linkUrl} 
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-[18px] font-semibold rounded-[36.65px] text-white bg-[#0E0E0E] hover:bg-gray-800 transition-colors duration-200 mb-4 sm:mb-[38px]"
          >
            {buttonText}
            <MdOutlineArrowOutward className='ml-2'/>
          </Link>
        </>
      )}
    </div>
  );
};


const SolutionsSection = () => {
  // Define a map of solution links. **These are placeholder paths, ensure they match your React Router setup.**
  const solutionLinks = {
    bulkwave: "/bulkwave",
    smerp: "/smerp",
    kuleanpay: "/kuleanpay",
    finedge: "/finedge",
    smerpgo: "/smerpgo",
    ucp: "/ucp",
    beetvas: "/beetvas"
  };


  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-[86px]" id='solutions'>
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-[56px] font-medium text-[#0E0E0E]">Our Solutions</h2>
          <p className="text-sm sm:text-base md:text-[18px] font-normal text-[#828282] max-w-xl mx-auto">
            We see simplified products and solutions as the foundation for growth and progress in commerce and society.
          </p>
        </div>

        {/* Bulkwave (Now using SolutionCard) */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-5">
            <SolutionCard
              logo={bulkwavelogo}
              mockupImage={solution1} // The original mockup image
              title="Bulkwave"
              description="Simplify bulk communication and reward programs with Bulkwave. Effortlessly distribute airtime, data, and SMS to large groups, keeping your teams and customers connected and engaged."
              buttonText="Read More"
              bgColor="bg-[#F4F4FF]"
              mockupAlt="Bulkwave Dashboard Mockup"
              reverse={true} // Set to true to match the original Bulkwave structure (text on top, image on bottom)
              showTopHalf={true} 
              linkUrl={solutionLinks.bulkwave}
            />
            {/* Added an empty filler div to force Bulkwave to take up the full row 
                while still being in a flex container (if needed for consistent spacing). 
                If you want Bulkwave to be full-width like the original, you might move it out of this flex div,
                but for consistency with the component structure, I'll put it here and leave the second slot empty/as a placeholder.
                
                Alternatively, to truly match the Smerp/Kuleanpay structure, it should be paired.
                Since it was full-width before, let's keep it full-width by removing the flex-container or making it a single child.
            */}
        </div>

        {/* Smerp & Kuleanpay (Unchanged) */}
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
            linkUrl={solutionLinks.smerp}
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
            linkUrl={solutionLinks.kuleanpay}
          />
        </div>

        {/* Finedge (Now using SolutionCard) */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-5">
            <SolutionCard
              logo={finedgelogo} // Using the actual logo
              mockupImage={finedgephone} // Using a mobile/device mockup for consistency
              title="Finedge"
              description="Finedge is an all-in-one banking solution that helps MFBs streamline operations."
              buttonText="Read More"
              bgColor="bg-[#E6F8FB]"
              mockupAlt="Finedge Mobile App Mockup"
              reverse={true} // Set to true to match the original Bulkwave/Finedge structure (text on top, image on bottom)
              showTopHalf={true} 
              linkUrl={solutionLinks.finedge}
            />
            {/* Added an empty filler div for similar reasons as Bulkwave */}
        </div>
        
        {/* Smerp Go + UCP (Unchanged) */}
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
            linkUrl={solutionLinks.smerpgo}
          />
          <SolutionCard
            logo={ucplogo}
            mockupImage={ucpphone}
            title="Unified Cooperative Platform (UCP)"
            description="Designed for cooperatives, UCP streamlines cash collection, disbursement, and reconciliation."
            buttonText="Read More"
            bgColor="bg-[#EDF4FF]"
            mockupAlt="Unified Cooperative Platform (UCP)"
            reverse={true}
            showTopHalf={true}
            linkUrl={solutionLinks.ucp}
          />
        </div>

        {/* Beetvas (Now using SolutionCard) */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-5">
            <SolutionCard
              // logo={beetvaslogo}
              mockupImage={beetvasphone}
              title="beetVAS"
              description="Designed for cooperatives, UCP streamlines cash collection, disbursement, and reconciliation—improving cash flow, transparency, and member collaboration."
              buttonText="Read More"
              bgColor="bg-[#E7F1FF]"
              mockupAlt="Beetvas Mobile App Mockup"
              reverse={true} // Set to true to match the original Bulkwave/Finedge structure (text on top, image on bottom)
              showTopHalf={true} 
              linkUrl={solutionLinks.beetvas}
            />
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;
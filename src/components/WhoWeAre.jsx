import React from 'react';
import whoweare from '../assets/whatwedo.jpg';

const WhoWeAreSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column: Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-xl w-full">
            <img 
              src={whoweare} 
              alt="Three people collaborating on computers" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        {/* Right Column: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#03045E] leading-tight mb-4 sm:mb-6">
            Who We Are?
          </h2>
          
          <p className="text-base sm:text-lg text-[#596780] mb-6 sm:mb-8 max-w-full lg:max-w-md">
            We are an ecosystem of advanced but simple solutions 
            with the core focus of delivering client-centered products 
            and services that make our clients' lives and daily 
            operations easy. We believe that business and life should 
            not be harder than it already appears. We are dynamic, 
            competent, inventive and inclusive.
          </p>
          
          <div className="max-w-full lg:max-w-xl">
            <p className="text-xl sm:text-2xl lg:text-[32px] font-semibold text-[#00B4D8] leading-snug mb-2 sm:mb-3 italic">
              “The best way to predict the future is to create it.”
            </p>
            <p className="text-xl sm:text-2xl lg:text-[32px] text-[#00B4D8] italic">
              - Peter Drucker
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;

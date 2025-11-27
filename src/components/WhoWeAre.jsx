import React from 'react';
import whoweare from '../assets/whoweare.png';

const WhoWeAreSection = () => {
  return (
    <section className="py-[95.5px] px-4 md:px-8 lg:px-[122.21px]">
      {/* Outer Container for max width and centering */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-[63px]">
        
        {/* Left Column: Image */}
        <div className="lg:w-1/2 w-full">
          {/* This div simulates the styled container for the image */}
          <div className="relative overflow-hidden rounded-xl w-full">
            {/* Replace 'your-image-url.jpg' with the actual image URL */}
            <img 
              src={whoweare} // Placeholder for your image
              alt="Three people collaborating on computers" 
              className="w-full h-auto object-cover" 
            />
          </div>
        </div>
        
        {/* Right Column: Text Content */}
        <div className="lg:w-1/2">
          
          {/* Main Heading */}
          <h2 className="text-5xl font-medium text-[#03045E] leading-tight mb-3">
            Who We Are?
          </h2>
          
          {/* Introductory Paragraph */}
          <p className="text-lg text-[#596780] mb-8 max-w-md">
            We are an ecosystem of advanced but simple solutions 
            with the core focus of delivering client-centered products 
            and services that make our clients' lives and daily 
            operations easy. We believe that business and life should 
            not be harder than it already appears. We are dynamic, 
            competent, inventive and inclusive.
          </p>
          
          {/* Quote Section */}
          <div className="max-w-xl">
            <p className="text-[32px] font-semibold text-[#00B4D8] leading-snug mb-3 italic">
              “The best way to predict the future is <br />
              to create it.”
            </p>
            <p className="text-[32px] text-[#00B4D8] italic">
              - Peter Drucker
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WhoWeAreSection;
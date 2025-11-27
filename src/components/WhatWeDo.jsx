import React from 'react';
import business from '../assets/business.jpg';
import customer from '../assets/customer.jpg';
import buscustomer from '../assets/buscustomer.jpg';

const WhatWeDoSection = () => {
  return (
    <section className="py-[80px] px-4 md:px-8 lg:px-[120px]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Heading and Main Description */}
        <div className="flex flex-col lg:flex-row justify-between gap-x-[145.8px] mb-10">
          {/* Left Column: Main Heading and Text */}
          <div className="lg:w-1/2">
            <h2 className="text-[54px] font-medium text-[#03045E] leading-tight mb-4">
              What Do We Do ?
            </h2>
            <p className="text-lg text-[#596780] max-w-lg">
              We bridge the gap between technology and people, 
              offering dynamic solutions to business and everyday 
              challenges, simplifying operations along the way. Our 
              approach involves deploying effective technologies to 
              handle the hard work, making things easier for you.
            </p>
          </div>
          
          {/* Right Column: Emphasized Quote/Statement */}
          <div className="lg:w-1/2 flex items-center">
            <p className="text-[24px] text-[#00B4D8] max-w-sm">
              <span className='text-[32px]'>W</span>ith years of research focusing on solving 
              problems with people and businesses in mind, 
              we're committed to delivering a premium user 
              experience and eager to demonstrate it 
              firsthand.
            </p>
          </div>
        </div>
        
        {/* Bottom Section: Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          
          {/* Card 1: Business To Business (B2B) */}
          <div className="bg-[#EDF6FC] rounded-[20px] p-6 flex flex-col items-start">
            <h3 className="text-xl font-bold text-[#000000] mb-2">Business To Business</h3>
            <p className="text-md text-[#5E5E5E] mb-8">
              We build powerful digital solutions for <br />
              businesses.
            </p>
            <div className="relative overflow-hidden rounded-[20px] w-full h-48 sm:h-[428px] mt-auto">
              <img 
                src={business} 
                alt="Two people shaking hands" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
          </div>
          
          {/* Card 2: Business To Customer (B2C) - Image first */}
          <div className="bg-[#EDF6FC] rounded-[20px] p-6 flex flex-col items-start">
            <div className="relative overflow-hidden rounded-[20px] w-full h-48 sm:h-[428px] mb-[38px]">
              <img 
                src={customer} 
                alt="Man smiling while looking at his phone" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
            <h3 className="text-xl font-bold text-[#000000] mb-2">Business To Customer</h3>
            <p className="text-md text-[#5E5E5E]">
              We create intuitive digital products customers <br />
              love.
            </p>
          </div>
          
          {/* Card 3: Business To Business To Customer (B2B2C) */}
          <div className="bg-[#EDF6FC] rounded-[20px] p-6 flex flex-col items-start">
            <h3 className="text-xl font-bold text-[#000000] mb-2">
              Business To Business To <br />
              Customer
            </h3>
            <p className="text-md text-[#5E5E5E] mb-8">
              We connect businesses and customers through <br />
              seamless systems.
            </p>
            <div className="relative overflow-hidden rounded-[20px] w-full h-48 sm:h-[428px] mt-auto">
              <img 
                src={buscustomer} 
                alt="Two people collaborating at a desk with computers" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;

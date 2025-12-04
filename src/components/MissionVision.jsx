import React from 'react';
import mission from '../assets/mission.jpg';
import vision from '../assets/vision.jpg';

const MissionVisionSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-28">
      <div className="mx-auto flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12">
        
        {/* Mission Card */}
        <div className="w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-2xl aspect-[16/9] lg:aspect-[4/4]">
            <img 
              src={mission} 
              alt="Hands assembling puzzle pieces" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent flex flex-col justify-end text-center p-6 sm:p-8 text-white">
              <h3 className="text-2xl sm:text-3xl lg:text-[48px] font-medium mb-2 sm:mb-3">
                Our Mission
              </h3>
              <p className="text-base sm:text-lg lg:text-[24px]">
                To create simplified solutions that make <br />
                life and work easy.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-2xl aspect-[16/9] lg:aspect-[4/4]">
            <img 
              src={vision} 
              alt="Person looking through binoculars" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent flex flex-col justify-end text-center p-6 sm:p-8 text-white">
              <h3 className="text-2xl sm:text-3xl lg:text-[48px] font-medium mb-2 sm:mb-3">
                Our Vision
              </h3>
              <p className="text-base sm:text-lg lg:text-[24px]">
                To build an ecosystem of solutions <br />
                that work for people
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVisionSection;

import React from 'react';
import mission from '../assets/mission.jpg';
import vision from '../assets/vision.jpg';

const MissionVisionSection = () => {
  return (
    <section className="py-[120px] px-4 md:px-8 lg:px-[120px]">
      {/* Outer Container for max width and centering */}
      <div className="mx-auto flex flex-col lg:flex-row items-stretch justify-center gap-[37.21px]">
        
        {/* Mission Card */}
        <div className="lg:w-1/2 w-full">
          <div className="relative overflow-hidden rounded-2xl aspect-video lg:aspect-4/4">
            {/* Background Image for Mission */}
            <img 
              src={mission} // Replace with your mission image
              alt="Hands assembling puzzle pieces" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay Gradient and Text */}
            <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent flex flex-col justify-end text-center p-8 text-white">
              <h3 className="text-[48px] font-medium">Our Mission</h3>
              <p className="text-[24px]">
                To create simplified solutions that make <br />
                life and work easy.
              </p>
            </div>
          </div>
        </div>
        
        {/* Vision Card */}
        <div className="lg:w-1/2 w-full">
          <div className="relative overflow-hidden rounded-2xl aspect-video lg:aspect-4/4">
            {/* Background Image for Vision */}
            <img 
              src={vision} // Replace with your vision image
              alt="Person looking through binoculars" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay Gradient and Text */}
            <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent flex flex-col justify-end text-center p-8 text-white">
              <h3 className="text-[48px] font-medium">Our Vision</h3>
              <p className="text-[24px]">
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
import React from 'react';
import AboutHero from '../components/AboutHero';
import WhoWeAre from '../components/WhoWeAre';
import MissionVision from '../components/MissionVision';
import WhatWeDo from '../components/WhatWeDo';
import Foundation from '../components/Foundation';
import Organogram from '../components/Organogram';
import background from '../assets/background.png';

const About = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Faint repeating background */}
      <div
        className="absolute inset-0 w-full h-full opacity-3"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto', // default size
          backgroundPosition: 'top left',
        }}
      ></div>

      {/* Page content */}
      <div className="relative z-10">
        <AboutHero />
        <WhoWeAre />
        <MissionVision />
        <WhatWeDo />
        <Foundation />
        <Organogram />
      </div>

      {/* Responsive adjustments */}
      <style jsx>{`
        @media (max-width: 640px) {
          div[style] {
            background-size: 80px 80px; /* smaller repeated pattern for mobile */
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          div[style] {
            background-size: 120px 120px; /* medium for tablets */
          }
        }
        @media (min-width: 1025px) {
          div[style] {
            background-size: 160px 160px; /* larger pattern for desktop */
          }
        }
      `}</style>
    </div>
  );
};

export default About;

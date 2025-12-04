import React from 'react';
import aboutvideo from '../assets/aboutvideo.mp4';

const FifthlabSection = () => {
  return (
    <section className="pt-24 sm:pt-12 lg:pt-20 px-4 sm:px-6 lg:px-[139.07px]">
      {/* Outer Container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2">
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[75px] font-medium text-[#0E0E0E] leading-tight mb-6 text-center lg:text-left">
            We Are Fifthlab<br />
            {/* <span className="text-[#0E0E0E]">Fifthlab</span> */}
          </h1>
          
          {/* Introductory Text */}
          <p className="text-base sm:text-lg md:text-[20px] text-[#596780] mb-8 max-w-lg text-center lg:text-left mx-auto lg:mx-0">
            Welcome to Fifthlab, your trusted partner in digital 
            transformation. Since 2020, we’ve been on a 
            mission to empower businesses of all sizes with 
            innovative solutions that drive growth, efficiency, 
            and success.
          </p>
          
          {/* Statistics Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-8 text-center lg:mx-auto">
            
            {/* Stat 1 */}
            <div>
              <p className="text-3xl sm:text-4xl lg:text-4xl font-medium text-[#00B4D8] mb-1">
                50,000+
              </p>
              <p className="text-sm text-[#7C7C7C]">
                Active Users <br />
                Across Products
              </p>
            </div>
            
            {/* Stat 2 */}
            <div>
              <p className="text-3xl sm:text-4xl lg:text-4xl font-medium text-[#00B4D8] mb-1">
                250+
              </p>
              <p className="text-sm text-[#7C7C7C]">
                Businesses <br />
                Supported
              </p>
            </div>
            
            {/* Stat 3 */}
            <div>
              <p className="text-3xl sm:text-4xl lg:text-4xl font-medium text-[#00B4D8] mb-1">
                97%
              </p>
              <p className="text-sm text-[#7C7C7C]">
                System <br />
                Uptime
              </p>
            </div>
            
          </div>
        </div>
        
        {/* Right Column: Video (Option 2) */}
<div className="w-full lg:w-1/2">
  <div className="
    p-4                                     {/* 1. Inner padding to frame the video */}
    bg-white/50 backdrop-blur-sm            {/* 2. Light, frosted background (Optional: if the background is complex) */}
    rounded-[2.5rem]                        {/* 3. Very large, distinctive border radius */}
    shadow-2xl shadow-gray-700/30           {/* 4. Custom, darker, spread-out shadow */}
    ring-4 ring-cyan-200/50                 {/* 5. Light, subtle ring/border for definition */}
    w-full lg:h-[450px] aspect-video
    group relative overflow-visible
  ">
    <div className="relative overflow-hidden rounded-3xl"> {/* Inner container for video corner radius */}
      <video
        src={aboutvideo}
        className="w-full h-[420px] object-cover"
        controls
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
    
    {/* Optional: Add a decorative element like a corner tag or badge */}
    {/* <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-[#00B4D8] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg opacity-90">
        Demo
    </div> */}
  </div>
</div>

      </div>
    </section>
  );
};

export default FifthlabSection;

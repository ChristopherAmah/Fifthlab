import React from 'react';
import aboutvideo from '../assets/aboutvideo.mp4';

const FifthlabSection = () => {
  return (
    <section className="pt-[182.25px] px-4 md:px-8 lg:px-[139.07px]">
      {/* Outer Container for max width and centering */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Column: Text Content and Stats */}
        <div className="lg:w-1/2">
          
          {/* Main Heading */}
          <h1 className="text-[75px] font-medium text-[#0E0E0E] leading-tight mb-6">
            We Are <br />
            <span className="text-[#0E0E0E]">Fifthlab</span>
          </h1>
          
          {/* Introductory Text */}
          <p className="text-[20px] text-[#596780] mb-6 max-w-lg">
            Welcome to Fifthlab, your trusted partner in digital 
            transformation. Since 2020, we’ve been on a 
            mission to empower businesses of all sizes with 
            innovative solutions that drive growth, efficiency, 
            and success.
          </p>
          
          {/* Statistics Grid */}
          <div className="flex justify-between">
            
            {/* Stat 1 */}
            <div className="flex-1">
              <p className="text-5xl font-medium text-[#00B4D8] mb-1">
                50,000+
              </p>
              <p className="text-sm text-[#7C7C7C]">
                Active Users <br />
                Across Products
              </p>
            </div>
            
            {/* Stat 2 */}
            <div className="flex-1 ml-8">
              <p className="text-5xl font-medium text-[#00B4D8] mb-1">
                250+
              </p>
              <p className="text-sm text-[#7C7C7C]">
                Businesses <br />
                Supported
              </p>
            </div>
            
            {/* Stat 3 */}
            <div className="flex-1">
              <p className="text-5xl font-medium text-[#00B4D8] mb-1">
                97%
              </p>
              <p className="text-sm text-[#7C7C7C]">
                System <br />
                Uptime
              </p>
            </div>
            
          </div>
        </div>
        
        {/* Right Column: Image/Video Placeholder */}
        <div className="lg:w-1/2 w-full">
          {/* This div simulates the styled container for the image/video */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl w-full aspect-video">
            
            {/* Replace 'your-image-url.jpg' with the actual image URL or a component */}
            <video
              src={aboutvideo}   // ✅ This is now a VIDEO file
              className="w-full h-full object-cover responsive-video"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthlabSection;
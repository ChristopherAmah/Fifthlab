import React from "react";
import community from "../assets/community.png";

export default function JoinCommunity() {
  return (
    <section className="bg-black text-white py-14 px-4 sm:px-6 md:px-10 flex items-center justify-center">
      <div className="w-full max-w-7xl grid md:grid-cols-2 items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-[60px] font-medium leading-tight">
            Join Our <br className="hidden md:block" />
            Ever Growing <br className="hidden md:block" />
            Community
          </h2>

          {/* Input + Button */}
          <div className="mt-8 sm:mt-10 w-full max-w-md mx-auto md:mx-0 
  flex flex-row 
  border-2 border-white rounded-[10px] 
  p-1 sm:p-2 bg-black gap-2 sm:gap-0">

  <input
    type="email"
    placeholder="Enter your email address"
    className="grow min-w-0 px-3 sm:px-4 py-2.5 sm:py-3 
    bg-transparent text-white placeholder-white 
    text-[13px] sm:text-[16px] focus:outline-none"
  />

  <a href="mailto:hello@thefifthlab.com" className="shrink-0">
    <button className="bg-white text-[#08B6D8] font-medium 
    px-3 sm:px-6 py-2.5 sm:py-3 
    text-[13px] sm:text-[16px]
    rounded-md hover:bg-gray-200 transition whitespace-nowrap">
      Join Now
    </button>
  </a>

</div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={community}
            alt="Community graphic"
            className="w-full max-w-sm sm:max-w-md md:max-w-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}

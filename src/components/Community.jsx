import React from "react";
import community from "../assets/community.png";

export default function JoinCommunity() {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-23 flex items-center justify-center">
      
      <div className="w-full max-w-7xl grid md:grid-cols-2 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-5xl md:text-[60px] font-medium">
            Join Our <br />
            Ever Growing <br />
            Community
          </h2>

          {/* Input + Button Container */}
          <div className="mt-10 flex items-center w-full max-w-md border-2 border-white rounded-[10px] p-1.5 bg-black">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-4.5 bg-transparent text-white placeholder-[#FFFFFF] text-[16px] focus:outline-none"
            />
            {/* The button sits inside the padding of the container */}
            <button className="bg-white text-[#08B6D8] font-medium px-6 py-4 rounded-[5px] hover:bg-gray-100 transition hover:cursor-pointer">
              Join Now
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex md:justify-end mt-10 md:mt-0">
          <img
            src={community}
            alt="Community graphic"
            className="w-full max-w-xl object-contain"
          />
        </div>

      </div>

    </section>
  );
}
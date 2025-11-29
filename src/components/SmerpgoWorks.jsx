import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

// Dummy images for the steps
import step1Img from "../assets/step1.png";
import step2Img from "../assets/step2.png";
import step3Img from "../assets/step3.png";

export default function StepFlow() {
  return (
    <section className="w-full py-16 px-6 md:py-[102px] md:px-[113px]">
      <h2 className="text-center text-3xl md:text-[54px] font-medium mb-12 md:mb-14 text-[#12141D]">
        How Smerpgo Works
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-16">

        {/* ------- STEP 1 ------- */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mt-6 md:mt-8">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#2B59FF] rounded-full flex items-center justify-center">
              <img src={step1Img} alt="Step 1" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
            </div>
            <div className="absolute top-2 md:top-5 right-0 translate-x-2 -translate-y-2 w-8 h-8 md:w-10 md:h-10 bg-[#2B59FF] text-[#FAFAFA] rounded-full flex items-center justify-center text-sm md:text-[18px] font-medium border-white border-2 md:border-3">
              1
            </div>
          </div>
          <h3 className="text-[#12141D] text-xl md:text-[24px] font-semibold mt-4 md:mt-6">Step 1</h3>
          <p className="text-[#767676] text-sm md:text-[16px] mt-2 md:mt-3 max-w-md">
            Ensuring data accuracy is crucial for making informed decisions and ensuring the reliability.
          </p>
        </div>

        {/* Arrow 1 */}
        <div className="hidden md:flex items-center justify-center mb-30 h-40">
          <HiOutlineArrowNarrowRight className="text-[#2B59FF] text-4xl" />
        </div>

        {/* ------- STEP 2 ------- */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mt-6 md:mt-8">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#6F4BE5] rounded-full flex items-center justify-center">
              <img src={step2Img} alt="Step 2" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
            </div>
            <div className="absolute top-2 md:top-5 right-0 translate-x-2 -translate-y-2 w-8 h-8 md:w-10 md:h-10 bg-[#6F4BE5] text-[#FAFAFA] rounded-full flex items-center justify-center text-sm md:text-[18px] font-medium border-white border-2 md:border-3">
              2
            </div>
          </div>
          <h3 className="text-[#12141D] text-xl md:text-[24px] font-semibold mt-4 md:mt-6">Step 2</h3>
          <p className="text-[#767676] text-sm md:text-[16px] mt-2 md:mt-3 max-w-md md:max-w-xl">
            Ensuring data accuracy is crucial for making informed decisions and ensuring the reliability.
          </p>
        </div>

        {/* Arrow 2 */}
        <div className="hidden md:flex items-center justify-center mb-30 h-40">
          <HiOutlineArrowNarrowRight className="text-[#6F4BE5] text-4xl" />
        </div>

        {/* ------- STEP 3 ------- */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mt-6 md:mt-8">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#12141D] rounded-full flex items-center justify-center">
              <img src={step3Img} alt="Step 3" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
            </div>
            <div className="absolute top-2 md:top-5 right-0 translate-x-2 -translate-y-2 w-8 h-8 md:w-10 md:h-10 bg-[#12141D] text-[#FAFAFA] rounded-full flex items-center justify-center text-sm md:text-[18px] font-medium border-white border-2 md:border-3">
              3
            </div>
          </div>
          <h3 className="text-[#12141D] text-xl md:text-[24px] font-semibold mt-4 md:mt-6">Step 3</h3>
          <p className="text-[#767676] text-sm md:text-[16px] mt-2 md:mt-3 max-w-md">
            Ensuring data accuracy is crucial for making informed decisions and ensuring the reliability.
          </p>
        </div>

      </div>
    </section>
  );
}

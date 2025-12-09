import React from "react";
import org from '../assets/org.png';

const OurFoundation = () => {
  return (
    <section className="py-8 md:py-16 px-4 md:px-8  lg:px-20">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <h1 className="text-3xl sm:text-5xl font-medium text-center text-[#03045E] leading-tight mb-8 md:mb-[54px]">
          ORGANOGRAM
        </h1>

        {/* Content */}
        <div>
            <img src={org} alt="" />
        </div>
      </div>
    </section>
  );
};

export default OurFoundation;

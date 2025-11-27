import React from "react";
import background from "../assets/background.png";

const EnquiryForm = () => {
  return (
    <section className="relative min-h-screen px-4 pt-20 sm:pt-32 pb-10">
      {/* Background Image */}
      <img
        src={background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      {/* Get In Touch Header - always top-left */}
      <h1 className="absolute top-8 left-4 sm:top-12 sm:left-12 text-xl sm:text-[18px] font-normal text-[#343434] z-10">
        Get In Touch
      </h1>

      {/* Form Container - centered */}
      <div className="relative max-w-2xl w-full mx-auto bg-white rounded-3xl py-[30px] sm:px-[51.5px] border border-[#3F76FF80]">
        <h2 className="text-2xl sm:text-[32px] font-medium text-[#343434] mb-2 text-start">
          MAKE AN ENQUIRY
        </h2>
        <p className="text-sm sm:text-[14px] text-[#596780] mb-10 text-start">
          This is just a randomly generated text to be included in a later date based on a final draft to be decided by the content team.
        </p>

        <form className="space-y-6">
          {/* Row 1: Full Name & Work Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label
                htmlFor="full-name"
                className="text-[14px] font-medium text-[#585858] block mb-2"
              >
                Full Name
              </label>
              <input
                id="full-name"
                type="text"
                placeholder="Enter Your Full Name"
                className="w-full border border-[#D0D0D0] rounded-lg px-4 py-2 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3F76FF80]"
              />
            </div>
            <div>
              <label
                htmlFor="work-email"
                className="text-[14px] font-medium text-[#585858] block mb-2"
              >
                Work Email
              </label>
              <input
                id="work-email"
                type="email"
                placeholder="Enter Your Work Email"
                className="w-full border border-[#D0D0D0] rounded-lg px-4 py-2 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3F76FF80]"
              />
            </div>
          </div>

          {/* Row 2: Company Name & Business Size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label
                htmlFor="company-name"
                className="text-[14px] font-medium text-[#585858] block mb-2"
              >
                Company Name
              </label>
              <input
                id="company-name"
                type="text"
                placeholder="Enter Your Company Name"
                className="w-full border border-[#D0D0D0] rounded-lg px-4 py-2 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3F76FF80]"
              />
            </div>
            <div>
              <label
                htmlFor="business-size"
                className="text-[14px] font-medium text-[#585858] block mb-2"
              >
                Business Size
              </label>
              <select
                id="business-size"
                className="w-full border border-[#D0D0D0] rounded-lg px-4 py-2 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3F76FF80] text-gray-500 appearance-none bg-white"
              >
                <option disabled defaultValue>
                  Select Business Size
                </option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
          </div>

          {/* Contact Number */}
          <div>
            <label
              htmlFor="contact-number"
              className="text-[14px] font-medium text-[#585858] block mb-2"
            >
              Contact Number
            </label>
            <input
              id="contact-number"
              type="text"
              placeholder="Enter Your Contact Number"
              className="w-full border border-[#D0D0D0] rounded-lg px-4 py-2 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3F76FF80]"
            />
          </div>

          {/* Drop A Note */}
          <div>
            <label
              htmlFor="drop-a-note"
              className="text-[14px] font-medium text-[#585858] block mb-2"
            >
              Drop A Note
            </label>
            <textarea
              id="drop-a-note"
              className="w-full border border-[#D0D0D0] rounded-lg px-4 py-2 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3F76FF80] resize-none h-32"
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#010101] text-white rounded-lg py-3 text-[16px] font-bold hover:bg-gray-800 transition-colors mt-4"
          >
            Submit
          </button>

          {/* Terms */}
          <p className="text-[14px] text-[#596780] mt-2 text-center">
            By clicking the submit button above, it means you've read and agreed to the{" "}
            <a
              href="#"
              className="text-blue-500 cursor-pointer hover:text-blue-600 text-bold text-[14px]"
            >
              Terms & Conditions
            </a>{" "}
            and the{" "}
            <a
              href="#"
              className="text-blue-500 cursor-pointer hover:text-blue-600 text-bold text-[14px]"
            >
              Privacy Policy
            </a>{" "}
            of Fifthlab
          </p>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;

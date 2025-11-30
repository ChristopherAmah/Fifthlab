import React, { useState } from "react";
import background from "../assets/background.png";
import { CiCircleCheck } from "react-icons/ci";

const EnquiryForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <section className="relative min-h-screen px-4 pt-24 sm:pt-32 pb-10 overflow-hidden">
      {/* Background Image */}
      <img
        src={background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-5"
      />

      {/* Get In Touch Header */}
      <h1 className="absolute top-6 left-4 sm:top-12 sm:left-12 text-lg sm:text-[18px] font-normal text-[#343434] z-10">
        Get In Touch
      </h1>

      {/* Form Container */}
      <div className="relative w-full max-w-2xl mx-auto bg-white rounded-3xl px-5 sm:px-[51.5px] py-[35px] border-2 border-[#3F76FF80] shadow-sm">
        <h2 className="text-xl sm:text-[32px] font-medium text-[#343434] mb-2 text-start leading-tight">
          MAKE AN ENQUIRY
        </h2>

        <p className="text-sm sm:text-[14px] text-[#596780] mb-8 sm:mb-10 text-start">
          This is just a randomly generated text to be included in a later date
          based on a final draft to be decided by the content team.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label
                htmlFor="full-name"
                className="text-[13px] sm:text-[14px] font-medium text-[#585858] block mb-2"
              >
                Full Name
              </label>
              <input
                id="full-name"
                type="text"
                placeholder="Enter Your Full Name"
                className="w-full border border-[#D0D0D0] rounded-lg px-4 py-3 text-[14px] sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-[#3F76FF80]"
              />
            </div>

            <div>
              <label
                htmlFor="work-email"
                className="text-[13px] sm:text-[14px] font-medium text-[#585858] block mb-2"
              >
                Work Email
              </label>
              <input
                id="work-email"
                type="email"
                placeholder="Enter Your Work Email"
                className="w-full border border-[#D0D0D0] rounded-lg px-4 py-3 text-[14px] sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-[#3F76FF80]"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label
                htmlFor="company-name"
                className="text-[13px] sm:text-[14px] font-medium text-[#585858] block mb-2"
              >
                Company Name
              </label>
              <input
                id="company-name"
                type="text"
                placeholder="Enter Your Company Name"
                className="w-full border border-[#D0D0D0] rounded-lg px-4 py-3 text-[14px] sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-[#3F76FF80]"
              />
            </div>

            <div>
              <label
                htmlFor="business-size"
                className="text-[13px] sm:text-[14px] font-medium text-[#585858] block mb-2"
              >
                Business Size
              </label>
              <select
                id="business-size"
                className="w-full border border-[#D0D0D0] rounded-lg px-4 py-3 text-[14px] sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-[#3F76FF80] text-gray-500 appearance-none bg-white"
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
              className="text-[13px] sm:text-[14px] font-medium text-[#585858] block mb-2"
            >
              Contact Number
            </label>
            <input
              id="contact-number"
              type="text"
              placeholder="Enter Your Contact Number"
              className="w-full border border-[#D0D0D0] rounded-lg px-4 py-3 text-[14px] sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-[#3F76FF80]"
            />
          </div>

          {/* Drop A Note */}
          <div>
            <label
              htmlFor="drop-a-note"
              className="text-[13px] sm:text-[14px] font-medium text-[#585858] block mb-2"
            >
              Drop A Note
            </label>
            <textarea
              id="drop-a-note"
              placeholder="Write your note here..."
              className="w-full border border-[#D0D0D0] rounded-lg px-4 py-3 text-[14px] sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-[#3F76FF80] resize-none h-32"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#010101] text-white rounded-lg py-3 text-[15px] sm:text-[16px] font-bold hover:bg-gray-800 transition-colors"
          >
            Submit
          </button>

          {/* Terms */}
          <p className="text-[12px] sm:text-[14px] text-[#596780] mt-2 text-center px-1 sm:px-0">
            By clicking the submit button above, it means you've read and agreed
            to the{" "}
            <a href="#" className="text-blue-500 hover:text-blue-600 font-semibold">
              Terms & Conditions
            </a>{" "}
            and the{" "}
            <a href="#" className="text-blue-500 hover:text-blue-600 font-semibold">
              Privacy Policy
            </a>{" "}
            of Fifthlab
          </p>
        </form>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
          <div className="bg-white w-full max-w-md rounded-3xl p-6 relative text-center shadow-lg">
            
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-600 text-xl"
            >
              ✕
            </button>

            {/* Green Check Icon */}
            <div className="flex justify-start mb-4">
              <div className="w-14 h-14 rounded-full bg-[#D1FADF] flex items-center justify-center">
                <span className="text-[#039855] text-3xl"><CiCircleCheck /></span>
              </div>
            </div>

            <h2 className="text-[24px] font-semibold text-[#181D27] mb-1 text-start">
              Thank You for Your Enquiry!
            </h2>

            <p className="text-[#73788C] text-[17.11px] mb-6  text-start">
              We’ve received your request and our team will get back to you shortly. 
              We’re excited to assist you with all the details!
            </p>

            {/* Return to Homepage */}
            <a
              href="/"
              className="block w-full bg-[#010101] text-white py-3 rounded-[100000px] font-medium text-[19.56px]"
            >
              Return to Homepage
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default EnquiryForm;

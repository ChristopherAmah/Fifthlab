import React, { useState } from "react";
import background from "../assets/background.png";
import { CiCircleCheck } from "react-icons/ci";

const EnquiryForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    businessSize: 'Select Business Size',
    contactNumber: '',
    dropANote: '',
  });

  // Function to update state on input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Function to handle form submission and mailto link
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.workEmail || !formData.dropANote) {
      alert("Please fill in required fields: Full Name, Work Email, and Note.");
      return;
    }

    // 1. Construct the email body
    const subject = encodeURIComponent(`NEW ENQUIRY from Website: ${formData.fullName} - ${formData.companyName || 'N/A'}`);
    
    const body = `
Hello Fifthlab Team,

A new enquiry has been submitted via the "Make an Enquiry" form on the website.

---
CUSTOMER DETAILS
---

Full Name: ${formData.fullName}
Work Email: ${formData.workEmail}
Contact Number: ${formData.contactNumber || 'N/A'}

---
BUSINESS DETAILS
---

Company Name: ${formData.companyName || 'N/A'}
Business Size: ${formData.businessSize === 'Select Business Size' ? 'N/A' : formData.businessSize}

---
CUSTOMER NOTE
---

${formData.dropANote}

---
DISCLAIMER
---

The user agreed to the Terms & Conditions and Privacy Policy by submitting this form.

`;
    const encodedBody = encodeURIComponent(body.trim());

    // 2. Create the mailto link
    const mailtoLink = `mailto:hello@thefifthlab.com?subject=${subject}&body=${encodedBody}`;

    // 3. Open the mail client (This will open the user's default email client)
    window.location.href = mailtoLink;

    // 4. Show success popup *after* triggering the mailto link, using a short delay.
    // This allows the browser/OS to start the email client process before the modal covers the screen.
    setTimeout(() => {
      setShowPopup(true);
    }, 200); // 200 milliseconds delay
  };


  return (
    <section className="relative min-h-screen px-4 pt-24 sm:pt-32 pb-10 overflow-hidden">
      {/* Background Image */}
      <img
        src={background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-3"
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
                htmlFor="fullName"
                className="text-[13px] sm:text-[14px] font-medium text-[#585858] block mb-2"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter Your Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-[#D0D0D0] rounded-lg px-4 py-3 text-[14px] sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-[#3F76FF80]"
              />
            </div>

            <div>
              <label
                htmlFor="workEmail"
                className="text-[13px] sm:text-[14px] font-medium text-[#585858] block mb-2"
              >
                Work Email
              </label>
              <input
                id="workEmail"
                type="email"
                placeholder="Enter Your Work Email"
                value={formData.workEmail}
                onChange={handleChange}
                className="w-full border border-[#D0D0D0] rounded-lg px-4 py-3 text-[14px] sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-[#3F76FF80]"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label
                htmlFor="companyName"
                className="text-[13px] sm:text-[14px] font-medium text-[#585858] block mb-2"
              >
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                placeholder="Enter Your Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full border border-[#D0D0D0] rounded-lg px-4 py-3 text-[14px] sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-[#3F76FF80]"
              />
            </div>

            <div>
              <label
                htmlFor="businessSize"
                className="text-[13px] sm:text-[14px] font-medium text-[#585858] block mb-2"
              >
                Business Size
              </label>
              <select
                id="businessSize"
                value={formData.businessSize}
                onChange={handleChange}
                className="w-full border border-[#D0D0D0] rounded-lg px-4 py-3 text-[14px] sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-[#3F76FF80] text-gray-500 appearance-none bg-white"
              >
                <option disabled value="Select Business Size">
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
              htmlFor="contactNumber"
              className="text-[13px] sm:text-[14px] font-medium text-[#585858] block mb-2"
            >
              Contact Number
            </label>
            <input
              id="contactNumber"
              type="text"
              placeholder="Enter Your Contact Number"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full border border-[#D0D0D0] rounded-lg px-4 py-3 text-[14px] sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-[#3F76FF80]"
            />
          </div>

          {/* Drop A Note */}
          <div>
            <label
              htmlFor="dropANote"
              className="text-[13px] sm:text-[14px] font-medium text-[#585858] block mb-2"
            >
              Drop A Note
            </label>
            <textarea
              id="dropANote"
              placeholder="Write your note here..."
              value={formData.dropANote}
              onChange={handleChange}
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

            <p className="text-[#73788C] text-[17.11px] mb-6  text-start">
              We’ve received your request and your email client has opened to send your enquiry. Please press send!
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
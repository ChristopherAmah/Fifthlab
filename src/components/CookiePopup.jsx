import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookiePopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasDecision = document.cookie.includes("cookieDecision=");
    if (!hasDecision) setVisible(true);
  }, []);

  const handleAccept = () => {
    const oneYear = 365 * 24 * 60 * 60;
    document.cookie =
      "cookieDecision=accepted; path=/; max-age=" + oneYear;
    setVisible(false);
  };

  const handleReject = () => {
    const threeMonths = 90 * 24 * 60 * 60;
    document.cookie =
      "cookieDecision=rejected; path=/; max-age=" + threeMonths;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Slide animation keyframes */}
      <style>{`
        @keyframes slideUp {
          0% {
            transform: translateY(40px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>

      <div
        className="
          fixed bottom-5 left-1/2 
          -translate-x-1/2 
          bg-white text-gray-900 
          px-5 py-4 rounded-xl shadow-lg 
          flex flex-wrap items-center justify-between gap-3 
          w-[90%] max-w-[500px] 
          font-inter z-1000
          animate-slideUp
        "
      >
        <p className="m-0 text-sm leading-relaxed flex-1 text-start md:text-center sm:text-left">
          We use cookies to enhance your experience. By continuing, you agree to our{" "}
          <Link
            to="/cookie-policy"
            className="text-[#00B4D8] font-medium hover:underline"
          >
            Cookie Policy
          </Link>.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-2 mt-3">
          <button
            onClick={handleAccept}
            className="
              bg-[#00B4D8] hover:bg-blue-600 
              text-white font-medium text-sm 
              px-4 py-2 rounded-lg 
              transition-colors duration-300
              cursor-pointer
            "
          >
            Accept
          </button>

          <button
            onClick={handleReject}
            className="
              bg-gray-300 hover:bg-gray-400 
              text-gray-800 font-medium text-sm 
              px-4 py-2 rounded-lg 
              transition-colors duration-300
              cursor-pointer
            "
          >
            Reject
          </button>
        </div>
      </div>
    </>
  );
};

export default CookiePopup;

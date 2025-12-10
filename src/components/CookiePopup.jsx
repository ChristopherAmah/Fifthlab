import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookiePopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasDecision = document.cookie.includes("cookieDecision=");
    if (!hasDecision) setVisible(true);
  }, []);

  const handleAccept = () => {
    // Set cookie for 1 week
    document.cookie = "cookieDecision=accepted; path=/; max-age=" + 7 * 24 * 60 * 60; // 1 week
    setVisible(false);
  };

  const handleReject = () => {
    // Set cookie for 1 week indicating rejection
    document.cookie = "cookieDecision=rejected; path=/; max-age=" + 1 * 24 * 60 * 60; // 1 day
    setVisible(false);
  };

  const handleClose = () => {
    // Just close the popup without setting a cookie
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="
        fixed bottom-5 left-1/2 -translate-x-1/2 
        bg-white text-gray-900 
        px-5 py-4 rounded-xl shadow-lg 
        flex flex-wrap items-center justify-between gap-3 
        w-[90%] max-w-[500px] 
        font-inter z-1000
        
      "
    >
      {/* Close button at top-right */}
      {/* <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold text-lg transition-colors duration-300"
        aria-label="Close"
      >
        ×
      </button> */}

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
  );
};

export default CookiePopup;

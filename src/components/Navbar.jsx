import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import fifthlab from "../assets/fifthlab.png";

/* ✅ IMPORT ICON IMAGES */
import finedgeIcon from "../assets/finedgenav.svg";
import bulkwaveIcon from "../assets/bulkwavenav.svg";
import smerpIcon from "../assets/smerpnav.svg";
import smerpGoIcon from "../assets/smerpgonav.svg";
import kuleanpayIcon from "../assets/kuleanpaynav.svg";
import ucpIcon from "../assets/ucpnav.svg";
import beetvasIcon from "../assets/beetnav.svg";

/* ------------------ SOLUTIONS DATA (UNCHANGED) ------------------ */
const solutionsData = [
  {
    name: "FinEdge",
    description: "AI Powered Core Banking Suite",
    icon: finedgeIcon,
    href: "/finedge",
  },
  {
    name: "Bulkwave",
    description: "Bulk Airtime, Data & SMS",
    icon: bulkwaveIcon,
    href: "/bulkwave",
  },
  {
    name: "Smerp",
    description: "ERP Solution For Businesses",
    icon: smerpIcon,
    href: "/smerp",
  },
  {
    name: "Smerp Go",
    description: "Pocket ERP Solution For Online Stores",
    icon: smerpGoIcon,
    href: "/smerpgo",
  },
  {
    name: "KuleanPay",
    description: "Secure Payment Solution",
    icon: kuleanpayIcon,
    href: "/kuleanpay",
  },
  {
    name: "Unified Cooperative Platform (UCP)",
    description: "Simplified Cooperative Management",
    icon: ucpIcon,
    href: "/ucp",
  },
  {
    name: "BeetVAS",
    description: "Airtime & Data Vending API Suite",
    icon: beetvasIcon,
    href: "/beetvas",
  },
];

/* ------------------ SOLUTION ITEM (Desktop Version - UNCHANGED) ------------------ */
const SolutionItem = ({ icon, name, description, href, closeMenu }) => (
  <Link
    to={href}
    onClick={closeMenu}
    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition w-full cursor-pointer"
  >
    {/* ✅ IMAGE ICON */}
    <div className="shrink-0 w-9 h-9 flex items-center justify-center">
      <img
        src={icon}
        alt={name}
        className="w-10 h-10 object-contain"
      />
    </div>

    <div>
      <p className="font-medium text-[#111B29] text-[16px]">
        {name}
      </p>
      <p className="text-[#79869B] text-[14px]">
        {description}
      </p>
    </div>
  </Link>
);

/* ------------------ MOBILE SOLUTION ITEM (Enhanced Mobile Version) ------------------ */
const MobileSolutionItem = ({ icon, name, description, href, closeMenu }) => (
  <Link
    to={href}
    onClick={closeMenu}
    className="flex items-start gap-3 p-3 my-1 rounded-xl hover:bg-gray-100 transition w-full cursor-pointer"
  >
    <div className="shrink-0 w-8 h-8 flex items-center justify-center">
      <img
        src={icon}
        alt={name}
        className="w-8 h-8 object-contain"
      />
    </div>

    <div>
      <p className="font-semibold text-[#111B29] text-[16px]">
        {name}
      </p>
      <p className="text-[#79869B] text-[14px]">
        {description}
      </p>
    </div>
  </Link>
);

/* ------------------ NAVBAR ------------------ */
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false); // Desktop state
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false); // Mobile state

  const closeDesktopMenu = () => setIsSolutionsOpen(false);
  
  // Function to close the mobile menu and solution dropdowns
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    // Note: We don't close isMobileSolutionsOpen here, only when navigating away, 
    // so it remembers its state if the user briefly closes the full menu.
  };
  
  // Toggle for the menu button
  const toggleMobileMenu = () => {
      // If closing, ensure we also reset the solutions dropdown state inside the menu
      if (isMobileMenuOpen) {
          setIsMobileSolutionsOpen(false);
      }
      setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md shadow-[#D9D9D940] px-6 sm:px-10 py-4 flex items-center justify-between relative z-50">

      {/* ---------------- DESKTOP LEFT NAV (ORIGINAL) ---------------- */}
      <div className="hidden md:flex items-center gap-6 text-[#7C7C7C] text-[16px]">
        <Link to="/" className="hover:text-black transition">Home</Link>
        <Link to="/about-us" className="hover:text-black transition">About Us</Link>

        {/* ---------------- SOLUTIONS DROPDOWN (ORIGINAL DESKTOP) ---------------- */}
        <div
          className="relative"
          onMouseEnter={() => setIsSolutionsOpen(true)}
          onMouseLeave={() => setIsSolutionsOpen(false)}
        >
          <div className="flex items-center gap-1 hover:text-black transition cursor-pointer select-none relative z-10">
            <span>Solutions</span>
            <ChevronDown size={16} />
          </div>

          {/* Hover bridge */}
          <div className="absolute left-0 top-full h-4 w-full" />

          {isSolutionsOpen && (
            <div className="absolute top-full left-0 mt-4 z-50">
              {/* Arrow */}
              <div className="absolute left-6 -top-2 w-0 h-0
                border-l-8 border-l-transparent
                border-r-8 border-r-transparent
                border-b-8 border-b-white"
              />

              {/* Dropdown Panel */}
              <div className="bg-[#FFFFFF] shadow-xl border border-gray-100 rounded-2xl overflow-hidden w-[750px] pt-4 pb-3">
                <h3 className="text-xs font-medium uppercase text-[#97A3B7] tracking-wider px-6 mb-3">
                  SOLUTIONS
                </h3>

                <div className="grid grid-cols-2 gap-y-2 px-4">
                  {solutionsData.map((solution) => (
                    <SolutionItem
                      key={solution.name}
                      {...solution}
                      closeMenu={closeDesktopMenu}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <Link to="/insights" className="hover:text-black transition">
          Insights
        </Link>
      </div>

      {/* ---------------- CENTER LOGO (ORIGINAL) ---------------- */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/">
          <img src={fifthlab} alt="fifthlab logo" className="h-5 object-contain" />
        </Link>
      </div>

      {/* ---------------- DESKTOP CTA (ORIGINAL) ---------------- */}
      <div className="hidden md:flex">
        <Link to="/contact-us">
          <button className="bg-[#00B4D8] text-white font-medium text-[16px] px-5 py-2 rounded-full hover:bg-[#00B4D8] transition">
            Get In Touch →
          </button>
        </Link>
      </div>

      {/* ---------------- MOBILE BUTTON (REVISED) ---------------- */}
      {/* We use the Menu icon to signify the slide-out menu */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-gray-700">
          <Menu size={24} />
        </button>
      </div>

      {/* ---------------- MOBILE MENU SLIDE-OUT (NEW IMPLEMENTATION) ---------------- */}

      {/* 1. Backdrop Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={closeMobileMenu}
        />
      )}

      {/* 2. Slide-In Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-full max-w-xs bg-white shadow-2xl flex flex-col pt-4 pb-6 overflow-y-auto z-50 transform transition-transform duration-300 ease-in-out md:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        
        {/* Header/Close Button */}
        <div className="flex justify-between items-center px-6 pb-4 border-b border-gray-100 mb-4">
            <Link to="/" onClick={closeMobileMenu}>
              <img src={fifthlab} alt="fifthlab logo" className="h-6 object-contain" />
            </Link>
            <button onClick={closeMobileMenu} className="text-gray-700 p-2 rounded-full hover:bg-gray-100 transition">
                <X size={24} />
            </button>
        </div>

        {/* Menu Links Container */}
        <div className="flex flex-col flex-grow px-4">
            {/* Primary Links */}
            <Link 
              to="/" 
              onClick={closeMobileMenu} 
              className="text-left py-3 px-4 text-lg font-semibold text-gray-700 hover:bg-gray-50 rounded-lg transition"
            >
              Home
            </Link>
            <Link 
              to="/about-us" 
              onClick={closeMobileMenu} 
              className="text-left py-3 px-4 text-lg font-semibold text-gray-700 hover:bg-gray-50 rounded-lg transition"
            >
              About Us
            </Link>
            
            {/* Solutions Dropdown Section */}
            <div className="w-full my-2">
              <div
                className="flex items-center justify-between w-full py-3 px-4 text-lg font-semibold text-gray-700 hover:bg-gray-50 rounded-lg transition cursor-pointer"
                onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
              >
                <span>Solutions</span>
                <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileSolutionsOpen ? "rotate-180" : ""}`} />
              </div>

              {isMobileSolutionsOpen && (
                <div className="flex flex-col items-start gap-1 mt-3 px-2">
                  <h3 className="text-xs font-medium uppercase text-[#97A3B7] tracking-wider mb-2 px-3 pt-2">
                    PRODUCTS & PLATFORMS
                  </h3>
                  {/* Using the MobileSolutionItem for a rich list */}
                  {solutionsData.map((solution) => (
                    // We need to ensure we close the full menu AND the solutions list on selection
                    <MobileSolutionItem
                      key={solution.name}
                      {...solution}
                      closeMenu={closeMobileMenu} 
                    />
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/insights" 
              onClick={closeMobileMenu}
              className="text-left py-3 px-4 text-lg font-semibold text-gray-700 hover:bg-gray-50 rounded-lg transition"
            >
              Insights
            </Link>
        </div>

        {/* CTA Button at the bottom */}
        <div className="mt-8 px-6">
          <Link to="/contact-us" onClick={closeMobileMenu}>
            <button className="bg-[#00B4D8] text-white font-semibold text-[17px] w-full px-5 py-3 rounded-full hover:opacity-90 transition">
              Get In Touch →
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
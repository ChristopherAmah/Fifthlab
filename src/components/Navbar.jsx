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

/* ------------------ SOLUTIONS DATA ------------------ */
const solutionsData = [
  {
    name: "FinEdge",
    description: "AI Powered Core Banking Suite.",
    icon: finedgeIcon,
    href: "/finedge",
  },
  {
    name: "Bulkwave",
    description: "Bulk Airtime, Data & SMS.",
    icon: bulkwaveIcon,
    href: "/bulkwave",
  },
  {
    name: "Smerp",
    description: "ERP Solution For Businesses.",
    icon: smerpIcon,
    href: "/smerp",
  },
  {
    name: "Smerp Go",
    description: "Pocket ERP Solution For Online Stores.",
    icon: smerpGoIcon,
    href: "/smerpgo",
  },
  {
    name: "KuleanPay",
    description: "Secure Payment Solution.",
    icon: kuleanpayIcon,
    href: "/kuleanpay",
  },
  {
    name: "Unified Cooperative Platform (UCP)",
    description: "Simplified Cooperative Management.",
    icon: ucpIcon,
    href: "/ucp",
  },
  {
    name: "BeetVAS",
    description: "Airtime & Data Vending API Suite.",
    icon: beetvasIcon,
    href: "/beetvas",
  },
];

/* ------------------ SOLUTION ITEM ------------------ */
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
      <p className="font-semibold text-gray-900 text-[15px] leading-snug">
        {name}
      </p>
      <p className="text-gray-500 text-sm mt-0.5">
        {description}
      </p>
    </div>
  </Link>
);

/* ------------------ NAVBAR ------------------ */
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

  const closeDesktopMenu = () => setIsSolutionsOpen(false);

  return (
    <nav className="w-full bg-white shadow-md shadow-[#D9D9D940] px-6 sm:px-10 py-4 flex items-center justify-between relative z-50">

      {/* ---------------- DESKTOP LEFT NAV ---------------- */}
      <div className="hidden md:flex items-center gap-6 text-[#7C7C7C] text-[16px]">
        <Link to="/" className="hover:text-black transition">Home</Link>
        <Link to="/about-us" className="hover:text-black transition">About Us</Link>

        {/* ---------------- SOLUTIONS DROPDOWN ---------------- */}
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
              <div className="bg-white shadow-xl border border-gray-100 rounded-xl overflow-hidden w-[680px] pt-4 pb-3">
                <h3 className="text-xs font-semibold uppercase text-gray-500 tracking-wider px-6 mb-3">
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

      {/* ---------------- CENTER LOGO ---------------- */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/">
          <img src={fifthlab} alt="fifthlab logo" className="h-5 object-contain" />
        </Link>
      </div>

      {/* ---------------- DESKTOP CTA ---------------- */}
      <div className="hidden md:flex">
        <Link to="/contact-us">
          <button className="bg-cyan-500 text-white font-medium text-[16px] px-5 py-2 rounded-full hover:bg-[#00B4D8] transition">
            Get In Touch →
          </button>
        </Link>
      </div>

      {/* ---------------- MOBILE BUTTON ---------------- */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ---------------- MOBILE MENU ---------------- */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 gap-4 md:hidden z-50">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>

          <div className="flex flex-col items-center gap-1">
            <div
              className="flex items-center gap-1"
              onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
            >
              <span>Solutions</span>
              <ChevronDown size={16} />
            </div>

            {isMobileSolutionsOpen && (
              <div className="flex flex-col items-center gap-2 mt-2">
                {solutionsData.map((solution) => (
                  <Link
                    key={solution.name}
                    to={solution.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileSolutionsOpen(false);
                    }}
                  >
                    {solution.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/insights" onClick={() => setIsMobileMenuOpen(false)}>
            Insights
          </Link>

          <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="bg-cyan-500 text-white font-medium text-[16px] px-5 py-2 rounded-full hover:bg-[#00B4D8] transition">
              Get In Touch →
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

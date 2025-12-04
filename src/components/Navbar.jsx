import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import fifthlab from "../assets/fifthlab.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false); // Desktop dropdown
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false); // Mobile dropdown

  return (
    <nav className="w-full bg-white shadow-md shadow-[#D9D9D940] px-6 sm:px-10 py-4 flex items-center justify-between relative">

      {/* Left Navigation (Desktop) */}
      <div className="hidden md:flex items-center gap-6 text-[#7C7C7C] text-[16px]">
        <Link to="/" className="hover:text-black transition">Home</Link>
        <Link to="/about-us" className="hover:text-black transition">About Us</Link>

        {/* Solutions Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsSolutionsOpen(true)}
          onMouseLeave={() => setIsSolutionsOpen(false)}
        >
          <div className="flex items-center gap-1 hover:text-black transition cursor-pointer">
            <span>Solutions</span>
            <ChevronDown size={16} />
          </div>

          {isSolutionsOpen && (
            <div className="absolute top-full left-0 bg-white shadow-md rounded-md py-3 px-4 flex flex-col w-40 z-50">
              <Link to="/kuleanpay" className="hover:text-black py-1">KuleanPay</Link>
              <Link to="/finedge" className="hover:text-black py-1">Finedge</Link>
              <Link to="/ucp" className="hover:text-black py-1">UCP</Link>
              <Link to="/bulkwave" className="hover:text-black py-1">Bulkwave</Link>
              <Link to="/smerp" className="hover:text-black py-1">Smerp</Link>
              <Link to="/smerpgo" className="hover:text-black py-1">SmerpGo</Link>
              <Link to="/beetvas" className="hover:text-black py-1">Beetvas</Link>
            </div>
          )}
        </div>

        <Link to="/insights" className="hover:text-black transition">Insights</Link>
      </div>

      {/* Center Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/">
          <img src={fifthlab} alt="fifthlab logo" className="h-5 object-contain" />
        </Link>
      </div>

      {/* Right CTA Button */}
      <div className="hidden md:flex">
        <Link to="/contact-us">
          <button className="bg-cyan-500 text-white font-medium text-[16px] px-5 py-2 rounded-full cursor-pointer hover:bg-[#00B4D8] transition flex items-center gap-2">
            Get In Touch →
          </button>
        </Link>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 gap-4 md:hidden z-50">

          <Link to="/" className="hover:text-black transition" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>

          <Link to="/about-us" className="hover:text-black transition" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </Link>

          {/* Mobile Solutions */}
          <div className="flex flex-col items-center gap-1 cursor-pointer">
            <div
              className="flex items-center gap-1 hover:text-black"
              onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
            >
              <span>Solutions</span>
              <ChevronDown size={16} />
            </div>

            {isMobileSolutionsOpen && (
              <div className="flex flex-col items-center gap-2 mt-2 text-[#7c7c7c]">
                <Link to="/kuleanpay" onClick={() => setIsMobileMenuOpen(false)}>KuleanPay</Link>
                <Link to="/finedge" onClick={() => setIsMobileMenuOpen(false)}>Finedge</Link>
                <Link to="/ucp" onClick={() => setIsMobileMenuOpen(false)}>UCP</Link>
                <Link to="/bulkwave" onClick={() => setIsMobileMenuOpen(false)}>Bulkwave</Link>
                <Link to="/smerp" onClick={() => setIsMobileMenuOpen(false)}>Smerp</Link>
                <Link to="/smerpgo" onClick={() => setIsMobileMenuOpen(false)}>SmerpGo</Link>
                <Link to="/beetvas" onClick={() => setIsMobileMenuOpen(false)}>Beetvas</Link>
              </div>
            )}
          </div>

          <Link to="/insights" className="hover:text-black transition" onClick={() => setIsMobileMenuOpen(false)}>
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

import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import ndpr from "../assets/ndpr.png";
import darklogo from "../assets/darklogo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-5 sm:px-8 md:px-20">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[5fr_1fr_1fr_1fr] gap-12">

        {/* Logo + Address */}
        <div className="text-center sm:text-left">
          <div className="flex sm:block justify-center sm:justify-start">
            <img src={darklogo} alt="fifthlab" className="h-8 mb-4" />
          </div>

          <p className="text-[#A19EC2] text-[16px] sm:text-[18px] max-w-xs mx-auto sm:mx-0">
            Plot 7, Joshua Ebun Ojo Close, off Rufus Giwa.  
            Lekki Phase 1, Lagos Nigeria.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start gap-4 mt-6 text-2xl">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>

          {/* NDPR Badge */}
          <div className="flex justify-center sm:justify-start mt-6">
            <img 
              src={ndpr} 
              alt="NDPR Audit" 
              className="h-[90px] sm:h-[110px]"
            />
          </div>
        </div>

        {/* Product */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-[18px] sm:text-[20px] mb-4">Product</h3>
          <ul className="space-y-2 text-[#A19EC2] text-[16px] sm:text-[18px]">
            <li>Bulkwave</li>
            <li>FinEdge</li>
            <li>KuleanPay</li>
            <li>Pesso</li>
            <li>Smerp</li>
            <li>UCP</li>
          </ul>
        </div>

        {/* Company */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-[18px] sm:text-[20px] mb-4">Company</h3>
          <ul className="space-y-2 text-[#A19EC2] text-[16px] sm:text-[18px]">
            <li>About Us</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Insights</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-[18px] sm:text-[20px] mb-4">Contact Us</h3>

          <div className="flex items-center sm:items-start justify-center sm:justify-start gap-3 text-[#A19EC2] text-[16px] sm:text-[18px] mb-4">
            <Mail size={18} />
            <span>Hello@thefifthlab.com</span>
          </div>

          <div className="flex items-center sm:items-start justify-center sm:justify-start gap-3 text-[#A19EC2] text-[16px] sm:text-[18px] mb-4">
            <Phone size={18} />
            <span>+234 816 235 2009</span>
          </div>

          <div className="flex items-start justify-center sm:justify-start gap-3 text-[#A19EC2] text-[16px] sm:text-[18px] leading-snug">
            <MapPin size={32} />
            <span>
              7 Joshua Ebun Ojo Cl, Lekki Phase I,  
              Lekki 106104, Lagos, Nigeria.
            </span>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-[#D9DBE9] my-10"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-[#6F6C90] text-[14px] sm:text-[16px]">

        <p className="mb-3 md:mb-0">
          Copyright © 2024 Fifthlab
        </p>

        <p>
          All Rights Reserved | 
          <span className="ml-1 underline text-white cursor-pointer">Terms and Conditions</span> |
          <span className="ml-1 underline text-white cursor-pointer">Privacy Policy</span>
        </p>
      </div>

    </footer>
  );
}

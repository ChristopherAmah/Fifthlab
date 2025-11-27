import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import ndpr from "../assets/ndpr.png";
import darklogo from "../assets/darklogo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-6 px-6 md:px-20">
      
      {/* Top Section */}
      <div className="grid md:grid-cols-[5fr_1fr_1fr_1fr] gap-12">
        
        {/* Logo + Address */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={darklogo} alt="fifthlab" className="h-8" />
          </div>

          <p className="text-[#A19EC2] font-normal text-[20px] font-sans max-w-xs">
            Plot 7, Joshua Ebun Ojo Close, off Rufus Giwa.  
            Lekki Phase 1, Lagos Nigeria.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-xl text-[#FFFFFF]">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>


          {/* NDPR Badge */}
          <img 
            src={ndpr} 
            alt="NDPR Audit" 
            className="h-[111px] mt-6"
          />
        </div>

        {/* Product */}
        <div>
          <h3 className="font-bold text-[20px] mb-4">Product</h3>
          <ul className="space-y-2 text-[#A19EC2] text-[18px] font-normal">
            <li>Bulkwave</li>
            <li>FinEdge</li>
            <li>KuleanPay</li>
            <li>Pesso</li>
            <li>Smerp</li>
            <li>UCP</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-[20px] mb-4">Company</h3>
          <ul className="space-y-2 text-[#A19EC2] text-[18px] font-normal">
            <li>About Us</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Insights</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-[20px] mb-4">Contacts us</h3>

          <div className="flex items-start gap-3 text-[#A19EC2] text-[18px] font-normal mb-4">
            <Mail size={16} />
            <span>Hello@thefifthlab.com</span>
          </div>

          <div className="flex items-start gap-3 text-[#A19EC2] text-[18px] font-normal mb-4">
            <Phone size={16} />
            <span>+234 816 235 2009</span>
          </div>

          <div className="flex items-start gap-3 text-[#A19EC2] text-[18px] font-normal">
            <MapPin size={40} />
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
      <div className="flex flex-col md:flex-row justify-between font-normal text-[#6F6C90] text-[18px]">
        
        <p classn>Copyright © 2024 Fifthlab</p>

        <p className="mt-3 md:mt-0">
          All Rights Reserved | 
          <span className="ml-1 underline text-white cursor-pointer">Terms and Conditions</span> |
          <span className="ml-1 underline text-white cursor-pointer">Privacy Policy</span>
        </p>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import ndpr from "../assets/ndpr.png";
import darklogo from "../assets/darklogo.png";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-5 sm:px-8 md:px-20">
      
      {/* Top Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-[5fr_1fr_1fr_1fr] gap-12">

        {/* Logo + Address (FULL WIDTH ON MOBILE) */}
        <div className="col-span-2 md:col-span-1 text-center sm:text-left">
          <div className="flex sm:block justify-center sm:justify-start">
            <img src={darklogo} alt="fifthlab" className="h-8 mb-4" />
          </div>

          <p className="text-[#A19EC2] text-[16px] sm:text-[18px] max-w-xs mx-auto sm:mx-0">
            <a 
              href="https://maps.google.com/?q=Plot+7,+Joshua+Ebun+Ojo+Close,+Lekki+Phase+1,+Lagos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plot 7, Joshua Ebun Ojo Close, off Rufus Giwa.  
              Lekki Phase 1, Lagos Nigeria.
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start gap-4 mt-6 text-2xl">
            <a href="https://www.facebook.com/FifthlabAfrica" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://x.com/FifthlabAfrica" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a href="https://www.instagram.com/fifthlabafrica/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/fifthlab/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>

          {/* NDPR Badge */}
          <div className="flex justify-center sm:justify-start mt-6">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img 
                src={ndpr} 
                alt="NDPR Audit" 
                className="h-[90px] sm:h-[110px]"
              />
            </a>
          </div>
        </div>

        {/* Product */}
        <div className="text-left">
          <h3 className="font-bold text-[18px] sm:text-[20px] mb-4">Product</h3>
          <ul className="space-y-2 text-[#A19EC2] text-[16px] sm:text-[18px]">
            <li><Link to="/bulkwave" onClick={scrollToTop}>Bulkwave</Link></li>
            <li><Link to="/finedge" onClick={scrollToTop}>FinEdge</Link></li>
            <li><Link to="/kuleanpay" onClick={scrollToTop}>KuleanPay</Link></li>
            <li><Link to="/beetvas" onClick={scrollToTop}>BeetVAS</Link></li>
            <li><Link to="/smerp" onClick={scrollToTop}>Smerp</Link></li>
            <li><Link to="/smerpgo" onClick={scrollToTop}>SmerpGo</Link></li>
            <li><Link to="/ucp" onClick={scrollToTop}>UCP</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="text-left">
          <h3 className="font-bold text-[18px] sm:text-[20px] mb-4">Company</h3>
          <ul className="space-y-2 text-[#A19EC2] text-[16px] sm:text-[18px]">
            <li><Link to="/about-us" onClick={scrollToTop}>About Us</Link></li>
            <li><Link to="/contact-us" onClick={scrollToTop}>Contact us</Link></li>
            <li><Link to="/about-us" onClick={scrollToTop}>Careers</Link></li>
            <li><Link to="/insights" onClick={scrollToTop}>Insights</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-left">
          <h3 className="font-bold text-[18px] sm:text-[20px] mb-4">Contact Us</h3>

          <div className="flex items-center sm:items-start justify-center sm:justify-start gap-3 text-[#A19EC2] text-[16px] sm:text-[18px] mb-4">
            <Mail size={18} />
            <a href="mailto:hello@thefifthlab.com">hello@thefifthlab.com</a>
          </div>

          <div className="flex sm:items-start justify-center sm:justify-start gap-3 text-[#A19EC2] text-[16px] sm:text-[18px] mb-4">
            <Phone size={18} />
            <a href="tel:+2348162352009">+234 816 235 2009</a>
          </div>

          <div className="flex justify-center sm:justify-start gap-3 text-[#A19EC2] text-[16px] sm:text-[18px] leading-snug">
            <MapPin className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
            <a 
              href="https://maps.google.com/?q=7+Joshua+Ebun+Ojo+Cl,+Lekki+Phase+1,+Lagos"
              target="_blank"
              rel="noopener noreferrer"
            >
              7 Joshua Ebun Ojo Cl, Lekki Phase I,  
              Lekki 106104, Lagos, Nigeria.
            </a>
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
          <Link to="/terms" className="ml-1 underline text-white" onClick={scrollToTop}>Terms and Conditions</Link> |
          <Link to="/privacy-policy" className="ml-1 underline text-white" onClick={scrollToTop}>Privacy Policy</Link>
        </p>
      </div>

    </footer>
  );
}

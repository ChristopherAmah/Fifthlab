import React from 'react';

// You would replace these with your actual image paths
// For this example, I'll use placeholders for the assets.
// You need to save your images (logo, mockups) in your project's 'assets' folder
import smerplogo from '../assets/smerplogo.png'; 
import kuleanpaylogo from '../assets/kuleanpaylogo.png';
import smerpphone from '../assets/smerpphone.png';
import kuleanpayphone from '../assets/kuleanpayphone.png';

// Placeholder SVGs for the logos if you don't have the images yet
const SmerpLogo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.91 3.5L10.5 5.91L21.41 16.82L23.82 14.41L12.91 3.5Z" fill="#FBBF24"/>
    <path d="M26.41 14.41L15.5 25.32L17.91 27.73L28.82 16.82L26.41 14.41Z" fill="#FBBF24"/>
    <path d="M28.82 23.5L26.41 25.91L37.32 36.82L39.73 34.41L28.82 23.5Z" fill="#FBBF24"/>
    <path d="M14.41 23.5L25.32 12.59L27.73 15L16.82 25.91L14.41 23.5Z" fill="#FBBF24"/>
  </svg>
);

const KuleanpayLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0C7.16 0 0 7.16 0 16C0 24.84 7.16 32 16 32C24.84 32 32 24.84 32 16C32 7.16 24.84 0 16 0ZM16 29C8.83 29 3 23.17 3 16C3 8.83 8.83 3 16 3C23.17 3 29 8.83 29 16C29 23.17 23.17 29 16 29ZM14.5 10H17.5V13H14.5V10ZM14.5 16H17.5V22H14.5V16Z" fill="#3B82F6"/>
    <path d="M16 16.73C14.07 16.73 12.5 15.16 12.5 13.23C12.5 11.3 14.07 9.73 16 9.73C17.93 9.73 19.5 11.3 19.5 13.23C19.5 15.16 17.93 16.73 16 16.73ZM16 18.23C14.07 18.23 12.5 19.8 12.5 21.73C12.5 23.66 14.07 25.23 16 25.23C17.93 25.23 19.5 23.66 19.5 21.73C19.5 19.8 17.93 18.23 16 18.23Z" fill="#4F46E5"/>
  </svg>
);


// Reusable Card Component for better structure
const SolutionCard = ({
  logo: LogoComponent, // Pass the logo component directly or use an img tag
  title,
  description,
  buttonText,
  mockupImage,
  bgColor, // Tailwind class for background color
  mockupAlt,
}) => (
  <div className={`flex-1 min-w-0 ${bgColor} rounded-3xl pt-16 pb-0 px-4 sm:px-6 lg:px-8 text-center`}>
    {/* Logo */}
    <div className="flex justify-center mb-4">
      {/* Use the LogoComponent if provided, otherwise assume mockupImage is the logo */}
      {LogoComponent ? <LogoComponent /> : <img src={mockupImage} alt={`${title} logo`} className="w-10 h-10 object-contain" />}
    </div>

    {/* Title */}
    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
      {title}
    </h3>

    {/* Description */}
    <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto mb-8">
      {description}
    </p>

    {/* Read More Button */}
    <a 
      href="#" 
      className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold rounded-full text-white bg-black hover:bg-gray-800 transition-colors duration-200 mb-12"
    >
      {buttonText}
      <svg 
        className="ml-2 h-4 w-4" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2.5} 
          d="M17 8l4 4m0 0l-4 4m4-4H3" 
        />
      </svg>
    </a>

    {/* Dashboard Mockup Image */}
    <div className="relative">
        <div className="w-full mx-auto max-w-sm sm:max-w-md lg:max-w-lg">
            <img
            // Assuming the mockup images are already in a phone frame perspective
            src={smerpphone} 
            alt={mockupAlt}
            // Use a perspective transform for the Smerp card to match the original image
            className={`w-full h-auto object-contain ${title === 'Smerp' ? 'transform rotate-10 translate-x-4 scale-105' : ''}`} 
            />
        </div>
    </div>
  </div>
);

const SolutionsShowcase = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* === Smerp Card (Left) === */}
        <SolutionCard
          logo={smerplogo} // Using the placeholder SVG
          title="Smerp"
          description="Take control of your business operations with SMERP, our comprehensive Enterprise Resource Planning (ERP) software. SMERP streamlines tasks like inventory management."
          buttonText="Read More"
          mockupImage={smerpphone} // Replace with your actual import
          bgColor="bg-pink-50" // The light pink/lavender background
          mockupAlt="Smerp Mobile App Mockup"
        />

        {/* === Kuleanpay Card (Right) === */}
        <SolutionCard
          logo={kuleanpaylogo} // Using the placeholder SVG
          title="Kuleanpay"
          description="Kuleanpay is a smart AI driven escrow engine that makes payments secure, transparent, and seamless - giving businesses confidence and customers total peace of mind."
          buttonText="Read More"
          mockupImage={kuleanpayphone} // Replace with your actual import
          bgColor="bg-white" // The white background
          mockupAlt="Kuleanpay Mobile App Mockup"
        />

      </div>
    </section>
  );
};

export default SolutionsShowcase;
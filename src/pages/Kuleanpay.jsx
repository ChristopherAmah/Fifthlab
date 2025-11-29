import React from 'react'
import KuleanPaySection from '../components/KuelanpayHero'
import KuleanpayAbout from '../components/KuleanpayAbout'
import KuleanpayWorks from '../components/KuleanpayWorks'
import background from '../assets/background.png'

const Kuleanpay = () => {
  return (
    <div className="relative">
      {/* Faint repeating background */}
      <div
        className="fixed inset-0 w-full h-full opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          backgroundPosition: 'top left',
        }}
      ></div>

      {/* Page Content */}
      <div className="relative z-10">
        <KuleanPaySection />
        <KuleanpayAbout />
        <KuleanpayWorks />
      </div>

      {/* Responsive background scaling */}
      <style jsx>{`
        @media (max-width: 640px) {
          div[style] {
            background-size: 80px 80px !important;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          div[style] {
            background-size: 120px 120px !important;
          }
        }
        @media (min-width: 1025px) {
          div[style] {
            background-size: 160px 160px !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Kuleanpay

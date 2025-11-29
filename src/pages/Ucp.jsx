import React from 'react'
import UcpSection from '../components/UcpHero'
import UcpAbout from '../components/UcpAbout'
import UcpWorks from '../components/UcpWorks'
import background from '../assets/background.png'

const Ucp = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Faint repeating background */}
      <div
        className="absolute inset-0 w-full h-full opacity-5"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          backgroundPosition: 'top left',
        }}
      ></div>

      {/* Page Content */}
      <div className="relative z-10">
        <UcpSection />
        <UcpAbout />
        <UcpWorks />
      </div>

      {/* Responsive background scaling */}
      <style jsx>{`
        @media (max-width: 640px) {
          div[style] {
            background-size: 80px 80px;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          div[style] {
            background-size: 120px 120px;
          }
        }
        @media (min-width: 1025px) {
          div[style] {
            background-size: 160px 160px;
          }
        }
      `}</style>
    </div>
  )
}

export default Ucp

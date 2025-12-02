import React from 'react'
import background from '../assets/background.png';
import Hero from '../components/Hero'
import Logo from '../components/Logo'
import Insights from '../components/Insights'
import MoreSection from '../components/MoreSection'
import OurSolution from '../components/OurSolution'

const Home = () => {
  return (
    <div className="relative min-h-screen">

      {/* Hero section with repeating background */}
      <section className="relative">
        {/* Background overlay with opacity */}
        <div
          className="absolute inset-0 w-full h-full opacity-3 pointer-events-none"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            backgroundPosition: 'top left',
          }}
        ></div>

        <div className="relative z-10">
          <Hero />
        </div>
      </section>

      {/* Other sections without background */}
      <MoreSection />
      <OurSolution />
      <Logo />
      <Insights />

      {/* Responsive adjustments for the background */}
      <style jsx>{`
        @media (max-width: 640px) {
          div[style] {
            background-size: 80px 80px; /* smaller repeated pattern for mobile */
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          div[style] {
            background-size: 120px 120px; /* medium for tablets */
          }
        }
        @media (min-width: 1025px) {
          div[style] {
            background-size: 160px 160px; /* larger pattern for desktop */
          }
        }
      `}</style>
    </div>
  )
}

export default Home

import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Community from "./components/Community";
import Home from "./pages/Home";
import About from "./pages/About";
import Kuleanpay from "./pages/Kuleanpay";
import Finedge from "./pages/Finedge";
import Ucp from "./pages/Ucp";
import Getintouch from "./pages/Getintouch";
import Insights from "./pages/Insights";
import Bulkwave from "./pages/Bulkwave";
import Smerp from "./pages/Smerp";
import Smerpgo from "./pages/Smerpgo";
import Beetvas from "./pages/Beetvas";
import ArticlePage from "./pages/ArticlePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./ScrollToTop";
import GoogleAnalyticsTracker from "./GoogleAnalyticsTracker";
import CookiePolicy from "./pages/CookiePolicy";
import CookiePopup from "./components/CookiePopup";

function App() {

  useEffect(() => {
    // Load GA script
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-QW0BMQE9C8";
    script.async = true;
    document.head.appendChild(script);

    // Initialize GA
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", "G-QW0BMQE9C8");
  }, []);

  return (
    <>
      <ScrollToTop />
      <GoogleAnalyticsTracker />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Getintouch />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/kuleanpay" element={<Kuleanpay />} />
        <Route path="/finedge" element={<Finedge />} />
        <Route path="/ucp" element={<Ucp />} />
        <Route path="/bulkwave" element={<Bulkwave />} />
        <Route path="/smerp" element={<Smerp />} />
        <Route path="/smerpgo" element={<Smerpgo />} />
        <Route path="/beetvas" element={<Beetvas />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Community />
      <Footer />
      <CookiePopup />
    </>
  );
}

export default App;

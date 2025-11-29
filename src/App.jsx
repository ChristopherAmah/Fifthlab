import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
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

function App() {
  return (
    <>
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
      </Routes>
      
      <Community />
      <Footer />
    </>
  )
}

export default App

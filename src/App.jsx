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
import Smerp from "./pages/Smerp";
import Smerpgo from "./pages/Smerpgo";
import Beetvas from "./pages/Beetvas";

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
        <Route path="/smerp" element={<Smerp />} />
        <Route path="/smerpgo" element={<Smerpgo />} />
        <Route path="/beetvas" element={<Beetvas />} />
      </Routes>
      
      <Community />
      <Footer />
    </>
  )
}

export default App

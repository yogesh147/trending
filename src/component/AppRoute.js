import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import { Routes, Route, HashRouter } from "react-router-dom";
import Body from "./Body";
import About from "./About";
import ContactUs from "./ContactUs";
import Privacy from "./Privacy";
import TermsOfServices from "./TermsOfService";

export default function AppRoute() {
   return (
      <>
         <HashRouter>
            <Header />
            <Routes >
               <Route path="/" element={<Body />} />
               <Route path="/home" element={<Body />} />
               <Route path="/about" element={<About />} />
               <Route path="/contact-us" element={<ContactUs />} />
               <Route path="/privacy" element={<Privacy />} />
               <Route path="/terms-of-services" element={<TermsOfServices />} />
            </Routes>
            <Footer />
         </HashRouter>
      </>
   );
}
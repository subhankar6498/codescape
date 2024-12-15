import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Features from "../Pages/Features";
import Gallery from "../Pages/Gallery";
import Team from "../Pages/Team";
import Services from "../Pages/Services";
import Pricing from "../Pages/Pricing";
import Contact from "../Pages/Contact";
import Wrapper from "../Layouts/Wrapper";

const AppRoutes = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Wrapper>
      </Router>
    </>
  );
};

export default AppRoutes;

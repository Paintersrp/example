import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ScrollToTop from "./components/Other/scrollToTop";
import SEOHeader from "./components/Other/SEOHeader";
import RegisterForm from "./components/Forms/Register/RegisterForm";
import LoginForm from "./components/Forms/Login/LoginForm";
import MUI_Navbar from "./components/Navigation/Simple-Collapse/MUI-Navbar";
import MuiFooter from "./components/Footer/Simple/SimpleFooter";
import LandingPage from "./pages/Landing/LandingPage";
import AboutPage from "./pages/About/AboutPage";
import Navbar from "./components/Navigation/Sidebar/Sidebar";
import Sidebar from "./components/Navigation/Sidebar/Sidebar";
import TestPage from "./pages/Test/Test";
import PricingOverview from "./components/Pricing/BetterServicePage/ServicesPage";

function App() {
  return (
    <Router>
      <SEOHeader />
      <ScrollToTop />
      <MUI_Navbar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/test" element={<TestPage />} />

        <Route path="/services" element={<TestPage />} />
        <Route path="/contact" element={<AboutPage />} />
      </Routes>
      <MuiFooter />
    </Router>
  );
}

export default App;

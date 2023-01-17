import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ScrollToTop from "./components/Other/scrollToTop";
import SEOHeader from "./components/Other/SEOHeader";
import RegisterForm from "./components/MUI-Register/RegisterForm";
import LoginForm from "./components/MUI-Login/LoginForm";
import MUI_Navbar from "./components/MUI-Navbar/MUI-Navbar";
import MuiFooter from "./components/MUI-Footer/MUI-Footer";
import LandingPage from "./components/MUI-Home/LandingPage";
import AboutPage from "./components/MUI-About/AboutPage";
import Navbar from "./components/Test/Sidebar";
import MyComponent from "./components/Test/spring";
import Sidebar from "./components/Test/Sidebar";
import MyAdvancedAnimations from "./components/Test/Animations";
import PricingPage from "./components/Test/BetterServices/CardPage";
import PricingOverview from "./components/Test/BetterServicePage/ServicesPage";

function App() {
  return (
    <Router>
      <SEOHeader />
      <ScrollToTop />
      <MUI_Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<MyAdvancedAnimations />} />
        <Route path="/services2" element={<PricingOverview />} />
        <Route path="/contact" element={<PricingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
      <MuiFooter />
    </Router>
  );
}

export default App;

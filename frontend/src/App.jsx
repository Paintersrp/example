import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/Other/HOC/ScrollToTop/ScrollToTop";
import SEOHeader from "./components/Other/SEOHeader/SEOHeader";
import RegisterForm from "./components/Forms/Register/RegisterForm";
import LoginForm from "./components/Forms/Login/LoginForm";
import MuiFooter from "./components/Footer/SimpleFooter/SimpleFooter";
import LandingPage from "./pages/Landing/LandingPage";
import AboutPage from "./pages/About/AboutPage";
import TestPage from "./pages/Test/Test";
import HeroDemo from "./pages/Demos/HeroesDemo";
import FeatureDemo from "./pages/Demos/FeaturesDemo";
import DrawerBased from "./components/Navigation/DrawerBased/DrawerBased";
import FormDemo from "./pages/Demos/FormDemos";
import PartsDemo from "./pages/Demos/PartDemos";

function App() {
  return (
    <Router>
      <SEOHeader />
      <ScrollToTop />
      <DrawerBased />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/test" element={<TestPage />} />

        <Route path="/services" element={<TestPage />} />
        <Route path="/contact" element={<AboutPage />} />

        <Route path="/heroes" element={<HeroDemo />} />
        <Route path="/features" element={<FeatureDemo />} />
        <Route path="/forms" element={<FormDemo />} />
        <Route path="/parts" element={<PartsDemo />} />
      </Routes>
      <MuiFooter />
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ScrollToTop from "./components/Other/scrollToTop";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import InfoPage from "./components/Information/InfoPage/InfoPage";
import ServicesSection from "./components/Services2/ServicesSection";
import Navbar2 from "./components/Navbar2/Navbar2";
import SEOHeader from "./components/Other/SEOHeader";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <SEOHeader />
      <ScrollToTop />
      {/* <Navbar /> */}
      <Navbar2 />
      {/* <div className="sidebar-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="main-content"> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/expenses" element={<ExpenseTracker />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services2" element={<ServicesSection />} />

        <Route path="/about" element={<About />} />
        <Route path="/about2" element={<InfoPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* </div>
      </div> */}
      <Footer />
    </Router>
  );
}

export default App;

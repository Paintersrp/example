import React from "react";
import "./InfoPage.css";
import CompanySection from "../CompanySection/CompanySection";
import ContactSection from "../ContactSection/ContactSection";

const InfoPage = (props) => {
  return (
    <div className="page-container">
      <CompanySection />
      <ContactSection />
    </div>
  );
};

export default InfoPage;

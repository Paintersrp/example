import React from "react";
import "./CompanySection.css";
import infoData from "./info-data";

const CompanySection = (props) => {
  return (
    <div className="company-section-container">
      <div className="left-column">
        <h1 className="company-name center">{infoData.name}</h1>
        <div className="mission-statement">
          <h2>Mission Statement</h2>
          <p>{infoData.missionStatement}</p>
        </div>
        <div className="vision-statement">
          <h2>Vision Statement</h2>
          <p>{infoData.visionStatement}</p>
        </div>
        <div className="company-history">
          <h2>Company History</h2>
          <p>{infoData.history}</p>
        </div>
        <div className="target-market underline-offset-4">
          <h2>Promises and Offerings</h2>
          <p>{infoData.targetMarket}</p>
        </div>
      </div>
      <div className="right-column">
        <div className="img-container">
          <img src="/images/question.svg" alt="Company logo" />
        </div>
      </div>
    </div>
  );
};

export default CompanySection;

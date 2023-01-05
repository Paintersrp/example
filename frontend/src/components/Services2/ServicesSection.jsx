import React from "react";
import ServicesCard from "./ServicesCard";
import servicesData from "./services-data";
import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <div className="page-container">
      <h1 style={{ textAlign: "center", fontSize: "32px" }}>
        Service Breakdown
      </h1>
      <div style={{ textAlign: "center" }} className="services-section">
        {servicesData.map((service, index) => (
          <ServicesCard key={service.name} serviceId={index} />
        ))}
      </div>
      <h1 style={{ textAlign: "center" }}>Interested In Ordering?</h1>
      <div
        style={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          maxWidth: "600px",
        }}
      >
        <ul style={{ width: "100%", height: "200px", textAlign: "left" }}>
          <h3>Contact our sales team to place an order</h3>
          <h4>Email</h4>
          <li>sales@example.com</li>
          <h4>Phone</h4>
          <li>555-555-5555</li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesSection;

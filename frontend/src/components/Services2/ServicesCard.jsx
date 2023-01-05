import React from "react";
import servicesData from "./services-data";
import "./ServicesCard.css";

const ServicesCard = ({ serviceId }) => {
  const { name, image, description, pricing } = servicesData[serviceId];

  return (
    <div className="services-card">
      <img src={image} alt={name} className="img-card" />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="pricing">
        {pricing.map((tier) => (
          <div key={tier.name} className="tier">
            <h3>{tier.name}</h3>
            <p>{tier.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;

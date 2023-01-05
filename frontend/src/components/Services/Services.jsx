import React from "react";
import "./Services.css";
import ServiceCard from "./ServiceCard";
import servicesData from "./services-data";

function Services() {
  const serviceCards = [];
  for (let i = 0; i < servicesData.length; i += 3) {
    serviceCards.push(
      <div className="services-row" key={i}>
        {servicesData.slice(i, i + 3).map((service) => (
          <ServiceCard
            key={service.id}
            name={service.name}
            description={service.description}
            price={service.price}
          />
        ))}
      </div>
    );
  }
  return <div className="business-services-container">{serviceCards}</div>;
}

export default Services;

import React from "react";
import "./ServiceCard.css";

function ServiceCard({ name, description, price }) {
  return (
    <div className="service-card">
      <h3>{name}</h3>
      <p className="description">{description}</p>
      <p className="price">{price}</p>
    </div>
  );
}

export default ServiceCard;

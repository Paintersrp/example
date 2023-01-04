import React from "react";
import "./Home.css";

function Hero(props) {
  return (
    <section id="hero" className="hero">
      {props.content.map((section) => (
        <div key={section.name} className={section.className}>
          <div className="sub-section">
            <h1>{section.name}</h1>
            <h2 className="hero-subheading">{section.description}</h2>
          </div>
          <div className="img-content">
            <img
              src={section.image_url}
              alt={section.name}
              className="img-content"
            />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Hero;

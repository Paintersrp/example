import React from "react";
import { contactData } from "./contact-data";
import "./About.css";

function About() {
  return (
    <div className="container">
      <h1 className="center">About - {contactData.businessName}</h1>
      <div className="management-team-section" id="management-team-section">
        <h2 className="section-heading">Management Team</h2>
        <div className="management-team-cards">
          {contactData.managementTeam.map((member) => (
            <div className="management-card" key={member.name}>
              <h3>{member.name}</h3>
              <h4>{member.title}</h4>
              <p>Email: {member.email}</p>
              <p>Phone: {member.phone}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="information-section" id="information-section">
        <div
          className="business-information-card"
          id="business-information-card"
        >
          <h2 className="section-heading">Business Information</h2>
          <div className="business-information-content">
            <p>Phone: {contactData.phone}</p>
            <p>Address: {contactData.address}</p>
            <p>Email: {contactData.email}</p>
            <p>Business Hours: {contactData.businessHours}</p>
          </div>
        </div>
        <div className="careers-card" id="careers-card">
          <h2 className="section-heading">Careers</h2>
          <div className="careers-content">
            <p>{contactData.careers.intro}</p>
            <p>{contactData.careers.body}</p>
          </div>
        </div>
      </div>
      <div className="legal-and-social-section" id="legal-and-social-section">
        <div className="legal-section" id="legal-section">
          <h2 className="section-heading">Legal</h2>
          <div className="legal-links">
            {contactData.legal.map((legalItem) => (
              <a
                key={legalItem.title}
                href={legalItem.url}
                className="button-link"
              >
                {legalItem.title}
              </a>
            ))}
          </div>
        </div>
        <div className="social-section" id="social-section">
          <h2 className="section-heading">Social Media</h2>
          <div className="social-links">
            {contactData.socialMedia.map((social) => (
              <a key={social.name} href={social.url} className="button-link">
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

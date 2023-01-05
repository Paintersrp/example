import React from "react";
import "./About.css";
import contactData from "./contact-data";

function About() {
  return (
    <div className="container">
      <h1 className="center">About - {contactData.businessName}</h1>
      <div className="mission-statement-section">
        <h2 className="center">Mission Statement</h2>
        <p>{contactData.missionStatement}</p>
      </div>
      <div className="management-team-section">
        <h2 className="center">Management Team</h2>
        {contactData.managementTeam.map((member) => (
          <div className="management-card" key={member.name}>
            <img src={member.imageUrl} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            <p>{member.email}</p>
            <p>{member.phone}</p>
          </div>
        ))}
      </div>
      <div className="information-section">
        <div className="business-information-card">
          <h2 className="section-heading">Business Information</h2>
          <p className="">
            <strong>Address:</strong> {contactData.address}
          </p>
          <p className="">
            <strong>Phone:</strong> {contactData.phone}
          </p>
          <p className="">
            <strong>Business Hours:</strong> {contactData.businessHours}
          </p>
        </div>
        <div className="careers-card">
          <h2 className="section-heading">Careers Information</h2>
          <p className="">{contactData.careers.description}</p>
          <p className="">
            <strong>Current Openings:</strong>
          </p>
          <ul>
            {contactData.careers.openings.map((opening) => (
              <li key={opening}>{opening}</li>
            ))}
          </ul>
          <a href={contactData.careers.applyUrl} className="btn btn-primary">
            Apply Now
          </a>
        </div>
      </div>
      <div className="legal-and-social-section">
        <div className="legal-section">
          {" "}
          <h2 className="section-heading">Legal</h2>
          <ul>
            {contactData.legalLinks.map((link) => (
              <li key={link.text}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="social-section">
          <h2 className="section-heading">Follow Us</h2>
          <div className="social-links">
            {contactData.socialLinks.map((link) => (
              <a key={link.text} href={link.url}>
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

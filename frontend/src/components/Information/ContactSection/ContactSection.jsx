import React from "react";
import "./ContactSection.css";
import contactData from "./contact-data";
import jobData from "./job-data";

const ContactSection = (props) => {
  return (
    <div className="contact-info-container">
      <div className="contact-card">
        <h2 className="card-header">Contact Information</h2>
        <div className="card-body">
          <p>Address: {contactData.address}</p>
          <p>Phone: {contactData.phone}</p>
          <p>Inquiries Email: {contactData.inquiriesEmail}</p>
          <p>Business Hours: {contactData.businessHours}</p>
        </div>
      </div>
      <div className="contact-card">
        <h2 className="card-header">Careers</h2>
        <div className="card-body">
          <ul>
            {jobData.map((job) => (
              <li key={job.title} className="job-position">
                {job.title}
              </li>
            ))}
          </ul>
          <p>Contact Email: {jobData[0].contactEmail}</p>
          <p>Contact Phone: {jobData[0].contactPhone}</p>
        </div>
      </div>
      <div className="contact-card">
        <h2 className="card-header">Socials</h2>
        <div className="card-body-btn">
          <button onClick={() => window.open(contactData.facebook, "_blank")}>
            Facebook
          </button>
          <button onClick={() => window.open(contactData.twitter, "_blank")}>
            Twitter
          </button>
          <button onClick={() => window.open(contactData.instagram, "_blank")}>
            Instagram
          </button>
          <button onClick={() => window.open(contactData.instagram, "_blank")}>
            Your Dad
          </button>
          <button onClick={() => window.open(contactData.instagram, "_blank")}>
            Therapist
          </button>
          <button onClick={() => window.open(contactData.instagram, "_blank")}>
            The rapist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

import React from "react";
import Form from "./Form";

const NewsletterSubscription = () => {
  const buttonText = "Sign Up";
  const formFields = [
    {
      label: "Preferred Name",
      name: "name",
      type: "text",
    },
    {
      label: "Email Address",
      name: "email",
      type: "email",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data here
  };

  return (
    <div className="section-content noborder news-container">
      <div className="form-section">
        <Form
          formFields={formFields}
          handleSubmit={handleSubmit}
          buttonText={buttonText}
        />
      </div>
      <div className="sub-section">
        <h1>Sign up for our newsletter</h1>
        <h2 className="hero-subheading">
          Get the latest news and updates from our business directly in your
          inbox.
        </h2>
        <h2 className="hero-subheading">
          Don't miss out on exclusive offers and discounts!
        </h2>
      </div>
    </div>
  );
};

export default NewsletterSubscription;

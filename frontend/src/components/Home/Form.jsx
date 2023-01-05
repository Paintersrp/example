import React from "react";
import "./Newsletter.css";

const Form = (props) => {
  const { formFields, handleSubmit, buttonText } = props;

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit} className="form">
        {formFields.map((field) => {
          return (
            <div key={field.name} className="form-field">
              <label htmlFor={field.name} className="form-label">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                className="form-input"
              />
            </div>
          );
        })}
        <button type="submit" className="form-button">
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default Form;

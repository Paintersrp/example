import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    first_name: "",
    password: "",
    password_confirmation: "",
  });
  const [apiError, setApiError] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password !== formData.password_confirmation) {
      setApiError("Passwords do not match");
      return;
    }
    axios
      .post("http://localhost:8000/api/register/", formData)
      .then((response) => {
        console.log(formData);
        // Redirect to the login page
        window.location.href = "/login";
      })
      .catch((error) => {
        setApiError(error.response.data.error);
      });
  }

  return (
    <div className="register-form-container">
      <form className="register-form-items" onSubmit={handleSubmit}>
        <label htmlFor="username" className="register-label">
          Username:
        </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          className="register-input"
        />
        <br />
        <label htmlFor="email" className="register-label">
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="register-input"
        />
        <br />
        <label htmlFor="first_name" className="register-label">
          First Name:
        </label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
          className="register-input"
        />
        <br />
        <label htmlFor="password" className="register-label">
          Password:
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="register-input"
        />
        <br />
        <label htmlFor="password_confirmation" className="register-label">
          Password Confirmation:
        </label>
        <input
          type="password"
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleChange}
          required
          className="register-input"
        />
        <br />
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
      {apiError && <p>{apiError}</p>}
    </div>
  );
}

export default Register;

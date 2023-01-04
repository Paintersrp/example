import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
    axios
      .post("http://localhost:8000/api/login/", formData)
      .then((response) => {
        Cookies.set("jwt", response.data.jwt);
        // document.cookie = `jwt=${response.data.jwt}`;
        window.location.href = "/";
      })
      .catch((error) => {
        setApiError(error.response.data.error);
      });
  }

  return (
    <div className="login-form-container">
      <form className="login-form-ctn" onSubmit={handleSubmit}>
        <label htmlFor="username" className="login-label">
          Username:
        </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          className="login-input"
        />
        <br />
        <label htmlFor="password" className="login-label">
          Password:
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="login-input"
        />
        <br />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      {apiError && <p>{apiError}</p>}
    </div>
  );
}

export default Login;

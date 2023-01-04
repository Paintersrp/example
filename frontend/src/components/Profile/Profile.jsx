import React, { useState } from "react";
import axios from "axios";
import "./Profile.css";
import { useForm } from "react-hook-form";
import withAuth from "../Other/withAuth";

function Profile() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    setError(null);
    axios
      .patch("http://localhost:8000/api/update-profile/", data)
      .then((response) => {
        reset();
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response.data.error);
        setLoading(false);
      });
  };

  return (
    <div className="profile-form-container">
      <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
        {error && <p className="error">{error}</p>}
        <label className="profile-form-label">
          Update First Name
          <input
            className="profile-form-input"
            type="text"
            name="first_name"
            ref={register("first_name")}
          />
        </label>
        <br />
        <label className="profile-form-label">
          Update Last Name
          <input
            className="profile-form-input"
            type="text"
            name="last_name"
            ref={register("last_name")}
          />
        </label>
        <br />
        <label className="profile-form-label">
          Update Email
          <input
            className="profile-form-input"
            type="email"
            name="email"
            ref={register("email")}
          />
        </label>
        <br />
        <button
          className="profile-form-button ml-4"
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
}

export default withAuth(Profile);

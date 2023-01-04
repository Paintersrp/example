import React, { useState, useEffect } from "react";
import axios from "axios";

function withAuth(WrappedComponent) {
  return function (props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      axios
        .get("http://localhost:8000/api/verify/", {
          headers: {
            Authorization: `JWT ${getCookie("jwt")}`,
          },
        })
        .then((response) => {
          console.log(response);
          setIsAuthenticated(true);
        })
        .catch((error) => {
          setError(error.response.data.error);
        });
    }, []);

    if (error) {
      window.location.href = "/login";
      return null;
    }

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return <p className="flex justify-center text-[26px]">Loading...</p>;
    }
  };
}

function getCookie(name) {
  // Get the value of the JWT cookie
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export default withAuth;

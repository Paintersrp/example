import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Navbar2.css";

import navData from "./nav2-data";

const Navbar2 = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Add state for the menu

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get("/api/authenticated");
        setAuthenticated(response.data.authenticated);
      } catch (error) {
        console.error(error);
      }
    };

    checkAuthStatus();
  }, []);

  const authLinks = navData.filter((item) => item.type === "auth-link");
  const businessName = navData.find((item) => item.type === "business-name");
  const generalLinks = navData.filter(
    (item) => !item.type || item.type === "general-link"
  );

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to={businessName.path}>{businessName.text}</Link>
      </div>
      <div className="nav-middle">
        {generalLinks.map((item) => (
          <Link key={item.text} to={item.path}>
            {item.text}
          </Link>
        ))}
      </div>
      <div className="nav-right">
        {authenticated ? (
          <>
            {authLinks
              .filter(
                (item) => item.text !== "Login" && item.text !== "Register"
              )
              .map((item) => (
                <Link key={item.text} to={item.path}>
                  {item.text}
                </Link>
              ))}
          </>
        ) : (
          <>
            {authLinks
              .filter(
                (item) => item.text !== "Logout" && item.text !== "Profile"
              )
              .map((item) => (
                <Link key={item.text} to={item.path}>
                  {item.text}
                </Link>
              ))}
          </>
        )}
      </div>
      {/* Add a menu button and links for smaller screens */}
      <div className="nav-menu-button" onClick={toggleMenu}>
        Menu
      </div>
      {menuOpen && (
        <div className="nav-menu">
          <div className="nav-menu-links">
            {generalLinks.map((item) => (
              <Link key={item.text} to={item.path} onClick={toggleMenu}>
                {item.text}
              </Link>
            ))}
            {authenticated ? (
              <>
                {authLinks
                  .filter(
                    (item) => item.text !== "Login" && item.text !== "Register"
                  )
                  .map((item) => (
                    <Link key={item.text} to={item.path} onClick={toggleMenu}>
                      {item.text}
                    </Link>
                  ))}
              </>
            ) : (
              <>
                {authLinks
                  .filter(
                    (item) => item.text !== "Logout" && item.text !== "Profile"
                  )
                  .map((item) => (
                    <Link key={item.text} to={item.path} onClick={toggleMenu}>
                      {item.text}
                    </Link>
                  ))}
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;

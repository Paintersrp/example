import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Sidebar.css";
import sideData from "./side-data";

function Sidebar() {
  const [auth, setAuth] = useState(null);
  const [collapsed, setCollapsed] = useState(sideData.collapsed);

  useEffect(() => {
    async function fetchAuth() {
      try {
        const response = await axios.get("/api/auth");
        setAuth(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAuth();
  }, []);

  function toggleCollapsed() {
    setCollapsed(!collapsed);
  }

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {collapsed ? (
        <button className="sidebar-menu-button" onClick={toggleCollapsed}>
          Menu
        </button>
      ) : (
        <>
          <h1 className="sidebar-app-name">{sideData.appName}</h1>
          <nav className="sidebar-nav">
            {sideData.routes.map((route) => (
              <a
                key={route.path}
                href={route.path}
                className="sidebar-nav-link"
              >
                {route.name}
              </a>
            ))}
          </nav>
          {auth ? (
            <nav className="sidebar-auth-nav">
              <a href={sideData.auth.logoutPath} className="sidebar-auth-link">
                Logout
              </a>
              <a href={sideData.auth.profilePath} className="sidebar-auth-link">
                Profile
              </a>
            </nav>
          ) : (
            <nav className="sidebar-auth-nav">
              <a href={sideData.auth.loginPath} className="sidebar-auth-link">
                Login
              </a>
              <a
                href={sideData.auth.registerPath}
                className="sidebar-auth-link"
              >
                Register
              </a>
            </nav>
          )}
          <div className="btn-container-sidebar">
            <button
              className="sidebar-collapse-button"
              onClick={toggleCollapsed}
            >
              Collapse
            </button>
          </div>
        </>
      )}
    </aside>
  );
}

export default Sidebar;

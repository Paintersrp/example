import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import navData from './nav-data';
import './Navbar.css';

const Navbar = () => {
  const [appName, setAppName] = useState('');
  const [links, setLinks] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setAppName(navData.appName);
    setLinks(navData.links);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-app-name">
        {appName}
      </Link>
      <ul className="navbar-links">
        {links.map(link => (
          <li key={link.id}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <button className="navbar-menu-button" onClick={toggleMenu}>
        Menu
      </button>
      {isMenuOpen && (
        <div className="navbar-menu">
          <ul className="navbar-links--open">
            {links.map(link => (
              <li key={link.id}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

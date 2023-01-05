import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import footerData from "./footer-data";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>Links</h3>
        <ul>
          {footerData[0].links.map((link) => (
            <li>
              <Link to={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-section">
        <h3>Legal</h3>
        <ul>
          {footerData[1].links.map((link) => (
            <li>
              <Link to={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <ul className="social-media-links">
          <li>
            <a href="#">
              <FaFacebookSquare /> Facebook
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitterSquare /> Twitter
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram /> Instagram
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

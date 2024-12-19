// src/components/Footer.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; // Import GitHub icon

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "40px 0",
        fontFamily: "'Cinzel', serif",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3 style={{ fontSize: "28px", marginBottom: "20px" }}>DishDelight - Savor the Best!</h3>
        
        {/* Social Media Icons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", fontSize: "30px", textDecoration: "none" }}
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", fontSize: "30px", textDecoration: "none" }}
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", fontSize: "30px", textDecoration: "none" }}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", fontSize: "30px", textDecoration: "none" }}
          >
            <FaLinkedin />
          </a>
          {/* GitHub Icon */}
          <a
            href="https://github.com/Usmanali350"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", fontSize: "30px", textDecoration: "none" }}
          >
            <FaGithub />
          </a>
        </div>

        {/* Links */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            marginBottom: "20px",
            justifyContent: "center",
            fontSize: "18px",
          }}
        >
          <a href="/privacy-policy" style={{ color: "#fff", textDecoration: "none" }}>
            Privacy Policy
          </a>
          <a href="/terms" style={{ color: "#fff", textDecoration: "none" }}>
            Terms of Service
          </a>
          <a href="/about" style={{ color: "#fff", textDecoration: "none" }}>
            About Us
          </a>
        </div>
        
        {/* Copyright */}
        <div style={{ fontSize: "16px", textAlign: "center", color: "#bbb" }}>
          <p>&copy; 2024 DishDelight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

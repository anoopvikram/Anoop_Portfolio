import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./styles/footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-socials">
        <a href="https://www.instagram.com/blendwithav/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/anoop-vikram" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.youtube.com/@anoopvikram7995" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>
      <p className="footer-copy">© 2025 Anoop Vikram. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

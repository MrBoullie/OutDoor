import React from "react";
import "./footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer d-flex align-items-center justify-content-between">
      <div className="footer-content">
        <div className="contact-info">
          <a
            href="https://wa.me/12345678?text=Hello"
            target="_blank"
            className="text-white text-decoration-none"
          >
            <FontAwesomeIcon icon={faPhone} className="fs-5 text-white" />
            <span className="ms-2">+12 345 678 </span>{" "}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Outdoor Adventure Gear Store. All rights reserved.</p>
      </div>

      
      <div className="social-media">
        <a
          href="https://www.facebook.com/youraccount"
          target="_blank"
          className="social-icon"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/youraccount"
          target="_blank"
          className="social-icon"
        >
          <i className="bi bi-instagram"></i>
        </a>
      </div>

    </footer>
  );
}

export default Footer;

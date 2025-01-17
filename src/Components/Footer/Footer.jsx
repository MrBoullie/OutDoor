import React from "react";
import "./footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <a
            href="https://wa.me/81043041?text=Hello"
            target="_blank"
            className="text-white text-decoration-none"
          >
            <FontAwesomeIcon icon={faPhone} className="fs-5 text-white" />
            <span className="ms-2">+81 043 041 </span>{" "}
          </a>
        </div>
      </div>

      <div className="social-media">
        <a
          href="https://www.facebook.com/youraccount"
          target="_blank"
          className="social-icon"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.instagram.com/youraccount"
          target="_blank"
          className="social-icon"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://wa.me/81043041?text=Hello"
          target="_blank"
          className="social-icon"
        >
        {/* <WhatsAppIcon /> */}
        </a>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Outdoor Adventure Gear Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

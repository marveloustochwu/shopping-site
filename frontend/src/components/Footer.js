import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="my-footer-container">
      <div className="footer">
        <h2>pls contact us on this platform</h2>
        <div className="contact-me">
          <span>+2349167460012</span>
        </div>
        <div className="my email">
          <span>Marveloustochukwu5@gmail.com</span>
          <div className="emailaddress">
            <span>Phase 2 Extention, Jikwoyi, Abuja, Nigeria</span>
          </div>
          <FaFacebook />
          <FaTiktok />
          <FaYoutube />
          <FaWhatsapp />
        </div>
      </div>
    </div>
  );
};

export default Footer;

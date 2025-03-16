import React from "react";
import "../Footer/Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="logo._p">Yoldo_Volvo</h2>
          <p className="footer-text">
            Ut tellus elementum sagittis vitae et leo dui ut. Sit amet consectetur adipiscing elit.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/rooms">Rooms</a></li>
            <li><a href="/news">News</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 54826 Fadel Circles, Darrylst, AZ 90995</p>
          <p>📞 (329) 580-7077</p>
          <p>📞 (650) 382-5020</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href=""><FaFacebookF /></a>
            <a href=""><FaInstagram /></a>
            <a href=""><FaTwitter /></a>
            <a href=""><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      {/* <p style={{
        textAlign: "center",
        marginTop: "20px",
            marginBottom: "20px",
        color: "#fff",
        
      }}>Volvo Template © All rights reserved Copyrights</p> */}
    </footer>
  );
};

export default Footer;

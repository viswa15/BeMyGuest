import React from "react";
import "./index.css";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="left-footer">
        <img
          alt="logo"
          src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1718513654/Red_Typography_Initial_B_Logo__3_-removebg-preview_sknxf0.png"
          className="navbar-home-logo"
          style={{ marginBottom: "15px" }}
        />
        {/* <h2 className="logo-name overlap-logo"> Be my Guest</h2> */}
        <div>
          <h4 className="footer-head">
            Our vision is to giving you a new experince.
          </h4>
          <p className="footer-para"> 2024 @BemyGuest. All right reserved</p>
        </div>
      </div>
      <div className="middle-footer">
        <div className="middle-footer-inner">
          <ul className="footer-ul-container">
            <li className="footer-li" > Services</li>
            <li className="footer-li"> Contact us </li>
            <li className="footer-li"> Terms & Conditions</li>
            <li className="footer-li"> Client Gallery </li>
          </ul>
        </div>
        <hr
          className="horizontal-tag"
          style={{ margin: "0px", width: "100%" }}
        />
        <div className="middle-footer-inner">
          <ul className="footer-ul-container">
            <li className="footer-li">
              <FaFacebook size={25} />
            </li>
            <li className="footer-li">
              <AiFillInstagram size={25} />
            </li>
            <li className="footer-li">
              <FaSquareXTwitter size={25} />
            </li>
            <li className="footer-li">
              <FaTelegram size={25} />
            </li>
            <li className="footer-li">
              <FaYoutube size={25} />
            </li>
          </ul>
        </div>
        {/* <button> Get Updates</button> */}
      </div>
      <div className="right-footer">
        <p className="footer-head">
          Parul University Wagodhia, Vadodara, Gujarat - 391760
        </p>
        <a href="tel:7205577673" className="footer-head"> +91 00000 00000</a>
        <a href="mailto:bemyguest@gmail.com" className="footer-head"> bemyguest@gmail.com</a>
      </div>
    </section>
  );
};

export default Footer;

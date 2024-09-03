import React from "react";
import "./index.css";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const ContactUs = () => {
  return (
    <section
      className="main-container paddings innerWidth"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="inner-container">
        <h1 className="page-heading"> Contact us </h1>
        <p className="page-sub-heading"> Stuck somewhere ?</p>
      </div>
      <div className="cu-container">
        <div className="cu-inner-container">
          <a href="tel:7205577673">
            <span className="cu-span-elem">Call us at </span> +91 00000 00000
          </a>
          <a href="mailto:bemyguest@gmail.com">
            <span className="cu-span-elem">Mail us at </span>{" "}
            bemyguest@gmail.com
          </a>
          <span className="cu-span-elem">
            Address: Parul University Wagodhia, Vadodara, Gujarat - 391760
          </span>
          <hr className="horizontal-tag" style={{ margin: "10px" }} />
          <div className="middle-footer-inner">
            <ul className="footer-ul-container">
              <li style={{ margin: "0px 10px", color: "#192331" }}>
                <FaFacebook size={25} />
              </li>
              <li style={{ margin: "0px 10px", color: "#192331" }}>
                <AiFillInstagram size={25} />
              </li>
              <li style={{ margin: "0px 10px", color: "#192331" }}>
                <FaSquareXTwitter size={25} />
              </li>
              <li style={{ margin: "0px 10px", color: "#192331" }}>
                <FaTelegram size={25} />
              </li>
              <li style={{ margin: "0px 10px", color: "#192331" }}>
                <FaYoutube size={25} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

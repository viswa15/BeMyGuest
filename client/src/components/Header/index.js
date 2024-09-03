import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import "./index.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const changebackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  //change navbar background but it is not working because locomotive.css scroller (remove it from Website.js)

  useEffect(() => {
    const token = Cookies.get("jwt_token");
    if (token) {
      // Simulate fetching the username from the token or a user info API
      const fetchedUsername = "User"; // Replace with actual logic
      setIsLoggedIn(true);
      setUsername(fetchedUsername);
    }
  }, []);

  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    setIsLoggedIn(false);
    setUsername("");
    window.location.reload(); // Refresh the page after logout
  };

  const handleHostClick = () => {
    if (isLoggedIn) {
      navigate("/hosting-landingpage");
    } else {
      navigate("/register");
    }
  };

  window.addEventListener("scroll", changebackground);

  const textVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: -100,
      transition: {
        duration: 2,
        delay: 0, // 2
        ease: "anticipate",
      },
    },
  };

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="flexRowEnd">
        <Link to="/">
          <img
            alt="logo"
            src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1718513654/Red_Typography_Initial_B_Logo__3_-removebg-preview_sknxf0.png"
            className="navbar-home-logo"
          />
        </Link>
        <Link to="/">
          <motion.h2
            className="logo-name logo-name-mb"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Be my Guest
          </motion.h2>
        </Link>
      </div>
      <input type="checkbox" id="sidebar-check" />
      <label htmlFor="sidebar-check" className="open-sidebar-button">
        <IoMenu size={32} color="#f6eddf" />
      </label>
      <motion.ul
        className="unordered-list-navbar"
        drag="y"
        dragConstraints={{ top: 0, bottom: 70 }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <label htmlFor="sidebar-check" className="close-sidebar-button">
          <IoClose size={32} />
        </label>
        <Link to="/weddings" className="link-propety">
          <motion.li
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
          >
            Featured Weddings
          </motion.li>
        </Link>
        <Link to="/client-gallery" className="link-propety">
          <motion.li
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
          >
            Client Gallery
          </motion.li>
        </Link>
        <Link to="/contact-us" className="link-propety">
          <motion.li
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
          >
            Contact Us
          </motion.li>
        </Link>
        <Link to="/faq" className="link-propety-specific">
          <motion.li
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
          >
            FAQ
          </motion.li>
        </Link>
        <li
          className="became-a-host-button-md link-propety"
          onClick={handleHostClick}
        >
          Host your Wedding
        </li>
        {isLoggedIn ? (
          <Link className="link-propety-specific">
            <li className="profile-md-display">
              <CgProfile size={25} className="profile-icon" />
              {username}
            </li>
          </Link>
        ) : (
          <Link to="/login" className="link-propety-specific">
            <li className="login-md-display">Login</li>
          </Link>
        )}

        <button className="logout-button-md" onClick={onClickLogout}>
          Logout
        </button>
      </motion.ul>
      <ul className="login-register-ul">
        {isLoggedIn ? (
          // <Link to="/profile" className="link-propety-specific">
          <li className="link-propety-specific">
            <button className="profile">
              <CgProfile size={25} className="profile-icon" /> {username}
            </button>
            <div className="dropdown-content">
              <button onClick={onClickLogout} className="logout-button">
                {" "}
                Logout
              </button>
            </div>
          </li>
        ) : (
          // </Link>
          <Link to="/login" className="link-propety-specific">
            <li className="login">Login</li>
          </Link>
        )}
        <button className="became-a-host-button" onClick={handleHostClick}>
          Host your Wedding
        </button>
      </ul>
    </nav>
  );
};

export default Header;

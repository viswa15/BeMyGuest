import "./index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

const UpperNavbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changebackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changebackground);

  return (
    <div className={navbar ? "upper-navbar active" : "upper-navbar"}>
      <ul className="upper-navbar-ul">
        <li>Be My Guest</li>
      </ul>
      <ul className="upper-navbar-ul padding-right">
        <Link to="/indtagram">
          <li className="list-upper-navbar">
            <BsInstagram />
          </li>
        </Link>
        <li className="list-upper-navbar">
          <BsFacebook />
        </li>
        <li className="list-upper-navbar">
          <BsTwitter />
        </li>
        <li className="list-upper-navbar">
          <BsYoutube />
        </li>
      </ul>
    </div>
  );
};

export default UpperNavbar;

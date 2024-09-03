import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import "./index.css";
import { motion } from "framer-motion";
import HostWeddingModel from "../../components/HostWeddingModel";

const HostingLandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [menuOpened, setMenuOpened] = useState(false);
  const [modelOpened, setmodelOpened] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("jwt_token");
    if (token) {
      navigate("/hosting-landingpage");
      setIsLoggedIn(true);
    } else {
      navigate("/login");
      setIsLoggedIn(false);
    }
  }, [navigate]);

  const handleHostWedding = () => {
    if (isLoggedIn) {
      setmodelOpened(true);
    }
  };

  return (
    <div
      className="main-container paddings innerWidth"
      style={{ background: "#f6eddf" }}
    >
      <div className=" hlp-inner-container">
        <div className="hlp-inner-left-container">
          <h1 className="page-heading hlp-heading" style={{ color: "#192331" }}>
            Step into a world where love knows no borders. Welcome travelers to
            your wedding, and let them join in the celebration of your love
            story with your family and friends. Make your special day even more
            unforgettable{" "}
            <span
              className="sections-secondary-headings"
              style={{ marginRight: "5px" }}
            >
              — book your wedding with BeMyGuest{" "}
            </span>
            {"  "}
            and create memories that will be cherished forever.
          </h1>
          <motion.div
            whileHover={{ y: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            // style={{ alignSelf: "center" }}
          >
            <button className="hlp-button" onClick={handleHostWedding}>
              Host your wedding
            </button>
            <HostWeddingModel opened={modelOpened} setOpened={setmodelOpened} />
          </motion.div>
        </div>
        <div className="hlp-inner-right-container">
          <img
            src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1724820299/istockphoto-1688098382-612x612_tcpchz.jpg"
            alt="coupleImage"
          />
        </div>
        <div className="hlp-inner-right-container-mb">
          <img
            src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1724820299/istockphoto-1688098382-612x612_tcpchz.jpg"
            alt="coupleImage"
          />
        </div>
      </div>
    </div>
  );
};

export default HostingLandingPage;

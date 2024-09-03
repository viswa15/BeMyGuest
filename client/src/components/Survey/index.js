import React from "react";
import "./index.css";
import { motion } from "framer-motion";

const Survey = () => {
  const handleButtonClick = () => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSfZ8JtLEcN7ylr4CyKSiQBI2ZkOfZEXGUPP6fLeIIdIOTwpFA/viewform";
  };

  return (
    <section className="survey-container">
      {/* <h2 className="section-headings"> - Survey</h2> */}
      <h5 className="survey-heading"> Do you travel ?</h5>
      <h3
        className="survey-sec-heading"
        style={{ margin: "0px", marginBottom: "40px" }}
      >
        Which country would you like to be a guest at their cultural wedding?{" "}
      </h3>
      <motion.button
        whileHover={{ y: 8 }}
        transition={{ type: "ease-in", stiffness: 300 }}
        className="survery-button"
        onClick={handleButtonClick}
      >
        Suggest Another country
      </motion.button>
    </section>
  );
};

export default Survey;

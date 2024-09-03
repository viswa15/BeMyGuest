import "./index.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/varients";

const Home = () => {
  return (
    <section className="h-container">
      <div className="h-image-container">
        <div className="h-gradient">
          <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className="h-heading"
          >
            Be my Guest
          </motion.h1>
          <motion.p
            variants={fadeIn("left", 0.5, "spring", 50, 50)}
            className="h-para"
            initial={{ x: "2rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileInView={"show"}
          >
            Indian weddings are the missing piece of your travel puzzle !
          </motion.p>
          <motion.p
            variants={fadeIn("right", 0.5, "spring", 50, 50)}
            className="h-description"
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileInView={"show"}
          >
            Be My Guest gives travelers the chance to be a guest of Indian
            cultural wedding.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Home;

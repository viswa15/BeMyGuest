import { motion } from "framer-motion";
import "./index.css";

const OurServices = () => {
  return (
    <section className="os-container paddings innerWidth">
      <h2
        style={{ color: "var(--light-background)" }}
        className="section-headings"
      >
        - Our services -
      </h2>
      <div className="os-container-card-lg">
        <div className="innerWidth flexRowCenter">
          <div className=" flexRowCenter">
            <motion.div
              initial={{ filter: "grayscale(100%)" }}
              whileInView={{ filter: "grayscale(0%)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: "all" }}
            >
              <img
                src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1719594568/f8e53d02d05d4a8be3f8e4d5c74a9969-removebg-preview_uetlrt.png"
                alt="traverller"
                className="mb-screen"
              />
            </motion.div>
            <div className="flexColStart">
              <h2 className="sections-secondary-headings">
                For to-be-married couple's
              </h2>
              <ul className="service-container-ul">
                <li className="service-card-para">
                  Share your celebration with international Guests.
                </li>
                <li className="service-card-para">
                  Plan unique wedding experince.
                </li>
                <li className="service-card-para">
                  Reduce the Guest list stress.
                </li>
                <li className="service-card-para">Get financial support.</li>
                <li className="service-card-para">
                  Enjoy unique experince with your loved ones.
                </li>
              </ul>
            </div>
          </div>
          <div className="flexRowCenter">
            <motion.div
              initial={{ filter: "grayscale(100%)" }}
              whileInView={{ filter: "grayscale(0%)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: "all" }}
            >
              <img
                src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1719596650/foreigner-png-removebg-preview_1_uefmbo.png"
                alt="traverller"
                className="mb-screen"
              />
            </motion.div>
            <div className="flexColStart">
              <h2 className="sections-secondary-headings">
                For foreigen guest
              </h2>
              <ul className="service-container-ul">
                <li className="service-card-para">
                  Enjoy the unique Indian culture.
                </li>
                <li className="service-card-para">
                  Get to know about the culture of India and its rich heritage.
                </li>
                <li className="service-card-para">
                  Get rid off boring office days.
                </li>
                <li className="service-card-para">
                  Discover new destinations.
                </li>
                <li className="service-card-para">Travel affordably.</li>
                <li className="service-card-para">Connect with new peoples.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="os-container-card-mb">
        <div className="innerWidth">
          <div className="flexColStart">
            <h2 className="sections-secondary-headings">
              For to-be-married couple
            </h2>
            <ul className="service-container-ul">
              <li className="service-card-para">
                Share your celebration with international Guests.
              </li>
              <li className="service-card-para">
                Plan unique wedding experince.
              </li>
              <li className="service-card-para">
                Reduce the Guest list stress.
              </li>
              <li className="service-card-para">Get financial support.</li>
              <li className="service-card-para">
                Stay connected with your loved ones.
              </li>
            </ul>
          </div>
          <div className="flexColStart">
            <h2 className="sections-secondary-headings">For foreigen guest</h2>
            <ul className="service-container-ul">
              <li className="service-card-para">
                Enjoy the unique Indian culture.
              </li>
              <li className="service-card-para">
                Get to know about the culture of India and its rich heritage.
              </li>
              <li className="service-card-para">
                Get rid off boring office days.
              </li>
              <li className="service-card-para">Discover new destinations.</li>
              <li className="service-card-para">Travel affordably.</li>
              <li className="service-card-para">Connect with new peoples.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="services-container">
        <motion.div
          variants={fadeIn("up", 0.4, "tween", 40, 40)}
          className="service-card"
          initial="hidden"
          whileInView={"show"}
        >
          <h2 className="service-card-heading">For Guests</h2>
          <ul className="service-container-ul">
            <li className="service-card-para">
              Get engaged to with unique Indian culture.
            </li>
            <li className="service-card-para">
              Get to know about the culture of India and its rich heritage.
            </li>
            <li className="service-card-para">
              Get rid off boring office days.
            </li>
            <li className="service-card-para">Discover new destinations.</li>
            <li className="service-card-para">Travel affordably.</li>
            <li className="service-card-para">
              Stay connected with your loved ones.
            </li>
          </ul>
          <button className="service-card-button button-lg-devices">
            Featured Wedding <MdOutlineKeyboardArrowDown size={22} />
          </button>
          <button className="service-card-button button-md-devices">
            Featured Wedding{" "}
          </button>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.4, "tween", 40, 40)}
          className="service-card"
          initial="hidden"
          whileInView={"show"}
        >
          <h2 className="service-card-heading">For Couple</h2>
          <ul className="service-container-ul">
            <li className="service-card-para">
              Share your celebration with international Guests.
            </li>
            <li className="service-card-para">
              Plan unique wedding experince.
            </li>
            <li className="service-card-para">Reduce the Guest list stress.</li>
            <li className="service-card-para">Get financial support.</li>
            <li className="service-card-para">
              Stay connected with your loved ones.
            </li>
          </ul>
          <button className="service-card-button">Became A Host</button>
        </motion.div>
      </div> */}
    </section>
  );
};

export default OurServices;

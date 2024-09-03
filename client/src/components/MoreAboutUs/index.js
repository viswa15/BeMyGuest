import React,{useState,useEffect} from "react";
import "./index.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdKeyboardArrowDown } from "react-icons/md";
// import guestdata from "../../utils/guest-mau.json";
// import hostdata from "../../utils/host-mau.json";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MoreAboutUs = () => {
  const [guestMaus,setGuestMaus] = useState([]);
  const [hostMaus,setHostMaus] = useState([]);

  // for guest maus
  const getGuestMaus = async() =>{
    try{
        const {data} = await axios.get(`https://bemyguest-backend.onrender.com/static-content/guest-maus`)
        if(data.success === true){
          setGuestMaus(data.guestMausItems);
        }
    }catch(e){
      console.log(e)
    }
  }

  //for guest maus
  useEffect(()=>{
    getGuestMaus();
    console.log("guestMaus list:",guestMaus)
  },[])

  //for host maus
  const getHostMaus = async() =>{
    try{
        const {data} = await axios.get(`https://bemyguest-backend.onrender.com/static-content/host-maus`)
        if(data.success === true){
          setHostMaus(data.hostMausItems);
        }
    }catch(e){
      console.log(e)
    }
  }

  //for guest maus
  useEffect(()=>{
    getHostMaus();
    console.log("hostMaus list:",hostMaus)
  },[])

  const navigate = useNavigate();

  const handleLoadMore = () => {
    navigate("/faq");
  };

  return (
    <section className="mbu-container">
      <h2 className="section-headings"> - More about BemyGuest - </h2>
      {/** guest maus */}
      <div className="mbu-inner-container">
        <div className="mbu-left-container">
          <h3 className="sections-secondary-headings"> For Guests</h3>
          <Accordion className="mbu-accordian-container" allowZeroExpanded>
            {guestMaus.map((item) => {
              return (
                <AccordionItem
                  className="accordian-item"
                  uuid={item.id}
                  key={item.id}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordion-button">
                      <span className="accordian-question">
                        {item.question}
                      </span>

                      <div className="icon">
                        <motion.div
                          whileHover={{ y: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <MdKeyboardArrowDown
                            style={{
                              fontSize: "25px",
                              margin: "3px",
                            }}
                            className="chevron"
                          />
                        </motion.div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel
                    style={{ background: "var(--dark-text)" }}
                  >
                    <p className="accordian-reply">{item.reply}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/** host maus */}
        <div className="mbu-right-container">
          <h3 className="sections-secondary-headings">
            For to-be-married couple's
          </h3>
          <Accordion className="mbu-accordian-container" allowZeroExpanded>
            {hostMaus.map((item) => {
              return (
                <AccordionItem
                  className="accordian-item"
                  uuid={item.id}
                  key={item.id}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordion-button">
                      <span className="accordian-question">
                        {item.question}
                      </span>

                      <div className="icon">
                        <motion.div
                          whileHover={{ y: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <MdKeyboardArrowDown
                            style={{
                              fontSize: "25px",
                              margin: "3px",
                            }}
                            className="chevron"
                          />
                        </motion.div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel
                    style={{ background: "var(--dark-text)" }}
                  >
                    <p className="accordian-reply">{item.reply}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>

      <div className="mbu-inner-container-mb">
        <div className="mbu-left-container">
          <h3 className="sections-secondary-headings"> For Guests</h3>
          <Accordion className="mbu-accordian-container" allowZeroExpanded>
            {guestMaus.map((item) => {
              return (
                <div>
                  <AccordionItem
                    className="accordian-item"
                    uuid={item.id}
                    key={item.id}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="accordion-button">
                        <span className="accordian-question">
                          {item.question}
                        </span>

                        <div className="icon">
                          <motion.div
                            whileHover={{ y: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <MdKeyboardArrowDown
                              style={{
                                fontSize: "25px",
                                margin: "3px",
                              }}
                            />
                          </motion.div>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel
                      style={{ background: "var(--dark-text)" }}
                    >
                      <p className="accordian-reply">{item.reply}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <hr className="horizontal" style={{ margin: "0px" }} />
                </div>
              );
            })}
          </Accordion>
        </div>
        <div className="mbu-right-container">
          <h3 className="sections-secondary-headings">
            For to-be-married couple's
          </h3>
          <Accordion className="mbu-accordian-container" allowZeroExpanded>
            {hostMaus.map((item) => {
              return (
                <div>
                  <AccordionItem
                    className="accordian-item"
                    uuid={item.id}
                    key={item.id}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="accordion-button">
                        <span className="accordian-question">
                          {item.question}
                        </span>

                        <div className="icon">
                          <motion.div
                            whileHover={{ y: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <MdKeyboardArrowDown
                              style={{
                                fontSize: "25px",
                                margin: "3px",
                              }}
                            />
                          </motion.div>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel
                      style={{ background: "var(--dark-text)" }}
                    >
                      <p className="accordian-reply">{item.reply}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <hr className="horizontal" style={{ margin: "0px" }} />
                </div>
              );
            })}
          </Accordion>
        </div>
      </div>

      <motion.div
        whileHover={{ y: 8 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <button className="fw-button-elem" onClick={handleLoadMore}>
          Find out more
          <MdKeyboardArrowDown
            style={{
              fontSize: "25px",
              margin: "3px",
            }}
          />
        </button>
      </motion.div>
    </section>
  );
};

export default MoreAboutUs;

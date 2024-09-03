import React, { useState,useEffect } from "react";
import "./index.css";
import data from "../../utils/dummyweddings.json";
import WeddingItem from "../WeddingItem";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../NotFound";
import LoaderView from "../LoaderView";
import Error from "../Error";
import axios from "axios";

const apiStatuslist = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const FeaturedWedding = () => {
  const [apiStatus, setapiStatus] = useState(apiStatuslist.initial);
  const [weddingsList,setWeddingsList] = useState([]);
  const navigate = useNavigate();

  //get featured weddings
  const getFeaturedWeddings = async() =>{
    try{
      const {data} = await axios.get(`https://bemyguest-backend.onrender.com/weddings/recent-weddings`)
      if(data.success){
        setWeddingsList(data.weddings)
      }
    }catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    getFeaturedWeddings();
    console.log("weddings list:",weddingsList)
  },[])

  const handleLoadMore = () => {
    navigate("/weddings");
  };

  if (apiStatus === apiStatuslist.inProgress) {
    return <LoaderView />;
  }

  if (apiStatus === apiStatuslist.failure) {
    return <NotFound />;
  }
  //Loading, NotFound Work need to be done after setting of API

  const errorComp = () => {
    return <Error />;
  };

  // async function fetchSixItems() {
  //   try {
  //     const response = await fetch('https://api.example.com/data');
  //     const data = await response.json();
  //     const firstSixItems = data.slice(0, 6);
  //     console.log(firstSixItems); // Handle the first 6 items as needed
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }
  
  // fetchSixItems();

  
  

  return (
    <div className="fw-container">
      <h2 className="section-headings"> - Featured weddings -</h2>
      <h3
        className="sections-secondary-headings mb-screen"
        style={{ fontSize: "2rem", margin: "30px 0px 20px 0px" }}
      >
        Which wedding would you like to join ?
      </h3>
      <h3
        className="sections-secondary-headings non-mb-screen"
        style={{ margin: "10px 0px" }}
      >
        Which wedding would you like to join ?
      </h3>

      <div className="fw-inner-container">
        {Object.keys(weddingsList).length === 0 && apiStatus === apiStatuslist.success
          ? errorComp()
          : weddingsList.map((item) => (
              <WeddingItem id={item.id} weddingdetails={item} />
            ))}
      </div>
      <motion.div
        whileHover={{ y: 8 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <button className="fw-button-elem" onClick={handleLoadMore}>
          View more wedding's
          <MdKeyboardArrowDown
            style={{
              fontSize: "25px",
              margin: "3px",
            }}
          />
        </button>
      </motion.div>
    </div>
  );
};

export default FeaturedWedding;

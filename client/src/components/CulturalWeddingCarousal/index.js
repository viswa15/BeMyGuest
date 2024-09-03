import React, { useEffect, useState } from "react";
import { Carousel } from "nuka-carousel";
import "./index.css";
// import data from "../../utils/indian-wedding-cultures.json";
import CulturalWeddItem from "../CulturalWeddItem";
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

const CarosoulEffect = () => {
  const [apiStatus, setapiStatus] = useState(apiStatuslist.initial);
  const [weddingCultures,setWeddingCultures] = useState([]);

  //get cultures wedding
  const getWeddingCultures = async() =>{
    try{
        const {data} = await axios.get(`${process.env.REACT_APP_API}/static-content/wedding-cultures`)
        if(data.success === true){
          setWeddingCultures(data.weddings);
        }
    }catch(e){
      console.log(e)
    }
  }

  //for wedding cultures
  useEffect(()=>{
    getWeddingCultures();
    console.log("wedding cultures list:",weddingCultures)
  },[])

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

  return (
    <div className="carousal-container paddings innerWidth">
      <h2 className="container-heading-home section-headings cultures">
        - Explore about Indian wedding cultures -
      </h2>
      <div style={{ width: "100vw", marginTop: "20px" }}>
        <Carousel
          wrapMode="wrap"
          autoplay={false}
          autoplayInterval={5000}
          title="Carousel"
          scrollDistance="screen"
          padding={50}
          showDots
        >
          {Object.keys(weddingCultures).length === 0 && apiStatus === apiStatuslist.success
            ? errorComp()
            : weddingCultures.map((item) => (
                <CulturalWeddItem item={item} id={item._id} />
                // <img
                //   src={item.image_link}
                //   alt="wedding_name"
                //   className="cultures-image"
                // />
              ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarosoulEffect;

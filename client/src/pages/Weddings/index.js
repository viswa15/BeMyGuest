import React, { useState,useEffect } from "react";
import "./index.css";
import WeddingItem from "../../components/WeddingItem";
import data from "../../utils/dummyweddings.json";
import NotFound from "../../components/NotFound";
import LoaderView from "../../components/LoaderView";
import Error from "../../components/Error";
import axios from "axios";

const apiStatuslist = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Weddings = () => {
  const [search, setSearch] = React.useState("");
  const [apiStatus, setapistatus] = React.useState(apiStatuslist.initial);
  const [featuredWeddingsList,setFeaturedWeddingsList] = useState([])

  //getting featured weddings
  const getFeaturedWeddings = async() =>{
    try{
        setapistatus(apiStatuslist.inProgress)
        const {data} = await axios.get(`https://bemyguest-backend.onrender.com/weddings/featured-weddings`)
        if(data.success === true){
          setapistatus(apiStatuslist.success)
          setFeaturedWeddingsList(data.weddings);
        }else{
          setapistatus(apiStatuslist.failure)
        }
    }catch(e){
      console.log(e)
    }
  }

  //for faqs
  useEffect(()=>{
    getFeaturedWeddings();
    console.log("weddings list:",featuredWeddingsList)
  },[])

  // console.log(search.toLowerCase());
  if (apiStatus === apiStatuslist.inProgress) {
    return <LoaderView />;
  }

  if (apiStatus === apiStatuslist.failure) {
    return <NotFound />;
  }
  //Loading, NotFound Work need to be done after setting of API

  const errorComp = () => {
      return <Error/>;
  };

  return (
    <section className="main-container paddings innerWidth">
      <div className="inner-container">
        <h1 className="page-heading"> Weddings </h1>
        <p className="page-sub-heading">
          Which wedding would you like to join ?
        </p>
        <div className="search-bar-design">
          <input
            type="search"
            placeholder="Enter location or pincode"
            className="search-input"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
      </div>
      <div className="w-inner-container">
        {Object.keys(featuredWeddingsList).length === 0 && apiStatus === apiStatuslist.success
          ? errorComp()
          : featuredWeddingsList
              .filter(
                (item) =>
                  item.weddingPinCode.includes(search) ||
                  item.weddingState.toLowerCase().includes(search.toLowerCase()) ||
                  item.weddingCity.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <WeddingItem key={item.id} weddingdetails={item} />
              ))}
      </div>
    </section>
  );
};

export default Weddings;

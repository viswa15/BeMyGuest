import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../utils/dummyweddings.json";
import "./index.css";
// import Error from "../../components/Error";
import NotFound from "../../components/NotFound";
import { SiRazorpay } from "react-icons/si";
import { MdOutlinePlace } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import axios from "axios";

const WeddingPage = () => {
  const { _id } = useParams();
  console.log("wedding Id:",_id);
  const [weddingData, setWeddingData] = useState(null);
  const [imageDimenstions, setImageDimentions] = useState();
  const [eventsArray, seteventsarray] = useState([]);

  const handleImageLoad = (event) => {
    const img = event.target;
    const isHorizontal = img.naturalWidth > img.naturalHeight;

    setImageDimentions(isHorizontal ? "horizontal-image" : "vertical-image");
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getWedding = async() =>{
    try{
      const {data} = await axios.get(`https://bemyguest-backend.onrender.com/weddings/featured-wedding/${_id}`)
      if(data.success){
        setWeddingData(data.wedding);
        seteventsarray(data.wedding.events);
      }
    }catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
   getWedding();
   console.log("wedding details:",weddingData);
    //Api call need to be added
  }, [_id]);

  console.log(weddingData, imageDimenstions, eventsArray);

  if (!weddingData) {
    return <NotFound />;
  }

  const verticalElementAtachment = (each) => {
    return (
      <VerticalTimelineElement
        style={{ color: "#f6eddf" }} // Matching the background color to the line color
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#f6eddf", color: "#192331" }} // Changing the box color
        contentArrowStyle={{ borderRight: "7px solid #f6eddf" }} // Changing the arrow color
        iconStyle={{ background: "#a55d40", color: "#f6eddf" }}
        icon={<MdOutlinePlace />}
      >
        <h3 className="vertical-timeline-element-title">{each.event}</h3>
        <h4 className="vertical-timeline-element-subtitle">
          {formatDate(each.date)}
        </h4>
        <p>
          Location : {each.location.area}, {each.location.city},{" "}
          {each.location.pincode}
        </p>
      </VerticalTimelineElement>
    );
  };

  const itineraryContainer = (each) => {
    return (
      <div>
        <hr style={{ border: "1px solid #192331", width: "100%" }} />
        <h3 className="itinerary-side-headings">
          {each.event} | {formatDate(each.date)}
        </h3>
        <p className="itineary-desc"> {each.details.description}</p>

        <p className="itineary-para">
          Location :{" "}
          <span className="itinerary-span-elem">
            {each.location.area}, {each.location.city}, {each.location.pincode}
          </span>
        </p>
        <p className="itineary-para">
          Proper venue :{" "}
          <span className="itinerary-span-elem">
            {each.details.venue_contact}{" "}
          </span>
        </p>
        <p className="itineary-para">
          Starts at :{" "}
          <span className="itinerary-span-elem">
            {each.details.starting_time}{" "}
          </span>
        </p>
        <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <p className="itineary-para">
            Transportation :{" "}
            {/* <span className="itinerary-span-elem">
              {each.details.transportation}{" "}
            </span> */}
            <span className="itinerary-span-elem">
              Included
            </span>
          </p>
          <p className="itineary-para">
            Accomodation :{" "}
            {/* <span className="itinerary-span-elem">
              {each.details.accommodation}{" "}
            </span> */}
            <span className="itinerary-span-elem">
              Not Included
            </span>
          </p>
          <p className="itineary-para">
            Music / Dance :{" "}
            {/* <span className="itinerary-span-elem">
              {each.details.music_dancing}{" "}
            </span> */}
            <span className="itinerary-span-elem">
              Included
            </span>
          </p>
          <p className="itineary-para">
            Dress Code:{" "}
            <span className="itinerary-span-elem">
              {each.details.dress_code}{" "}
            </span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className=" wp-section innerWidth">
      <div className="wedding-page-container">
        <div className="wedding-page-image-container">
          <img
            src={weddingData.image}
            alt="couple_image"
            className={`${imageDimenstions} wedding-page-image`}
            onLoad={(event) => handleImageLoad(event, weddingData.image)}
          />
          <div className="wedding-page-names-container">
            {/* <p> Are you intrested to join </p> */}
            <h1 className="page-heading">{weddingData.groom_firstname}</h1>
            <h3 className="page-sub-heading" style={{ margin: "0px" }}>
              weds
            </h3>
            <h1 className="page-heading">{weddingData.bride_firstname}</h1>
            <div style={{ marginTop: "30px" }}>
              <p className="wedding-page-para">
                {weddingData.groom_firstname} & {weddingData.bride_firstname} extend's a
                heartfelt invitation to join them on their wedding day, amidst
                your travels in India.
              </p>
              <div className="wedding-page-para-rs">
                <p className="wedding-page-para-two">
                  Your contribution, a meaningful gift to the couple, provides
                  entry to all ceremonies during the event.
                </p>
                <p style={{ margin: "0px", marginTop: "10px" }}>
                  $125 USD <span className="wp-span-elem">per person</span>
                </p>
                <motion.div
                  whileHover={{ y: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <button className="wedding-page-button">
                    Pay with <SiRazorpay />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="wedding-page-container-down">
          <div className="wedding-page-upper-container wedding-page-comm">
            <div className="invited-days-container">
              <VerticalTimeline lineColor={"#f6eddf"}>
                {eventsArray.map((each) => verticalElementAtachment(each))}
              </VerticalTimeline>
            </div>
            <div className="wedding-page-lower-container wedding-page-comm">
              <div className="wedding-page-abt-host">
                <h1 className="page-sub-heading"> About the Host's </h1>
                <p style={{ color: "#beb0a7" }}>
                  <span
                    style={{ textDecoration: "underline", fontWeight: "600" }}
                  >
                    {" "}
                    Groom
                  </span>{" "}
                  : {weddingData.about_host.groomSideStory}
                </p>
                <p style={{ color: "#beb0a7" }}>
                  <span
                    style={{ textDecoration: "underline", fontWeight: "600" }}
                  >
                    {" "}
                    Bride
                  </span>{" "}
                  : {weddingData.about_host.brideSideStory}
                </p>
              </div>
              <div className="daily-itinerary">
                <h1 className="page-sub-heading" style={{ color: "#192331" }}>
                  Daily Itinerary :
                </h1>
                <div>{eventsArray.map((each) => itineraryContainer(each))}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingPage;

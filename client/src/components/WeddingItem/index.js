import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return date
    .toLocaleDateString("en-GB", options)
    .replace(/(\d+)\s(\w+),\s(\d+)/, "$1 $2, $3");
};

const WeddingItem = ({ weddingdetails }) => {
  const { groom_firstname, bride_firstname, weddingCity, weddingCountry, image, _id, events } =
    weddingdetails;

  const firstEventDate = events.length > 0 ? formatDate(events[0].date) : "N/A";
  const lastEventDate =
    events.length > 0 ? formatDate(events[events.length - 1].date) : "N/A";

  const navigate = useNavigate();

  return (
    <div className="wi-card" onClick={() => navigate(`../weddings/${_id}`)}>
      <div
        className="wi-container"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1 className="wi-names">
          {groom_firstname} & {bride_firstname}
        </h1>
      </div>
      <div className="wi-lower-conatainer">
        <p>
          {weddingCity}, {weddingCountry}
        </p>
        <p className="wi-date">
          {firstEventDate} to {lastEventDate}
        </p>
      </div>
    </div>
  );
};

export default WeddingItem;

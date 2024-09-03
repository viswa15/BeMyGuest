import React from "react";
import "./index.css";

const CulturalWeddItem = ({ item }) => {
  return (
    <div className="random">
      <div
        style={{ backgroundImage: `url(${item.image_link})` }}
        className="cultures-images-div"
      >
        <div className="cwi-background">
          <h2 className="cwi-heading ">{item.wedding_name}</h2>
          <p className="cwi-para">{item.origin_state}</p>
          <p className="cwi-para-two"> {item.short_note}</p>
        </div>
      </div>
    </div>
  );
};

export default CulturalWeddItem;

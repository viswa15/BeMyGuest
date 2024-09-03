import { useState,useEffect } from "react";
import "./index.css";
// import data from "../../utils/Testimonials.json";
import axios from "axios";

const shortner = (item) => {
  if (item.length > 25) {
    return item.substring(0, 90) + "...";
  }
  return item || "Unknown";
};


const Testnomials = () => {
  const [testimonialsList,setTestimonialsList] = useState([]);

  const getTestimonials = async() =>{
    try{
        const {data} = await axios.get(`https://bemyguest-backend.onrender.com/static-content/testimonials`)
        if(data.success === true){
          setTestimonialsList(data.testimonialsData);
        }
    }catch(e){
      console.log(e)
    }
  }

  //for guest maus
  useEffect(()=>{
    getTestimonials();
    console.log("testimonials list:",testimonialsList)
  },[])


  return (
    <div className="t-container">
      <h2 className=" t-head section-headings">- What our clients say -</h2>
      <div className="t-cards-container">
        {testimonialsList.map((item) => (
          <div className="t-card" key={item._id}>
            <img
              src={item.image}
              alt="testnomialImage"
              className="t-image"
            />
            <div className="t-card-content">
              <img
                src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1714809285/Quotation-Symbol-PNG_pak2tx.png"
                alt="inverted-commas"
                className="inverted-commas"
              />
              <div className="t-card-para">
                <p className="t-card-para-p">{item.message.length > 0 ? shortner(item.message) : "N/A"}</p>
                <p className="t-card-para-writter">- {item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testnomials;

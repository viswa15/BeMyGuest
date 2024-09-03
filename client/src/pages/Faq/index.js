import React, { useState,useEffect } from "react";
import "./index.css";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import aboutsection from "../../utils/about_indian_weddings_faqs.json";
import cancellationSection from "../../utils/cancellation_faq.json";
import contributionSection from "../../utils/contribution_faq.json";
import techticalSection from "../../utils/Technical_troubleShooting.json";
import prepSection from "../../utils/Preparation.json";
import axios from 'axios'

const Faqpage = () => {
  const [faqsList,setFaqsList] = useState([])
  const [contributionsList,setContributionsList] = useState([])
  const [preparationsList,setPreparationsList] = useState([])
  const [troubleShootingList,setTroubleShootingList] = useState([])
  const [cancellationList,setCancellationList] = useState([])

  //get faqs 
  const getFaqs = async() =>{
    try{
        const {data} = await axios.get(`https://bemyguest-backend.onrender.com/static-content/faqs`)
        if(data.success === true){
          setFaqsList(data.faqsData);
        }
    }catch(e){
      console.log(e)
    }
  }

  //for faqs
  useEffect(()=>{
    getFaqs();
    console.log("faqs list:",faqsList)
  },[])

  //get contributions
  const getContributions = async() =>{
    try{
        const {data} = await axios.get(`https://bemyguest-backend.onrender.com/static-content/contributions`)
        if(data.success === true){
          setContributionsList(data.contributions);
        }
    }catch(e){
      console.log(e)
    }
  }

  //for  contributions
  useEffect(()=>{
    getContributions();
    console.log("contributions list:",contributionsList)
  },[])

  //preparations
  const getPreparations = async() =>{
    try{
        const {data} = await axios.get(`https://bemyguest-backend.onrender.com/static-content/preparations`)
        if(data.success === true){
          setPreparationsList(data.preparations);
        }
    }catch(e){
      console.log(e)
    }
  }

  //for  contributions
  useEffect(()=>{
    getPreparations();
    console.log("preparations list:",preparationsList)
  },[])

  //trouble shootings
  const getTroubleShootings = async() =>{
    try{
      const {data} = await axios.get(`https://bemyguest-backend.onrender.com/static-content/trouble-shootings`)
      if(data.success === true){
        setTroubleShootingList(data.troubleShootings);
      }
  }catch(e){
    console.log(e)
  }
  }

  //get trouble shootings api
  useEffect(()=>{
    getTroubleShootings();
    console.log("trouble shooting list:",troubleShootingList)
  },[])

  //cancellations
  const getCancellations = async() =>{
    try{
      const {data} = await axios.get(`https://bemyguest-backend.onrender.com/static-content/cancellation`)
      if(data.success === true){
        setCancellationList(data.cancellations);
      }
  }catch(e){
    console.log(e)
  }
  }

  //cancellations api
  useEffect(()=>{
    getCancellations();
    console.log("cancellations list:",cancellationList)
  },[])

  const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={
        <>
          {header}
          <img
            className="chevron"
            // src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1724351276/images-removebg-preview_axtjt4.png"
            src="down-arrow-svgrepo-com.svg"
            alt="Chevron Down"
          />
        </>
      }
      className="item"
      buttonProps={{
        className: ({ isEnter }) =>
          `${"itemBtn"} ${isEnter && "itemBtnExpanded"}`,
      }}
      contentProps={{ className: "itemContent" }}
      panelProps={{ className: "itemPanel" }}
    />
  );

  return (
    <section className="main-container paddings innerWidth">
      <div className="inner-container">
        <h1 className="page-heading"> FAQ </h1>
        <p className="page-sub-heading"> Clear your doubts here</p>
        {/** faqs */}
        <div className="faq-qanda-container">
          <h1 className="faq-headings">About BemyGuest</h1>
          <div className="accordion">
            <Accordion transition transitionTimeout={250}>
              {faqsList.map(({ question, reply }, id) => (
                <AccordionItem header={question} key={id}>
                  {reply}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        {/** contributions */}
        <div className="faq-qanda-container">
          <h1 className="faq-headings">Contribution</h1>
          <div className="accordion">
            <Accordion transition transitionTimeout={250}>
              {contributionsList.map(({ question, reply }, id) => (
                <AccordionItem header={question} key={id}>
                  {reply}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        {/** preparations */}
        <div className="faq-qanda-container">
          <h1 className="faq-headings">Additional Tips</h1>
          <div className="accordion">
            <Accordion transition transitionTimeout={250}>
              {preparationsList.map(({ question, reply }, id) => (
                <AccordionItem header={question} key={id}>
                  {reply}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        {/** trouble shooting */}
        <div className="faq-qanda-container">
          <h1 className="faq-headings">Technical troubleshooting</h1>
          <div className="accordion">
            <Accordion transition transitionTimeout={250}>
              {troubleShootingList.map(({ question, reply }, id) => (
                <AccordionItem header={question} key={id}>
                  {reply}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="faq-qanda-container">
          <h1 className="faq-headings">Cancellation</h1>
          <div className="accordion">
            <Accordion transition transitionTimeout={250}>
              {cancellationList.map(({ question, reply }, id) => (
                <AccordionItem header={question} key={id}>
                  {reply}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqpage;

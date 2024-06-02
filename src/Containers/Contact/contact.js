import React, { Component , useEffect } from "react";
import "./contact.css";
import MainFooter from "../../Components/Footer";
import FirstSection from "../../Components/standersection/first";
import SecondSection from "../../Components/standersection/second";
import slid from "../../Components/contact/images/picture-2.png";
import Calenderr from "../../Components/contact/calender";
import { AiTwotoneMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import{scrollToTop} from "../../utils/shared";


function Contact() {
  useEffect(() => {
    scrollToTop()
  }, [])
  return (
    <>
      <div>
        <FirstSection
          img={slid}
          text="Get in touch"
          text2="Reach Out to Our Friendly and Knowledgeable Team Today to Discuss Your Needs, Goals, and Ideas, and Discover How We Can Help Bring Your Vision to Life"
        />
      </div>

      
      <div><Calenderr/></div>
      <div className="  ">
         
         <h4 className="text-center">Contact us</h4>
         {/* {`mailto:${}`} */}
 <a href="" target="_blank" className="text-center">  <AiTwotoneMail />  info@creative-corner.tech</a>      
 
 <p  className="mt-3  text-center "> <FaPhoneAlt />
 +973 3314 6789</p>  

 

      </div>




      <div>
        <MainFooter />
      </div>
    </>
  );
}

export default Contact;

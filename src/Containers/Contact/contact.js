import React, { Component } from "react";
import "./contact.css";

import MainFooter from "../../Components/Footer";
import FirstSection from "../../Components/standersection/first";
import SecondSection from "../../Components/standersection/second";
import slid from "../../Components/contact/images/picture-2.png";
import Calenderr from "../../Components/contact/calender";
import { AiTwotoneMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";



function Contact() {
  return (
    <>
      <div>
        <FirstSection
          img={slid}
          text="Get in touch"
          text2="Reach Out to Our Friendly and Knowledgeable Team Today to Discuss Your Needs, Goals, and Ideas, and Discover How We Can Help Bring Your Vision to Life"
        />
      </div>

      <div className="mt-3">
        <SecondSection
          title="Fuel Your Brand's Growth: Customized Marketing Solutions | Creative Corner Agency "
          text="Our team of experts is fueled by passion and expertise, dedicated to crafting digital masterpieces that stand out in the crowded online landscape. Whether you're a budding startup or an established brand, we're here to elevate your online presence to new heights with our customized marketing solutions."
        />
      </div>
      <div><Calenderr/></div>
<div className="afterfooter" >
      <div className="  row mx-3  px-5 container ">
        <div className="col-md-6" >  
         <h4 className="mb-3">Contact us</h4>
         {/* {`mailto:${}`} */}
 <a href="" target="_blank">  <AiTwotoneMail />  info@creative-corner.tech</a>      
 
 <p  className="mt-3"> <FaPhoneAlt />
 +973 3314 6789</p>   </div>
        <div className="col-md-6" >

<h3 className="text-start mb-5 mx-4">Find us on social media</h3>

<div className=" mb-2">
          <ul className="Foote ml-auto text-primary d-inline-block w-100">

            <li className="footer-item d-inline-block">
              <i className="bi bi-facebook fa-1x mx-3 mt-4" id="logo" />
            </li>
            <li className="footer-item d-inline-block ">
              <i className="bi bi-twitter fa-1x mx-3 mt-4" id="logo" />
            </li>
            <li className="footer-item d-inline-block ">
              <i className="bi bi-instagram fa-1x mx-2 " id="logo" />
            </li>
            <li className="footer-item d-inline-block ">
              <i className="bi bi-linkedin fa-1x mx-3 mt-4" id="logo" />
            </li>
            <li className="footer-item d-inline-block ">
              <i className="bi bi-youtube fa-1x mx-3 mt-4" id="logo" />
            </li>
            <li className="footer-item d-inline-block ">
              <i className="bi bi-tiktok fa-1x mx-3 " id="logo" />
            </li>
            <li className="footer-item d-inline-block ">
              <i className="bi bi-snapchat fa-1x mx-3 " id="logo" />
            </li>
          </ul>
        </div>

        </div>

 

      </div>
      </div>




      <div>
        <MainFooter />
      </div>
    </>
  );
}

export default Contact;

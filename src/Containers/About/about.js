import React, { Component, useEffect } from "react";
import "./about.css";
import FirstSection from "../../Components/standersection/first";
import SecondSection from "../../Components/standersection/second";
import slid from "../../Components/about/images/slid.png";
import ThirdSection from "../../Components/about/thirdsection";
import WhyUs from "../../Components/about/whychooseus";
import PreFooter from "../../Components/PreFooter";
import MainFooter from "../../Components/Footer";
import { scrollToTop } from "../../utils/shared";

function About() {
  useEffect(() => {
    scrollToTop()
  }, [])
  return (
    <>
      <div>
        <FirstSection
          img={slid}
          text="About Us"
          text2="Discover Our Story, Mission, and Passion for Innovation"
        />
      </div>

      <div>
        <SecondSection
          title="Embrace Creativity: About Creative corner " 
          title1=" Marketing and Development "
          text="Creative Corner has quickly established itself as a marketing, web development, and mobile development leader. Our team of dedicated professionals brings together a diverse range of skills and experiences, united by a common goal: to empower businesses like yours to thrive online and to make sure your story gets heard through seamless digital solutions"
        />
      </div>
      <div><ThirdSection/></div>
      <div> <WhyUs/></div>
      <div><PreFooter/></div>
<div><MainFooter/></div>
    </>
  );
}

export default About;

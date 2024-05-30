import React, { Component,useEffect } from "react";

import "./services.css";
import FirstSection from "../../Components/standersection/first";
import SecondSection from "../../Components/standersection/second";
import MainFooter from "../../Components/Footer";
import PreFooter from "../../Components/PreFooter";
import slid from "../../Components/services/images/picture.png";
import OurServices from "../../Components/services/ourservices";
import{scrollToTop} from "../../utils/shared";

function Services() {
  useEffect(() => {
    scrollToTop()
  }, [])
  return (
    <>
      <div>
        <FirstSection
          img={slid}
          text="Services"
          text2="Dynamic Digital Solutions: Crafting Your Vision with Expertise"
        />
        
      </div>

      <div className="mt-3">
        <SecondSection
          title="Marketing Solutions: Elevate Your Brand with Creative Corner Agency "
          text="At Creative Corner, we offer a range of services to help businesses stand out in the digital  world. From captivating designs to effective marketing strategies, we have the expertise to bring your vision to life."
        />
      </div>
      <div>
        <OurServices />
      </div>
      
      <div>
        <PreFooter />
      </div>
      <div>
        <MainFooter />
      </div>
    </>
  );
}

export default Services;

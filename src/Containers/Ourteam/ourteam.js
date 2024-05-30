import React, { Component,useEffect} from "react";
import "./ourteam.css";
import MainFooter from "../../Components/Footer";
import PreFooter from "../../Components/PreFooter";
import FirstSection from "../../Components/standersection/first";
import SecondSection from "../../Components/standersection/second";
import slid from "../../Components/ourteam/images/section.png";
import sol from "../../Components/ourteam/images/Frame 19.png";
import MainOurTeam from "../../Components/ourteam/mainourteam";
import Thirdsection from "../../Components/standersection/thirdourteam";
import{scrollToTop} from "../../utils/shared";

function Ourteam() {
  useEffect(() => {
    scrollToTop()
  }, [])
  return (
    <>
      <div >
        <FirstSection
          img={slid}
          text="Our Team"
          text2="Meet Our Creative Minds: Driving Innovation Together"
        />
      </div>

      <div className="mt-3">
        <SecondSection
          title="Fuel Your Brand's Growth: Customized Marketing Solutions | Creative Corner Agency "
          text="Our team of experts is fueled by passion and expertise, dedicated to crafting digital masterpieces that stand out in the crowded online landscape. Whether you're a budding startup or an established brand, we're here to elevate your online presence to new heights with our customized marketing solutions."
        />
      </div>
      <div >
      <Thirdsection
          img={sol}
          text="What Sets Us Apart "
          text2="Driving Marketing Growth and Innovation at Creative Corner Agency we believe in the power of collaboration and innovation."
        />
      </div>
      <div> <MainOurTeam/></div>
      <div>
        <PreFooter />
      </div>
      <div>
        <MainFooter />
      </div>
    </>
  );
}

export default Ourteam;

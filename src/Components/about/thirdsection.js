import React from "react";
import man from "./images/Framee.svg";
import frame from"./images/Frame1.svg";
import frame2 from"./images/Frame2.svg";

function ThirdSection() {
  return (
    <>
      <div className="container flwla">
        <img src={man} 
      className="manimg "/>
        <h1 className="text-center ">Your Partner in Digital Excellence:</h1>
        <p className="text-center">
          At  Creative Corner we're not just a marketing agency and web
          development company; we're the architects of digital dreams. From
          sleek websites to captivating campaigns, we infuse every project with
          innovation and seamless digital solutions.
        </p>
      </div>

      <div className=" container ">
        <h1 className="my-5">
          Mission and Vision: Shaping the Future of Marketing and Technology at
          Creative Corner
        </h1>
        <div className="row ustify-content-between my-5">
        <div className="col-md-7  leftbord">
          <h4>Our vision</h4>
          <p  className=" Nunito ">
            At Creative Corner, our vision is to lead the marketing industry
            with innovative solutions that inspire success and drive branding
            growth. We aspire to set new standards of excellence through
            creativity, innovation, and a commitment to our clients' success.
          </p>
        </div>
        <div className="col-md-5">
        <img src={frame}
        alt="th"/>
        </div>
        </div>
        <div className="row ustify-content-between my-5 ">
        <div className="col-md-5">
            <img src={frame2}/>
        </div>
          <div className="col-md-7 rightbord">
            <h4>Our mission</h4>
            <p className=" Nunito " >
              At Creative Corner, our mission is to drive success through
              innovative digital solutions. We empower businesses to connect
              with their audience, achieve their goals, and exceed expectations.
              With creativity, collaboration, innovation and cutting-edge
              techniques, we deliver exceptional value and measurable results,
              ensuring our clients thrive in the digital landscape.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
export default ThirdSection;

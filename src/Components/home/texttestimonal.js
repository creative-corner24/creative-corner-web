import React, { Component } from "react";
import client1 from "./images/Ellipse 19.png";
import client2 from "./images/Group 17.png";
import client3 from "./images/Group 18.png";
import client4 from "./images/Ellipse 17.png";
import client5 from "./images/Group 15.png";
import client6 from "./images/Ellipse 18.png";
import SliderComponent from "../slider";

const Texttestimonal = () => {
  const sliderList = [
    { img: <img src={client1} alt="" className="ImgOfSecondSlider" width={"90%"} /> },
    { img: <img src={client2} alt="" className="ImgOfSecondSlider" width={"90%"} /> },
    { img: <img src={client3} alt="" className="ImgOfSecondSlider" width={"90%"} /> },
    { img: <img src={client4} alt="" className="ImgOfSecondSlider" width={"90%"} /> },
    { img: <img src={client5} alt="" className="ImgOfSecondSlider" width={"90%"} /> },
    { img: <img src={client6} alt="" className="ImgOfSecondSlider"  width={"90%"} /> },
  ];

  return (
    <>
      <h1 className="text-center mt-5  fontOtomanopee ">Client Testimonials</h1>
      <div >
        <SliderComponent
          id={"secondSlider"}
          list={sliderList}
          slidesPerView350={2}
          slidesPerView768={3}
          slidesPerView1024={5}
          spaceBetween1024={10}
        />
      </div>
    </>
  );
};
export default Texttestimonal;

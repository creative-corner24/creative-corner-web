import React, { useRef, useState, useEffect } from "react";
import sllid from "./images/Rectangle 147.png";
import sllid2 from "./images/Mobile_Presen.jpg";
import sllid3 from "./images/Rectangle 152.png";
import sllid4 from "./images/Rectangle 147.png";
import sllid5 from "./images/Rectangle 151.png";
import sllid6 from "./images/Rectangle 150.png";
import SliderComponent from "../../Components/slider";

function Slidersection() {

const sliderList = [
  {img: <img src={sllid} alt='' className="ms-4 d-flex align-items-center"  width={"50%"}/>  },
  {img: <img src={sllid2} alt='' className="ms-4 d-flex align-items-center"  width={"50%"}/>  },
  {img: <img src={sllid3} alt='' className="ms-4 d-flex align-items-center"  width={"50%"}/>  },
  {img: <img src={sllid4} alt='' className="ms-4 d-flex align-items-center"  width={"50%"}/>  },
  {img: <img src={sllid5} alt='' className="ms-4 d-flex align-items-center"  width={"50%"}/>  },
  {img: <img src={sllid6} alt='' className="ms-4 d-flex align-items-center"  width={"50%"}/>  },
]
  return (
    
        <SliderComponent id={'firstSlider'} list={sliderList} slidesPerView350={1}  slidesPerView768={1} slidesPerView1024={1} spaceBetween1024={0}/>
  );


}
export default Slidersection;

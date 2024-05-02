import React from "react";
import { Link } from "react-router-dom";

const OurTeamProp =(props)=> {
console.log("props", props)

   return(
    <div className="team position-relative ">
    <img
      className="img-fluid member"
      src={props.img}
      alt="Second slide"
    />
    <div className=" memberdata  position-absolute top-100 start-50 translate-middle">
    <i className="linkinic  bi bi-linkedin"></i>
    <p className="postion">{props.text}</p>
    <h6 className="name ">{props.text2}</h6>

    </div>
  </div>
    )

}

export default OurTeamProp
import React from "react";
import { Link } from "react-router-dom";

const OurTeamProp =(props)=> {

   return(
    <div className="team position-relative ">
    <img
      className="img-fluid member"
      src={props.img}
      alt="Second slide"
    />
    <div className=" memberdata   ">
    <i className="linkinic  bi bi-linkedin"></i>
    <p className="postionn">{props.text}</p>
    <p className="name ">{props.text2}</p>

    </div>
  </div>
    )

}

export default OurTeamProp
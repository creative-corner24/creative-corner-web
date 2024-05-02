import React from "react";
import { Link } from "react-router-dom";

const SECONDPART =(props)=> {
console.log("props", props)

   return(
    <div className="He position-relative w-100 ">
    <img
      className="img-fluid covericon"
      src={props.img}
      alt="Second slide"
    />
    <div className=" position-absolute top-0">
    <img className="icons" src={props.imgicon} alt="Second slide" />
    <p className="firsttext">{props.text}</p>
    <p className="secondtext">{props.text2}</p>


    <a href="/Services" className="btn  mx-4 cardbutton " role="button" aria-pressed="true">Read More <i className="bi bi-chevron-right fa-1x butonic"  /></a>

    </div>
  </div>
    )

}

export default SECONDPART
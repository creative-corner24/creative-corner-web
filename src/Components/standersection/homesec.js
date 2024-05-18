import React from "react";
import { Link } from "react-router-dom";

const SECONDPART =(props)=> {
console.log("props", props)

   return(
    <div className="He  ">
   
    <div className="  top-0 Hecontent">
    <img className="icons  " src={props.imgicon} alt="Second slide" />
    <h5 className="firsttext">{props.text}</h5>
    <p className="secondtext">{props.text2}</p>


    <a href="/Services" className="btn   cardbutton " role="button" aria-pressed="true">Read More <i className="bi bi-chevron-right fa-1x butonic"  /></a>

    </div>
  </div>
    )

}

export default SECONDPART
import React from "react";
import { Link } from "react-router-dom";

const SECONDPART =(props)=> {

   return(
    <div className="He  ">
   
    <div className="   Hecontent">
    <img className="icons  " src={props.imgicon} alt="Second slide" />
    <h4 className="firsttext  Nunito  ">{props.text}</h4>
    <p className="secondtext nino">{props.text2}</p>


    <a href="/Services" className="btn   cardbutton   Nunito " role="button" aria-pressed="true">Read more <i className="bi bi-chevron-right fa-1x butonic"  /></a>

    </div>
  </div>
    )

}

export default SECONDPART
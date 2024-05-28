import React from "react";
import bgim from "../services/images/opacity0.png";

const CardServices =(props)=> {
console.log("props", props)

   return(


    <div className="CardServ position-relative ">
    <img
      className=" coversicon  m-2"
      src={bgim}
      alt="Second slide"
    />
    <div className=" position-absolute top-0  ">
    <img className="servicesicon " src={props.imgicon} alt="Second slide" />
    <h4 className=" text-center Nunito  mx-2 my-3">{props.text}</h4>
    </div>
  </div>

           
    )

}

export default CardServices

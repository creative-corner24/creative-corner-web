import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const FirstSection =(props)=> {
console.log("props", props)

   return(

           <div className=" frist position-relative">
            <img
                      className="d-block w-100 "
                      src= {props.img}
                      alt="Second slide"
                      
                    />
                    <div >
            <h2 className="  stand1text text-light  " >{props.text}</h2>
           
            <p className=" stand2text  text-light" >{props.text2}</p>
            </div>
        </div>
    )

}

export default FirstSection

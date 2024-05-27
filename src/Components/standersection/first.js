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
            <h2 className="position-absolute bottom-50 start-50 translate-middle text-light  frist1  " >{props.text}</h2>
           
            <p className="  position-absolute top-50 start-50 translate-middle  text-light  frist2 " >{props.text2}</p>
            </div>
        </div>
    )

}

export default FirstSection

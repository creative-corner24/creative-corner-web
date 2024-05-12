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
            <h1 className="position-absolute bottom-50 start-50 translate-middle text-light  " >{props.text}</h1>
            <Button as={Link} to="/Contact" className="ms-5 mt-3 px-5 bg-primary">
            Get in Touch
          </Button>
            <p className=" m-4 position-absolute top-50 start-50 translate-middle  text-light" >{props.text2}</p>
            </div>
        </div>
    )

}

export default FirstSection

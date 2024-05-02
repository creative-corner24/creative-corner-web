import React from "react";

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
          
            <p className=" m-4 position-absolute top-50 start-50 translate-middle  text-light" >{props.text2}</p>
            </div>
        </div>
    )

}

export default FirstSection

import React from "react";
const SecondSection =(props)=> {
console.log("props", props)

   return(
        <div className=" container position-relative secondsection">
            <div className="text-center">
                    <h3 className="
                   standsecntext1" >{props.title}</h3>
            <p className="standsecntext2
                    ">{props.text}</p>
            </div>
        </div>
    )

}

export default SecondSection

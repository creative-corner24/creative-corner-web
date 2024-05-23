import React from "react";
const SecondSection =(props)=> {
console.log("props", props)

   return(
        <div className=" container position-relative secondsection">
            <div className="position-abolute pt-5 text-center">
                    <h3 className="
                     mb-2 px-3" >{props.title}</h3>
            <p className="
                    py-5 px-2 ">{props.text}</p>
            </div>
        </div>
    )

}

export default SecondSection

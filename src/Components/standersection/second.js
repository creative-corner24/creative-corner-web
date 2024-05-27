import React from "react";
const SecondSection =(props)=> {
console.log("props", props)

   return(
        <div className=" container position-relative secondsection">
            <div className="position-abolute mainsecond">
                    <h3 className="second1" >{props.title}</h3>
                    <h3 className="second1" >{props.title1}</h3>

            <p className="second2 ">{props.text}</p>
            </div>
        </div>
    )

}

export default SecondSection

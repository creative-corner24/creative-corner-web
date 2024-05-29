import React from "react";

const Thirdsection =(props)=> {
console.log("props", props)

   return(

           <div className=" frist position-relative">
            <img
                      className="d-block w-100 mt-5 "
                      src= {props.img}
                      alt="Second slide"
                      
                    />
                    <div >
            <h2 className=" mobiedite " >{props.text}</h2>
          
            <p className="   mobiedit " >{props.text2}</p>
            </div>
        </div>
    )

}

export default Thirdsection

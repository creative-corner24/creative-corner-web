import React from "react";

const Thirdsection =(props)=> {
console.log("props", props)

   return(

           <div className=" frist position-relative">
            <img
                      className="d-block w-100 "
                      src= {props.img}
                      alt="Second slide"
                      
                    />
                    <div >
            <h2 className="position-absolute bottom-50 start-50 translate-middle text-light mobiedite " >{props.text}</h2>
          
            <p className=" m-1 position-absolute top-50 start-50 translate-middle  text-light mobiedit " >{props.text2}</p>
            </div>
        </div>
    )

}

export default Thirdsection

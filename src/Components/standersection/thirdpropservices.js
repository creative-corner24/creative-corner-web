import React from "react";

const AnomationServices3 = (props) => {
  console.log("props", props);

  return (
    <>
      <div className="row">
        {/* text with gray backgroun */}
        <div className="  textwithgry mb-4">
          <p className=" text-center  m-3">{props.text1}</p>
        </div>

        {/* circle img */}
        <div className="col-md-6 cicy">
          <img className=" circleimo  m-2" src={props.img} alt="Second slide" />
        </div>

        <div className="col-md-6">
          <h4 className=" text-start">{props.text}</h4>

          {/* list  */}

          <ul className="mt-5 coloredlist  text-dark">
            <li>
              <h5 className="lifrtex">
                <span className="rounbackground">{props.iconname1}</span> {props.lifrtex1}
              </h5>
              <p className="lisectex px-5">{props.lisectex1}</p>
            </li>
            <li>
            <h5 className="lifrtex">
            <span className="rounbackground">{props.iconname2}</span>
            {props.lifrtex2}</h5>
              <p className="lisectex px-5">{props.lisectex2}</p>
            </li>
            <li>
            <h5 className="lifrtex">
            <span className="rounbackground">{props.iconname3}</span>
            {props.lifrtex3}</h5>
              <p className="lisectex px-5">{props.lisectex3}</p>
            </li>
            
            
            
          </ul>
        </div>
      </div>


      <div>
        
      </div>
    </>
  );
};

export default AnomationServices3;
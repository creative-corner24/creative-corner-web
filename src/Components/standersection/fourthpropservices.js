import React from "react";

const AnomationServices4 = (props) => {
  console.log("props", props);

  return (
    <>
      <div className="row">
        {/* text with gray backgroun */}
        <div className="  textwithgry ">
          <p className=" text-center fw-bold Nunito  m-3">{props.text1}</p>
        </div>

        {/* circle img */}
        <div className="col-md-6 cicy">
          <img className=" circleimo   m-2" src={props.img} alt="Second slide" />
        </div>

        <div className="col-md-6">
          <h4 className="  textbefrlist Nunito  text-start">{props.text}</h4>

          {/* list  */}

          <ul className=" uncoloredlist  text-dark">
            <li>
              <h5 className="lifrtex">
                <span className="rounbackground">{props.iconname1}</span> {props.lifrtex1}
              </h5>
              <p className="lisectex  Nunito text-black-50  ">{props.lisectex1}</p>
            </li>
            <li>
            <h5 className="lifrtex">
            <span className="rounbackground">{props.iconname2}</span>
            {props.lifrtex2}</h5>
              <p className="lisectex  Nunito text-black-50 ">{props.lisectex2}</p>
            </li>
            <li>
            <h5 className="lifrtex">
            <span className="rounbackground">{props.iconname3}</span>
            {props.lifrtex3}</h5>
              <p className="lisectex  Nunito text-black-50  ">{props.lisectex3}</p>
            </li>
            <li>
            <h5 className="lifrtex">
            <span className="rounbackground">{props.iconname4}</span>
              {props.lifrtex4}</h5>
              <p className="lisectex  Nunito text-black-50  ">{props.lisectex4}</p>
            </li>
           
            
          </ul>
        </div>
      </div>


      <div>
        
      </div>
    </>
  );
};

export default AnomationServices4;
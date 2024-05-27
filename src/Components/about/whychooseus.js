import React from "react";
import why from"./images/whyus.png";

function WhyUs() {
  return (
    <>
   
      <div className="  whyusbackground ">
        <h3  className="text-light ps-5 w-50  top-50  position-absolute " >
          Creativity Corner Where creativity <br/> meets technology to elevate your
          online presence and drive marketing growth.
        </h3>
      </div>

      <div className="row  flwla2  ">
        <div className=" col-md-6 fericol">
        <h2 className="fs-1 fw-bolder" >
              Why Choose Us ?
            </h2>
            <ul className="mt-5 ">
              <li className="coloredlist ">Expertise: </li>
              <p className="nino">Creative Corner Agency Our team brings years of experience and
              industry-leading expertise to every project, ensuring that you
              receive the highest quality service for marketing growth results.</p>
              <li className="coloredlist ">Innovative Marketing Strategies:</li>
              <p className="nino" >
              We stay ahead of the curve with the latest trends and
              technologies, allowing us to deliver cutting-edge solutions that
              set you apart from the competition.</p>
              <li className="coloredlist">Collaboration:</li>
              <p className="nino" >
              We believe in the power of collaboration and work closely with our
              clients every step of the way to ensure their vision is brought to
              life.</p>
              <li className="coloredlist">Results:</li>
              <p className="nino" >
              Our ultimate goal is your success. We measure our success by the
              results we deliver and are committed to help you with your
              branding growth.</p>
              <li className="coloredlist">customized Marketing solutions:</li>
              <p className="nino" >
              your satisfaction is our top priority We pride ourselves on
              delivering exceptional service and support, every step of the way
              to achieve your business objectives.</p>
            </ul>
        </div>
        <div className="col-md-6">
        <img src={why}
        className="whyimg"
        />

        </div>
      </div>
    </>
  );
}
export default WhyUs;

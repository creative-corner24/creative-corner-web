import React from "react";
import why from"./images/whyus.png";

function WhyUs() {
  return (
    <>
   
      <div className="  whyusbackground flwla py-5">
      <div className="help py-5">
        <h3  className="text-light w-50 px-3 py-5 " >
          Creativity Corner Where creativity meets technology to elevate your
          online presence and drive marketing growth.
        </h3>
      </div>
      </div>

      <div className="row  flwla  py-5">
        <div className=" col-md-7">
        <h2 className="mx-3">
              why choose us
            </h2>
            <ul className="mt-5">
              <li className="coloredlist ">Expertise: </li>
              <p>Creative Corner Agency Our team brings years of experience and
              industry-leading expertise to every project, ensuring that you
              receive the highest quality service for marketing growth results.</p>
              <li className="coloredlist ">Innovative Marketing Strategies:</li>
              <p>
              We stay ahead of the curve with the latest trends and
              technologies, allowing us to deliver cutting-edge solutions that
              set you apart from the competition.</p>
              <li className="coloredlist">Collaboration:</li>
              <p>
              We believe in the power of collaboration and work closely with our
              clients every step of the way to ensure their vision is brought to
              life.</p>
              <li className="coloredlist">Results:</li>
              <p>
              Our ultimate goal is your success. We measure our success by the
              results we deliver and are committed to help you with your
              branding growth.</p>
              <li className="coloredlist">customized Marketing solutions:</li>
              <p>
              your satisfaction is our top priority We pride ourselves on
              delivering exceptional service and support, every step of the way
              to achieve your business objectives.</p>
            </ul>
        </div>
        <div className="col-md-5">
        <img src={why}
        className="whyimg"
        />

        </div>
      </div>
    </>
  );
}
export default WhyUs;

import React, { Component } from "react";
function Primarysection() {
  return (
    <div className=" Primarysection  py-3">
      <h1 className="text-primary px-4  fontOtomanopee ">Result you can count on</h1>
      <h4 className="text-light px-4">
        Here we should put our last successful works
      </h4>
      <div className="row  justify-content-between  py-5 ">
        <div className="col-md-1 col-12"></div>

        <div className=" col-md-6 col-12 mt-3 ml-3 ">
          <p className="small text-start  text-white  ">
            {" "}
            <h3 className="text-start text-white  ">
              Mobile applications are specialize in crafting innovative and
              user-friendly
            </h3>
            "our mobile application development service goes beyond just
            creating apps; it's about crafting immersive experiences that
            resonate with users. We prioritize user-centric design principles,
            ensuring optimal usability and engagement. delivering cutting-edge
            solutions tailored to your unique needs. With our expertise in
            mobile app development, we transform your concepts into sleek,
            high-performing applications that elevate your brand and make a
            lasting impact on your audience. "
          </p>
        </div>
        <div className=" col-md-5 col-12 ">
          <img
            src="../../Assets/Nokia XR21.png"
            class="img-thumbnail "
            alt="hi "
          />
        </div>
      </div>

      <div className="row  justify-content-between  py-5 ">
        <div className="col-md-1 col-12"></div>
        <div className=" col-md-5 col-12 ">
          <img
            src="../../Assets/Nokia XRd21.png"
            class="img-thumbnail "
            alt="hi "
          />
        </div>
        <div className=" col-md-6 col-12 mt-3 ">
          
          <p className="small text-start  text-white  ">
            {" "}
            <h3 className="text-start text-white  ">
            UI/UX Design, creating seamless and intuitive experiences for users{" "}
          </h3>
            “We believe in putting the user at the center of everything we do,
            ensuring that every click, swipe, and interaction is not only
            effortless but also enjoyable. With our UI/UX expertise, we
            transform complex ideas into elegant designs that elevate your brand
            and leave a lasting impression on your audience."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Primarysection;

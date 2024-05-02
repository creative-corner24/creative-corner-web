import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Navbarcompo from "./Navbarcompo";

function Headerslider() {
  return (

    <Carousel data-bs-theme="white">

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../Assets/first.jpg"
          alt="First slide"
        />
        <Carousel.Caption ClassName="captioni">
        <h3   className="fontOtomanopee" >
            In the corner of creativity, ideas flourish, dreams take shape, and
            innovation knows no boundaries ’’Creative Corner’’
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../Assets/second.jpg"
          alt="Second slide"
        />
        <Carousel.Caption  ClassName="captioni" >
        <h3 className="fontOtomanopee"  >
        At Creative Corner for Marketing We see ourselves as your partner of success
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../Assets/third.jpg"
          alt="Third slide"
        />
        <Carousel.Caption  ClassName="captioni">
          <h3  className="fontOtomanopee" >
          At Creative Corner, we don't just think outside the box; we build a whole new corner of possibilities.
          </h3>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Headerslider;

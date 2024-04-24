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
        <Carousel.Caption>
        <h3>
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
        <Carousel.Caption>
        <h3>
            In the corner of creativity, ideas flourish, dreams take shape, and
            innovation knows no boundaries ’’Creative Corner’’
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../Assets/third.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>
            In the corner of creativity, ideas flourish, dreams take shape, and
            innovation knows no boundaries ’’Creative Corner’’
          </h3>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Headerslider;

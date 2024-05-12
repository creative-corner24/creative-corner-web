import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Navbarcompo from "./Navbarcompo";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Headerslider() {
  return (
    <Carousel data-bs-theme="white">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../Assets/first.png"
          alt="First slide"
        />
       <div class="content">
          <h1>In the corner of creativity, </h1>
          <h6>
            Ideas flourish, dreams take shape, and innovation knows no
            boundaries ’’Creative Corner’’
          </h6>
          <Button as={Link} to="/Contact" className="ms-5 mt-3  bg-primary">
            Get in Touch
          </Button>
          <Button as={Link} to="/Services" className="ms-5  mt-3 bg-transparent  outline-light   ">
            Learn More
          </Button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../Assets/second.png"
          alt="Second slide"
        />

        <div class="content">
          <h1>In the corner of creativity, </h1>
          <h6>
            Ideas flourish, dreams take shape, and innovation knows no
            boundaries ’’Creative Corner’’
          </h6>
          <Button as={Link} to="/Contact" className="ms-5 mt-3  bg-primary">
            Get in Touch
          </Button>
          <Button as={Link} to="/Services" className="ms-5  mt-3 bg-transparent">
            Learn More
          </Button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../Assets/third.png"
          alt="Third slide"
        />
       <div class="content">
          <h1>In the corner of creativity, </h1>
          <h6>
            Ideas flourish, dreams take shape, and innovation knows no
            boundaries ’’Creative Corner’’
          </h6>
          <Button as={Link} to="/Contact" className="ms-5 mt-3  bg-primary">
            Get in Touch
          </Button>
          <Button as={Link} to="/Services" className="ms-5  mt-3 bg-transparent   outline-light  ">
            Learn More
          </Button>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Headerslider;

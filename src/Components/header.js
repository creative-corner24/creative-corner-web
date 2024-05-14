import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Navbarcompo from "./Navbarcompo";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Headerslider() {
  return (
    <Carousel controls={false}    data-bs-theme="white">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../Assets/first.png"
          alt="First slide"
        />
        <div class="  content">
          <p className="header1tex ">
            In the corner <br />
            of creativity,{" "}
          </p>
          <p className="header2tex">
            Ideas flourish, dreams take shape,
            <br /> and innovation knows no boundaries ’’Creative <br /> Corner’’
          </p>
          <Button as={Link} to="/Contact" className="  butncolo1">
            Get in Touch
          </Button>
          <Button
            as={Link}
            to="/Services"
            className="ms-3    bg-transparent   btn-outline-light butncolo2  "
          >
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

<div class="  content">
          <p className="header1tex ">
            In the corner <br />
            of creativity,{" "}
          </p>
          <p className="header2tex">
            Ideas flourish, dreams take shape,
            <br /> and innovation knows no boundaries ’’Creative <br /> Corner’’
          </p>
          <Button as={Link} to="/Contact" className="  butncolo1">
            Get in Touch
          </Button>
          <Button
            as={Link}
            to="/Services"
            className="ms-3    bg-transparent   btn-outline-light butncolo2  "
          >
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
        <div class="  content">
          <p className="header1tex ">
            In the corner <br />
            of creativity,{" "}
          </p>
          <p className="header2tex">
            Ideas flourish, dreams take shape,
            <br /> and innovation knows no boundaries ’’Creative <br /> Corner’’
          </p>
          <Button as={Link} to="/Contact" className="  butncolo1">
            Get in Touch
          </Button>
          <Button
            as={Link}
            to="/Services"
            className="ms-3    bg-transparent   btn-outline-light butncolo2  "
          >
            Learn More
          </Button>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Headerslider;

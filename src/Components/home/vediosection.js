import React, { Component } from "react";
import { Container, video } from "react-bootstrap";
function  Vedisection(){
    return (
      <div className="  position-relative  veddd ">
       <video autoPlay loop muted>
    <source src="./images/vedio.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
        <h1
          className="pt-5  text-center" >
          {" "}
          We believe in the power of creativity to transform ideas into
          unforgettable experiences
        </h1>
      </div>
    );
  }
export default Vedisection ;

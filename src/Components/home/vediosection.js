import React, { Component } from "react";
import { Container, video } from "react-bootstrap";

function  Vedisection(){
    return (
      <div className=" container fluid ">
        <video
          width="400"
          autoPlay="autoplay"
          loop="loop"
          muted
          src=""
        ></video>
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

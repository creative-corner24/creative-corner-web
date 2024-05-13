import React, { Component } from "react";
import { Container, video } from "react-bootstrap";

export default class Thirdhome extends Component {
  render() {
    return (
      <div className="vid my-3 ">
        <video
          width="400"
          autoPlay="autoplay"
          loop="loop"
          muted
          src="../assets/home.webm"
        ></video>
        <h1
          className="vediocaption" >
          {" "}
          We believe in the power of creativity to transform ideas into
          unforgettable experiences
        </h1>
      </div>
    );
  }
}


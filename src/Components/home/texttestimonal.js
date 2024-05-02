import React, { Component } from "react";
import { Container, Button, ul, Col, Row ,Card } from "react-bootstrap";
import client1 from "./images/client1.svg";
import client2 from "./images/client2.svg";
import client3 from "./images/client3.svg";
import client4 from "./images/client4.svg";

    function Texttestimonal(){
    return (
     <>
            <h1 className="text-center my-5  fontOtomanopee ">Client Testimonials</h1>
            <div className="row  ">
              <div className="col-md-3   clintimo"> <img src={client1} /></div>
              <div className="col-md-3 clintimo"> <img src={client2}/></div>
              <div className="col-md-3  clintimo"> <img src={client3}/></div>
              <div className="col-md-3  clintimo"> <img src={client4}/></div>


            </div>
     </>
    );
  }
  export default Texttestimonal;


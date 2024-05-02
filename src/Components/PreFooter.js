import React, { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { button, ul } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
 function PreFooter (){
    return (
      <div className="row  homepref justify-content-between ">
        <div className=" col-md-7 col-12 p-4 ">
          <h3 className="text-start px-5 pt-5 fontOtomanopee  ">
            Ready to take your business to the next level?{" "}
          </h3>
          <p className="small text-start px-5">
            Contact us today to learn more about how Creative corner can help
            you achieve your goals in the digital landscape.
          </p>
        </div>
        <div className=" col-md-5 col-12  py-5">
          <button type="button" className="homebutton">
            {" "}
            Get In Touch
          </button>
        </div>
      </div>
    );
  }
 export default PreFooter ;
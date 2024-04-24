import React, { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { button, ul } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
        function MainFooter() {
            return (
      

      <div className="MainFooter">


        <div className=" foot mb-5">
          <Link className="firstlink m-4  text-white"  to="/about">about</Link>
          <Link className="firstlink m-4  text-white " to="/Home">Home</Link>
          <Link className="firstlink m-4  text-white " to="/services">Services</Link>
          <Link className="firstlink m-4  text-white" to="/our-team">Our team</Link>
          <Link className="firstlink m-4  text-white" to="/portoflio">Portoflio</Link>


        </div>

        <div className="Footer mb-2">
          <ul className="Foote ml-auto text-light d-inline-block w-100">

            <li className="footer-item d-inline-block">
              <i className="bi bi-facebook fa-1x mx-3 mt-4" id="logo" />
            </li>
            <li className="footer-item d-inline-block ">
              <i className="bi bi-twitter fa-1x mx-3 mt-4" id="logo" />
            </li>
            <li className="footer-item d-inline-block ">
              <i className="bi bi-instagram fa-1x mx-2 " id="logo" />
            </li>
            <li className="footer-item d-inline-block ">
              <i className="bi bi-linkedin fa-1x mx-3 mt-4" id="logo" />
            </li>
            <li className="footer-item d-inline-block ">
              <i className="bi bi-youtube fa-1x mx-3 mt-4" id="logo" />
            </li>
            <li className="footer-item d-inline-block ">
              <i className="bi bi-tiktok fa-1x mx-3 " id="logo" />
            </li>
            <li className="footer-item d-inline-block ">
              <i className="bi bi-snapchat fa-1x mx-3 " id="logo" />
            </li>
          </ul>
        </div>
        <div><em>
          CREATIVE CORNER </em>
          <span> <em>&copy; 2024 All Right Reservrd. </em></span>
        </div>
      </div>
     

    
);
}
export default MainFooter;
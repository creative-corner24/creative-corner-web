import React, { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { button, ul } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
        function MainFooter() {
            return (
      

      <div className="MainFooter">

<div className="text-center my-5">  <img src="../../Assets/01.png"   width="220"
              height="60"
              className="d-inline-block align-top  logooo"/> </div>

        <div className=" foot mb-5">
        <Link className="firstlink m-4  text-white " to="/Home">Home page </Link>
          <Link className="firstlink m-4  text-white"  to="/about">About us</Link>
          <Link className="firstlink m-4  text-white " to="/services">Our Services</Link>
          <Link className="firstlink m-4  text-white" to="/our-team">Our team</Link>


        </div>

        <div className="Footer mb-2">
          <ul className="Foote ml-auto text-light d-inline-block w-100">

            <li className="footer-item d-inline-block">
            <Link to="https://www.facebook.com/profile.php?id=61556802279602
" target="_blank" className="text-light">
              <i className="bi bi-facebook fa-5x mx-4 mt-4" id="logo" />
              </Link>
            </li>
            <li className="footer-item d-inline-block ">
            <Link to="https://twitter.com/CreativeTech_SA
" target="_blank" className="text-light">
              <i className="bi bi-twitter fa-5x mx-4 mt-4" id="logo" />
              </Link>
            </li>
            <li className="footer-item d-inline-block ">
            <Link to="https://www.instagram.com/creativetech_sa?igsh=MWlvb3B4eWM0d2V4dA==

" target="_blank" className="text-light">
              <i className="bi bi-instagram fa-5x mx-4 " id="logo" />
              </Link>
            </li>
            <li className="footer-item d-inline-block ">
            <Link to="https://www.linkedin.com/company/creative-corner-tech/

" target="_blank" className="text-light">
              <i className="bi bi-linkedin fa-5x mx-4 mt-4" id="logo" />
              </Link>
            </li>
            <li className="footer-item d-inline-block ">
            <Link to="https://www.youtube.com/channel/UCfgmC6NoXQAIFcg7X1CIvkg
" target="_blank" className="text-light">
              <i className="bi bi-youtube fa-5x mx-4 mt-4" id="logo" />
              </Link>
            </li>
            <li className="footer-item d-inline-block ">
            <Link to="https://www.tiktok.com/@creativetech_sa?_t=8lop7IJU3yn&_r=1

" target="_blank" className="text-light">
              <i className="bi bi-tiktok fa-5x mx-4 " id="logo" />
              </Link>
            </li>
            <li className="footer-item d-inline-block ">
            <Link to="https://t.snapchat.com/jle8iv3f
" target="_blank" className="text-light">
              <i className="bi bi-snapchat fa-5x mx-4 " id="logo" />
              </Link>
            </li>
          </ul>
        </div>
        <div ><small><em>
          CREATIVE CORNER </em>
          <span> <em>&copy; 2024 All Right Reservrd. </em></span></small>
        </div>
      </div>
     

    
);
}
export default MainFooter;
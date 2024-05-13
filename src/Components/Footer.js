import React, { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { button, ul } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
        function MainFooter() {
            return (
      

      <div className="MainFooter">

<div className="text-center my-5">  <img src="../../Assets/01.png"   width="180"
              height="40"
              className="d-inline-block align-top  logoo"/> </div>

        <div className=" foot mb-5">
          <Link className="firstlink m-4  text-white"  to="/about">about</Link>
          <Link className="firstlink m-4  text-white " to="/Home">Home</Link>
          <Link className="firstlink m-4  text-white " to="/services">Services</Link>
          <Link className="firstlink m-4  text-white" to="/our-team">Our team</Link>


        </div>

        <div className="Footer mb-2">
          <ul className="Foote ml-auto text-light d-inline-block w-100">

            <li className="footer-item d-inline-block">
            <Link to="https://www.facebook.com/profile.php?id=61556802279602
" target="_blank" className="text-light">
              <i className="bi bi-facebook fa-1x mx-3 mt-4" id="logo" />
              </Link>
            </li>
            <li className="footer-item d-inline-block ">
            <Link to="https://twitter.com/CreativeTech_SA
" target="_blank" className="text-light">
              <i className="bi bi-twitter fa-1x mx-3 mt-4" id="logo" />
              </Link>
            </li>
            <li className="footer-item d-inline-block ">
            <Link to="https://www.instagram.com/creativetech_sa?igsh=MWlvb3B4eWM0d2V4dA==

" target="_blank" className="text-light">
              <i className="bi bi-instagram fa-1x mx-2 " id="logo" />
              </Link>
            </li>
            <li className="footer-item d-inline-block ">
            <Link to="https://www.linkedin.com/company/creative-corner-tech/

" target="_blank" className="text-light">
              <i className="bi bi-linkedin fa-1x mx-3 mt-4" id="logo" />
              </Link>
            </li>
            <li className="footer-item d-inline-block ">
            <Link to="https://www.youtube.com/channel/UCfgmC6NoXQAIFcg7X1CIvkg
" target="_blank" className="text-light">
              <i className="bi bi-youtube fa-1x mx-3 mt-4" id="logo" />
              </Link>
            </li>
            <li className="footer-item d-inline-block ">
            <Link to="https://www.tiktok.com/@creativetech_sa?_t=8lop7IJU3yn&_r=1

" target="_blank" className="text-light">
              <i className="bi bi-tiktok fa-1x mx-3 " id="logo" />
              </Link>
            </li>
            <li className="footer-item d-inline-block ">
            <Link to="https://t.snapchat.com/jle8iv3f
" target="_blank" className="text-light">
              <i className="bi bi-snapchat fa-1x mx-3 " id="logo" />
              </Link>
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
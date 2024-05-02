import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbarcompo()  {
    return (

    <Navbar expand="lg"  className=" navbar  navbar fixed-top navbar-dark bg-dark  bg-opacity-50">
      < Container fluid  >
      <Navbar.Brand href="#home">
            <img
              src="../../Assets/01.png"
              width="180"
              height="40"
              className="d-inline-block align-top  logoo"
              alt="logo"
            />
          </Navbar.Brand>        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"
        className="  justify-content-center 
        ">
          <Nav
            className=" my-2  my-lg-0"
          >
            <Nav.Link as={Link} to="/Home" className="link-light  mx-4  ">Home</Nav.Link>
            <Nav.Link as={Link} to="/about"  className="link-light mx-4 ">About us</Nav.Link>
            <Nav.Link as={Link} to="/Services" className="link-light mx-4 ">Services</Nav.Link>
            <Nav.Link as={Link} to="/our team" className="link-light mx-4  " >Our Team</Nav.Link>
          </Nav>


        <Button   as={Link} to="/Contact"  className="ms-5  bg-info">Get IN Touch</Button>
        
        </Navbar.Collapse>

      </Container>
    </Navbar>
  
    );
  };
  
  export default Navbarcompo;
import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbarcompo()  {
    return (

    <Navbar expand="lg" className="navbarco ">
      <Container fluid  >
      <Navbar.Brand href="#home">
            <img
              src="../../assets/01.png"
              width="150"
              height="40"
              className="d-inline-block align-top  logoo"
              alt="logo"
            />
          </Navbar.Brand>        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"
        className="  justify-content-center
        ">
          <Nav
            className=" my-2 my-lg-0"
          >
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About us</Nav.Link>
            <Nav.Link as={Link} to="/Services">Services</Nav.Link>
            <Nav.Link as={Link} to="/our team" >Our Team</Nav.Link>
            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
          </Nav>
        
        </Navbar.Collapse>
        <Button variant="outline-primary">Get IN Touch</Button>
      </Container>
    </Navbar>
  
    );
  };
  
  export default Navbarcompo;
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbarcompo() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  // Function to toggle the Navbar when the toggle button is clicked
  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  // Function to determine if the button should be visible based on the current location
  const isButtonVisible = location.pathname !== "/Home";
  return (
    <Navbar
      expand="lg"
      className=" navbar  navbar fixed-top navbar-dark bg-dark  bg-opacity-50"
      expanded={expanded}
    >
      <Container fluid >
        <Navbar.Brand href="#home">
          <img
            src="../../Assets/Logo.png"
            // width="180"
            // height="50"
            className="  logoo  "
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleNavbar} className="humbrugermenu" />
        <Navbar.Collapse
          id="navbarScroll"
          className="  flex-row-reverse
        "
        >
          <Nav className=" expendmenu   ">
            
            <Nav.Link as={Link} to="/Home" className="link-light  mx-4   ">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="link-light mx-4 ">
              About us
            </Nav.Link>
            <Nav.Link as={Link} to="/Services" className="link-light mx-4 ">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/our-team" className="link-light mx-4  mr-5 ">
              Our Team
            </Nav.Link>
            {isButtonVisible && (
          <Button as={Link} to="/Contact" className="  butncolo ">
            Get in touch
          </Button>
        )}
          </Nav>
        
        </Navbar.Collapse>
        
        
      </Container>
    </Navbar>
  );
}

export default Navbarcompo;

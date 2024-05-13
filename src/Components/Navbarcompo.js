// import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';
// import { Link, useLocation } from "react-router-dom";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


// function Navbarcompo() {
  
//   const location = useLocation();

//   // Function to determine if the button should be visible based on the current location
//   const isButtonVisible = location.pathname !== "/Home";
//     return (

//     <Navbar expand="lg"  className=" navbar  navbar fixed-top navbar-dark bg-dark  bg-opacity-50">
//       < Container   >
//       <Navbar.Brand href="#home">
//             <img
//               src="../../Assets/01.png"
//               width="180"
//               height="50"
//               className="d-inline-block align-top  logoo"
//               alt="logo"
//             />
//           </Navbar.Brand>    
//           <Navbar.Toggle aria-controls="navbarScroll"  />
//         <Navbar.Collapse id="navbarScroll"
//         className="  d-flex flex-row-reverse
//         ">
//           <Nav
//             className=" my-2  my-lg-0   Nunito"
//           >
//             <Nav.Link as={Link} to="/Home" className="link-light  mx-4  ">Home</Nav.Link>
//             <Nav.Link as={Link} to="/about"  className="link-light mx-4 ">About us</Nav.Link>
//             <Nav.Link as={Link} to="/Services" className="link-light mx-4 ">Services</Nav.Link>
//             <Nav.Link as={Link} to="/our team" className="link-light mx-4  " >Our Team</Nav.Link>
//           </Nav>

//         </Navbar.Collapse>
//         {isButtonVisible &&<Button   as={Link} to="/Contact"  className="ms-5  butncolo">Get IN Touch</Button>}


//       </Container>
//     </Navbar>
  
//     );
//   };
  
//   export default Navbarcompo;


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
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="../../Assets/01.png"
                        width="180"
                        height="50"
                        className="d-inline-block align-top  logoo"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleNavbar} />
                <Navbar.Collapse
                    id="navbarScroll"
                    className="  d-flex flex-row-reverse
        "
                >
                    <Nav className=" my-2  my-lg-0   Nunito">
                        <Nav.Link
                            as={Link}
                            to="/Home"
                            className="link-light  mx-4  "
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/about"
                            className="link-light mx-4 "
                        >
                            About us
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/Services"
                            className="link-light mx-4 "
                        >
                            Services
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/our team"
                            className="link-light mx-4  "
                        >
                            Our Team
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {isButtonVisible && (
                    <Button as={Link} to="/Contact" className="ms-5  butncolo">
                        Get IN Touch
                    </Button>
                )}
            </Container>
        </Navbar>
    );
}

export default Navbarcompo;
     

   
  
     
  
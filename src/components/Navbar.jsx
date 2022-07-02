import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { BsFacebook,BsInstagram,BsLinkedin,BsBagCheck,BsSearch,BsList } from "react-icons/bs";

const Navigationbar = () => {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
              <h4 style={{padding:"20px", marginLeft:"10%"}}><BsFacebook/></h4>
              <h4><BsInstagram/></h4>
              <h4 style={{padding:"20px"}}><BsLinkedin/></h4>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              
              <Offcanvas.Body>
                <Image
                  style={{ height: "50px", marginLeft: "35%" }}
                  src="https://virmansha.com/assets/img/logo3.png"
                ></Image>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{ marginLeft: "40%" }}
                  />
               
                  <h4 ><BsSearch/></h4>
                </Form>
                <Nav className="justify-content-end flex-grow-1 pe-3">
               
                  <h4 style={{marginRight:"10%"}}><BsBagCheck/></h4>
                  {/* <OverlayTrigger> */}
                  <NavDropdown
                    title={BsList}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    style={{marginRight:"25%"}}
                  >
                    <NavDropdown.Item href="#action3">HOME</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">ABOUT</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">PRODUCT</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">SHOP</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">BLOG</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">CONTACT</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      {/* Something else here */}
                    </NavDropdown.Item>
                  </NavDropdown>
                  {/* </OverlayTrigger> */}
                  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Navigationbar;

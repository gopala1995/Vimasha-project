import React from "react";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

// import 'bootstrap/dist/css/bootstrap.css';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import { FiMenu } from "react-icons/fi";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsBagCheck,
  BsSearch,
} from "react-icons/bs";

const Navigationbar = () => {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
            <h4 style={{ padding: "20px", marginLeft: "10%" }}>
              <BsFacebook />
            </h4>
            <h4>
              <BsInstagram />
            </h4>
            <h4 style={{ padding: "20px" }}>
              <BsLinkedin />
            </h4>
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

                  <h4>
                    <BsSearch />
                  </h4>
                </Form>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <h4 style={{ marginRight: "10%" }}>
                    <BsBagCheck />
                  </h4>
                  {/* <OverlayTrigger> */}
                  <NavDropdown
                    title={FiMenu}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    style={{ marginRight: "25%" }}
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

      {/* ////////--------------------///// */}
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "650px" }}
            className="d-block w-100"
            src="https://www.virmansha.com/assets/img/our-story.png"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "650px" }}
            className="d-block w-100"
            src="https://www.virmansha.com/assets/img/divide-banner.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "650px" }}
            className="d-block w-100"
            src="https://scontent.cdninstagram.com/v/t51.29350-15/290222907_5303550559758893_1856820804719856078_n.webp?stp=dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=_6exXaq-R8sAX-aXDQb&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-9heQl29qno1N1ZzY0MloO27Xywc6MQt9A4eKZfY1OEA&oe=62C565BE"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Navigationbar;

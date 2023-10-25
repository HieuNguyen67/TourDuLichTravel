import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/scss/Header.scss";
import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Logo from "../assets/image/tải_xuống-removebg-preview.png";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ScrollIndicator from "./ScrollIndicator";
import { motion, useAnimation } from "framer-motion";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = (props) => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      {" "}
      <div>
        {" "}
        <ScrollIndicator />
        <Navbar
          expand="lg"
          className={colorChange ? "navbar colorChange" : "navbar"}
          fixed="top"
        >
          {" "}
          {/* #f8f9fa */}
          <Container className="my-2">
            <NavLink to="/React-Apple" className=" decorate">
              <Navbar.Brand to="/">
                
                <img
                  alt=""
                  src={Logo}
                  width="60"
                  height="60"
                  className="d-inline-block justify-content-center  align-items-center mb-2"
                />{" "}
                <span className="white fs-3 fw-bold">Travel Tour</span>
              </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Navbar.Offcanvas placement="end" className="offcanvas-size-sm">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title className="text-light">
                    Travel Tour
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="d-flex justify-content-center  align-items-center sidebar">
                  <Nav className="d-flex   align-items-center align-items-center  mx-auto  ">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <NavLink
                        className="nav-link "
                        to="/a"
                        href="#"
                        style={({ isActive, isPending, isTransitioning }) => {
                          return {
                            fontWeight: isActive ? "bold" : "",
                            background: isActive
                              ? "linear-gradient(253deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
                              : "",
                            borderRadius: isActive
                              ? "30% 70% 70% 30% / 50% 30% 70% 80%"
                              : "",

                            color: isPending ? "red" : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                          };
                        }}
                      >
                        {" "}
                        <span className="white">TRANG CHỦ</span>
                      </NavLink>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <NavLink
                        className="nav-link "
                        to="/b"
                        href="#"
                        data-bs-dismiss="offcanvas"
                        style={({ isActive, isPending, isTransitioning }) => {
                          return {
                            fontWeight: isActive ? "bold" : "",
                            background: isActive
                              ? "linear-gradient(253deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
                              : "",
                            borderRadius: isActive
                              ? "30% 70% 70% 30% / 50% 30% 70% 80%"
                              : "",

                            color: isPending ? "red" : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                          };
                        }}
                      >
                        <span className="white">GIỚI THIỆU</span>
                      </NavLink>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <NavLink
                        className="nav-link "
                        to="/c"
                        href="#"
                        data-bs-dismiss="offcanvas"
                        style={({ isActive, isPending, isTransitioning }) => {
                          return {
                            fontWeight: isActive ? "bold" : "",
                            background: isActive
                              ? "linear-gradient(253deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
                              : "",
                            borderRadius: isActive
                              ? "30% 70% 70% 30% / 50% 30% 70% 80%"
                              : "",

                            color: isPending ? "red" : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                          };
                        }}
                      >
                        <NavDropdown
                          title="TOUR"
                          id="basic-nav-dropdown"
                          className="backgrounddrop "
                        >
                          <NavDropdown.Item href="#action/3.1">
                            <span className="white">MIỀN TÂY TRONG NGÀY</span>
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.1">
                            <span className="white">MIỀN TÂY</span>
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">
                            <span className="white">SÀI GÒN</span>
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">
                            <span className="white">PHÚ QUỐC</span>
                          </NavDropdown.Item>

                          <NavDropdown.Item href="#action/3.4">
                            <span className="white">ĐÀ LẠT</span>
                          </NavDropdown.Item>
                        </NavDropdown>
                      </NavLink>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <NavLink
                        className="nav-link "
                        to="/d"
                        href="#"
                        style={({ isActive, isPending, isTransitioning }) => {
                          return {
                            fontWeight: isActive ? "bold" : "",
                            background: isActive
                              ? "linear-gradient(253deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
                              : "",
                            borderRadius: isActive
                              ? "30% 70% 70% 30% / 50% 30% 70% 80%"
                              : "",

                            color: isPending ? "red" : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                          };
                        }}
                      >
                        {" "}
                        <span className="white">BẢNG GIÁ</span>
                      </NavLink>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <NavLink
                        className="nav-link "
                        to="/e"
                        href="#"
                        style={({ isActive, isPending, isTransitioning }) => {
                          return {
                            fontWeight: isActive ? "bold" : "",
                            background: isActive
                              ? "linear-gradient(253deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
                              : "",
                            borderRadius: isActive
                              ? "30% 70% 70% 30% / 50% 30% 70% 80%"
                              : "",

                            color: isPending ? "red" : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                          };
                        }}
                      >
                        {" "}
                        <span className="white"> ĐẶT TOUR</span>
                      </NavLink>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <NavLink
                        className="nav-link "
                        to="/f"
                        href="#"
                        style={({ isActive, isPending, isTransitioning }) => {
                          return {
                            fontWeight: isActive ? "bold" : "",
                            background: isActive
                              ? "linear-gradient(253deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
                              : "",
                            borderRadius: isActive
                              ? "30% 70% 70% 30% / 50% 30% 70% 80%"
                              : "",

                            color: isPending ? "red" : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                          };
                        }}
                      >
                        {" "}
                        <span className="white"> HÌNH ẢNH</span>
                      </NavLink>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <NavLink
                        className="nav-link "
                        to="/g"
                        href="#"
                        style={({ isActive, isPending, isTransitioning }) => {
                          return {
                            fontWeight: isActive ? "bold" : "",
                            background: isActive
                              ? "linear-gradient(253deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
                              : "",
                            borderRadius: isActive
                              ? "30% 70% 70% 30% / 50% 30% 70% 80%"
                              : "",

                            color: isPending ? "red" : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                          };
                        }}
                      >
                        {" "}
                        <span className="white"> LIÊN HỆ</span>
                      </NavLink>
                    </motion.div>
                  </Nav>
                  <div className=" mt-5 mt-md-0 pt-5 pt-md-0">
                    <div className="d-flex flex-grow mx-1 mt-5 mt-md-0 pt-5 pt-md-0">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <NavLink
                          href="#"
                          to="/user"
                          className="sidebar decorate"
                        >
                          <Button className="mx-2 shadow" variant="warning">
                            Login
                          </Button>{" "}
                        </NavLink>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <NavLink
                          href=""
                          className="sidebar decorate "
                          to="/SignUp"
                        >
                          <Button className="shadow" variant="secondary">
                            SignUp
                          </Button>{" "}
                        </NavLink>
                      </motion.div>
                    </div>
                  </div>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
export default Header;

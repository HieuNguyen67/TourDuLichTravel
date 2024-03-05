import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../assets/scss/Header.scss";
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Logo from "../../assets/image/tải_xuống-removebg-preview.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink, useNavigate } from "react-router-dom";
import ScrollIndicator from "../../components/ScrollIndicator";
import { useAuth } from "../AuthContextAdmin";

import axios from "axios";
const Header1 = (props) => {
  const { adminToken, adminUsername, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Thực hiện đăng xuất
    logout();

    // Chuyển hướng về trang login
    navigate("/admin");
  };

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
            <NavLink className=" decorate">
              <Navbar.Brand>
                <img
                  alt=""
                  src={Logo}
                  width="60"
                  height="60"
                  className="d-inline-block justify-content-center  align-items-center mb-2"
                />{" "}
                <span className="white fs-3 fw-bold">Admin</span>
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
                <Offcanvas.Body className="d-flex justify-content-end  align-items-end sidebar">
                  <div className=" mt-5 mt-md-0 pt-5 pt-md-0">
                    <div className="d-flex flex-grow mx-1 mt-5 mt-md-0 pt-5 pt-md-0">
                      {adminToken ? (
                        <>
                          <h5 className="text-light me-3 mt-1">
                            Hi, {adminUsername}
                          </h5>
                          <Button
                            className="mx-2 shadow"
                            variant="warning"
                            onClick={handleLogout}
                          >
                            Logout
                          </Button>{" "}
                        </>
                      ) : (
                        <div>
                          <NavLink to="/admin" className="sidebar decorate">
                            <Button className="mx-2 shadow" variant="warning">
                              Login
                            </Button>{" "}
                          </NavLink>
                        </div>
                      )}
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
export default Header1;

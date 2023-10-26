import "../assets/scss/HinhAnh.scss"
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "../assets/scss/GioiThieu.scss";
import { motion, useAnimation } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import picture1 from "../assets/image/picture-1.png"
import picture2 from "../assets/image/picture-2.png";
import picture3 from "../assets/image/picture-3.png";
import picture4 from "../assets/image/picture-4.png";
import picture5 from "../assets/image/picture-5.png";
import picture6 from "../assets/image/picture-6.png";
import picture7 from "../assets/image/picture-7.png";
import picture8 from "../assets/image/picture-8.png";
import picture9 from "../assets/image/picture-9.png";
import picture10 from "../assets/image/picture-10.png";
import picture11 from "../assets/image/picture-11.png";
import picture12 from "../assets/image/picture-12.png";
import picture13 from "../assets/image/picture-13.png";
import picture14 from "../assets/image/picture-14.png";
import picture15 from "../assets/image/picture-15.png";
import picture16 from "../assets/image/picture-16.png";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { useEffect, useState } from "react";
import React from "react";
import { Gallery } from "react-grid-gallery";
import Button from "react-bootstrap/Button";



const HinhAnh=()=>{
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleCloseOpen = () => setOpen(false);
    const slides = [
      { src: picture1 },
      { src: picture2 },
      { src: picture3 },
      { src: picture4 },
      { src: picture5 },
      { src: picture6 },
      { src: picture7 },
      { src: picture8 },
      { src: picture9 },
      { src: picture10 },
      { src: picture11 },
      { src: picture12 },
      { src: picture13 },
      { src: picture14 },
      { src: picture15 },
      { src: picture16 },
    ];
    return (
      <>
        <div className="boxGioiThieu"></div>
        <motion.div
          initial={{ opacity: 0, y: 98 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
        >
          <Container className="mb-5 pb-md-5 pb-3">
            <p className="mt-4 d-flex">
              <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <Link to="/" className="text-decoration-none text-dark">
                  <span>Trang chủ &nbsp;</span>
                </Link>{" "}
              </motion.a>
              {" > "}
              <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <Link to="/HinhAnh" className="text-decoration-none text-dark">
                  <span> &nbsp; &nbsp;Hình ảnh </span>
                </Link>
              </motion.a>
            </p>

            <div className=" pt-md-5 my-5">
              <Row className="d-flex">
                <Col />
                <Col className="col-10 col-md-8">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <h1 className="text-center fonttt ">HÌNH ẢNH</h1>
                  </motion.div>
                </Col>
                <Col />
              </Row>
            </div>
            <Lightbox
              open={open}
              close={handleCloseOpen}
              slides={slides}
              className="d-block w-100 "
            />
            <div>
              <Row className="d-flex flex-row">
                <Col className="col-md-6 col-6 px-1 py-1">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleOpen}
                  >
                    <img
                      src={picture1}
                      className="sizepicture w-100 rounded-3"
                    />
                  </motion.div>
                </Col>
                <Col className="col-md-2  col-6 px-1 py-1">
                  <Row className="d-flex flex-column">
                    <Col className="pb-1">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <img
                          src={picture2}
                          className="sizepicture1 w-100 rounded-3"
                          onClick={handleOpen}
                        />
                      </motion.div>
                    </Col>
                    <Col>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <img
                          src={picture3}
                          className="sizepicture1 w-100 rounded-3"
                          onClick={handleOpen}
                        />
                      </motion.div>
                    </Col>
                  </Row>
                </Col>
                <Col className="col-md-2  col-6 px-1 py-1">
                  <Row className="d-flex flex-column">
                    <Col className="pb-1">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <img
                          src={picture4}
                          className="sizepicture1 w-100 rounded-3"
                          onClick={handleOpen}
                        />
                      </motion.div>
                    </Col>
                    <Col>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <img
                          src={picture5}
                          className="sizepicture1 w-100 rounded-3"
                          onClick={handleOpen}
                        />
                      </motion.div>
                    </Col>
                  </Row>
                </Col>
                <Col className="col-md-2   col-6 px-1 py-1">
                  <Row className="d-flex flex-column">
                    <Col className="pb-1">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <img
                          src={picture6}
                          className="sizepicture1 w-100 rounded-3"
                          onClick={handleOpen}
                        />
                      </motion.div>
                    </Col>
                    <Col>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <img
                          src={picture7}
                          className="sizepicture1 w-100 rounded-3"
                          onClick={handleOpen}
                        />
                      </motion.div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="d-flex flex-row ">
                <Col>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img
                      src={picture8}
                      className="sizepicture1 w-100 rounded-3 px-1"
                      onClick={handleOpen}
                    />
                  </motion.div>
                </Col>
                <Col>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img
                      src={picture9}
                      className="sizepicture1 w-100 rounded-3 px-1"
                      onClick={handleOpen}
                    />
                  </motion.div>
                </Col>
              </Row>
              <Row className="d-flex flex-row">
                <Col className="col-md-2  col-6 px-1 py-1">
                  <Row className="d-flex flex-column">
                    <Col className="pb-1">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <img
                          src={picture10}
                          className="sizepicture1 w-100 rounded-3"
                          onClick={handleOpen}
                        />
                      </motion.div>
                    </Col>
                    <Col>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <img
                          src={picture11}
                          className="sizepicture1 w-100 rounded-3"
                          onClick={handleOpen}
                        />
                      </motion.div>
                    </Col>
                  </Row>
                </Col>
                <Col className="col-md-2  col-6 px-1 py-1">
                  <Row className="d-flex flex-column">
                    <Col className="pb-1">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <img
                          src={picture12}
                          className="sizepicture1 w-100 rounded-3"
                          onClick={handleOpen}
                        />
                      </motion.div>
                    </Col>
                    <Col>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <img
                          src={picture13}
                          className="sizepicture1 w-100 rounded-3"
                          onClick={handleOpen}
                        />
                      </motion.div>
                    </Col>
                  </Row>
                </Col>
                <Col className="col-md-2   col-6 px-1 py-1">
                  <Row className="d-flex flex-column">
                    <Col className="pb-1">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <img
                          src={picture14}
                          className="sizepicture1 w-100 rounded-3"
                          onClick={handleOpen}
                        />
                      </motion.div>
                    </Col>
                    <Col>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <img
                          src={picture15}
                          className="sizepicture1 w-100 rounded-3"
                          onClick={handleOpen}
                        />
                      </motion.div>
                    </Col>
                  </Row>
                </Col>
                <Col className="col-md-6 col-6 px-1 py-1">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img
                      src={picture16}
                      className="sizepicture w-100 rounded-3"
                      onClick={handleOpen}
                    />
                  </motion.div>
                </Col>
              </Row>
            </div>
          </Container>
        </motion.div>
      </>
    );
}
export default HinhAnh;
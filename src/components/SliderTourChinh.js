import Col from "react-bootstrap/Col";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "react-multi-carousel/lib/styles.css";
import "../assets/scss/SliderTourChinh.scss";
import Button from "react-bootstrap/Button";
import { Link, NavLink } from "react-router-dom";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
    // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const SliderTourChinh = () => {
  return (
    <>
      <div className="mt-md-5">
        <Row className="d-flex flex-row ">
          <Col className="col-md-6 col-12">
            <Carousel
              responsive={responsive}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={false}
              infinite={true}
              partialVisible={false}
              arrows={true}
              dotListClass="custom-dot-list-style"
            >
              <div className="border bg">
                <div className="pt-md-5">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link to="/TourMienTay3Ngay2Dem" className="text-decoration-none">
                      <Row className="position-relative d-flex  flex-column text-center mt-5 pt-5">
                        <Col className="col-12 mx-auto mt-md-5 mt-3 pt-2 pt-md-5">
                          <p
                            className="text-light textshadow2"
                            style={{ lineHeight: "1" }}
                          >
                            <h1>TOUR 3 NGÀY 2 ĐÊM</h1>

                            <p className="text-light ">
                              MỸ THO - BẾN TRE - CẦN THƠ - CHÂU ĐỐC
                            </p>
                            <p className="text-light fs-3">
                              Giá : <b>3.080.000 VNĐ</b>
                            </p>
                          </p>
                        </Col>

                        <Col>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Button variant="outline-light" className="shadow">
                              ĐẶT NGAY
                            </Button>
                          </motion.div>
                        </Col>
                      </Row>
                    </Link>
                  </motion.div>
                </div>
              </div>
              <div className="border bg1">
                <div className="pt-md-5">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Row className="position-relative d-flex  flex-column text-center mt-5 pt-5">
                      <Col className="col-12 mx-auto mt-md-5 mt-3 pt-5">
                        <p
                          className="text-light textshadow2"
                          style={{ lineHeight: "1" }}
                        >
                          <h1>TOUR 3 NGÀY 2 ĐÊM</h1>

                          <p className="text-light">ĐẢO NGỌC PHÚ QUỐC</p>
                          <p className="text-light fs-3">
                            Giá : <b>3.080.000 VNĐ</b>
                          </p>
                        </p>
                      </Col>

                      <Col>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button variant="outline-light" className="shadow">
                            ĐẶT NGAY
                          </Button>
                        </motion.div>
                      </Col>
                    </Row>
                  </motion.div>
                </div>
              </div>
              <div className="border bg2">
                <div className="pt-md-5">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Row className="position-relative d-flex  flex-column text-center mt-5 pt-5">
                      <Col className="col-12 mx-auto mt-md-5 mt-3 pt-5">
                        <p
                          className="text-light textshadow2"
                          style={{ lineHeight: "1" }}
                        >
                          <h1>TOUR 2 NGÀY 1 ĐÊM</h1>

                          <p className="text-light">
                            MỸ THO - BẾN TRE - CẦN THƠ
                          </p>
                          <p className="text-light fs-3">
                            Giá : <b>1.550.000 VNĐ</b>
                          </p>
                        </p>
                      </Col>

                      <Col>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button variant="outline-light" className="shadow">
                            ĐẶT NGAY
                          </Button>
                        </motion.div>
                      </Col>
                    </Row>
                  </motion.div>
                </div>
              </div>
            </Carousel>
          </Col>

          <Col className="col-md-3 col-12">
            <Row className="f-flex flex-column">
              <Col className="">
                <div className="borrder bg3">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Row className="position-relative d-flex  flex-column text-center mt-5 pt-5">
                      <Col className="col-12 mx-auto  mt-3 pt-1">
                        <p
                          className="text-light textshadow2"
                          style={{ lineHeight: "1" }}
                        >
                          <h4>TOUR MIỀN TÂY</h4>

                          <p className="text-light fs-5">
                            Giá : <b>450.000 VNĐ</b>
                          </p>
                        </p>
                      </Col>

                      <Col>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button variant="outline-light" className="shadow">
                            ĐẶT NGAY
                          </Button>
                        </motion.div>
                      </Col>
                    </Row>
                  </motion.div>
                </div>
              </Col>
              <Col>
                <div className="borrder bg4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Row className="position-relative d-flex  flex-column text-center mt-5 pt-5">
                      <Col className="col-12 mx-auto  mt-3 pt-1">
                        <p
                          className="text-light textshadow2"
                          style={{ lineHeight: "1" }}
                        >
                          <h4>TOUR 3 NGÀY 2 ĐÊM</h4>
                          <p className="text-light">
                            CẦN THƠ - ĐẤT MŨI - CÀ MAU
                          </p>
                          <p className="text-light fs-5">
                            Giá : <b>2.890.000 VNĐ</b>
                          </p>
                        </p>
                      </Col>

                      <Col>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button variant="outline-light" className="shadow">
                            ĐẶT NGAY
                          </Button>
                        </motion.div>
                      </Col>
                    </Row>
                  </motion.div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lassName="col-md-3 col-12 ">
            <Row className="f-flex flex-column ">
              <Col>
                <div className="borrder bg5">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Row className="position-relative d-flex  flex-column text-center mt-5 pt-5">
                      <Col className="col-12 mx-auto  mt-3 pt-1">
                        <p
                          className="text-light textshadow2"
                          style={{ lineHeight: "1" }}
                        >
                          <h4>TOUR 4 NGÀY 3 ĐÊM</h4>
                          <p className="text-light">
                            SA ĐÉC - CẦN THƠ - CÀ MAU - BẠC LIÊU - SÓC TRĂNG
                          </p>
                          <p className="text-light fs-5">
                            Giá : <b>4.180.000 VNĐ</b>
                          </p>
                        </p>
                      </Col>

                      <Col>
                        <motion.div
                          whileHover={{ scale: 1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button variant="outline-light" className="shadow">
                            ĐẶT NGAY
                          </Button>
                        </motion.div>
                      </Col>
                    </Row>
                  </motion.div>
                </div>
              </Col>
              <Col>
                <div className="borrder bg6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Row className="position-relative d-flex  flex-column text-center mt-5 pt-5">
                      <Col className="col-12 mx-auto  mt-3 pt-1">
                        <p
                          className="text-light textshadow2"
                          style={{ lineHeight: "1" }}
                        >
                          <h4>TOUR 4 NGÀY 3 ĐÊM</h4>
                          <p className="text-light">
                            TIỀN GIANG - BẾN TRE - CẦN THƠ - SÓC TRĂNG - BẠC
                            LIÊU - CÀ MAU
                          </p>
                          <p className="text-light fs-5">
                            Giá : <b>4.180.000 VNĐ</b>
                          </p>
                        </p>
                      </Col>

                      <Col>
                        <motion.div
                          whileHover={{ scale: 1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button variant="outline-light" className="shadow">
                            ĐẶT NGAY
                          </Button>
                        </motion.div>
                      </Col>
                    </Row>
                  </motion.div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default SliderTourChinh;

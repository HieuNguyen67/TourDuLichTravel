import Col from "react-bootstrap/Col";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "react-multi-carousel/lib/styles.css";
import "../assets/scss/SliderTour.scss"
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";




const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

const SliderTour = () => {
     
  return (
    <>
      <div className="mt-md-5">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
          className="py-3"
        >
          <NavLink className="text-decoration-none">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className="borders mx-3 shadow-sm bg-opacity hover-zoom">
                <Row className="position-relative d-flex  flex-column text-center mt-5 pt-5">
                  <Col className="col-12 mx-auto mt-md-5 mt-3 pt-5">
                    <p className="text-light fs-5 textshadow1">
                      <b>MIỀN TÂY TRONG NGÀY</b> TÁT MƯƠNG BẮT CÁ
                      <br />
                      <p className="text-light fs-5">
                        Giá : <b>780.000 VNĐ</b>
                      </p>
                    </p>
                  </Col>

                  <Col>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button variant="outline-light " className="shadow">
                        ĐẶT NGAY
                      </Button>
                    </motion.div>
                  </Col>
                </Row>
              </div>
            </motion.div>{" "}
          </NavLink>
          <div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className="borders mx-3 shadow-sm  bg1-opacity">
                <Row className="position-relative d-flex  flex-column text-center mt-5 pt-5">
                  <Col className="col-12 mx-auto mt-md-5 mt-3 pt-5">
                    <p className="text-light fs-5 textshadow1">
                      <b>SÀI GÒN</b> ĐỊA ĐẠO CỦ CHI
                      <br />
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
              </div>
            </motion.div>{" "}
          </div>
          <div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className="borders mx-3 shadow-sm  bg2-opacity">
                <Row className="position-relative d-flex  flex-column text-center mt-5 pt-5">
                  <Col className="col-12 mx-auto mt-md-5 mt-3 pt-5">
                    <p className="text-light fs-5 textshadow1">
                      <b>MIỀN TÂY TRONG NGÀY</b> CHỢ NỔI CÁI BÈ
                      <br />
                      <p className="text-light fs-5">
                        Giá : <b>890.000 VNĐ</b>
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
              </div>
            </motion.div>{" "}
          </div>
          <div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className="borders mx-3 shadow-sm  bg3-opacity">
                {" "}
                <Row className="position-relative d-flex  flex-column text-center mt-5 pt-5">
                  <Col className="col-12 mx-auto mt-md-5 mt-3 pt-5">
                    <p className="text-light fs-5 textshadow1">
                      <b>MIỀN TÂY</b> MỸ THO - BẾN TRE - CẦN THƠ
                      <br />
                      <p className="text-light fs-5">
                        Giá : <b>780.000 VNĐ</b>
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
              </div>
            </motion.div>{" "}
          </div>
          <div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className="borders mx-3 shadow-sm  bg4-opacity">
                {" "}
                <Row className="position-relative d-flex  flex-column text-center mt-5 pt-5">
                  <Col className="col-12 mx-auto mt-md-5 mt-3 pt-5">
                    <p className="text-light fs-5 textshadow1">
                      <b>MIỀN TÂY TRONG NGÀY</b> MỸ THO - BẾN TRE
                      <br />
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
              </div>
            </motion.div>{" "}
          </div>
        </Carousel>
      </div>
    </>
  );
};
export default SliderTour;

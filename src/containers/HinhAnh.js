import "../assets/scss/HinhAnh.scss";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "../assets/scss/GioiThieu.scss";
import { motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "yet-another-react-lightbox/styles.css";
import React from "react";
import AlbumPicture from "../components/AlbumPicture";
import Header from "../components/Header";
import BackToTop from "../components/BackToTop";

const HinhAnh = () => {
  return (
    <>
      <BackToTop />
      <Header />
      <div className="boxGioiThieu"></div>
      <motion.div
        initial={{ opacity: 0, y: 98 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
      >
        <Container className="mb-5 pb-md-5 pb-3">
          <p className="mt-4 d-flex">
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link
                to="/TourDuLichTravel"
                className="text-decoration-none text-dark"
              >
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

          <div className=" pt-md-5 mb-md-5 my-4">
            <Row className="d-flex">
              <Col />
              <Col className="col-10 col-md-8">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <h1
                    className="text-center fonttt "
                    style={{ textShadow: "5px 5px 4px lightgrey" }}
                  >
                    HÌNH ẢNH
                  </h1>
                </motion.div>
              </Col>
              <Col />
            </Row>
          </div>

          <AlbumPicture />
        </Container>
      </motion.div>
    </>
  );
};
export default HinhAnh;

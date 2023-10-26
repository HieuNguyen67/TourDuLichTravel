
import Container from "react-bootstrap/Container";
import Homeee from "../assets/image/Vietnam-4K-Wallpapers.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "../assets/scss/Home.scss"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavsTab from "../components/NavsTab";
import SliderTour from "../components/SilderTour";
import SliderTourChinh from "../components/SliderTourChinh";
import BackToTop from "../components/BackToTop";
import ListTour from "../components/ListTours.js";
import WhyChoose from "../components/WhyChoose";
import Footer from "../components/Footer";
const Home = () => {
  

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 98 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
      >
        <div className="background ">
          <Container className="">
            <div className="pt-md-5 ">
              <div className="pt-5">
                <Row className="d-flex flex-column mt-5 ">
                  <Col className="pt-md-5 pt-4 mt-md-5">
                    <h2 className="white fontwelcome text-warning textshadow">
                      Welcome to Travel Tour
                    </h2>
                  </Col>
                  <Col className="">
                    <h1 className="white fonttttt fonttts textshadow">
                      {" "}
                      Khám phá địa điểm du lịch yêu thích của bạn với chúng tôi
                    </h1>
                  </Col>
                  <Col>
                    <p className="white fontttts textshadow">
                      Du lịch đến bất cứ nơi nào bạn chỉ cần liên hệ với chúng
                      tôi
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          {/* <NavsTab /> */}

          <div className="mt-md-5 pt-md-5 my-3 pt-3">
            <Row className="d-flex">
              <Col />
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <h1 className="text-center fonttt ">
                  TOUR NỔI BẬT TRONG THÁNG
                </h1>
              </motion.div>
              <Col className="col-10 col-md-8"></Col>
              <Col />
            </Row>
          </div>
        </Container>

        <SliderTour />

        <Container>
          <div className="mt-md-5 pt-md-5 my-3">
            <Row className="d-flex">
              <Col />
              <Col className="col-10 col-md-8">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <h1 className="text-center fonttt ">TOUR CHÍNH</h1>
                </motion.div>
              </Col>
              <Col />
            </Row>
          </div>
        </Container>

        <SliderTourChinh />

        <Container>
          <div className="mt-md-5 pt-md-5 my-3">
            <Row className="d-flex">
              <Col />
              <Col className="col-10 col-md-8">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <h1 className="text-center fonttt ">DANH SÁCH TOUR</h1>
                </motion.div>
              </Col>
              <Col />
            </Row>
          </div>

          <ListTour />

          <div className="mt-md-5 pt-md-5 my-3">
            <Row className="d-flex">
              <Col />
              <Col className="col-10 col-md-8">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <h1 className="text-center fonttt ">
                    VÌ SAO CHỌN TRAVEL TOUR
                  </h1>
                </motion.div>
              </Col>
              <Col />
            </Row>
          </div>

          <WhyChoose />
        </Container>
      </motion.div>
    </>
  );
};
export default Home;

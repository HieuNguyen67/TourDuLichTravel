import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "../assets/scss/GioiThieu.scss";
import { motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import pic1 from "../assets/image/Pasar_terapung.jpg";
import pic2 from "../assets/image/rung-tra-su-an-giang.jpg";
import pic3 from "../assets/image/phu-quoc-1.jpg";
import "../assets/scss/TourTongHop.scss";
import Header from "../components/Header";
import BackToTop from "../components/BackToTop";

const TourMienTay = () => {
  return (
    <>
      <BackToTop />
      <Header />
      <div className="boxGioiThieu"></div>

      <Container>
        <p className="mt-4 d-flex">
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            <Link to="/" className="text-decoration-none text-dark">
              <span>Trang chủ &nbsp;</span>
            </Link>{" "}
          </motion.a>
          {" > "}
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            <Link to="/TourTongHop" className="text-decoration-none text-dark">
              <span> &nbsp; &nbsp;Tour &nbsp; </span>
            </Link>
          </motion.a>
          {" > "}
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            <Link to="/TourMienTay" className="text-decoration-none text-dark">
              <span> &nbsp; &nbsp;Miền Tây </span>
            </Link>
          </motion.a>
        </p>

        <div className="  my-md-5 mt-5 mb-3">
          <Row className="d-flex">
            <Col className="col-10 col-md-8">
              <h1 className="text-start ">TOUR MIỀN TÂY</h1>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col className="col-12 col-md-4 my-2 my-md-0">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                {" "}
                <Card className="col-11 mx-auto shadow">
                  <Card.Img
                    variant="top"
                    src={pic1}
                    className="w-100 sizeimg1"
                  />
                  <Card.Body>
                    <Card.Title>
                      TOUR MIỀN TÂY 2 NGÀY 1 ĐÊM <br />
                      &nbsp;
                    </Card.Title>
                    <Card.Text className="fs-5">
                      Giá gốc:{" "}
                      <strong className="text-danger">1.550.000VNĐ</strong>
                    </Card.Text>
                    <hr />

                    <Button variant="warning">ĐẶT TOUR</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col className="col-12 col-md-4 my-2 my-md-0">
              {" "}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Card className="col-11 mx-auto shadow">
                  <Card.Img variant="top" src={pic2} className="sizeimg1" />
                  <Card.Body>
                    <Card.Title className="">
                      TOUR MIỀN TÂY 3 NGÀY 2 ĐÊM
                      <br />
                      &nbsp;
                    </Card.Title>
                    <Card.Text className="fs-5">
                      Giá gốc:{" "}
                      <strong className="text-danger">3.080.000VNĐ</strong>
                    </Card.Text>
                    <hr />
                    <Button variant="warning">ĐẶT TOUR</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col className="col-12 col-md-4 my-2 my-md-0">
              {" "}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Card className="col-11 mx-auto shadow">
                  <Card.Img variant="top" src={pic3} className="sizeimg1" />
                  <Card.Body>
                    <Card.Title>
                      TOUR 3 NGÀY 2 ĐÊM: ĐẢO NGỌC PHÚ QUỐC
                    </Card.Title>
                    <Card.Text className="fs-5">
                      Giá gốc:{" "}
                      <strong className="text-danger">3.080.000VNĐ</strong>
                    </Card.Text>
                    <hr />
                    <Button variant="warning">ĐẶT TOUR</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
        <div className="mt-md-5">
          <Row>
            <Col className="col-12 col-md-4 my-2 my-md-0">
              {" "}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Card className="col-11 mx-auto shadow">
                  <Card.Img
                    variant="top"
                    src={pic1}
                    className="w-100 sizeimg1"
                  />
                  <Card.Body>
                    <Card.Title>
                      TOUR MIỀN TÂY 2 NGÀY 1 ĐÊM <br />
                      &nbsp;
                    </Card.Title>
                    <Card.Text className="fs-5">
                      Giá gốc:{" "}
                      <strong className="text-danger">1.550.000VNĐ</strong>
                    </Card.Text>
                    <hr />
                    <Button variant="warning">ĐẶT TOUR</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col className="col-12 col-md-4 my-2 my-md-0">
              {" "}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Card className="col-11 mx-auto shadow">
                  <Card.Img variant="top" src={pic2} className="sizeimg1" />
                  <Card.Body>
                    <Card.Title className="">
                      TOUR MIỀN TÂY 3 NGÀY 2 ĐÊM
                      <br />
                      &nbsp;
                    </Card.Title>
                    <Card.Text className="fs-5">
                      Giá gốc:{" "}
                      <strong className="text-danger">3.080.000VNĐ</strong>
                    </Card.Text>
                    <hr />
                    <Button variant="warning">ĐẶT TOUR</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col className="col-12 col-md-4 my-2 my-md-0">
              {" "}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Card className="col-11 mx-auto shadow">
                  <Card.Img variant="top" src={pic3} className="sizeimg1" />
                  <Card.Body>
                    <Card.Title>
                      TOUR 3 NGÀY 2 ĐÊM: ĐẢO NGỌC PHÚ QUỐC
                    </Card.Title>
                    <Card.Text className="fs-5">
                      Giá gốc:{" "}
                      <strong className="text-danger">3.080.000VNĐ</strong>
                    </Card.Text>
                    <hr />
                    <Button variant="warning">ĐẶT TOUR</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
        <div className="mt-md-5 mb-5 pb-md-5">
          <Row>
            <Col className="col-12 col-md-4 my-2 my-md-0">
              {" "}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Card className="col-11 mx-auto shadow">
                  <Card.Img
                    variant="top"
                    src={pic1}
                    className="w-100 sizeimg1"
                  />
                  <Card.Body>
                    <Card.Title>
                      TOUR MIỀN TÂY 2 NGÀY 1 ĐÊM <br />
                      &nbsp;
                    </Card.Title>
                    <Card.Text className="fs-5">
                      Giá gốc:{" "}
                      <strong className="text-danger">1.550.000VNĐ</strong>
                    </Card.Text>
                    <hr />
                    <Button variant="warning">ĐẶT TOUR</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col className="col-12 col-md-4 my-2 my-md-0">
              {" "}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Card className="col-11 mx-auto shadow">
                  <Card.Img variant="top" src={pic2} className="sizeimg1" />
                  <Card.Body>
                    <Card.Title className="">
                      TOUR MIỀN TÂY 3 NGÀY 2 ĐÊM
                      <br />
                      &nbsp;
                    </Card.Title>
                    <Card.Text className="fs-5">
                      Giá gốc:{" "}
                      <strong className="text-danger">3.080.000VNĐ</strong>
                    </Card.Text>
                    <hr />
                    <Button variant="warning">ĐẶT TOUR</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col className="col-12 col-md-4 my-2 my-md-0">
              {" "}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Card className="col-11 mx-auto shadow">
                  <Card.Img variant="top" src={pic3} className="sizeimg1" />
                  <Card.Body>
                    <Card.Title>
                      TOUR 3 NGÀY 2 ĐÊM: ĐẢO NGỌC PHÚ QUỐC
                    </Card.Title>
                    <Card.Text className="fs-5">
                      Giá gốc:{" "}
                      <strong className="text-danger">3.080.000VNĐ</strong>
                    </Card.Text>
                    <hr />
                    <Button variant="warning">ĐẶT TOUR</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
export default TourMienTay;

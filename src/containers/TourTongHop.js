import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import "../assets/scss/GioiThieu.scss";
import { motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../assets/scss/TourTongHop.scss";
import Header from "../components/Header";
import BackToTop from "../components/BackToTop";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const TourTongHop = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5020/v1/api/admin/get-tours"
        );
        setTours(response.data);
        setLoading(false);
        console.log(setTours);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };

    fetchTours();
  }, []);
  const formatCurrency = (price) => {
    const priceInteger = Math.round(price * 100);

    const formattedPrice = (priceInteger / 100).toLocaleString("vi-VN", {
      currency: "VND",
    });

    return formattedPrice + " VNĐ";
  };
  const handleDetail = (tourID) => {
    navigate(`/admin/sua-image-tour/${tourID}`);
  };
  const navigate = useNavigate();

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
              <span> &nbsp; &nbsp;Tour </span>
            </Link>
          </motion.a>
        </p>

        <div className="  my-md-5 mt-5 mb-3">
          <Row className="d-flex">
            <Col />
            <Col className="col-10 col-md-8">
              <h1
                className="text-center fonttt "
                style={{ textShadow: "5px 5px 4px lightgrey" }}
              >
                TOUR
              </h1>
            </Col>
            <Col />
          </Row>
        </div>
        {loading ? (
          <h2>
            {" "}
            <Spinner animation="grow" variant="dark" />
            Loading...
          </h2>
        ) : (
          <Row className="row-cols-3 d-flex flex-row">
            {tours.map((tour) => (
              <Col key={tour.tourID} className="mb-5">
                <Link to={`/tour/${tour.id}`} className="text-decoration-none">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {" "}
                    <Card className="col-11 mx-auto shadow">
                      <Card.Img
                        variant="top"
                        src={`data:image/jpeg;base64,${tour.image.toString(
                          "base64"
                        )}`}
                        className="w-100 sizeimg1"
                        alt={tour.name}
                      />
                      <Card.Body>
                        <Card.Title>
                          {tour.name}
                          &nbsp;
                        </Card.Title>
                        <Card.Text className="fs-5">
                          Giá gốc:{" "}
                          <strong className="text-danger">
                            {formatCurrency(tour.price)}
                          </strong>
                        </Card.Text>
                        <p className="text-secondary fw-bold">
                          {new Date(tour.start_date).toLocaleDateString()} -
                          &nbsp;
                          <span>
                            {new Date(tour.end_date).toLocaleDateString()}
                          </span>
                        </p>

                        <hr />
                        <Button variant="warning">ĐẶT TOUR</Button>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Link>
              </Col>
            ))}
          </Row>
        )}

        {/* <Row className="mt-5">
          <Col />
          <Col className="col-md-1 col-4">
            <nav aria-label="..." className="shadow-sm">
              <ul class="pagination pagination-lg">
                <li class="page-item active" aria-current="page">
                  <span class="page-link">1</span>
                </li>
                <li class="page-item">
                  <Link class="page-link" to="/TourTongHopPage2">
                    2
                  </Link>
                </li>
              </ul>
            </nav>
          </Col>{" "}
          <Col />
        </Row> */}
      </Container>
    </>
  );
};
export default TourTongHop;

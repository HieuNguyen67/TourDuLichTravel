import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import BackToTop from "../components/BackToTop";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const BangGia = () => {
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
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };

    fetchTours();
  }, []);
  const formatCurrency = (price) => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  const handleDetail = (tourID) => {
    navigate(`/admin/sua-image-tour/${tourID}`);
  };
  const navigate = useNavigate();
  let index = 1;
  return (
    <>
      {" "}
      <BackToTop /> <Header />
      <div className="boxGioiThieu"></div>
      <motion.div
        initial={{ opacity: 0, y: 98 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
      >
        <Container className="mb-5 pb-md-5">
          <p className="mt-4 d-flex">
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link to="/" className="text-decoration-none text-dark">
                <span>Trang chủ &nbsp;</span>
              </Link>{" "}
            </motion.a>
            {" > "}
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link to="/BangGia" className="text-decoration-none text-dark">
                <span> &nbsp; &nbsp;Bảng Giá </span>
              </Link>
            </motion.a>
          </p>

          <div className=" pt-md-1 my-5">
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
                    BẢNG GIÁ
                  </h1>
                </motion.div>
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
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>STT</th>

                  <th>TÊN_TOUR</th>

                  <th>THỜI_GIAN</th>

                  <th>SỐ_CHỖ_CÒN</th>
                  <th>PHƯƠNG_TIỆN</th>
                  <th>GIÁ_TOUR</th>

                  <th>Xoá</th>
                </tr>
              </thead>
              <tbody>
                {tours.map((tour) => (
                  <tr key={tour.TourID}>
                    <td>{index++}</td>
                    <td>{tour.name}</td>

                    <td>
                      {new Date(tour.start_date).toLocaleDateString()} -{" "}
                      {new Date(tour.end_date).toLocaleDateString()}
                    </td>

                    <td>{tour.quantity}</td>
                    <td>
                      <DirectionsCarIcon />
                    </td>
                    <td className="text-danger fw-bold">
                      {formatCurrency(tour.price)}
                    </td>

                    <td>
                      <Link
                        to={`/tour/${tour.id}`}
                        className="text-decoration-none"
                      >
                        <Button className="btn-warning col-12">XEM TOUR</Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Container>
      </motion.div>
    </>
  );
};
export default BangGia;

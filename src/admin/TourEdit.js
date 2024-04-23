import SIDEBAR from "./componentss/sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header1 from "./componentss/Header1";
import React, { useState, useEffect } from "react";
import { useAuth } from "./AuthContextAdmin";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";

const TourEdit = () => {
  const { tourID } = useParams();
  console.log("ID:", tourID);
  const [tour, setTour] = useState({
    name: "",
    start_date: "",
    end_date: "",
    price: 0,
    child_price: 0,
    infant_price: 0,
    description: "",
    quantity: "",
  });
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const responseTour = await axios.get(
          `http://localhost:5020/v1/api/admin/lay-thong-tin-tour/${tourID}`
        );
        const responseImages = await axios.get(
          `http://localhost:5020/v1/api/admin/lay-hinh-anh-tour/${tourID}`
        );

        setTour(responseTour.data);
        setImages(responseImages.data);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin tour và hình ảnh:", error);
      }
    };

    fetchTour();
  }, [tourID]);

  const handleInputChange = (e) => {
    setTour({
      ...tour,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditImage = (tourID) => {
    navigate(`/admin/sua-image-tour/${tourID}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5020/v1/api/admin/cap-nhat-tour/${tourID}`, tour)
      .then(() => {
        window.location.href = "/admin/TourLietKe";
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật tour và hình ảnh:", error);
      });
  };
  const { adminToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!adminToken) {
      navigate("/admin");
    }
  }, [adminToken, navigate]);

  if (!adminToken) {
    return null;
  }

  return (
    <>
      <ToastContainer />
      <Header1 />
      <div className="boxGioiThieu"></div>
      <Row className="d-flex flex-row">
        <Col className="col-2">
          <SIDEBAR />
        </Col>
        <Col className="col-10">
          <div className="ms-5 ps-3 mt-3">
            <h2>Sửa thông tin Tour</h2>
            {loading ? (
              <h2>
                {" "}
                <Spinner animation="grow" variant="dark" />
                Loading...
              </h2>
            ) : (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Tên Tour :</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={tour.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <div>
                  <h3>Hình ảnh Tour:</h3>
                  {images.map((base64Image, index) => (
                    <img
                      key={index}
                      src={`data:image/jpeg;base64,${base64Image}`}
                      alt={`Image ${index}`}
                      style={{
                        width: "200px",
                        height: "150px",
                        marginRight: "10px",
                      }}
                    />
                  ))}
                </div>
                <br />

                {/* Chọn và hiển thị hình ảnh mới */}
                <div>
                  <Button
                    onClick={() => handleEditImage(tour.id)}
                    className="btn-dark col-2 mb-3"
                  >
                    Chọn hình ảnh mới
                  </Button>
                </div>
                <Form.Group className="mb-3">
                  <Form.Label>Ngày Bắt Đầu :</Form.Label>
                  <Form.Control
                    type="date"
                    name="start_date"
                    value={tour.start_date}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Ngày Kết Thúc :</Form.Label>
                  <Form.Control
                    type="date"
                    name="end_date"
                    value={tour.end_date}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Giá người lớn :</Form.Label>
                  <Form.Control
                    type="text"
                    name="price"
                    value={tour.price}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Giá trẻ em:</Form.Label>
                  <Form.Control
                    type="text"
                    name="child_price"
                    value={tour.child_price}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Giá trẻ nhỏ:</Form.Label>
                  <Form.Control
                    type="text"
                    name="infant_price"
                    value={tour.infant_price}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Số lượng người tham gia :</Form.Label>
                  <Form.Control
                    name="quantity"
                    value={tour.quantity}
                    onChange={handleInputChange}
                    type="number"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Mô tả :</Form.Label>
                  <Form.Control
                    name="description"
                    value={tour.description}
                    onChange={handleInputChange}
                    as="textarea"
                    style={{ height: "250px" }}
                  />
                </Form.Group>
                {/* Hiển thị hình ảnh từ chuỗi base64 */}

                <Button
                  className="btn-warning mt-4 p-3 col-3 mb-5"
                  type="submit"
                >
                  Lưu Thay Đổi
                </Button>
              </Form>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};
export default TourEdit;

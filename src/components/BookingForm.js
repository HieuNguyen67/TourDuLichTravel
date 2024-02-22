// BookingForm.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../containers/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Button, Col, Row, Modal } from "react-bootstrap";

const BookingForm = () => {
  const navigate = useNavigate();

  const { tourID } = useParams();
  const { user, userId } = useAuth();

  const [adultQuantity, setAdultQuantity] = useState("1");
  const [childQuantity, setChildQuantity] = useState("0");
  const [infantQuantity, setInfantQuantity] = useState("0");

  const [tourDetails, setTourDetails] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const handleBooking = async () => {
    try {
      if (!user) {
        console.error("User not logged in");
        navigate("/Login");
        return;
      }
      const totalQuantity = parseInt(adultQuantity) + parseInt(childQuantity);

      console.log(totalQuantity);

      if (totalQuantity > tourDetails.quantity) {
        setModalMessage(
          "Số lượng người đặt vượt quá số lượng còn lại của tour. Vui lòng đặt lại !"
        );
        setShowModal(true);
        return;
      }

      const response = await axios.post(
        "https://backend-travel-tour-bbvh.onrender.com/v1/api/admin/bookings",
        {
          userId,
          tourID,
          adultQuantity,
          childQuantity,
          infantQuantity,
        }
      );

      console.log("Booking successful:", response.data);
      setModalMessage("ĐẶT TOUR THÀNH CÔNG !");
      setShowModal(true);
      setTimeout(() => {
        navigate("/TourDuLichTravel");
      }, 1500);
    } catch (error) {
      console.error("Error booking tour:", error);
      setModalMessage(
        "BẠN ĐÃ ĐẶT TOUR NÀY ĐANG Ở TRẠNG THÁI CHỜ DUYỆT HOẶC ĐÃ THANH TOÁN, VUI LÒNG LIÊN HỆ CÔNG TY ĐỂ HUỶ TOUR NÀY !"
      );
      setShowModal(true);
    }
  };

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        const response = await axios.get(
          `https://backend-travel-tour-bbvh.onrender.com/v1/api/admin/lay-thong-tin-tour/${tourID}`
        );
        setTourDetails(response.data);
        setTotalPrice(
          response.data.price * adultQuantity +
            response.data.child_price * childQuantity +
            response.data.infant_price * infantQuantity
        );
      } catch (error) {
        console.error("Error fetching tour details:", error);
      }
    };

    fetchTourDetails();
  }, [tourID, adultQuantity, childQuantity, infantQuantity]);

  const formatCurrency = (price) => {
    // Sử dụng hàm toLocaleString để định dạng giá theo kiểu VNĐ
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  return (
    <div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">THÔNG BÁO </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{modalMessage}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
      <Form>
        <Row>
          <Col>
            <Form.Label>Số lượng người lớn:</Form.Label>
            <Form.Control
              type="number"
              value={adultQuantity}
              onChange={(e) => setAdultQuantity(e.target.value)}
              min={1}
              max={tourDetails.quantity}
            />
          </Col>
          <Col>
            <Form.Label>Số lượng trẻ em:</Form.Label>
            <Form.Control
              type="number"
              value={childQuantity}
              onChange={(e) => setChildQuantity(e.target.value)}
              min={0}
              max={tourDetails.quantity}
            />
          </Col>
          <Col>
            <Form.Label>Số lượng trẻ nhỏ:</Form.Label>
            <Form.Control
              type="number"
              value={infantQuantity}
              onChange={(e) => setInfantQuantity(e.target.value)}
              min={0}
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <h2>
              Tổng giá:{" "}
              <span className="text-danger">{formatCurrency(totalPrice)}</span>
            </h2>
          </Col>
        </Row>
        <h5 className="mt-4 text-dark">
          Lưu ý:{" "}
          <span className="text-danger">
            Sau khi khách hàng đặt tour vui lòng liên hệ đến Công ty để đặt cọc
            chuyển khoản 50%. Hoặc đến văn phòng vé để check-in trong 24h sau
            khi đặt tour. Nếu không hệ thống tự huỷ !
          </span>
        </h5>
        <Row className="mt-3 mb-5">
          <Col>
            <Button
              variant="warning"
              className="col-12 mt-4 fs-4 fw-bold"
              onClick={handleBooking}
            >
              ĐẶT TOUR
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default BookingForm;

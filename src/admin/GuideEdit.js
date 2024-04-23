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

const GuideEdit = () => {
  const navigate = useNavigate();
  const { guideID } = useParams();
  const [user, setUser] = useState({
    fullname: "",
    birthdate: "",
    email: "",
    phone: "",
    address: "",
    tour_id: "",
  });
  const [tourOptions, setTourOptions] = useState([]);
  useEffect(() => {
    const fetchTourOptions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5020/v1/api/admin/lay-danh-sach-tour"
        );
        setTourOptions(response.data);
      } catch (error) {
        console.error("Error fetching tour options:", error);
      }
    };

    fetchTourOptions();
  }, []);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5020/v1/api/admin/lay-thong-tin-guide/${guideID}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin người dùng:", error);
      }
    };

    fetchUser();
  }, [guideID]);

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5020/v1/api/admin/cap-nhat-guide/${guideID}`, user)
      .then(() => {
        toast.success("Cập nhật thành công");

        setTimeout(() => {
          navigate("/admin/GuideLietKe");
        }, 1500);
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật người dùng:", error);
      });
  };
  const { adminToken } = useAuth();

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
            <div>
              <h2>Sửa thông tin Hướng dẫn viên</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Họ và tên :</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullname"
                    value={user.fullname}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Ngày sinh :</Form.Label>
                  <Form.Control
                    type="date"
                    name="birthdate"
                    value={user.birthdate}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email :</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Số điện thoại :</Form.Label>
                  <Form.Control
                    type="number"
                    name="phone"
                    value={user.phone}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Địa chỉ :</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="selectedTour">
                  <Form.Label>Select Tour</Form.Label>
                  <Form.Control
                    as="select"
                    name="tour_id"
                    value={user.selectedTour}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select Tour --</option>
                    {tourOptions.map((tour) => (
                      <option key={tour.TourID} value={tour.id}>
                        {tour.name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <br />

                <Button type="submit" className="p-3 btn-warning col-3">
                  Lưu Thay Đổi
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default GuideEdit;

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

const UserEdit = () => {
  const navigate = useNavigate();
  const { userID } = useParams();
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://backend-travel-tour-bbvh.onrender.com/v1/api/admin/lay-thong-tin-user/${userID}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin người dùng:", error);
      }
    };

    fetchUser();
  }, [userID]);

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gửi yêu cầu cập nhật thông tin người dùng lên server
    axios
      .put(
        `https://backend-travel-tour-bbvh.onrender.com/v1/api/admin/cap-nhat-user/${userID}`,
        user
      )
      .then(() => {
        // Chuyển hướng về trang danh sách người dùng sau khi cập nhật thành công
        toast.success("Cập nhật thành công");

        // Chuyển hướng đến trang login sau 3 giây
        setTimeout(() => {
          navigate("/TourDuLichTravel/admin/UserLietKe");
        }, 1500);
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật người dùng:", error);
      });
  };
  const { adminToken } = useAuth();

  useEffect(() => {
    // Kiểm tra nếu người dùng chưa đăng nhập, chuyển hướng về trang login
    if (!adminToken) {
      navigate("/TourDuLichTravel/admin");
    }
  }, [adminToken, navigate]);

  if (!adminToken) {
    // Nếu chưa đăng nhập, không hiển thị nội dung của trang
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
              <h2>Sửa thông tin Người dùng</h2>
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
                  <Form.Label>Username :</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={user.username}
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
export default UserEdit;

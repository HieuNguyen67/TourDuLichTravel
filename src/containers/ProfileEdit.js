// File: src/components/Profile.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../containers/AuthContext";
import Header from "../components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackToTop from "../components/BackToTop";
import { motion, useAnimation } from "framer-motion";
import { Button, Container } from "react-bootstrap";
import { useNavigate, Link, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";

function ProfileEdit() {
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
          navigate(`/profile/${userID}`);
        }, 1500);
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật người dùng:", error);
      });
  };
  const navigate = useNavigate();

  return (
    <>
      <BackToTop />
      <ToastContainer />
      <Header />
      <div className="boxGioiThieu"></div>
      <motion.div
        initial={{ opacity: 0, y: 98 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
      >
        <Container>
          <div>
            <div className="ms-5 ps-3 mt-3">
              <div>
                <h2 className="text-center my-5">Chỉnh sửa hồ sơ cá nhân</h2>
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

                  <Button type="submit" className="p-3 btn-warning col-3 mb-5">
                    Lưu Thay Đổi
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </Container>
      </motion.div>
    </>
  );
}

export default ProfileEdit;

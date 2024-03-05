import SIDEBAR from "./componentss/sidebar";
import Header1 from "./componentss/Header1";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Container } from "@mui/system";
import { motion, useAnimation } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useAuth } from "./AuthContextAdmin";
import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LoginIcon from "@mui/icons-material/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const { login, adminToken } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    // Nếu người dùng đã đăng nhập, chuyển hướng đến trang AdminDashboard
    if (adminToken) {
      navigate("/admin/UserLietKe");
    }
  }, [adminToken, navigate]);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://backend-do-an-chuyen-nganh.vercel.app/v1/api/admin/login",
        {
          identifier,
          password,
        }
      );
      const { token, username } = response.data;

      // Lưu thông tin người dùng vào context
      login(token, username);

      // Chuyển hướng đến trang admin sau khi đăng nhập thành công
      // Ví dụ: history.push('/admin/dashboard');

      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/admin/UserLietKe");
      }, 1500);
    } catch (error) {
      toast.error("Sai thông tin đăng nhập. Vui lòng kiểm tra lại !");
    }
  };

  return (
    <>
      <ToastContainer />
      <Header1 />
      <div className="boxGioiThieu"></div>
      <motion.div
        initial={{ opacity: 0, y: 98 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
      >
        <Container className="mt-5 mx-auto  ">
          <div>
            <Row>
              <Col></Col>
              <Col className="col-10 ">
                <h2 className="text-center text-break fw-bold ">
                  Đăng Nhập Admin
                </h2>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Container>

        <br />
        <Container className="mb-5 pb-md-5">
          <div className="col-md-5 col-12 mx-auto" noValidate>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                UserName <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="UserName"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Password <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="warning"
              className="col-12 mt-4"
              onClick={handleLogin}
            >
              Đăng Nhập <LoginIcon />
            </Button>
          </div>

          <br />
          <div>
            <Row>
              <Col></Col>
              <Col className="col-12">
                <h6 className="text-center text-break  ">
                  <NavLink to="/" className=" link-dark text-danger decorate ">
                    <ArrowBackIosIcon sx={{ fontSize: 20 }} />
                    Go back
                  </NavLink>
                </h6>
              </Col>
              <Col></Col>
            </Row>
          </div>
          <hr></hr>
        </Container>
      </motion.div>
    </>
  );
};
export default Admin;

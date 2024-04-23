import { Container } from "@mui/system";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import LoginIcon from "@mui/icons-material/Login";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import Header from "../components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackToTop from "../components/BackToTop";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit1 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5020/v1/api/admin/login/user",
        {
          emailOrUsername,
          password,
        }
      );
      const data = response.data;

      if (data.success) {
        login(data.user, data.token);
        toast.success("Đăng nhập thành công !");

        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        toast.error("Sai thông tin đăng nhập. Vui lòng kiểm tra lại !");
      }
    } catch (error) {
      toast.error("Sai thông tin đăng nhập. Vui lòng kiểm tra lại !");
    }
  };

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
        <Container className="mt-5 mx-auto  ">
          <div>
            <Row>
              <Col></Col>
              <Col className="col-10 ">
                <h2 className="text-center text-break fw-bold ">Đăng Nhập</h2>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Container>
        <br />
        <Container className="mb-5 pb-md-5">
          <div
            className="col-md-5 col-12 mx-auto"
            noValidate
            validated={validated}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                UserName <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="UserName"
                required
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
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
              type="submit"
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
          <div>
            <Row>
              <Col></Col>
              <Col className="col-12 col-md-12 mt-3">
                <Col>
                  <h6 className="text-secondary  text-center text-break fw-bold">
                    Bạn không có tài khoản?
                    <NavLink
                      to="/SignUp"
                      className=" link-dark text-danger decorate "
                    >
                      {" "}
                      Đăng ký
                    </NavLink>
                  </h6>
                </Col>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Container>
      </motion.div>
    </>
  );
};
export default Login;

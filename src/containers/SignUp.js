import { Container } from "@mui/system";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import BackToTop from "../components/BackToTop";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [fullname, setFullname] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (
      !username ||
      !email ||
      !password ||
      !phone ||
      !address ||
      !fullname ||
      !isValidEmail(email) ||
      !isValidPhone(phone)
    ) {
      toast.error("Please fill in all fields with valid data.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5020/v1/api/admin/register",
        {
          username,
          email,
          password,
          phone,
          address,
          fullname,
        }
      );

      toast.success(response.data.message);

      setTimeout(() => {
        navigate("/Login");
      }, 1500);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(
          "Username hoặc email đã tồn tại. Vui lòng chọn Username hoặc email khác."
        );
      } else {
        console.error("Registration failed:", error.response.data.message);
        toast.error("Registration failed. Please try again.");
      }
    }
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const isValidPhone = (value) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(value);
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
                <h2 className="text-center text-break fw-bold ">Đăng Ký</h2>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Container>
        <br />
        <Container className="mb-5 pb-md-5">
          <Form className="col-md-5 col-12 mx-auto" noValidate>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Họ và tên <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Họ tên"
                required
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                UserName <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="UserName"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Email <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Số điện thoại (Nhập đủ 10 số)
                <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Số điện thoại"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Địa chỉ <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Địa chỉ"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="warning"
              className="col-12 mt-4"
              onClick={handleRegister}
            >
              Đăng Ký <LoginIcon />
            </Button>
          </Form>

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
                    Bạn đã có tài khoản?
                    <NavLink
                      to="/Login"
                      className=" link-dark text-danger decorate "
                    >
                      {" "}
                      Đăng nhập
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
export default SignUp;

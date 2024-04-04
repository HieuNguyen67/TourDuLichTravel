import SIDEBAR from "./componentss/sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header1 from "./componentss/Header1";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import LoginIcon from "@mui/icons-material/Login";
import { useAuth } from "./AuthContextAdmin";

const UserThemMoi = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [fullname, setFullname] = useState("");

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
        "https://backend-do-an-chuyen-nganh.vercel.app/v1/api/admin/register",
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
        navigate("/admin/UserLietKe");
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
      <Header1 />
      <div className="boxGioiThieu"></div>
      <Row className="d-flex flex-row">
        <Col className="col-2">
          <SIDEBAR />
        </Col>
        <Col className="col-10">
          <div className="ms-5 ps-3 mt-3">
            <h2>Add User</h2>
            <Form>
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
                className="col-4 mt-4 p-3"
                onClick={handleRegister}
              >
                Thêm mới
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default UserThemMoi;

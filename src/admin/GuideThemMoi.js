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
import Modal from "react-bootstrap/Modal";

const GuideThemMoi = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [fullname, setFullname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [selectedTour, setSelectedTour] = useState("");
  const [tourOptions, setTourOptions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    // Fetch the list of tours to populate the dropdown options
    const fetchTourOptions = async () => {
      try {
        const response = await axios.get(
          "https://backend-travel-tour-bbvh.onrender.com/v1/api/admin/lay-danh-sach-tour"
        );
        setTourOptions(response.data);
      } catch (error) {
        console.error("Error fetching tour options:", error);
      }
    };

    fetchTourOptions();
  }, []);
  const handleRegister = async () => {
    if (
      !email ||
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
        "https://backend-travel-tour-bbvh.onrender.com/v1/api/admin/guide_register",
        {
          email,
          phone,
          address,
          fullname,
          birthdate,
          selectedTour,
        }
      );

      setModalMessage("Thêm mới thành công");
      setShowModal(true);

      // Chuyển hướng đến trang login sau 3 giây
      setTimeout(() => {
        navigate("/TourDuLichTravel/admin/GuideLietKe");
      }, 1500);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setModalMessage(
          "Username hoặc email đã tồn tại. Vui lòng chọn Username hoặc email khác."
        );
        setShowModal(true);
      } else {
        console.error("Registration failed:", error.response.data.message);
        setModalMessage("Đăng ký thất bại. Vui lòng thử lại !");
      }
    }
  };

  // Hàm kiểm tra định dạng email
  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  // Hàm kiểm tra định dạng số điện thoại
  const isValidPhone = (value) => {
    const phoneRegex = /^\d{10}$/; // Giả sử số điện thoại có 10 chữ số
    return phoneRegex.test(value);
  };
  const { adminToken } = useAuth();
  const navigate = useNavigate();

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
      {" "}
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
      <Header1 />
      <div className="boxGioiThieu"></div>
      <Row className="d-flex flex-row">
        <Col className="col-2">
          <SIDEBAR />
        </Col>
        <Col className="col-10">
          <div className="ms-5 ps-3 mt-3">
            <h2>Add Guide Tour</h2>
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
              <Form.Group className="mb-3">
                <Form.Label>Ngày sinh :</Form.Label>
                <Form.Control
                  type="date"
                  name="birthdate"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="selectedTour">
                <Form.Label>Select Tour</Form.Label>
                <Form.Control
                  as="select"
                  name="selectedTour"
                  value={selectedTour}
                  onChange={(e) => setSelectedTour(e.target.value)}
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
export default GuideThemMoi;

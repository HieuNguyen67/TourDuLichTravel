import SIDEBAR from "./componentss/sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header1 from "./componentss/Header1";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./AuthContextAdmin";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const TourThemMoi = () => {
  const [tourInfo, setTourInfo] = useState({
    name: "",
    start_date: "",
    end_date: "",
    price: "",
    child_price: "",
    infant_price: "",
    description: "",
    quantity: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTourInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    setTourInfo((prevInfo) => ({ ...prevInfo, images: files }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", tourInfo.name);
    formData.append("start_date", tourInfo.start_date);
    formData.append("end_date", tourInfo.end_date);
    formData.append("price", tourInfo.price);
    formData.append("child_price", tourInfo.child_price);
    formData.append("infant_price", tourInfo.infant_price);
    formData.append("description", tourInfo.description);
    formData.append("quantity", tourInfo.quantity);

    for (let i = 0; i < tourInfo.images.length; i++) {
      formData.append("images", tourInfo.images[i]);
    }

    try {
      await axios.post(
        "https://backend-do-an-chuyen-nganh.vercel.app/v1/api/admin/add-tour",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Thêm Tour Mới Thành Công !");

      // Chuyển hướng đến trang login sau 3 giây
      setTimeout(() => {
        navigate("/TourDuLichTravel/admin/TourLietKe");
      }, 1500);

      // Xử lý khi tour được thêm thành công, ví dụ hiển thị thông báo, chuyển hướng, v.v.
    } catch (error) {
      console.error("Error adding tour:", error);
    }
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
      <ToastContainer />
      <Header1 />
      <div className="boxGioiThieu"></div>
      <Row className="d-flex flex-row">
        <Col className="col-2">
          <SIDEBAR />
        </Col>
        <Col className="col-10 ">
          <div className="ms-5 ps-3 mt-3">
            <h2>Add Tour</h2>
            <Form onSubmit={handleSubmit}>
              {/* Các trường nhập thông tin tour */}
              <Form.Group className="mb-3">
                <Form.Label>Tên Tour :</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={tourInfo.name}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ngày bắt đầu :</Form.Label>
                <Form.Control
                  type="date"
                  name="start_date"
                  value={tourInfo.start_date}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ngày kết thúc :</Form.Label>
                <Form.Control
                  type="date"
                  name="end_date"
                  value={tourInfo.end_date}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Giá người lớn :</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={tourInfo.price}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Giá trẻ em :</Form.Label>
                <Form.Control
                  type="text"
                  name="child_price"
                  value={tourInfo.child_price}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Giá trẻ nhỏ :</Form.Label>
                <Form.Control
                  type="text"
                  name="infant_price"
                  value={tourInfo.infant_price}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mô tả :</Form.Label>
                <Form.Control
                  name="description"
                  value={tourInfo.description}
                  onChange={handleInputChange}
                  as="textarea"
                  style={{ height: "250px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Số lượng người tham gia :</Form.Label>
                <Form.Control
                  name="quantity"
                  value={tourInfo.quantity}
                  onChange={handleInputChange}
                  type="number"
                />
              </Form.Group>

              {/* ... (các trường khác) */}

              {/* Chọn nhiều ảnh */}
              <input
                type="file"
                name="images"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="mb-3"
              />
              <br />

              {/* Nút submit */}
              <Button type="submit" className="p-3 btn-warning col-3 mt-4">
                Add Tour
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default TourThemMoi;

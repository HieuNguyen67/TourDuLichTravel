import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import SIDEBAR from "./componentss/sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header1 from "./componentss/Header1";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContextAdmin";

const TourEditImage = () => {
  const { tourID } = useParams();
  const [tour, setTour] = useState({});
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await axios.get(
          `https://backend-do-an-chuyen-nganh.vercel.app/v1/api/admin/lay-thong-tin-tour/${tourID}`
        );
        setTour(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin tour:", error);
      }
    };

    fetchTour();
  }, [tourID]);

  const handleFormSubmit = async (data) => {
    try {
      const formData = new FormData();

      // Lặp qua từng tệp hình ảnh và append vào formData
      for (let i = 0; i < data.images.length; i++) {
        formData.append("images", data.images[i]);
      }

      // Gửi yêu cầu cập nhật hình ảnh lên server
      await axios.put(
        `https://backend-do-an-chuyen-nganh.vercel.app/v1/api/admin/cap-nhat-hinh-anh-tour/${tourID}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Thông báo cập nhật thành công hoặc chuyển hướng về trang danh sách tour

      toast.success("Cập nhật hình ảnh tour thành công");
      setTimeout(() => {
        navigate(`/admin/sua-tour/${tourID}`);
      }, 1500);

      // hoặc window.location.href = '/danh-sach-tour';
    } catch (error) {
      console.error("Lỗi khi cập nhật hình ảnh tour:", error);
    }
  };

  const { adminToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra nếu người dùng chưa đăng nhập, chuyển hướng về trang login
    if (!adminToken) {
      navigate("/admin");
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
              <h2>Cập Nhật Hình Ảnh Tour</h2>
              <Form onSubmit={handleSubmit(handleFormSubmit)} className="mt-4">
                <div>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Chọn hình ảnh:</Form.Label>
                    <Form.Control
                      type="file"
                      multiple
                      {...register("images", { required: true })}
                    />
                  </Form.Group>
                </div>

                <Button className="btn-dark mt-5" type="submit">
                  Cập Nhật Hình Ảnh
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TourEditImage;

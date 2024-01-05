import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import "../assets/scss/DetailTourMienTay3Ngay2Dem.scss"
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InfoIcon from "@mui/icons-material/Info";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import BackToTop from "../components/BackToTop";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

import BookingForm from "../components/BookingForm";


const Bookingtour = () => {
     const [validated, setValidated] = useState(false);
const {userId } = useAuth();
    
       const { tourID, userID } = useParams();
          

       const [tour, setTour] = useState([]);
       const [images, setImages] = useState([]);
       useEffect(() => {
         const fetchTour = async () => {
           try {
             const responseTour = await axios.get(
               `http://localhost:5020/v1/api/admin/lay-thong-tin-tour/${tourID}`
             );
             const responseImages = await axios.get(
               `http://localhost:5020/v1/api/admin/lay-hinh-anh-tour/${tourID}`
             );

             setTour(responseTour.data);
             setImages(responseImages.data);
           } catch (error) {
             console.error("Lỗi khi lấy thông tin tour và hình ảnh:", error);
           }
         };

         fetchTour();
       }, [tourID]);
      const formatCurrency = (price) => {
        // Chuyển đổi giá trị DECIMAL(10) sang số nguyên
        const priceInteger = Math.round(price * 100); // Giả sử 2 chữ số thập phân

        // Sử dụng hàm toLocaleString để định dạng giá theo kiểu VNĐ
        const formattedPrice = (priceInteger / 100).toLocaleString("vi-VN", {
          currency: "VND",
        });

        // Thêm chữ "VNĐ" vào cuối chuỗi
        return formattedPrice + " VNĐ";
      };
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
               `http://localhost:5020/v1/api/admin/lay-thong-tin-user/${userId}`
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
             `http://localhost:5020/v1/api/admin/cap-nhat-user/${userId}`,
             user
           )
           .then(() => {
             // Chuyển hướng về trang danh sách người dùng sau khi cập nhật thành công
              window.alert("Cập nhật thành công!");

             // Chuyển hướng đến trang login sau 3 giây
           })
           .catch((error) => {
             console.error("Lỗi khi cập nhật người dùng:", error);
           });
       };
        
  return (
    <>
      <BackToTop />
      <Header />
      <div className="boxGioiThieu"></div>
      <Container>
        <Row className="mt-5">
          <Col className="col-md-4 col-12">
            {/* <img
              src={pic2}
              className="w-100 detailimage"
              style={{ objectFit: "cover" }}
            /> */}
            {images.length > 0 && (
              <img
                src={`data:image/jpeg;base64,${images[0]}`}
                alt="First Image"
                className="w-100 detailimage"
                style={{ objectFit: "cover" }}
              />
            )}
          </Col>
          <Col className="mx-md-4 col-md col-12">
            {" "}
            <Table bordered hover>
              <thead>
                <tr>
                  <th className="text-center fs-3">{tour.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="fw-bold">Mã tour:</span> {tour.id}
                    <br />
                    <span className="fw-bold">Thời gian :</span>{" "}
                    <span className="text-primary fw-bold">
                      {new Date(tour.start_date).toLocaleDateString()} -{" "}
                      {new Date(tour.end_date).toLocaleDateString()}
                    </span>
                    <br /> <span className="fw-bold">Giá:</span>{" "}
                    <span className="text-danger fw-bold">
                      {formatCurrency(tour.price)}{" "}
                    </span>
                    <br />
                    <span className="fw-bold">Ngày khởi hành: </span>{" "}
                    {new Date(tour.start_date).toLocaleDateString()} <br />{" "}
                    <span className="fw-bold">Nơi khởi hành:</span>Hồ Chí Minh{" "}
                    <br />
                    <span className="fw-bold">Phương tiện :</span> Ô tô
                    <br />
                    <span className="fw-bold">Số chỗ còn :</span>{" "}
                    {tour.quantity}
                    <br />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <p className="text-danger fw-light my-3">
          Các khoản phí phát sinh (nếu có) như: phụ thu dành cho khách nước
          ngoài, việt kiều; phụ thu phòng đơn; phụ thu chênh lệch giá tour… Nhân
          viên Du Lịch Việt sẽ gọi điện thoại tư vấn cho quý khách ngay sau khi
          có phiếu xác nhận booking. (Trong giờ hành chính) Trường hợp quý khách
          không đồng ý các khoản phát sinh, phiếu xác nhận booking của quý khách
          sẽ không có hiệu lực.
        </p>

        <div className=" pt-md-5 mb-md-5 my-4">
          <Row className="d-flex">
            <Col />
            <Col className="col-10 col-md-8">
              <h1 className="text-center  ">
                <LocalOfferIcon fontSize="large" /> BẢNG GIÁ TOUR CHI TIẾT
              </h1>
            </Col>
            <Col />
          </Row>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Loại giá\Độ tuổi </th>
                <th>Người lớn(Trên 11 tuổi) </th>
                <th>Trẻ em(4 - 11 tuổi) </th>
                <th>Trẻ nhỏ({"<"} 4 tuổi) </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Giá</td>
                <td className="text-danger fw-bold">
                  {" "}
                  {formatCurrency(tour.price)}
                </td>
                <td className="text-danger fw-bold">
                  {" "}
                  {formatCurrency(tour.child_price)}
                </td>
                <td className="text-danger fw-bold">
                  {" "}
                  {formatCurrency(tour.infant_price)}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className=" pt-md-5 mb-md-5 my-4">
          <Row className="d-flex">
            <Col />
            <Col className="col-10 col-md-8">
              <h1 className="text-center  ">
                <InfoIcon fontSize="large" /> THÔNG TIN LIÊN HỆ
              </h1>
            </Col>
            <Col />
          </Row>
        </div>
        <div>
          {" "}
          <Form onSubmit={handleSubmit}>
            <Row className="d-flex flex-row">
              <Col className="mx-md-2 col-12 col-md">
                {" "}
                <Form.Group className="mb-3">
                  <Form.Label>
                    Họ tên : <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="fullname"
                    placeholder="Họ tên"
                    value={user.fullname}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col className="mx-md-2 col-12 col-md">
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    Email : <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={user.email}
                    onChange={handleInputChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Địa chỉ email không hợp lệ.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col className="mx-md-2 col-12 col-md">
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    Số điện thoại: <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="phone"
                    placeholder="Số điện thoại"
                    required
                    value={user.phone}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>{" "}
            <Row className="d-flex flex-row">
              <Col className="mx-md-2 col-12 col-md">
                {" "}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>
                    Địa chỉ : <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    placeholder="Địa chỉ"
                    required
                    value={user.address}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>{" "}
            <Row>
              <Col className="col-10"></Col>
              <Col>
                {" "}
                <Button
                  variant="dark"
                  type="submit"
                  className="col-md-12 col-12  mt-4 p-2 mb-5"
                >
                  Cập nhật lại thông tin
                </Button>
              </Col>
            </Row>
          </Form>
          <BookingForm />
        </div>
      </Container>
    </>
  );
};
export default Bookingtour;

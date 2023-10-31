import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pic2 from "../assets/image/rung-tra-su-an-giang.jpg";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import "../assets/scss/DetailTourMienTay3Ngay2Dem.scss"
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InfoIcon from "@mui/icons-material/Info";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PriceCalculator from "../components/PriceCalculator";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DetailTourMienTay3Ngay2Dem = () => {
     const [validated, setValidated] = useState(false);

     const handleSubmit = (event) => {
       const form = event.currentTarget;
       if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
       }

       setValidated(true);
     };
      
  return (
    <>
      <div className="boxGioiThieu"></div>
      <Container>
        <Row className="mt-5">
          <Col className="col-md-4 col-12">
            <img
              src={pic2}
              className="w-100 detailimage"
              style={{ objectFit: "cover" }}
            />
          </Col>
          <Col className="mx-md-4 col-md col-12">
            {" "}
            <Table bordered hover>
              <thead>
                <tr>
                  <th className="text-center fs-3">
                    TOUR MIỀN TÂY 3 NGÀY 2 ĐÊM
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="fw-bold">Mã tour:</span> XNMT 03 <br />
                    <span className="fw-bold">Số ngày đi tour :</span> 3 Ngày 2
                    Đêm
                    <br /> <span className="fw-bold">Giá:</span> 3.080.000 VNĐ{" "}
                    <br />
                    <span className="fw-bold">Ngày khởi hành: </span>30/10//2023 <Link className="text-decoration-none">ngày khác</Link>{" "}
                   
                    <br /> <span className="fw-bold">Nơi khởi hành:</span>Hồ Chí
                    Minh <br />
                    <span className="fw-bold">Phương tiện :</span> Ô tô
                    <br />
                    <span className="fw-bold">Khách sạn :</span>{" "}
                    <StarBorderPurple500Icon /> <StarBorderPurple500Icon />{" "}
                    <StarBorderPurple500Icon />
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
                <th>Trẻ em(5 - 11 tuổi) </th>
                <th>Trẻ nhỏ(2 - 5 tuổi)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Giá</td>
                <td>3.080.000 VNĐ</td>
                <td>2.310.000 VNĐ</td>
                <td>0 VNĐ</td>
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
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="d-flex flex-row">
              <Col className="mx-md-2 col-12 col-md">
                {" "}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>
                    Họ tên : <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Họ tên" required />
                </Form.Group>
              </Col>
              <Col className="mx-md-2 col-12 col-md">
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    Email : <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control type="email" placeholder="Email" required />
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
                    type="text"
                    placeholder="Số điện thoại"
                    required
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
                  <Form.Control type="text" placeholder="Địa chỉ" required />
                </Form.Group>
              </Col>
              <Col className="mx-md-2 col-12 col-md">
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    Ghi chú :
                  </Form.Label>
                  <Form.Control type="email" placeholder="Ghi chú"  />
                </Form.Group>
              </Col>
            </Row>{" "}
            <PriceCalculator />
            <p className="text-center">
              <Button
                variant="warning"
                type="submit"
                className="col-md-4 col-12  mt-4"
              >
                ĐẶT TOUR
              </Button>
            </p>
          </Form>
        </div>
      </Container>
    </>
  );
};
export default DetailTourMienTay3Ngay2Dem;

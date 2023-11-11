import "../assets/scss/Footer.scss"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import dcma from "../assets/image/dmca.png"
import congthuong from "../assets/image/congthuong.png";
import { motion, useAnimation } from "framer-motion";

const Footer=()=>{

    return (
      <>
        <div className="boxFooter">
          <Container>
            <Row className="d-flex flex-row pt-md-5 pt-4">
              <Col className="col-md-4 col-12">
                <p className="lh-base ">
                  <strong>
                    CÔNG TY TNHH DU LICH TRAVEL TOUR <br />
                    THÔNG TIN :
                  </strong>
                  <br />
                  <span style={{ fontSize: "15px" }}>
                    1. Nguyễn Minh Hiếu - DH52004983 - D20_TH09
                  </span>
                  <br />
                  <span style={{ fontSize: "15px" }}>
                    2. Phan Đức Tiến - DH52006111 - D20_TH09
                  </span>
                </p>
                <br />
                <p>
                  <strong>CHỨNG NHẬN</strong>
                  <br />
                  <br />{" "}
                  <span className="lh-lg">
                    <img src={dcma} className="sizeimg" />
                    <br /> <img src={congthuong} className="sizeimg" />
                  </span>
                </p>
              </Col>
              <Col className="col-md-4 col-12 pe-md-5">
                <p>
                  <strong>THÔNG TIN LIÊN HỆ</strong>
                  <br />{" "}
                  <span style={{ fontSize: "15px" }}>
                    <strong>Địa chỉ : </strong>180 Đ. Cao Lỗ, Phường 4, Quận 8,
                    Thành phố Hồ Chí Minh
                  </span>
                  <br />{" "}
                  <span style={{ fontSize: "15px" }}>
                    <strong>Điện thoại : </strong>(028) 38 505 520
                  </span>
                  <br />{" "}
                  <span style={{ fontSize: "15px" }}>
                    <strong>Email : </strong>contact@stu.edu.vn
                  </span>
                  <br />{" "}
                  <span style={{ fontSize: "15px" }}>
                    <strong>Website : </strong>TourTravel.com
                  </span>
                </p>
              </Col>
              <Col className="col-md-4 col-12 ps-md-5">
                <p className="lh-lg ps-md-5">
                  <strong>GIỚI THIỆU</strong>
                  <br />
                  <Link
                    className="text-decoration-none black"
                    to="/TourDuLichTravel"
                  >
                    <span style={{ fontSize: "15px" }} className="hover">
                      {">"} Trang chủ
                    </span>
                  </Link>
                  <br />
                  <Link className="text-decoration-none black" to="/GioiThieu">
                    <span style={{ fontSize: "15px" }} className="hover">
                      {">"} Về chúng tôi
                    </span>
                  </Link>
                  <br />
                  <Link
                    className="text-decoration-none black"
                    to="/TourTongHop"
                  >
                    <span style={{ fontSize: "15px" }} className="hover">
                      {">"} Tour
                    </span>
                  </Link>
                  <br />{" "}
                  <Link className="text-decoration-none black" to="/BangGia">
                    <span style={{ fontSize: "15px" }} className="hover">
                      {">"} Bảng giá
                    </span>
                  </Link>
                  <br />{" "}
                  <Link className="text-decoration-none black" to="/HinhAnh">
                    <span style={{ fontSize: "15px" }} className="hover">
                      {">"} Hình ảnh
                    </span>{" "}
                  </Link>
                  <br />
                  <Link className="text-decoration-none black" to="/LienHe">
                    <span style={{ fontSize: "15px" }} className="hover">
                      {">"} Liên hệ
                    </span>
                  </Link>
                </p>
              </Col>
            </Row>
            <hr />
            <div className="text-center text-secondary pb-3 ">
              Copyright © 2023 Tour Travel. All Rights Reserved. Designed by
              HieuNguyen.
            </div>
          </Container>
        </div>
      </>
    );
}
export default Footer;
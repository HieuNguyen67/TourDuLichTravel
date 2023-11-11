import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
const BangGia = () => {
  return (
    <>
      <div className="boxGioiThieu"></div>
      <motion.div
        initial={{ opacity: 0, y: 98 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
      >
        <Container className="mb-5 pb-md-5">
          <p className="mt-4 d-flex">
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link
                to="/TourDuLichTravel"
                className="text-decoration-none text-dark"
              >
                <span>Trang chủ &nbsp;</span>
              </Link>{" "}
            </motion.a>
            {" > "}
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link to="/BangGia" className="text-decoration-none text-dark">
                <span> &nbsp; &nbsp;Bảng Giá </span>
              </Link>
            </motion.a>
          </p>

          <div className=" pt-md-1 my-5">
            <Row className="d-flex">
              <Col />
              <Col className="col-10 col-md-8">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <h1
                    className="text-center fonttt "
                    style={{ textShadow: "5px 5px 4px lightgrey" }}
                  >
                    BẢNG GIÁ
                  </h1>
                </motion.div>
              </Col>
              <Col />
            </Row>
          </div>
          <Table responsive="sm" hover striped bordered>
            <thead>
              <tr>
                <th>STT</th>
                <th>MÃ</th>
                <th>LỊCH_TRÌNH_TOUR</th>
                <th>THỜI_GIAN</th>
                <th>LỊCH_KHỞI_HÀNH</th>
                <th>PHƯƠNG_TIỆN</th>
                <th>GIÁ_TOUR</th>
                <th>HÀNH_ĐỘNG</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>XNMT 02</td>
                <td>TOUR MIỀN TÂY 2 NGÀY 1 ĐÊM</td>
                <td>2 Ngày 1 Đêm</td>
                <td>HẰNG NGÀY</td>
                <td className="ps-md-5 ps-4">
                  <DirectionsCarIcon />
                </td>
                <td>1.550.000VNĐ</td>
                <td>
                  <Button variant="warning">XEM TOUR</Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>XNMT 03</td>
                <td>TOUR MIỀN TÂY 3 NGÀY 2 ĐÊM</td>
                <td>3 ngày 2 đêm</td>
                <td>HẰNG NGÀY</td>
                <td className="ps-md-5 ps-4">
                  <DirectionsCarIcon />
                </td>
                <td>3.080.000VNĐ</td>
                <td>
                  <Button variant="warning">XEM TOUR</Button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>XN41116</td>
                <td>TOUR 3 NGÀY 2 ĐÊM: ĐẢO NGỌC PHÚ QUỐC</td>
                <td>3 Ngày 2 Đêm</td>
                <td>HẰNG NGÀY</td>
                <td className="ps-md-5 ps-4">
                  <DirectionsCarIcon />
                </td>
                <td>3.080.000VNĐ</td>
                <td>
                  <Button variant="warning">XEM TOUR</Button>
                </td>
              </tr>{" "}
              <tr>
                <td>4</td>
                <td>XNMT 01.1</td>
                <td>TOUR MIỀN TÂY 1 NGÀY</td>
                <td>1 Ngày</td>
                <td>HẰNG NGÀY</td>
                <td className="ps-md-5 ps-4">
                  <DirectionsCarIcon />
                </td>
                <td>450.000VNĐ</td>
                <td>
                  <Button variant="warning">XEM TOUR</Button>
                </td>
              </tr>{" "}
              <tr>
                <td>5</td>
                <td>XNMT 04.1</td>
                <td>
                  TOUR 4 NGÀY 3 ĐÊM: SA ĐÉC - CẦN THƠ - CÀ MAU
                  <br /> - BẠC LIÊU - SÓC TRĂNG
                </td>
                <td>4 Ngày 3 Đêm</td>
                <td>HẰNG NGÀY</td>
                <td className="ps-md-5 ps-4">
                  <DirectionsCarIcon />
                </td>
                <td>4.180.000VNĐ</td>
                <td>
                  <Button variant="warning">XEM TOUR</Button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>XNCM 03</td>
                <td>TOUR 3 NGÀY 2 ĐÊM: CẦN THƠ - ĐẤT MŨI CÀ MAU</td>
                <td>3 Ngày 2 Đêm</td>
                <td>Thứ 3 - Thứ 6</td>
                <td className="ps-md-5 ps-4">
                  <DirectionsCarIcon />
                </td>
                <td>2.890.000VNĐ</td>
                <td>
                  <Button variant="warning">XEM TOUR</Button>
                </td>
              </tr>{" "}
              <tr>
                <td>7</td>
                <td>XNMT 04</td>
                <td>
                  TOUR 4 NGÀY 3 ĐÊM: TIỀN GIANG - BẾN TRE - CẦN
                  <br /> THƠ - SÓC TRĂNG - BẠC LIÊU - CÀ MAU
                </td>
                <td>4 Ngày 3 Đêm</td>
                <td>Thứ 2 & Thứ 5</td>
                <td className="ps-md-5 ps-4">
                  <DirectionsCarIcon />
                </td>
                <td>1.550.000VNĐ</td>
                <td>
                  <Button variant="warning">XEM TOUR</Button>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>XNCĐ 01</td>
                <td>
                  TOUR 1 NGÀY: TÒA THÁNH TÂY NINH - NÚI BÀ ĐEN - ĐỊA ĐẠO CỦ CHI
                </td>
                <td>1 Ngày</td>
                <td>HẰNG NGÀY</td>
                <td className="ps-md-5 ps-4">
                  <DirectionsCarIcon />
                </td>
                <td>1.450.000VNĐ</td>
                <td>
                  <Button variant="warning">XEM TOUR</Button>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>XNSGAT 01</td>
                <td>ĂN TỐI TRÊN DU THUYỀN ĐÔNG DƯƠNG INDOCHINE CRUISE</td>
                <td>1 Ngày</td>
                <td>HẰNG NGÀY</td>
                <td className="ps-md-5 ps-4">
                  <DirectionsCarIcon />
                </td>
                <td>550.000VNĐ</td>
                <td>
                  <Button variant="warning">XEM TOUR</Button>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>XN51817</td>
                <td>TOUR 2 NGÀY 1 ĐÊM: ĐẢO NGỌC PHÚ QUỐC</td>
                <td>2 Ngày 1 Đêm</td>
                <td>HẰNG NGÀY</td>
                <td className="ps-md-5 ps-4">
                  <DirectionsCarIcon />
                </td>
                <td>1.980.000VNĐ</td>
                <td>
                  <Button variant="warning">XEM TOUR</Button>
                </td>
              </tr>{" "}
              <tr>
                <td>11</td>
                <td>XNCT CC 01</td>
                <td>
                  TOUR SÀI GÒN 1 NGÀY: THÀNH PHỐ HỒ CHÍ MINH - ĐỊA ĐẠO CỦ CHI
                </td>
                <td>1 Ngày</td>
                <td>HẰNG NGÀY</td>
                <td className="ps-md-5 ps-4">
                  <DirectionsCarIcon />
                </td>
                <td>850.000VNĐ</td>
                <td>
                  <Button variant="warning">XEM TOUR</Button>
                </td>
              </tr>{" "}
              <tr>
                <td>12</td>
                <td>XNMT 02.1</td>
                <td>TOUR 2 NGÀY 1 ĐÊM: CÁI BÈ - CÙ LAO TÂN PHONG - CẦN THƠ</td>
                <td>2 Ngày 1 Đêm</td>
                <td>HẰNG NGÀY</td>
                <td className="ps-md-5 ps-4">
                  <DirectionsCarIcon />
                </td>
                <td>1.850.000VNĐ</td>
                <td>
                  <Button variant="warning">XEM TOUR</Button>
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td>XN98186</td>
                <td>TOUR 1 NGÀY: NAM ĐẢO - LẶN BIỂN PHÚ QUỐC</td>
                <td>1 Ngày</td>
                <td>Hằng ngày</td>
                <td className="ps-md-5 ps-4">
                  <DirectionsCarIcon />
                </td>
                <td>550.000VNĐ</td>
                <td>
                  <Button variant="warning">XEM TOUR</Button>
                </td>
              </tr>{" "}
              <tr>
                <td>14</td>
                <td>XNMT 02.2</td>
                <td>TOUR 2 NGÀY 1 ĐÊM: ĐỒNG THÁP - CẦN THƠ</td>
                <td>4 Ngày 3 Đêm</td>
                <td>Hằng ngày</td>
                <td className="ps-md-5 ps-4">
                  <DirectionsCarIcon />
                </td>
                <td>1.850.000VNĐ</td>
                <td>
                  <Button variant="warning">XEM TOUR</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </motion.div>
    </>
  );
};
export default BangGia;

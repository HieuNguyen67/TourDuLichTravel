import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../assets/scss/TourMienTay3Ngay2Dem.scss"
import anhtour from "../assets/image/xnmt03-01-8881.png"
import Accordion from "react-bootstrap/Accordion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IDTour from "../assets/image/ID.png"
import ThongbaoTour from "../assets/image/thong-bao.png"
import TimeTour from "../assets/image/time.png";
import DiaDiemTour from "../assets/image/dia-diem.png";
import KhachSan from "../assets/image/KSan.png";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import mieuba from "../assets/image/mieu-ba-chua-xu-nui-sam-an-giang.jpg"
import picture1 from "../assets/image/picture-1.png";
import picture2 from "../assets/image/picture-2.png";
import picture3 from "../assets/image/picture-3.png";
import picture4 from "../assets/image/picture-4.png";
import picture5 from "../assets/image/picture-5.png";
import picture6 from "../assets/image/picture-6.png";
import picture7 from "../assets/image/picture-7.png";
import Lightbox from "yet-another-react-lightbox";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import React from "react";

const TourMienTay3Ngay2Dem = () => {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleCloseOpen = () => setOpen(false);
    const slides = [
       { src: picture1 },
       { src: picture2 },
       { src: picture3 },
       { src: picture4 },
       { src: picture5 },
       { src: picture6 },
       { src: picture7 },];
  return (
    <>
      <div className="boxGioiThieu"></div>

      <Container>
        <p className="mt-4 d-flex text-center">
          <p>
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link to="/" className="text-decoration-none text-dark">
                <span>Trang chủ</span>
              </Link>{" "}
            </motion.a>
          </p>
          <p> &nbsp; {">"} &nbsp;</p>
          <p>
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link
                to="/TourTongHop"
                className="text-decoration-none text-dark"
              >
                <span>Tour </span>
              </Link>
            </motion.a>
          </p>
          <p> &nbsp; {">"} &nbsp;</p>
          <p className="">
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link
                to="/TourMienTayTrongNgay"
                className="text-decoration-none text-dark"
              >
                <span>Miền Tây </span>
              </Link>
            </motion.a>
          </p>
          <p> &nbsp; {">"} &nbsp;</p>
          <p>
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link
                to="/TourMienTayTrongNgay"
                className="text-decoration-none text-dark"
              >
                <span> Tour Miền Tây 3 Ngày 2 Đêm </span>
              </Link>
            </motion.a>
          </p>
        </p>
        <div className="  my-md-5 mt-2 mb-3">
          <Row className="d-flex flex-column">
            <Col className="col-10 col-md-8">
              <h2 className="text-start text-info">
                TOUR MIỀN TÂY 3 NGÀY 2 ĐÊM
              </h2>
            </Col>
            <Col className="col-10 col-md-8">
              <p className="text-start fs-5">
                Giá tour gốc/khách:{" "}
                <span className="text-warning">3.080.000VNĐ</span>
              </p>
            </Col>
            <Col className="col-10 col-md-8">
              <Link to="/DetailTourMienTay3Ngay2Dem">
                <Button variant="warning">ĐẶT NGAY</Button>{" "}
              </Link>
            </Col>
          </Row>
        </div>
        <div>
          <Tabs
            defaultActiveKey="Chương trình tour"
            id="fill-tab-example"
            className="mb-3 nav-linkk back"
            fill
          >
            <Tab eventKey="Chương trình tour" title="Chương trình tour">
              <h3 className="text-dark">Chương trình tour</h3>
              <Row className="d-flex flex-row my-md-5 my-3">
                <Col className="col-md-6 col-12 mx-md-2 mx-0 mb-md-0 mb-3">
                  <img src={anhtour} className="w-100 h-100 rounded-3" />
                </Col>
                <Col className="mx-2">
                  <Accordion defaultActiveKey={["0", "1", "2"]} alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        {" "}
                        <h4>
                          <LocationOnIcon />
                          <span className="text-dark fw-bold">NGÀY 1:</span> TP.
                          HCM - MỸ THO - BẾN TRE - CẦN THƠ{" "}
                        </h4>
                      </Accordion.Header>
                      <Accordion.Body className="">
                        <span className="fw-bold">Buổi sáng:</span> Đón khách
                        tại điểm hẹn sau đó khởi hành đi Mỹ Tho - Bến Tre {">"}{" "}
                        Tham quan Chùa Vĩnh Tràng ngôi chùa thờ Phật lớn nhất
                        tỉnh Tiền Giang {">"} Tham quan dòng sông Tiền với 4 cù
                        lao Long - Lân - Quy - Phụng {">"} Qua cồn Lân - cù lao
                        Thới sơn thưởng thức trà mật ong, dạo quanh miệt vườn
                        bằng xe ngựa {">"} Tham quan cơ sở chế biến kẹo dừa đặc
                        sản nổi tiếng Bến Tre tìm hiểu cách chế biến và tự tay
                        gói kẹo dừa {">"} Trải nghiệm cảm giác chèo xuồng ba lá
                        len lỏi vào các con rạch nhỏ hòa mình vào khung cảnh
                        thiên nhiên dưới tán lá của các vườn trái cây và thưởng
                        thức những giai điệu đờn ca tài tử.
                        <br />
                        Buổi chiều: Qua Cồn Phụng tham quan tìm hiểu về di tích
                        đạo Dừa {">"} Dùng cơm trưa tại nhà hàng trên Cồn Phụng
                        {">"} tự do dạo quanh cù lao tham quan cảnh đẹp miền quê
                        yên ả hoặc trải nghiệm những trò chơi dân dã với chi phí
                        tự túc như: Đi cầu khỉ, bắt cá, câu cá sấu… {">"} Rời
                        thành phố Mỹ Tho khởi hành đến thành phố Cần Thơ, nhận
                        phòng khách sạn {">"} Dùng cơm tối du thuyền {">"} Tự do
                        tham quan, khám phá Cần Thơ về đêm.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        {" "}
                        <h4>
                          <LocationOnIcon />
                          <span className="text-dark fw-bold">NGÀY 2:</span> CẦN
                          THƠ - CHÂU ĐỐC{" "}
                        </h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        <span className="fw-bold">Buổi sáng: </span>Dùng điểm
                        tâm tại khách sạn {">"} Làm thủ tục trả phòng {">"} Tham
                        quan chợ nổi Cái Răng một trong những chợ nổi lớn nhất
                        đồng bằng sông Cửu Long {">"} Tham quan Lò hũ tiếu làng
                        nghề truyền thống làm hủ tiếu nổi tiếng khắp nơi của
                        vùng đất Cần Thơ, tham quan Cồn Sơn và trải nghiệm loại
                        hình độc đáo xem cá lốc bay và tự do tham quan vườn trái
                        cây theo mùa {">"} Dùng cơm trưa tại nhà hàng trên Cồn
                        Sơn với các món ăn đậm chất như bánh xèo miền tây. gỏi
                        bong điên điển + lẩu cá lốc nhúng mẽ bong súng... {">"}{" "}
                        Đoàn khởi hành đi Châu Đốc tham quan rừng tràm Trà Sư
                        mệnh danh là “con đường nước” vùng Tây sông Hậu.
                        <br />
                        <span className="fw-bold">Buổi chiều: </span> Đến Châu
                        Đốc du khách nhận phòng khách sạn và dùng cơm tối {">"}{" "}
                        Tham quan, khám phá Châu Đốc về đêm.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        {" "}
                        <h4>
                          <LocationOnIcon />
                          <span className="text-dark fw-bold">
                            NGÀY 3:
                          </span>{" "}
                          CHÂU ĐỐC - TP.HCM{" "}
                        </h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        <span className="fw-bold">Buổi sáng: </span> Dùng điểm
                        tâm sáng, sau đó làm thủ tục trả phòng {">"} Đoàn lên
                        thuyền tham quan làng Bè nơi ươm và nuôi cá Basa xuất
                        khẩu nổi tiếng trên toàn quốc {">"} Tham quan làng người
                        Chăm khám phá văn hóa ẩm thực người Chăm dòng Islam{" "}
                        {">"}
                        Dùng cơm trưa {">"} Đoàn khởi hành quay về thành phố Hồ
                        Chí Minh, kết thúc tour du lịch miền tây 5 ngày 2 đêm Mỹ
                        Tho - Cần Thơ - Châu Đốc.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="Thông tin tour" title="Thông tin tour">
              <Row className="d-flex flex-row my-4 my-md-0">
                <Col className="col-12 col-md mt-2 my-md-5">
                  <img src={IDTour} style={{ width: "30px", height: "25px" }} />{" "}
                  XNMT 03
                </Col>
                <Col className="col-12 col-md mt-2 my-md-5">
                  <img
                    src={ThongbaoTour}
                    style={{ width: "30px", height: "25px" }}
                  />{" "}
                  Hằng ngày
                </Col>
                <Col className="col-12 col-md mt-2 my-md-5">
                  <img
                    src={TimeTour}
                    style={{ width: "30px", height: "25px" }}
                  />{" "}
                  3 Ngày 2 Đêm
                </Col>
                <Col className="col-12 col-md mt-2 my-md-5">
                  <img
                    src={DiaDiemTour}
                    style={{ width: "30px", height: "25px" }}
                  />{" "}
                  Ô tô
                </Col>
                <Col className="col-12 col-md mt-2 my-md-5">
                  {" "}
                  <img
                    src={KhachSan}
                    style={{ width: "30px", height: "25px" }}
                  />{" "}
                  <StarBorderPurple500Icon />
                  <StarBorderPurple500Icon />
                  <StarBorderPurple500Icon />
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="Tổng quan tour" title="Tổng quan tour">
              <div className="my-5 container col-md-10 col-12">
                <h2 className="text-center ">
                  Ta về Châu Đốc núi Sam Nơi bà Chúa Xứ khói lam đường chiều
                </h2>
                <p className="my-5 fs-5">
                  <span
                    className="fw-bold fs-1"
                    style={{ fontFamily: "Script" }}
                  >
                    Châu Đốc
                  </span>{" "}
                  từ lâu đã được xem là miền đất không thể bỏ qua đối với du
                  khách khi du lịch miền Tây bởi cảnh thiên nhiên thơ mộng hữu
                  tình và những điểm du lịch hấp dẫn. Trên hành trình du lịch
                  Châu Đốc, tour miền Tây 3 ngày 2 đêm: Mỹ Tho - Bến Tre - Cần
                  Thơ - Châu Đốc sẽ mang đến cho du khách nhiều trải nghiệm thú
                  vị như tham quan chợ nổi Cái Răng, chèo xuồng ba lá giữ hai
                  hàng dừa nước rợp mát, đi dạo miệt vườn thưởng thức trái cây
                  và thư giãn với giai điệu đàn ca tài tử mùi mẫn. Bên cạnh đó,
                  du khách còn có dịp hòa mình vào thiên nhiên, tận hưởng không
                  gian trong lành và xanh mướt khi ghé thăm rừng tràm Trà Sư -
                  nơi được mệnh danh là "con đường nước" vùng Tây sông Hậu. Tour
                  Bốn Phương tin rằng tour miền Tây 3 ngày 2 đêm sẽ giúp bạn thư
                  giãn sau những giờ làm việc căng thẳng.{" "}
                </p>
                <img src={mieuba} className="w-100 h-100 rounded-4 shadow" />
              </div>
            </Tab>
            <Tab eventKey="Điều kiện tour" title="Điều kiện tour">
              <h3 className="text-start ">Điều kiện tour</h3>{" "}
              <div className="my-3 pb-md-5">
                <p className="lh-sm fw-lighter">
                  <span className="fw-bold">Tour bao gồm:</span>
                  <br />- Xe du lịch đời mới máy lạnh.
                  <br />- HDV chuyên nghiệp suốt tuyến (tour ghép với người nước
                  ngoài).
                  <br />- Ăn cơm phần 4 -5, món 3 bữa trưa, 2 bữa ăn tối + ăn 2
                  bữa sáng tại khách sạn.
                  <br />- Tàu tham quan trên sông (có trang bị áo phao) - Bến
                  Tre + chợ nổi + làng bè + Trà Sư, xuồng chèo, trái cây, trà
                  mật ong, đờn ca tài tử, xe ngựa.
                  <br />- Bảo hiểm du lịch 20.000.000/vụ.
                  <br />- Khách sạn tiêu chuẩn, 2-3 khách/phòng.
                  <br />- Nước suối 1 chai/người.
                  <br />
                  <span className="fw-bold">Tour không bao gồm:</span>
                  <br />- Phụ thu phòng đơn 200.000 vnd/khách (KS 2 sao),
                  300.000 vnd/khách (KS 3 sao).
                  <br />- Chi phí tham quan ngoài chương trình.
                  <br />- Chi phí ăn uống ngoài chương trình.
                  <br />- Thuế VAT 08 %.
                  <br />
                  <span className="fw-bold">Điều kiện trẻ em:</span>
                  <br />- Trẻ em dưới 4 tuổi được miễn phí vé (ngồi chung với
                  người lớn).
                  <br />- Trẻ từ 4-10 tuổi tính 75% giá vé người lớn.
                  <br />- Trẻ trên 10 tuổi tính giá người lớn.
                  <br />
                  <span className="fw-bold fst-italic">Lưu ý: </span>
                  <span className="fst-italic">
                    2 người lớn chỉ được kèm 1 trẻ em. Từ bé thứ 2 tính giá như
                    người lớn.
                  </span>
                  <br />
                  <span className="fw-bold">Quy định hủy tour:</span>
                  <br />
                  Trường hợp hủy không báo trước hoặc đến trễ giờ khởi hành, quý
                  khách phải chịu phạt 100% phí tour.
                  <br />
                  <span className="fw-bold">
                    Quy định hủy đối với ngày lễ, tết
                  </span>
                  <br />
                  - Hủy trước 07 ngày khởi hành chịu phạt 50% phí tour.
                  <br />- Hủy trước 03-09 ngày khởi hành chịu phạt 75% phí tour.
                  <br />- Hủy trước 02 ngày khởi hành chịu phạt 100 % phí tour.
                  <br />
                  <span className="fw-bold">
                    Quy định hủy đối với ngày thường
                  </span>
                  <br />
                  - Hủy trước 07 ngày khởi hành chịu phạt 50% phí tour.
                  <br />- Hủy trước 03-07 ngày khởi hành chịu phạt 75% phí tour.
                  <br />- Hủy trước 02 ngày khởi hành chịu phạt 100 % phí tour.
                  <br />
                  <span>
                    <span className="fw-bold">Lưu ý:</span> Tour Bốn Phương
                    không chịu trách nhiệm về mọi yêu cầu hủy tour khi chưa nhận
                    và xác nhận lại với quý khách. Trong trường hợp này sẽ áp
                    dụng phí hủy hoặc bỏ tour.
                  </span>
                </p>
              </div>
            </Tab>
            <Tab eventKey="Hình ảnh tour" title="Hình ảnh tour">
              <Lightbox
                open={open}
                close={handleCloseOpen}
                slides={slides}
                className="d-block w-100 "
              />
              <h3 className="text-start ">Hình ảnh</h3>{" "}
              <Row className="d-flex flex-row my-md-5 my-4  pb-md-5">
                <Col className="col-md-6 col-6 px-1 py-1">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleOpen}
                  >
                    <img
                      src={picture1}
                      className="sizepicture w-100 rounded-3 shadow"
                    />
                  </motion.div>
                </Col>
                <Col className="col-md-2  col-6 px-1 py-1">
                  <Row className="d-flex flex-column">
                    <Col className="pb-1">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <img
                          src={picture2}
                          className="sizepicture1 w-100 rounded-3 shadow"
                          onClick={handleOpen}
                        />
                      </motion.div>
                    </Col>
                    <Col>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <img
                          src={picture3}
                          className="sizepicture1 w-100 rounded-3 shadow"
                          onClick={handleOpen}
                        />
                      </motion.div>
                    </Col>
                  </Row>
                </Col>
                <Col className="col-md-2  col-6 px-1 py-1">
                  <Row className="d-flex flex-column">
                    <Col className="pb-1">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <img
                          src={picture4}
                          className="sizepicture1 w-100 rounded-3 shadow"
                          onClick={handleOpen}
                        />
                      </motion.div>
                    </Col>
                    <Col>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <img
                          src={picture5}
                          className="sizepicture1 w-100 rounded-3 shadow"
                          onClick={handleOpen}
                        />
                      </motion.div>
                    </Col>
                  </Row>
                </Col>
                <Col className="col-md-2   col-6 px-1 py-1">
                  <Row className="d-flex flex-column">
                    <Col className="pb-1">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <img
                          src={picture6}
                          className="sizepicture1 w-100 rounded-3 shadow"
                          onClick={handleOpen}
                        />
                      </motion.div>
                    </Col>
                    <Col>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <img
                          src={picture7}
                          className="sizepicture1 w-100 rounded-3 shadow"
                          onClick={handleOpen}
                        />
                      </motion.div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Tab>
          </Tabs>
          <h3 className="text-start text-info"><CalendarMonthIcon/> Ngày khởi hành khác</h3>
        </div>
      </Container>
    </>
  );
};
export default TourMienTay3Ngay2Dem;

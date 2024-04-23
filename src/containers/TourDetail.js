import { Container } from "@mui/system";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import Header from "../components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackToTop from "../components/BackToTop";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../assets/scss/TourMienTay3Ngay2Dem.scss";
import Accordion from "react-bootstrap/Accordion";
import picture1 from "../assets/image/picture-1.png";
import picture2 from "../assets/image/picture-2.png";
import picture3 from "../assets/image/picture-3.png";
import picture4 from "../assets/image/picture-4.png";
import picture5 from "../assets/image/picture-5.png";
import picture6 from "../assets/image/picture-6.png";
import picture7 from "../assets/image/picture-7.png";
import Lightbox from "yet-another-react-lightbox";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";

const TourDetail = () => {
  const { tourID, userID } = useParams();
  const { user, userId } = useAuth();
  console.log("ID:", tourID);
  console.log("user:", user);
  const [tour, setTour] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin tour và hình ảnh:", error);
      }
    };

    fetchTour();
  }, [tourID]);
  const navigate = useNavigate();

  const handleEdit = (tourID) => {
    if (!user) {
      console.error("User not logged in");
      navigate("/Login");
      return;
    }
    navigate(`/booking-tour/${tourID}`);
  };
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
    { src: picture7 },
  ];
  const formatCurrency = (price) => {
    const priceInteger = Math.round(price * 100);

    const formattedPrice = (priceInteger / 100).toLocaleString("vi-VN", {
      currency: "VND",
    });

    return formattedPrice + " VNĐ";
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
        {loading ? (
          <h2>
            {" "}
            <Spinner animation="grow" variant="dark" />
            Loading...
          </h2>
        ) : (
          <Container className="mt-5 mx-auto  ">
            <div className="  my-md-5 mt-2 mb-3">
              <Row className="d-flex flex-column">
                <Col className="col-10 col-md-12">
                  <h2 className="text-start text-info">{tour.name}</h2>
                </Col>
                <Col className="col-10 col-md-8">
                  <p className="text-start fs-5">
                    Giá tour gốc/khách:{" "}
                    <span className="text-warning">
                      {" "}
                      {formatCurrency(tour.price)}
                    </span>
                  </p>

                  <p className="text-dark"> Số chỗ còn: {tour.quantity}</p>
                </Col>

                <Col className="col-10 col-md-8">
                  <Button variant="warning" onClick={() => handleEdit(tour.id)}>
                    ĐẶT NGAY
                  </Button>{" "}
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
                  <h3 className="text-dark">CHƯƠNG TRÌNH TOUR</h3>
                  <Row className="d-flex flex-row my-md-5 my-3">
                    <Col className="col-md-6 col-12 mx-md-2 mx-0 mb-md-0 mb-3">
                      {images.length > 0 && (
                        <img
                          src={`data:image/jpeg;base64,${images[0]}`}
                          alt="First Image"
                          style={{
                            width: "100%",
                            height: "500px",
                            marginRight: "10px",
                          }}
                          className="rounded-4"
                        />
                      )}
                    </Col>
                    <Col className="mx-2">
                      <Accordion defaultActiveKey={["0", "1", "2"]} alwaysOpen>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            {" "}
                            <h4>
                              <span className="text-dark fw-bold">
                                MÔ TẢ CHI TIẾT TOUR:
                              </span>{" "}
                            </h4>
                          </Accordion.Header>
                          <Accordion.Body className="">
                            <Row>
                              <Col>
                                {" "}
                                <p className="text-dark fw-bold">
                                  {" "}
                                  Ngày bắt đầu:{" "}
                                  <span className="text-danger fw-bold">
                                    {new Date(
                                      tour.start_date
                                    ).toLocaleDateString()}
                                  </span>
                                </p>
                              </Col>
                              <Col>
                                <p className="text-dark fw-bold">
                                  {" "}
                                  Ngảy kết thúc:{" "}
                                  <span className="text-danger fw-bold">
                                    {new Date(
                                      tour.end_date
                                    ).toLocaleDateString()}
                                  </span>
                                </p>
                              </Col>
                            </Row>

                            <p>{tour.description}</p>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="Bảng giá tour" title="Bảng giá tour">
                  <h3 className="text-dark">BẢNG GIÁ TOUR</h3>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Người lớn(Trên 11 tuổi) </th>
                        <th>Trẻ em(4 - 11 tuổi) </th>
                        <th>Trẻ nhỏ({"<"} 4 tuổi) </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
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
                </Tab>

                <Tab eventKey="Điều kiện tour" title="Điều kiện tour">
                  <h3 className="text-start ">ĐIỀU KIỆN TOUR</h3>{" "}
                  <div className="my-3 pb-md-5">
                    <p className="lh-sm fw-lighter">
                      <span className="fw-bold">Tour bao gồm:</span>
                      <br />- Xe du lịch đời mới máy lạnh.
                      <br />- HDV chuyên nghiệp suốt tuyến (tour ghép với người
                      nước ngoài).
                      <br />- Ăn cơm phần 4 -5, món 3 bữa trưa, 2 bữa ăn tối +
                      ăn 2 bữa sáng tại khách sạn.
                      <br />- Tàu tham quan trên sông (có trang bị áo phao) -
                      Bến Tre + chợ nổi + làng bè + Trà Sư, xuồng chèo, trái
                      cây, trà mật ong, đờn ca tài tử, xe ngựa.
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
                      <br />- Trẻ em dưới 4 tuổi được miễn phí vé (ngồi chung
                      với người lớn).
                      <br />- Trẻ từ 4-10 tuổi tính 75% giá vé người lớn.
                      <br />- Trẻ trên 10 tuổi tính giá người lớn.
                      <br />
                      <span className="fw-bold fst-italic">Lưu ý: </span>
                      <span className="fst-italic">
                        2 người lớn chỉ được kèm 1 trẻ em. Từ bé thứ 2 tính giá
                        như người lớn.
                      </span>
                      <br />
                      <span className="fw-bold">Quy định hủy tour:</span>
                      <br />
                      Trường hợp hủy không báo trước hoặc đến trễ giờ khởi hành,
                      quý khách phải chịu phạt 100% phí tour.
                      <br />
                      <span className="fw-bold">
                        Quy định hủy đối với ngày lễ, tết
                      </span>
                      <br />
                      - Hủy trước 07 ngày khởi hành chịu phạt 50% phí tour.
                      <br />- Hủy trước 03-09 ngày khởi hành chịu phạt 75% phí
                      tour.
                      <br />- Hủy trước 02 ngày khởi hành chịu phạt 100 % phí
                      tour.
                      <br />
                      <span className="fw-bold">
                        Quy định hủy đối với ngày thường
                      </span>
                      <br />
                      - Hủy trước 07 ngày khởi hành chịu phạt 50% phí tour.
                      <br />- Hủy trước 03-07 ngày khởi hành chịu phạt 75% phí
                      tour.
                      <br />- Hủy trước 02 ngày khởi hành chịu phạt 100 % phí
                      tour.
                      <br />
                      <span>
                        <span className="fw-bold">Lưu ý:</span> Tour Bốn Phương
                        không chịu trách nhiệm về mọi yêu cầu hủy tour khi chưa
                        nhận và xác nhận lại với quý khách. Trong trường hợp này
                        sẽ áp dụng phí hủy hoặc bỏ tour.
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
                  <h3 className="text-start ">HÌNH ẢNH</h3>{" "}
                  <Row className="row-cols-4">
                    {images.map((base64Image, index) => (
                      <Col className="">
                        <img
                          className="rounded-4"
                          key={index}
                          src={`data:image/jpeg;base64,${base64Image}`}
                          alt={`Image ${index}`}
                          style={{
                            width: "100%",
                            height: "250px",
                            padding: "5px",
                          }}
                        />
                      </Col>
                    ))}
                  </Row>
                </Tab>
              </Tabs>
            </div>
          </Container>
        )}
      </motion.div>
    </>
  );
};
export default TourDetail;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackToTop from "../components/BackToTop";
import { motion, useAnimation } from "framer-motion";
import { Button, Container } from "react-bootstrap";
import { useNavigate, Link, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";

const Profile = () => {
  const navigate = useNavigate();

  const { userID } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5020/v1/api/admin/lay-thong-tin-user/${userID}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin người dùng:", error);
      }
    };

    fetchUser();
  }, [userID]);
  const handleEdit = (userID) => {
    console.log(`Sửa thông tin của user có ID: ${userID}`);
    navigate(`/profile/editprofile/${userID}`);
  };

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrdersByUser();
  }, [userID]);

  const fetchOrdersByUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5020/v1/api/admin/api/orders/user/${userID}`
      );
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders by user:", error);
    }
  };
  const formatCurrency = (price) => {
    const priceInteger = Math.round(price * 100);

    const formattedPrice = (priceInteger / 100).toLocaleString("vi-VN", {
      currency: "VND",
    });

    return formattedPrice + " VNĐ";
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "Tiếp nhận":
        return "yellow";
      case "Đã thanh toán":
        return "#99FF99";
      case "Đã huỷ":
        return "#FF6633";
      case "Đã kết thúc":
        return "#FF9900";
      default:
        return "black";
    }
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
        <Container>
          <div className="mt-4 ">
            <h1 className="text-center my-5 ">TÀI KHOẢN</h1>

            <Tabs
              defaultActiveKey="Chương trình tour"
              id="fill-tab-example"
              className="mb-3 nav-linkk back"
              fill
            >
              <Tab eventKey="Chương trình tour" title="HỒ SƠ CÁ NHÂN">
                <h3 className="text-danger  pt-3">THÔNG TIN CÁ NHÂN</h3>
                {user ? (
                  <div className="pt-3  pb-5">
                    <Row className="my-4">
                      <Col>
                        <h4>
                          Username:{" "}
                          <span className="text-primary">{user.username}</span>
                        </h4>
                      </Col>
                      <Col>
                        {" "}
                        <h4>
                          Email:{" "}
                          <span className="text-primary">{user.email}</span>
                        </h4>
                      </Col>
                    </Row>
                    <Row className="my-4">
                      <Col>
                        <h4>
                          Họ và tên:{" "}
                          <span className="text-primary">{user.fullname}</span>
                        </h4>
                      </Col>
                      <Col>
                        {" "}
                        <h4>
                          Số điện thoại:{" "}
                          <span className="text-primary">{user.phone}</span>
                        </h4>
                      </Col>
                    </Row>

                    <h4 className="my-4 mb-5">
                      Địa chỉ:{" "}
                      <span className="text-primary">{user.address}</span>
                    </h4>
                    <hr />

                    <Button
                      className="btn-warning col-3 p-3 my-4 fs-5 fw-bold "
                      onClick={() => handleEdit(user.id)}
                    >
                      Chỉnh sửa thông tin
                    </Button>

                    {/* Hiển thị các thông tin cá nhân khác cần thiết */}
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
              </Tab>

              <Tab eventKey="Quanlydondattou" title="ĐƠN ĐẶT TOUR">
                <h3 className="text-danger pt-3">DANH SÁCH ĐƠN ĐẶT TOUR</h3>

                <Table striped bordered hover className=" mt-4">
                  <thead>
                    <tr>
                      <th>Mã Booking</th>
                      <th>Hình ảnh Tour</th>
                      <th>Tên Tour</th>
                      <th>Thời gian</th>

                      <th>SL Đặt Chỗ</th>
                      <th>Ngày đặt</th>
                      <th>Tổng giá</th>
                      <th>Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.OrderID}>
                        <td>{order.id}</td>
                        <td>
                          {" "}
                          <img
                            src={
                              order.image
                                ? `data:image/jpeg;base64,${order.image.toString(
                                    "base64"
                                  )}`
                                : ""
                            }
                            alt="Tour"
                            style={{ width: "150px", height: "100px" }}
                          />
                        </td>
                        <td>{order.name}</td>
                        <td>
                          {new Date(order.start_date).toLocaleDateString()} -{" "}
                          {new Date(order.end_date).toLocaleDateString()}
                        </td>
                        <td className="lh-lg">
                          {" "}
                          <span className="fw-bold">Số người lớn: </span>
                          {order.quantity}
                          <br />
                          <span className="fw-bold">Số trẻ em: </span>
                          {order.child_quantity}
                          <br />
                          <span className="fw-bold">Số trẻ nhỏ: </span>
                          {order.infant_quantity}
                          <br />
                        </td>
                        <td>
                          {new Date(order.booking_date_time).toLocaleDateString(
                            "vi-VN",
                            {
                              year: "numeric",
                              month: "numeric",
                              day: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                              second: "numeric",
                            }
                          )}
                        </td>
                        <td className="text-danger fw-bold">
                          {formatCurrency(order.total_price)}
                        </td>
                        <td
                          style={{
                            backgroundColor: getStatusColor(order.status),
                          }}
                        >
                          {order.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Row className="mb-5">
                  <Col></Col>
                  <Col className="col-7">
                    <p className="text-danger fs-5">
                      Khách hàng có nhu cầu huỷ tour vui lòng liên hệ đến
                      Hotline để kiểm tra và huỷ tour
                    </p>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </div>
        </Container>
      </motion.div>
    </>
  );
};

export default Profile;

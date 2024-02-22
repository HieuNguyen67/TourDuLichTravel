import SIDEBAR from "./componentss/sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header1 from "./componentss/Header1";
import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthContextAdmin";
import { useNavigate, Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";

const OrderDetails = () => {
  const { orderID } = useParams();
  const [orderDetails, setOrderDetails] = useState({});
  const [newStatus, setNewStatus] = useState("");
  useEffect(() => {
    // Fetch order details when the component mounts
    fetchOrderDetails();
  }, [orderID]);

  const fetchOrderDetails = async () => {
    try {
      const response = await axios.get(
        `https://backend-travel-tour-bbvh.onrender.com/v1/api/admin/api/orders/${orderID}`
      );
      setOrderDetails(response.data);
    } catch (error) {
      console.error("Error fetching order details:", error);
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

  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
  };

  const handleUpdateStatus = async () => {
    try {
      // Send a request to update the status
      await axios.put(
        `https://backend-travel-tour-bbvh.onrender.com/v1/api/admin/api/orders/${orderID}/status`,
        {
          status: newStatus,
        }
      );
      // Refetch order details to update the displayed information
      fetchOrderDetails();
      toast.success("Cập nhật trạng thái thành công", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        navigate("/TourDuLichTravel/admin/OrderList");
      }, 1500);
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Error updating status", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <Header1 />
      <div className="boxGioiThieu"></div>
      <Row className="d-flex flex-row">
        <Col className="col-2">
          <SIDEBAR />
        </Col>
        <Col className="col-10 ">
          <div className="ms-5 ps-3 mt-3">
            <h2>Order Details</h2>
            <Table striped bordered hover className="my-5">
              <thead>
                <tr>
                  <th>Tên Khách Hàng</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>Địa chỉ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{orderDetails.fullname}</td>
                  <td>{orderDetails.email}</td>
                  <td>{orderDetails.phone}</td>
                  <td>{orderDetails.address}</td>
                </tr>
              </tbody>
            </Table>
            <hr />
            <Table striped bordered hover className="my-5">
              <thead>
                <tr>
                  <th>Mã Tour</th>
                  <th>Tên Tour</th>
                  <th>Ngày bắt đầu</th>
                  <th>Ngày kết thúc</th>
                  <th>SL Đặt chỗ</th>
                  <th>Thời gian đặt</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{orderDetails.id}</td>
                  <td>{orderDetails.name}</td>
                  <td className="text-primary fw-bold">
                    {" "}
                    {new Date(orderDetails.start_date).toLocaleDateString()}
                  </td>
                  <td className="text-primary fw-bold">
                    {" "}
                    {new Date(orderDetails.end_date).toLocaleDateString()}
                  </td>
                  <td className="lh-lg">
                    {" "}
                    <span className="fw-bold">Số người lớn: </span>
                    {orderDetails.quantity}
                    <br />
                    <span className="fw-bold">Số trẻ em: </span>
                    {orderDetails.child_quantity}
                    <br />
                    <span className="fw-bold">Số trẻ nhỏ: </span>
                    {orderDetails.infant_quantity}
                    <br />
                  </td>
                  <td>
                    {new Date(
                      orderDetails.booking_date_time
                    ).toLocaleDateString("vi-VN", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                    })}
                  </td>
                </tr>
              </tbody>
            </Table>
            <Row>
              {" "}
              <Col className="col-8"></Col>
              <Col>
                <h3>
                  Tổng giá:{" "}
                  <span className="text-danger fw-bold">
                    {formatCurrency(orderDetails.total_price)}
                  </span>
                </h3>
              </Col>
            </Row>{" "}
            <hr />
            <Row>
              {" "}
              <Col>
                <div>
                  <h4 htmlFor="status">Cập nhật trạng thái:</h4>
                  <br />

                  <Form.Select
                    aria-label="Default select example"
                    id="status"
                    value={newStatus}
                    onChange={handleStatusChange}
                  >
                    <option>Open this select menu</option>
                    <option value="Tiếp nhận">Tiếp nhận</option>
                    <option value="Đã thanh toán">Đã thanh toán</option>
                    <option value="Đã huỷ">Đã huỷ</option>
                    <option value="Đã kết thúc">Đã kết thúc</option>
                  </Form.Select>
                </div>
                <br />
                <div>
                  <Button onClick={handleUpdateStatus}>Cập nhật</Button>
                </div>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default OrderDetails;

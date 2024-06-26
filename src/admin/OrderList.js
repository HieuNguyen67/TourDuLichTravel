import SIDEBAR from "./componentss/sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header1 from "./componentss/Header1";
import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthContextAdmin";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "https://backend-do-an-chuyen-nganh.vercel.app/v1/api/admin/api/orders"
      );
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  const { adminToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!adminToken) {
      navigate("/admin");
    }
  }, [adminToken, navigate]);

  if (!adminToken) {
    return null;
  }
  const formatCurrency = (price) => {
    const priceInteger = Math.round(price * 100);

    const formattedPrice = (priceInteger / 100).toLocaleString("vi-VN", {
      currency: "VND",
    });

    return formattedPrice;
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
      <ToastContainer />
      <Header1 />
      <div className="boxGioiThieu"></div>
      <Row className="d-flex flex-row">
        <Col className="col-2">
          <SIDEBAR />
        </Col>
        <Col className="col-10 ">
          <div className="ms-5 ps-3 mt-3">
            <h2>Order List</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Mã Booking</th>
                  <th>Tên Tour</th>
                  <th>Thông tin KH</th>

                  <th>Dữ liệu tour</th>
                  <th>Thời gian đặt</th>
                  <th>Trạng thái</th>
                  <th>Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.OrderID}>
                    <td>{order.id}</td>
                    <td>{order.name}</td>
                    <td className="lh-lg">
                      <span className="fw-bold">Tên: </span>
                      {order.fullname}
                      <br />
                      <span className="fw-bold">Email: </span>
                      {order.email}
                      <br />

                      <span className="fw-bold">Phone: </span>
                      {order.phone}
                      <br />

                      <span className="fw-bold">Địa chỉ: </span>
                      {order.address}
                      <br />
                    </td>

                    <td className="lh-lg">
                      <span className="fw-bold">Ngày bắt đầu: </span>
                      <span className="text-primary fw-bold">
                        {new Date(order.start_date).toLocaleDateString()}
                      </span>
                      <br />
                      <span className="fw-bold">Ngày kết thúc: </span>
                      <span className="text-primary fw-bold">
                        {new Date(order.end_date).toLocaleDateString()}
                      </span>
                      <br />
                      <span className="fw-bold">Số người lớn: </span>
                      {order.quantity}
                      <br />
                      <span className="fw-bold">Số trẻ em: </span>
                      {order.child_quantity}
                      <br />
                      <span className="fw-bold">Số trẻ nhỏ: </span>
                      {order.infant_quantity}
                      <br />
                      <span className="fw-bold">Tổng tiền: </span>
                      <span className="text-danger fw-bold">
                        {formatCurrency(order.total_price)}
                      </span>

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
                    <td
                      style={{
                        backgroundColor: getStatusColor(order.status),
                      }}
                    >
                      {order.status}
                    </td>
                    <td>
                      <Link to={`/admin/OrderList/${order.id}`}>
                        <Button className="col-12"> Chi tiết</Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default OrderList;

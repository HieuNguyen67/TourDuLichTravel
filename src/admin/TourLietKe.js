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
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
const TourLietKe = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Gọi API để lấy danh sách tour từ backend
    const fetchTours = async () => {
      try {
        const response = await axios.get(
          "https://backend-do-an-chuyen-nganh.vercel.app/v1/api/admin/get-tours"
        );
        setTours(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };

    fetchTours();
  }, []); // Chạy một lần khi component mount

  const handleDelete = async (tourID) => {
    try {
      // Hiển thị thông báo xác nhận
      const confirm = window.confirm(
        "Bạn có chắc chắn muốn xóa tour này không?"
      );
      if (!confirm) {
        return; // Người dùng không xác nhận, không thực hiện xóa
      }

      // Gọi API để xóa tour từ backend
      await axios.delete(
        `https://backend-do-an-chuyen-nganh.vercel.app/v1/api/admin/delete-tour/${tourID}`
      );

      // Cập nhật lại danh sách tour sau khi xóa
      setTours(tours.filter((tour) => tour.id !== tourID));

      // Hiển thị thông báo thành công
      toast.success("Tour đã được xóa thành công.");
    } catch (error) {
      console.error("Lỗi khi xóa tour:", error);

      // Hiển thị thông báo lỗi
      toast.error("Tour đã có Khách hàng đặt.");
    }
  };

  const handleEdit = (tourID) => {
    navigate(`/TourDuLichTravel/admin/sua-tour/${tourID}`);
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

  let index = 1;

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
            <h2>Tour List</h2>
            <Row className="d-flex flex-row">
              <Col className="col-11"></Col>
              <Col className="">
                <Link to="/TourDuLichTravel/admin/TourThemMoi">
                  <Button className="col-10 ms-2">Thêm</Button>
                </Link>
              </Col>
            </Row>
            <br />
            {loading ? (
              <h2>
                {" "}
                <Spinner animation="grow" variant="dark" />
                Loading...
              </h2>
            ) : (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>STT</th>

                    <th>Tên TOUR</th>
                    <th>Hướng dẫn viên</th>

                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Giá người lớn</th>
                    <th>Giá trẻ em</th>
                    <th>Giá trẻ nhỏ</th>
                    <th>Số chỗ còn</th>
                    <th>Mô tả</th>
                    <th>Hình ảnh</th>
                    <th>Xoá</th>
                    <th>Sửa</th>
                  </tr>
                </thead>
                <tbody>
                  {tours.map((tour) => (
                    <tr key={tour.TourID}>
                      <td>{index++}</td>
                      <td>{tour.name}</td>
                      <td>
                        <ul>
                          {tour.guides.map((guide, index) => (
                            <li key={index}>{guide}</li>
                          ))}
                        </ul>
                      </td>

                      <td>{new Date(tour.start_date).toLocaleDateString()}</td>
                      <td>{new Date(tour.end_date).toLocaleDateString()}</td>
                      <td className="text-danger fw-bold">
                        {formatCurrency(tour.price)}
                      </td>
                      <td className="text-danger fw-bold">
                        {formatCurrency(tour.child_price)}
                      </td>
                      <td className="text-danger fw-bold">
                        {formatCurrency(tour.infant_price)}
                      </td>
                      <td>{tour.quantity}</td>
                      <td>{tour.description}</td>
                      <td>
                        {/* Hiển thị hình ảnh, giả sử ảnh được lưu dưới dạng base64 */}
                        <img
                          src={
                            tour.image
                              ? `data:image/jpeg;base64,${tour.image.toString(
                                  "base64"
                                )}`
                              : ""
                          }
                          alt="Tour"
                          style={{ width: "150px", height: "100px" }}
                        />
                      </td>

                      <td>
                        <Button
                          onClick={() => handleDelete(tour.id)}
                          className="btn-danger col-12"
                        >
                          Delete
                        </Button>
                      </td>
                      <td>
                        <Button
                          onClick={() => handleEdit(tour.id)}
                          className="btn-warning col-12"
                        >
                          Edit
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};
export default TourLietKe;

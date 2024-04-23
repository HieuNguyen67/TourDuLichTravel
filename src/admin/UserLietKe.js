import SIDEBAR from "./componentss/sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header1 from "./componentss/Header1";
import React, { useState, useEffect } from "react";
import { useAuth } from "./AuthContextAdmin";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import { Button } from "react-bootstrap";

const UserLietKe = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://backend-do-an-chuyen-nganh.vercel.app/v1/api/admin/lay-danh-sach-user"
        );
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách người dùng:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (userID) => {
    console.log(`Sửa thông tin của user có ID: ${userID}`);
    navigate(`/admin/sua-user/${userID}`);
  };

  const handleDelete = (userID) => {
    if (window.confirm("Bạn có chắc muốn xoá người dùng này không?")) {
      axios
        .delete(
          `https://backend-do-an-chuyen-nganh.vercel.app/v1/api/admin/xoa-user/${userID}`
        )
        .then(() => {
          setUsers(users.filter((user) => user.id !== userID));
        })
        .catch((error) => {
          console.error("Lỗi khi xoá người dùng:", error);
        });
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
        <Col className="col-10">
          <div className="ms-5 ps-3 mt-3">
            <h2>Danh sách Người dùng</h2>
            <Row className="d-flex flex-row">
              <Col className="col-11"></Col>
              <Col className="">
                <Link to="/admin/UserThemMoi">
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
                    <th>Fullname</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Xoá</th>
                    <th>Sửa</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{index++}</td>
                      <td>{user.fullname}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.address}</td>
                      <td>
                        <Button
                          className="btn-danger col-12"
                          onClick={() => handleDelete(user.id)}
                        >
                          Xoá
                        </Button>
                      </td>
                      <td>
                        <Button
                          className="btn-warning col-12"
                          onClick={() => handleEdit(user.id)}
                        >
                          Sửa
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
export default UserLietKe;

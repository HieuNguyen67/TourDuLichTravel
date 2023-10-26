import "../assets/scss/LienHe.scss"
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";


const LienHe=()=>{
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
        
          <motion.div
            initial={{ opacity: 0, y: 98 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
          >
            <Container className="mb-5 pb-5">
              <p className="mt-4 d-flex">
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                  <Link to="/" className="text-decoration-none text-dark">
                    <span>Trang chủ &nbsp;</span>
                  </Link>{" "}
                </motion.a>
                {" > "}
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                  <Link to="/LienHe" className="text-decoration-none text-dark">
                    <span> &nbsp; &nbsp;Liên hệ </span>
                  </Link>
                </motion.a>
              </p>
              <Row className="mt-5">
                <Col className="col-md-5 col-12">
                  <p>
                    <h3>THÔNG TIN LIÊN HỆ</h3>
                    <hr className="hr" />

                    <p>
                      <strong>Điện thoại : </strong>(028) 38 505 520
                      <br />
                      <strong>Email : </strong>contact@stu.edu.vn
                    </p>
                  </p>
                </Col>
                <Col className="mt-md-0 mt-4 ">
                  <p>
                    <h3>LIÊN HỆ CHÚNG TÔI</h3>
                    <hr className="hr" />
                  </p>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="d-flex flex-row py-2">
                      <Col className="col-6 pe-2 ">
                        <Form.Group controlId="validationCustom01">
                          <Form.Control
                            required
                            type="text"
                            placeholder="Họ tên"
                            className="shadow-sm"
                          />
                          
                        </Form.Group>
                      </Col>
                      <Col className="col-6 ps-2 ">
                        <Form.Group controlId="validationCustom01">
                          <Form.Control
                            required
                            type="text"
                            placeholder="Địa chỉ"
                            className="shadow-sm"
                          />
                          
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="d-flex flex-row py-2 ">
                      <Col className="col-6 pe-2 ">
                        <Form.Group controlId="validationCustom01">
                          <Form.Control
                            required
                            type="text"
                            placeholder="Điện thoại"
                            className="shadow-sm"
                          />
                          
                        </Form.Group>
                      </Col>
                      <Col className="col-6 ps-2">
                        <Form.Group controlId="validationCustom01">
                          <Form.Control
                            required
                            type="text"
                            placeholder="Email"
                            className="shadow-sm"
                          />
                          
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="d-flex flex-row py-2 mb-4 ">
                      <Col className="col-12 ">
                        <Form.Group controlId="validationCustom01">
                          <Form.Control
                            required
                            type="text"
                            placeholder="Nội dung"
                            className="py-5 shadow-sm "
                          />
                          
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button
                      type="submit"
                      variant="warning"
                      className="shadow-sm"
                    >
                      GỬI THÔNG TIN LIÊN HỆ
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </motion.div>
        
      </>
    );
}
export default LienHe;
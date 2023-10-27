import { Container } from "@mui/system";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { motion } from "framer-motion";
const SignUp = () => {
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
        <Container className="mt-5 mx-auto  ">
          <div>
            <Row>
              <Col></Col>
              <Col className="col-10 ">
                <h2 className="text-center text-break fw-bold " >Đăng Ký</h2>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Container>
        <br />
        <Container className="mb-5 pb-md-5">
          <Form
            className="col-md-5 col-12 mx-auto"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Họ tên <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="Họ tên" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                UserName <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="UserName" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Password <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Confirm Password <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="warning" type="submit" className="col-12 mt-4">
              Đăng Ký <LoginIcon />
            </Button>
          </Form>

          <br />
          <div>
            <Row>
              <Col></Col>
              <Col className="col-12">
                <h6 className="text-center text-break  ">
                  <NavLink to="/" className=" link-dark text-danger decorate ">
                    <ArrowBackIosIcon sx={{ fontSize: 20 }} />
                    Go back
                  </NavLink>
                </h6>
              </Col>
              <Col></Col>
            </Row>
          </div>
          <hr></hr>
          <div>
            <Row>
              <Col></Col>
              <Col className="col-12 col-md-12 mt-3">
                <Col>
                  <h6 className="text-secondary  text-center text-break fw-bold">
                    Bạn đã có tài khoản?
                    <NavLink
                      to="/Login"
                      className=" link-dark text-danger decorate "
                    >
                      {" "}
                      Đăng nhập
                    </NavLink>
                  </h6>
                </Col>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Container>
      </motion.div>
    </>
  );
};
export default SignUp;

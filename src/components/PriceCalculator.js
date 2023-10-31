import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
class PriceCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      quantity1:0,
      //   unitPrice: 10, // Đổi đơn giá mặc định theo nhu cầu
    };
  }
  

  handleQuantityChange = (event) => {
    this.setState({ quantity: parseInt(event.target.value, 10) });
  };
  handleQuantityChange1 = (event) => {
    this.setState({ quantity1: parseInt(event.target.value, 10) });
  };

  render() {
    const { quantity,quantity1 } = this.state;
    const totalPrice = ((quantity * 3080000) + (quantity1*2310000)).toLocaleString('vi-VN');

    const options = [];
    for (let i = 0; i <= 20; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return (
      <div>
        <Row className="d-flex flex-row">
          <Col className="col-md col-12">
            {" "}
            <Form.Label className="col-12 px-md-3 ">
              Số lượng người lớn{" "}
              <span className="fw-bold">(3.080.000 VNĐ):</span>
              <br />
              <Form.Select
                aria-label="Default select example"
                value={quantity}
                onChange={this.handleQuantityChange}
              >
                {options}
              </Form.Select>
            </Form.Label>
          </Col>
          <Col className="col-md col-12">
            <Form.Label className="col-12  px-md-3">
              Số lượng trẻ em <span className="fw-bold">(2.310.000 VNĐ):</span>
              <br />
              <Form.Select
                aria-label="Default select example"
                value={quantity1}
                onChange={this.handleQuantityChange1}
              >
                {options}
              </Form.Select>
            </Form.Label>
          </Col>
          <Col className="col-md col-12">
            {" "}
            <Form.Label className="col-12  px-md-3">
              Số lượng trẻ nhỏ: <span className="fw-bold">(0 VNĐ):</span>
              <br />
              <Form.Select aria-label="Default select example">
                {options}
              </Form.Select>
            </Form.Label>
          </Col>
        </Row>

        <br />

        <h3 className="text-end fw-bold text-danger my-md-5 my-3">
          Tổng giá trị: {totalPrice} VNĐ
        </h3>
      </div>
    );
  }
}

export default PriceCalculator;

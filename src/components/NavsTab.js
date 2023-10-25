import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NavsTab = () => {
  return (
    <>
      <div className="mt-5">
        <h1 className="fw-bold">Tìm kiếm Tour</h1>
        <Row className="d-flex flex-row mt-2">
          <Col className="col-12 col-md-3 mt-3">
            <FloatingLabel controlId="floatingSelect" label="Điểm đi">
              <Form.Select aria-label="Floating label select example">
                <option>Nơi khởi hành</option>
                <option value="1">TP.HCM</option>
                <option value="2">Hà Nội</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col className="col-12 col-md-3 mt-3">
            <FloatingLabel controlId="floatingSelect" label="Điểm đến">
              <Form.Select aria-label="Floating label select example">
                <option>Hãy chọn điểm đến</option>
                <option value="An Giang">An Giang</option>
                <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
                <option value="Bắc Giang">Bắc Giang</option>
                <option value="Bắc Kạn">Bắc Kạn</option>
                <option value="Bạc Liêu">Bạc Liêu</option>
                <option value="Bắc Ninh">Bắc Ninh</option>
                <option value="Bến Tre">Bến Tre</option>
                <option value="Bình Định">Bình Định</option>
                <option value="Bình Dương">Bình Dương</option>
                <option value="Bình Phước">Bình Phước</option>
                <option value="Bình Thuận">Bình Thuận</option>
                <option value="Bình Thuận">Bình Thuận</option>
                <option value="Cà Mau">Cà Mau</option>
                <option value="Cao Bằng">Cao Bằng</option>
                <option value="Đắk Lắk">Đắk Lắk</option>
                <option value="Đắk Nông">Đắk Nông</option>
                <option value="Điện Biên">Điện Biên</option>
                <option value="Đồng Nai">Đồng Nai</option>
                <option value="Đồng Tháp">Đồng Tháp</option>
                <option value="Gia Lai">Gia Lai</option>
                <option value="Hà Giang">Hà Giang</option>
                <option value="Hà Nam">Hà Nam</option>
                <option value="Hà Tĩnh">Hà Tĩnh</option>
                <option value="Hải Dương">Hải Dương</option>
                <option value="Hậu Giang">Hậu Giang</option>
                <option value="Hòa Bình">Hòa Bình</option>
                <option value="Hưng Yên">Hưng Yên</option>
                <option value="Khánh Hòa">Khánh Hòa</option>
                <option value="Kiên Giang">Kiên Giang</option>
                <option value="Kon Tum">Kon Tum</option>
                <option value="Lai Châu">Lai Châu</option>
                <option value="Lâm Đồng">Lâm Đồng</option>
                <option value="Lạng Sơn">Lạng Sơn</option>
                <option value="Lào Cai">Lào Cai</option>
                <option value="Long An">Long An</option>
                <option value="Nam Định">Nam Định</option>
                <option value="Nghệ An">Nghệ An</option>
                <option value="Ninh Bình">Ninh Bình</option>
                <option value="Ninh Thuận">Ninh Thuận</option>
                <option value="Phú Thọ">Phú Thọ</option>
                <option value="Quảng Bình">Quảng Bình</option>
                <option value="Quảng Ngãi">Quảng Ngãi</option>
                <option value="Quảng Ninh">Quảng Ninh</option>
                <option value="Quảng Trị">Quảng Trị</option>
                <option value="Sóc Trăng">Sóc Trăng</option>
                <option value="Sơn La">Sơn La</option>
                <option value="Tây Ninh">Tây Ninh</option>
                <option value="Thái Bình">Thái Bình</option>
                <option value="Thái Nguyên">Thái Nguyên</option>
                <option value="Thanh Hóa">Thanh Hóa</option>
                <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
                <option value="Tiền Giang">Tiền Giang</option>
                <option value="Trà Vinh">Trà Vinh</option>
                <option value="Tuyên Quang">Tuyên Quang</option>
                <option value="Vĩnh Long">Vĩnh Long</option>
                <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                <option value="Yên Bái">Yên Bái</option>
                <option value="Phú Yên">Phú Yên</option>
                <option value="Tp.Cần Thơ">Tp.Cần Thơ</option>
                <option value="Tp.Đà Nẵng">Tp.Đà Nẵng</option>
                <option value="Tp.Hải Phòng">Tp.Hải Phòng</option>
                <option value="Tp.Hà Nội">Tp.Hà Nội</option>
                <option value="TP  HCM">TP HCM</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col
            className="col-11 mx-auto col-md-3 mt-3"
            style={{ border: "1px solid lightgrey", borderRadius: "5px" }}
          >
            <label for="start" style={{ color: "grey", fontSize: "14px" }}>
              Ngày đi
            </label>
            <br />

            <input
              type="date"
              id="start"
              name="trip-start"
              className="col-12 my-1"
              style={{ border: "1px solid lightgrey", borderRadius: "5px" }}
            />
          </Col>
          <Col className="">
            <Button variant="warning" className="col-12 py-3 mt-3 ">
              <b>Tìm kiếm</b>
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default NavsTab;

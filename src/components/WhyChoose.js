import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import icon1 from "../assets/image/icon1.png"
import icon2 from "../assets/image/icon2.png";
import icon3 from "../assets/image/icon3.png";
import icon4 from "../assets/image/icon4.png";
import icon5 from "../assets/image/icon5.png";
import icon6 from "../assets/image/icon6.png";
import { motion, useAnimation } from "framer-motion";

import "../assets/scss/WhyChoose.scss"
const WhyChoose = () => {
  return (
    <>
      <Row className="my-5">
        <Col className="col-6 col-md-4 mx-auto">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <p className="text-center purple">
              <img src={icon1} className="icon " />
              <h4>Mạng bán tour</h4>
              <p>
                Đầu tiên tại Việt Nam
                <br />
                Ứng dụng công nghệ mới nhất
              </p>
            </p>
          </motion.div>
        </Col>
        <Col className="col-6 col-md-4 mx-auto">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <p className="text-center purple">
              {" "}
              <img src={icon2} className="icon  " />
              <h4 className="fontttt">Sản phẩm & dịch vụ</h4>
              <p>Đa dạng - Chất lượng - An toàn</p>
            </p>
          </motion.div>
        </Col>
        <Col className="col-6 col-md-4 mx-auto">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <p className="text-center purple">
              {" "}
              <img src={icon3} className="icon  " />
              <h4>Giá cả</h4>
              <p>Luôn có mức giá tốt nhất</p>
            </p>
          </motion.div>
        </Col>
        <Col className="col-6 col-md-4 mx-auto">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <p className="text-center purple">
              {" "}
              <img src={icon4} className="icon  " />
              <h4>Đặt tour</h4>
              <p>Dễ dàng & nhanh chóng</p>
            </p>
          </motion.div>
        </Col>
        <Col className="col-6 col-md-4 mx-auto">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <p className="text-center purple">
              {" "}
              <img src={icon5} className="icon  " />
              <h4>Thanh toán</h4>
              <p>An toàn & Linh hoạt</p>
            </p>
          </motion.div>
        </Col>
        <Col className="col-6 col-md-4 mx-auto">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <p className="text-center purple">
              {" "}
              <img src={icon6} className="icon  " />
              <h4>Hỗ trợ</h4>
              <p>Hotline & Trực tuyến (08h00-22h00)</p>
            </p>
          </motion.div>
        </Col>
      </Row>
    </>
  );
};
export default WhyChoose;

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/scss/ListTours.scss"
import { motion, useAnimation } from "framer-motion";

const ListTour = () => {
  return (
    <>
      <Row className="my-md-5 py-md-2 d-flex flex-row ">
        <Col className="col-6 col-md">
          {" "}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div className="boxlisttour mx-2 box my-md-0 my-2 shadow-sm  ">
              <div className="pt-md-4">
                
                <p
                  className="text-md-center text-start text-light position-relative mx-md-auto mx-2  textshadow mt-5 pt-5 col-md-8 col-10"
                  style={{ lineHeight: "0.8" }}
                >
                  <h5 className=" mt-md-5 mt-2 pt-md-5 fontsize">
                    MIỀN TÂY TRONG NGÀY
                  </h5>
                  <h5 className=" fontsize">
                    <b>2</b> Tour
                  </h5>
                </p>
              </div>
            </div>{" "}
          </motion.div>
        </Col>
        <Col className="col-6 col-md">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div className="boxlisttour mx-2 box1 my-md-0 my-2">
              <div className="pt-md-4">

                <p
                  className="text-md-center text-start text-light position-relative mx-md-auto mx-2  textshadow mt-5 pt-5 col-md-8 col-10"
                  style={{ lineHeight: "0.8" }}
                >
                  <h5 className=" mt-md-5 mt-4 pt-md-5 fontsize">
                    MIỀN TÂY
                  </h5>
                  <h5 className=" fontsize">
                    <b>9</b> Tour
                  </h5>
                </p>
              </div>
            </div>{" "}
          </motion.div>
        </Col>
        <Col className="col-4 col-md">
          {" "}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div className="boxlisttour mx-md-2 mx-1 box2 my-md-0 my-2">
              <div className="pt-md-4">
                <p
                  className="text-md-center text-start text-light position-relative mx-md-auto mx-2  textshadow mt-5 pt-5 col-md-8 col-10"
                  style={{ lineHeight: "0.8" }}
                >
                  <h5 className=" mt-md-5 mt-4 pt-md-5 fontsize1">
                    SÀI GÒN
                  </h5>
                  <h5 className=" fontsize">
                    <b>5</b> Tour
                  </h5>
                </p>
              </div>
            </div>{" "}
          </motion.div>
        </Col>{" "}
        <Col className="col-4 col-md">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div className="boxlisttour mx-md-2 mx-1 box3 my-md-0 my-2">
              <div className="pt-md-4">
                <p
                  className="text-md-center text-start text-light position-relative mx-md-auto mx-2  textshadow mt-5 pt-5 col-md-8 col-10"
                  style={{ lineHeight: "0.8" }}
                >
                  <h5 className=" mt-md-5 mt-4 pt-md-5 fontsize1">
                    PHÚ QUỐC
                  </h5>
                  <h5 className=" fontsize">
                    <b>4</b> Tour
                  </h5>
                </p>
              </div>
            </div>{" "}
          </motion.div>
        </Col>
        <Col className="col-4 col-md">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div className="boxlisttour mx-md-2 mx-1 box4 my-md-0 my-2">
              <div className="pt-md-4">
                <p
                  className="text-md-center text-start text-light position-relative mx-md-auto mx-2  textshadow mt-5 pt-5 col-md-8 col-10"
                  style={{ lineHeight: "0.8" }}
                >
                  <h5 className=" mt-md-5 mt-4 pt-md-5 fontsize1">
                    ĐÀ LẠT
                  </h5>
                  <h5 className=" fontsize">
                    <b>2</b> Tour
                  </h5>
                </p>
              </div>
            </div>{" "}
          </motion.div>
        </Col>
      </Row>
    </>
  );
};
export default ListTour;

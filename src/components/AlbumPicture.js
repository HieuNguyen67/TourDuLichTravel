import "../assets/scss/HinhAnh.scss";


import "../assets/scss/GioiThieu.scss";
import { motion, useAnimation } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import picture1 from "../assets/image/picture-1.png";
import picture2 from "../assets/image/picture-2.png";
import picture3 from "../assets/image/picture-3.png";
import picture4 from "../assets/image/picture-4.png";
import picture5 from "../assets/image/picture-5.png";
import picture6 from "../assets/image/picture-6.png";
import picture7 from "../assets/image/picture-7.png";
import picture8 from "../assets/image/picture-8.png";
import picture9 from "../assets/image/picture-9.png";
import picture10 from "../assets/image/picture-10.png";
import picture11 from "../assets/image/picture-11.png";
import picture12 from "../assets/image/picture-12.png";
import picture13 from "../assets/image/picture-13.png";
import picture14 from "../assets/image/picture-14.png";
import picture15 from "../assets/image/picture-15.png";
import picture16 from "../assets/image/picture-16.png";
import React from "react";


const AlbumPicture = () => {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleCloseOpen = () => setOpen(false);
     const slides = [
       { src: picture1 },
       { src: picture2 },
       { src: picture3 },
       { src: picture4 },
       { src: picture5 },
       { src: picture6 },
       { src: picture7 },
       { src: picture8 },
       { src: picture9 },
       { src: picture10 },
       { src: picture11 },
       { src: picture12 },
       { src: picture13 },
       { src: picture14 },
       { src: picture15 },
       { src: picture16 },
     ];
  return (
    <>
      <Lightbox
        open={open}
        close={handleCloseOpen}
        slides={slides}
        className="d-block w-100 "
      />
      <div>
        <Row className="d-flex flex-row">
          <Col className="col-md-6 col-6 px-1 py-1">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleOpen}
            >
              <img
                src={picture1}
                className="sizepicture w-100 rounded-3 shadow"
              />
            </motion.div>
          </Col>
          <Col className="col-md-2  col-6 px-1 py-1">
            <Row className="d-flex flex-column">
              <Col className="pb-1">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={picture2}
                    className="sizepicture1 w-100 rounded-3 shadow"
                    onClick={handleOpen}
                  />
                </motion.div>
              </Col>
              <Col>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={picture3}
                    className="sizepicture1 w-100 rounded-3 shadow"
                    onClick={handleOpen}
                  />
                </motion.div>
              </Col>
            </Row>
          </Col>
          <Col className="col-md-2  col-6 px-1 py-1">
            <Row className="d-flex flex-column">
              <Col className="pb-1">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={picture4}
                    className="sizepicture1 w-100 rounded-3 shadow"
                    onClick={handleOpen}
                  />
                </motion.div>
              </Col>
              <Col>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={picture5}
                    className="sizepicture1 w-100 rounded-3 shadow"
                    onClick={handleOpen}
                  />
                </motion.div>
              </Col>
            </Row>
          </Col>
          <Col className="col-md-2   col-6 px-1 py-1">
            <Row className="d-flex flex-column">
              <Col className="pb-1">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={picture6}
                    className="sizepicture1 w-100 rounded-3 shadow"
                    onClick={handleOpen}
                  />
                </motion.div>
              </Col>
              <Col>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={picture7}
                    className="sizepicture1 w-100 rounded-3 shadow"
                    onClick={handleOpen}
                  />
                </motion.div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="d-flex flex-row ">
          <Col>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <img
                src={picture8}
                className="sizepicture1 w-100 rounded-3 px-1 shadow"
                onClick={handleOpen}
              />
            </motion.div>
          </Col>
          <Col>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <img
                src={picture9}
                className="sizepicture1 w-100 rounded-3 px-1 shadow"
                onClick={handleOpen}
              />
            </motion.div>
          </Col>
        </Row>
        <Row className="d-flex flex-row">
          <Col className="col-md-2  col-6 px-1 py-1">
            <Row className="d-flex flex-column">
              <Col className="pb-1">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={picture10}
                    className="sizepicture1 w-100 rounded-3 shadow"
                    onClick={handleOpen}
                  />
                </motion.div>
              </Col>
              <Col>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={picture11}
                    className="sizepicture1 w-100 rounded-3 shadow"
                    onClick={handleOpen}
                  />
                </motion.div>
              </Col>
            </Row>
          </Col>
          <Col className="col-md-2  col-6 px-1 py-1">
            <Row className="d-flex flex-column">
              <Col className="pb-1">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={picture12}
                    className="sizepicture1 w-100 rounded-3 shadow"
                    onClick={handleOpen}
                  />
                </motion.div>
              </Col>
              <Col>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={picture13}
                    className="sizepicture1 w-100 rounded-3 shadow"
                    onClick={handleOpen}
                  />
                </motion.div>
              </Col>
            </Row>
          </Col>
          <Col className="col-md-2   col-6 px-1 py-1">
            <Row className="d-flex flex-column">
              <Col className="pb-1">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={picture14}
                    className="sizepicture1 w-100 rounded-3 shadow"
                    onClick={handleOpen}
                  />
                </motion.div>
              </Col>
              <Col>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={picture15}
                    className="sizepicture1 w-100 rounded-3 shadow"
                    onClick={handleOpen}
                  />
                </motion.div>
              </Col>
            </Row>
          </Col>
          <Col className="col-md-6 col-6 px-1 py-1">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <img
                src={picture16}
                className="sizepicture w-100 rounded-3 shadow"
                onClick={handleOpen}
              />
            </motion.div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default AlbumPicture;

import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "../assets/scss/GioiThieu.scss";
import { motion } from "framer-motion";
import anh from "../assets/image/ttxvn_2303dulichtphcm1.jpg"

const GioiThieu = () => {
  return (
    <>
      <div className="boxGioiThieu"></div>
      <motion.div
        initial={{ opacity: 0, y: 98 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
      >
        <Container>
          <p className="mt-4 d-flex">
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link
                to="/TourDuLichTravel"
                className="text-decoration-none text-dark"
              >
                <span>Trang chủ &nbsp;</span>
              </Link>{" "}
            </motion.a>
            {" > "}
            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link to="/GioiThieu" className="text-decoration-none text-dark">
                <span> &nbsp; &nbsp;Về chúng tôi </span>
              </Link>
            </motion.a>
          </p>
          <h3 style={{ textShadow: "5px 5px 4px lightgrey" }}>VỀ CHÚNG TÔI</h3>
          <div className="container col-11  my-5 ">
            <p>
              <h3 className="text-center fw-bold ">
                Công ty TNHH Du Lịch Travel Tour
              </h3>
              <p className="fw-bold fs-5 mt-5">
                Thời gian thành lập và phát triển
              </p>
              <p>
                Công ty <strong>TNHH du lịch Travel Tour</strong> được thành lập
                vào năm 2023, với tên gọi Tour Travel. Sau nhiều năm hình thành
                và phát triển, <strong>Travel Tour</strong> không ngừng nghiên
                cứu và luôn là đơn vị tiên phong trong việc ứng dụng công nghệ
                hiện đại kết hợp với dịch vụ. Chúng tôi luôn ưu tiên cung cấp
                những ý tưởng du lịch độc đáo và sáng tạo nhằm đem lại trải
                nghiệm du lịch tốt nhất cho du khách.
              </p>
              <p className="fw-bold fs-5">Lĩnh vực hoạt động</p>
              <p>
                <strong>Travel Tour</strong> hoạt động như một nhà điều hành
                tour du lịch trong và ngoài nước, chuyên tổ chức các tour du
                lịch về miền Tây như:
              </p>
              <Container>
                <p>
                  - Tour miền tây 1 ngày: MỸ THO - BẾN TRE
                  <br />- Tour miền tây 2 ngày 1 đêm: MỸ THO - BẾN TRE - CẦN THƠ
                  <br />
                  - Tour miền tây 3 ngày 2 đêm : MỸ THO - BẾN TRE - CẦN THƠ -
                  SÓC TRĂNG - BẠC LIÊU - CÀ MAU
                  <br />- Tour tham quan vườn trái cây miền Tây, các khu du lịch
                  sinh thái.{" "}
                </p>
              </Container>
              <p>
                Bên cạnh đó, chúng tôi còn có các dịch vụ hỗ trợ đi kèm để có
                thể đảm bảo mang đến trải nghiệm dịch vụ tốt nhất cho khách hàng
                như:
              </p>
              <Container>
                <p>
                  - Dịch vụ tư vấn
                  <br />
                  - Dịch vụ hỗ trợ khách hàng
                  <br />- Quản lý lữ hành và các gói du lịch tuỳ chỉnh
                </p>
              </Container>
              <p>
                <strong>Travel Tour</strong> tự tin có thể đáp ứng nhu cầu đa
                dạng của du khách khi tham quan miền Tây. Không những thế, chúng
                tôi còn cung cấp các giải pháp du lịch để nhằm mang đến cho
                khách hàng chuyến du lịch như ý. Tất cả đều được điều chỉnh một
                cách chuyên nghiệp phù hợp nhu cầu và mang lại sự thoải mái,
                tiện lợi cho du khách, cho dù đó là những chuyến du lịch trọn
                gói hay du lịch tự túc.{" "}
              </p>
              <p className="fw-bold fs-5">Tiêu chí hoạt động</p>
              <p>
                Với phương châm mang lại những giá trị tốt nhất cho du khách.{" "}
                <strong>Travel Tour</strong> luôn cung cấp những gì tốt nhất,
                thuận tiện nhất đồng thời tìm kiếm những điểm đến và trải nghiệm
                mới với tiêu chí:
              </p>
              <Container>
                <p>
                  - Chất lượng là quan tâm hàng đầu.
                  <br />- Giá tour cạnh tranh nhất.
                  <br />
                  - Tour thiết kế theo yêu cầu.
                  <br />- Khởi hành hàng ngày.
                  <br />- Đặt tour nhanh chóng và thuận tiện.
                  <br />- Thanh toán linh hoạt.
                  <br />- Tư vấn và hỗ trợ tối đa cho khách hàng.
                </p>
              </Container>
              <p className="fw-bold fs-5 ">Thành quả đạt được</p>
              <p>
                Xuyên suốt quá trình hoạt động<strong>Travel Tour</strong> may
                mắn nhận được sự tin tưởng và ủng hộ của hơn 500 nghìn khách
                hàng. Đây là nguồn động viên to lớn và là động lực để{" "}
                <strong>Travel Tour</strong> ngày càng hoàn thiện và phát triển.
                Chúng tôi luôn hi vọng có thể mang lại cho quý khách hàng những
                chuyến du lịch miền Tây trọn vẹn nhất.
              </p>

              <img src={anh} className="w-100 h-100 rounded-3 mt-md-5" />
            </p>
          </div>
        </Container>
      </motion.div>
    </>
  );
};
export default GioiThieu;

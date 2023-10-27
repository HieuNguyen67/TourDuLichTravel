import "./App.scss";
import Header from "./components/Header";
import Home from "./containers/Home"
import BackToTop from "./components/BackToTop";
import GioiThieu from "./containers/GioiThieu"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HinhAnh from "./containers/HinhAnh";
import Footer from "./components/Footer";
import LienHe from "./containers/LienHe";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import BangGia from "./containers/BangGia";
import TourTongHop from "./containers/TourTongHop";
import TourTongHopPage2 from "./containers/TourTongHopPage2";
import TourMienTayTrongNgay from "./containers/TourMienTayTrongNgay";
import TourMienTay from "./containers/TourMienTay";
function App() {
  
  return (
    <>
      <BackToTop />
      <div>
        {" "}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GioiThieu" element={<GioiThieu />} />
          <Route path="/HinhAnh" element={<HinhAnh />} />
          <Route path="/LienHe" element={<LienHe />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/BangGia" element={<BangGia />} />
          <Route path="/TourTongHop" element={<TourTongHop />} />
          <Route path="/TourTongHopPage2" element={<TourTongHopPage2 />} />
          <Route path="/TourMienTayTrongNgay" element={<TourMienTayTrongNgay />} />
          <Route path="/TourMienTay" element={<TourMienTay />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

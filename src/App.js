import "./App.scss";
import Header from "./components/Header";
import Home from "./containers/Home"
import BackToTop from "./components/BackToTop";
import GioiThieu from "./containers/GioiThieu"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import TourMienTay3Ngay2Dem from "./containers/TourMienTay3Ngay2Dem";
import { AuthProvider } from "./containers/AuthContext";
import { AuthProvider1 } from "./admin/AuthContextAdmin";
import Admin from "./admin/admin";

import UserLietKe from "./admin/UserLietKe";
import UserThemMoi from "./admin/UserThemMoi";
import TourThemMoi from "./admin/TourThemMoi";
import TourLietKe from "./admin/TourLietKe";
import UserEdit from "./admin/UserEdit";
import TourEdit from "./admin/TourEdit";
import TourEditImage from "./admin/TourEditImage";
import TourDetail from "./containers/TourDetail";
import Profile from "./containers/Profile";
import ProfileEdit from "./containers/ProfileEdit";
import BookingForm from "./components/BookingForm";
import DetailTourMienTay3Ngay2Dem from "./containers/booking-tour";
import Bookingtour from "./containers/booking-tour";
import OrderList from "./admin/OrderList";
import OrderDetails from "./admin/OrderDetails";
import GuideLietKe from "./admin/GuideLietKe";
import GuideThemMoi from "./admin/GuideThemMoi";
import GuideEdit from "./admin/GuideEdit";
import NotFound from "./containers/NotFound";
function App() {
  
  return (
    <>
      {" "}
      <AuthProvider>
        <div>
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/GioiThieu" element={<GioiThieu />} />
            <Route path="/HinhAnh" element={<HinhAnh />} />
            <Route path="/LienHe" element={<LienHe />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/BangGia" element={<BangGia />} />
            <Route path="/profile/:userID" element={<Profile />} />
            <Route path="/TourTongHop" element={<TourTongHop />} />
            <Route path="/TourTongHopPage2" element={<TourTongHopPage2 />} />
            <Route
              path="/TourMienTayTrongNgay"
              element={<TourMienTayTrongNgay />}
            />
            <Route path="/TourMienTay" element={<TourMienTay />} />
            <Route
              path="/TourMienTay3Ngay2Dem"
              element={<TourMienTay3Ngay2Dem />}
            />
            <Route path="/booking-tour/:tourID" element={<Bookingtour />} />
            <Route path="/tour/:tourID" element={<TourDetail />} />
            <Route path="/book/:tourID" element={<BookingForm />} />
            <Route
              path="/profile/editprofile/:userID"
              element={<ProfileEdit />}
            />
          </Routes>
        </div>
      </AuthProvider>
      <AuthProvider1>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/admin" element={<Admin />} />{" "}
          <Route path="/admin/UserLietKe" element={<UserLietKe />} />
          <Route path="/admin/UserThemMoi" element={<UserThemMoi />} />
          <Route path="/admin/GuideLietKe" element={<GuideLietKe />} />
          <Route path="/admin/GuideThemMoi" element={<GuideThemMoi />} />
          <Route path="/admin/TourThemMoi" element={<TourThemMoi />} />
          <Route path="/admin/TourLietKe" element={<TourLietKe />} />
          <Route path="/admin/OrderList" element={<OrderList />} />
          <Route path="/admin/OrderList/:orderID" element={<OrderDetails />} />
          <Route path="/admin/sua-user/:userID" element={<UserEdit />} />
          <Route path="/admin/sua-guide/:guideID" element={<GuideEdit />} />
          <Route path="/admin/sua-tour/:tourID" element={<TourEdit />} />
          <Route
            path="/admin/sua-image-tour/:tourID"
            element={<TourEditImage />}
          />
        </Routes>
      </AuthProvider1>
      <Footer />
    </>
  );
}

export default App;

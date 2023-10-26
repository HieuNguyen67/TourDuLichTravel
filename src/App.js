import "./App.scss";
import Header from "./components/Header";
import Home from "./containers/Home"
import BackToTop from "./components/BackToTop";
import GioiThieu from "./containers/GioiThieu"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HinhAnh from "./containers/HinhAnh";
import Footer from "./components/Footer";
import LienHe from "./containers/LienHe";
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
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

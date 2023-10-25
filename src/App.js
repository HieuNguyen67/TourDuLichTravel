import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header";
import Home from "./containers/Home"
import BackToTop from "./components/BackToTop";
import { Container } from "@mui/system";
function App() {
  
  return (
    <>
      <BackToTop />
      <div>
        {" "}
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;

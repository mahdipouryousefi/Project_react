import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import All from "./Components/All";
import "./navbar/file.css/file.css";
import HeaderTop from "./Components/header/Headertop";
import Login from "./Components/login/Login";
import Rules from "./Components/login/Rules";
import Privacy from "./Components/login/privacy";
import Shop from "./Components/shop/shop";
import MobileClick from "./Components/bottomnav.js/mobileClick";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/landingآخرین+حراج+سال&" element={<HeaderTop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Rules" element={<Rules />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/mobile" element={<MobileClick />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

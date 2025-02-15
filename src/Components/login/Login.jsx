import { Link } from "react-router-dom";
import logo from "../image/caouselimage4.jpg.webp";
import Fixphone from "../fixphone";

const Login = () => {
  return (
    <>
      <div className="logo">
        <div className="logoItem">
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <img className="logoItemImage" src={logo} alt="" />
          </div>
          <div className="logoLogin">
            <span>ورود </span> |<span>ثبت نام </span>
          </div>
          <div className="logotext">
            <p>سلام !</p>
            <p> لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
          </div>
          <div className="logoInput">
            <input type="text" />
          </div>
          <div className="logoButton1">
            <button className="logoButton">ورود</button>

            <div className="logotxt2">
              {" "}
              <p>
                ورود شما به معنای پذیرش
                <Link to="/Rules" className="link">
                  <span style={{ color: "#01BDF6" }}> شرایط دیجی ‌کالا</span>
                </Link>{" "}
                و
                <Link to="/Privacy" className="link">
                  {" "}
                  <span style={{ color: "#01BDF6" }}> قوانین حریم‌ خصوصی </span>
                </Link>{" "}
                است
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;

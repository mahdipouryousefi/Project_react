import { useDispatch } from "react-redux";
import image from "../image/header.jpg";
import ChangeBackInput from "../../redux/chnageInput";
import Deleinput from "../../redux/dateinput";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const change = () => {
    dispatch(Deleinput.actions.deleinput());
    dispatch(ChangeBackInput.actions.Back());
  };
  return (
    <>
      {" "}
      <div onClick={change}>
        <Link
          target="_blank"
          to="/landingآخرین+حراج+سال&"
        >
          {" "}
          <img className="header fix" src={image} />{" "}
        </Link>
      </div>
    </>
  );
};
export default Header;

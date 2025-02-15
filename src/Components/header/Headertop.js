import Navbare from "../../navbar/navbar";
import Bootomnav from "../bottomnav.js/bottomnav";
import Header from "./header";
import image1 from "../image/headertop.jpg";
import image2 from "../image/headertop2.jpg";
import image3 from "../image/image1.jpg";
import image4 from "../image/image2.jpg";
import image5 from "../image/image3.jpg";
import image6 from "../image/image4.jpg";
import image7 from "../image/image5.jpg";
import { useDispatch, useSelector } from "react-redux";
import Deleinput from "../../redux/dateinput";
import ChangeBackInput from "../../redux/chnageInput";
import BoxMobile from "./box-mobile";
import Header2 from "./Header2";
import Fixphone from "../fixphone";
import HeaderIcon from "./header-icon";
import Delebottnav from "../../redux/deletebottnav";

const HeaderTop = () => {
  const sele = useSelector((state) => state.ChageInput.Background);
  const filter = useSelector((state) => state.ChageInput.filter);
  const dispatch = useDispatch();

  const deleinput = () => {
    dispatch(ChangeBackInput.actions.Back());
    dispatch(Deleinput.actions.deleinput());
    dispatch(Delebottnav.actions.deletebot());

  };
  return (
    <>
      <div>
        <HeaderIcon/>
 

        <Header />
        <Header2 />
        <Navbare />
        <Bootomnav />
        <div onClick={deleinput} className="HeaderTop">
          <img
            style={{ background: sele, filter: filter }}
            className="HeaderTop-img "
            src={image1}
          ></img>
          <img
            style={{ background: sele, filter: filter }}
            className="HeaderTop-img2"
            src={image2}
          ></img>
          <img
            style={{ background: sele, filter: filter }}
            className="HeaderTop-img2"
            src={image3}
          ></img>
          <div className=" HeaderTop-img3">
            <img className="HeaderTop-img3-1" src={image4}></img>
            <img className="HeaderTop-img3-1" src={image5}></img>
          </div>
          <div className=" HeaderTop-img3">
            <img className="HeaderTop-img3-1" src={image6}></img>
            <img className="HeaderTop-img3-1" src={image7}></img>
          </div>
          <BoxMobile />
          <Fixphone/>
        </div>
      </div>
    </>
  );
};
export default HeaderTop;

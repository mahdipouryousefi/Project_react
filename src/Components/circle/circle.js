import React from "react";
import Circlephoto from "../image/circlephoto";
import { useDispatch, useSelector } from "react-redux";
import Deleinput from "../../redux/dateinput";
import ChangeBackInput from "../../redux/chnageInput";
import Delebottnav from "../../redux/deletebottnav";
const Circle = (props) => {

  const sele = useSelector((state) => state.ChageInput.Background);
  const filter = useSelector((state) => state.ChageInput.filter);
  const dispatch = useDispatch();
  const deleinput = () => {
    dispatch(Deleinput.actions.deleinput());
    dispatch(ChangeBackInput.actions.Back());
    dispatch(Delebottnav.actions.deletebot());
  };

  return (
    <div style={{background:sele , filter:filter ,marginTop:'140px'}}
    onClick={deleinput} className="circle">
      {Circlephoto.map((img, d) => {
        return (
          <div key={d} className="c">
            <div className={props}>
              <img alt="" src={img.src} className="circleitem "></img>
              <div className="namecircle">{img.name} </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Circle;

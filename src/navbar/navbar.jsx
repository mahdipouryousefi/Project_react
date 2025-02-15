import React from "react";
import logo from "./images.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { HiOutlineLogin } from "react-icons/hi";
import Inputclick from "./Inputclick";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Deleinput from "../redux/dateinput";
import ChangeBackInput from "../redux/chnageInput";
import { Link } from "react-router-dom";
import Delebottnav from "../redux/deletebottnav";

const Navbare = () => {
  const dispatch = useDispatch();

  const [input, setinput] = useState(false);
  const change = () => {
    dispatch(Deleinput.actions.deleinput());
    dispatch(ChangeBackInput.actions.Back());
    dispatch(Delebottnav.actions.deletebot());

  };


  const handel = () => {
    setinput(true);
    dispatch(Deleinput.actions.pushinput());
    dispatch(ChangeBackInput.actions.BackInpout());
    dispatch(Delebottnav.actions.deletebot());

  };
  const handekicon = () => {
    dispatch(Deleinput.actions.deleinput());
    dispatch(ChangeBackInput.actions.Back());
    dispatch(Delebottnav.actions.deletebot());


  };

  return (
    <>
      <div  className="nav fix2">
        <div className="right-nav">
          <img
            onClick={change}
            className="image"
            src={logo}
            style={{ width: "150px" }}
          />
          <input  className="input" onClick={handel} placeholder="  جستجو " />

          {input && <Inputclick />}
          <FontAwesomeIcon className="fasearch " icon={faSearch} />
        </div>

        <div className="left-nav" style={{ padding: " 6px", margin: " 3px" }}>
          <Link className="link" to="/login">
            {" "}
            <span
              onClick={change}
              className="border"
              style={{
                border: "solid 1px #7D7C7C",
                margin: "10px",
                padding: "6px",
                borderRadius: "5px",
              }}
            >
              <HiOutlineLogin className="shop" style={{ cursor: "pointer" }} />
              <span style={{ margin: "4px", cursor: "pointer" }}> ورود </span>|
              <span style={{ margin: "4px", cursor: "pointer" }}>ثبت نام</span>
            </span>
          </Link>
          <span
            style={{ borderRight: "1px solid #7D7C7C", margin: "15px" }}
          ></span>

          <Link className="link" to="/shop">
            {" "}
            <FontAwesomeIcon
              onClick={handekicon}
              className="shop"
              icon={faShoppingCart}
              style={{ background: "none", margin: " 2px", cursor: "pointer" }}
            />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Navbare;

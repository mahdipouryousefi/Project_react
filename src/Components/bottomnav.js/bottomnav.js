import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCircleXmark,
  faFire,
  faGift,
  faMoneyCheck,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FiMapPin } from "react-icons/fi";
import { useDispatch } from "react-redux";
import ChangeBackInput from "../../redux/chnageInput";
import Deleinput from "../../redux/dateinput";
import React, { useState } from 'react';
import Products from "./products";
import Delebottnav from "../../redux/deletebottnav";

const Bootomnav = () => {
  const [show, setshow] = useState(false)
  const dispatch = useDispatch();


  const pushbot = () => {
    dispatch(Delebottnav.actions.pushbott());
    dispatch(Deleinput.actions.deleinput());
    dispatch(ChangeBackInput.actions.Back());
    setshow(!show)

  }
  const deletebotnav = () => {
    setshow(false)

    dispatch(Deleinput.actions.deleinput());
    dispatch(ChangeBackInput.actions.Back());

  }

  return (<>



    <div className="Bootomnav fix3">
      <div className="bottomnavright">
        <FontAwesomeIcon icon={faLayerGroup} />
        <span onClick={pushbot}
          style={{ fontSize: "1.2em" }}>دسته بندی کالاها</span >

        <span onClick={deletebotnav} style={{ margin: "5px" }}>|</span>
        <FontAwesomeIcon onClick={deletebotnav} icon={faCircleXmark} style={{ color: "#7D7C7C" }} />
        <span onClick={deletebotnav}>شگفت انگیزها</span>
        <FontAwesomeIcon onClick={deletebotnav} icon={faBagShopping} style={{ color: "#7D7C7C" }} />
        <span onClick={deletebotnav}>سوپرمارکت ها</span>
        <FontAwesomeIcon onClick={deletebotnav} icon={faGift} style={{ color: "#7D7C7C" }} />
        <span onClick={deletebotnav}>کارت هدیه</span>
        <FontAwesomeIcon onClick={deletebotnav} icon={faFire} style={{ color: "#7D7C7C" }} />
        <span onClick={deletebotnav}>پر فروش ترینها</span>
        <FontAwesomeIcon onClick={deletebotnav} icon={faMoneyCheck} style={{ color: "#7D7C7C" }} />
        <span onClick={deletebotnav}>تخفیف و پیشنهاد ها</span> |
        <span onClick={deletebotnav} className="delete"> سوالی دارید ? </span>
        <span onClick={deletebotnav} className="delete"> در دیجی کالا بفروشید!</span>

      </div >
      <div onClick={deletebotnav} style={{ cursor: 'pointer' }} className="bottomnavleft">
        <FiMapPin
          style={{ color: "#7D7C7C", margintop: "3px", margin: "3px", }}
        />
        <span >لطفا شهر خود را انتخاب کنید</span>
      </div>
    </div >
    {show &&( <Products /> )}


  </>
  );
};


export default Bootomnav;

import React, { useState } from "react";
import InputAnimation from "./inputanimation";
import { useDispatch } from "react-redux";
import Deletopinput from "../../redux/deletopinput";


const InputInspect = () => {
  const dispatch = useDispatch()
  const [isVisible, setIsVisible] = useState('');



  const input = () => {
    dispatch(Deletopinput.actions.pushinput())
    setIsVisible(true);
  };

  return (
    <>

      <div>
        <input onClick={input} className="input2 " placeholder="  جستجو در" />
        <span className="inputimge "> دیجی کالا</span>

        {isVisible ? <InputAnimation /> : ""}
      </div>
    </>
  );
};
export default InputInspect;

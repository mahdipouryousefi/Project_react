import { FaArrowRightLong } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import InputAnimation from "../inputinspect/inputanimation";
import Deletopinput from "../../redux/deletopinput";
import { useDispatch } from "react-redux";

const HeaderIcon = () => {
  const dispatch = useDispatch()
  const [copySuccess, setCopySuccess] = useState(false);
  const [isvalibale, setvalible] = useState('')

  const copyPageLink = () => {


    const pageLink = window.location.href;
    navigator.clipboard.writeText(pageLink)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 3000); // پس از سه ثانیه پیام را مخفی کن
      })
      .catch((error) => {
        console.error('مشکل در کپی کردن لینک: ', error);
      });
  };

  const updateInput = () => {
    dispatch(Deletopinput.actions.pushinput())
    setvalible(true);

  }
  return (
    <>
      <div className="HeaderIcon">
        <span style={{ margin: "15px" }}>
          {" "}
          <Link to="/">
            <FaArrowRightLong style={{ color: "#4A4949" }} />
          </Link>
        </span>
        <span style={{position:'fixed' ,left :"5px"}}>
          <span><IoSearchOutline onClick={updateInput} style={{ margin: "15px", cursor: "pointer" }} />
          </span>
          <FaShareAlt onClick={copyPageLink} style={{ margin: "15px", cursor: "pointer" }} />
        </span>
        {copySuccess && <p className="copyfix">لینک صفحه کپی شد!</p>}
        {isvalibale && <InputAnimation />}
      </div>
    </>
  );
};

export default HeaderIcon;

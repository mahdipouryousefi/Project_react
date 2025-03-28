import { FaAngleLeft } from "react-icons/fa6";
import { HiOutlineLogin } from "react-icons/hi";
import { Link } from "react-router-dom"
import image1 from '../image/carouselimage14.jpg.webp'
import { useDispatch, useSelector } from "react-redux";
import ChangeBackInput from "../../redux/chnageInput";
import Deleinput from "../../redux/dateinput";
import Delebottnav from "../../redux/deletebottnav";
const ShopSlide2 = () => {
    
    const dispatch = useDispatch()
    const sele = useSelector((state) => state.ChageInput.Background);
    const filter = useSelector((state) => state.ChageInput.filter);

    const dele = () => {
        dispatch(Deleinput.actions.deleinput());
        dispatch(ChangeBackInput.actions.Back());
    dispatch(Delebottnav.actions.deletebot());

    }


    return (<><div  style={{ background: sele, filter: filter }} onClick={dele}>
        <div className="shop2">
            
            <div className="Shop1">

                <img style={{ width: "20%" }} src={image1}></img>
                <h1> لیست خرید بعدی شما خالی است!  </h1>
                <span style={{margin:'20px'}}>شما می‌توانید محصولاتی که به سبد خرید خود افزوده‌اید و فعلا قصد خرید آن‌ها را ندارید، در لیست خرید بعدی قرار داده و هر زمان مایل بودید آن‌ها را به سبد خرید اضافه کرده و خرید آن‌ها را تکمیل کنید.</span>
            </div>

         <div>   <Link className="link" to="/login">
                <div className="shop3">
                    <div className="shop3-1">
                        <div>
                            <HiOutlineLogin className="shop" style={{ fontSize: '25px', color: '#f39c12', cursor: "pointer" }} />
                            <span style={{ margin: '5px', fontSize: "20px" }}>ورود به حساب کاربری</span></div>
                        <div>
                            <FaAngleLeft style={{ marginRight: "10px" }} />{" "}
                        </div></div>
                    <p className="shop3-1p" style={{ color: '#515151', marginTop: '5px', lineHeight: '1' }}>برای مشاهده  محصولاتی  که  پیش تر به<p className="shop3Tagp "></p> سبد خرید  خود اضافه کردید وارد شوید </p>
                </div>
            </Link></div>

        </div>

    </div></>)
}
export default ShopSlide2
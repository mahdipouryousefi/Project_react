import { Link } from "react-router-dom"
import image1 from '../image/caouselimage4.jpg.webp'
import { FaAngleLeft } from "react-icons/fa6";
import { HiOutlineLogin } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import Deleinput from "../../redux/dateinput";
import ChangeBackInput from "../../redux/chnageInput";
import Delebottnav from "../../redux/deletebottnav";

const ShopSlide = () => {
    const dispatch = useDispatch()
    const sele = useSelector((state) => state.ChageInput.Background);
    const filter = useSelector((state) => state.ChageInput.filter);
    const dele = () => {
        dispatch(Deleinput.actions.deleinput());
        dispatch(ChangeBackInput.actions.Back());
    dispatch(Delebottnav.actions.deletebot());

    }

    return (<>

        <div style={{ background: sele, filter: filter }} onClick={dele}>
            <div className="shop2">
                <div className="Shop1">

                    <img style={{ width: "20%" }} src={image1}></img>
                    <h1>سبد خرید شما خالی است!</h1>
                    <span>می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:</span>
                </div>

              
              <div> <Link className="link" to="/login">
                    <div className="shop3">
                        <div className="shop3-1">
                            <div>
                                <HiOutlineLogin className="shop" style={{ fontSize: '25px', color: '#f39c12', cursor: "pointer" }} />
                                <span style={{ margin: '5px', fontSize: "20px" }}>ورود به حساب کاربری</span></div>
                            <div>
                                <FaAngleLeft style={{ marginRight: "10px" }} />{" "}
                            </div></div>
                        <p className="shop3-1p" style={{ color: '#515151', marginTop: '5px', lineHeight: '1.7' }}>برای مشاهده  محصولاتی  که  پیش تر به<p className="shop3Tagp "></p>  سبد خرید  خود اضافه کردید وارد شوید </p>
                    </div>
                </Link></div> 
            </div>
        </div>

    </>)
}
export default ShopSlide
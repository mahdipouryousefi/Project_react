import Navbare from "../../navbar/navbar"
import Bootomnav from "../bottomnav.js/bottomnav"
import Header from "../header/header"

import Fixphone from '../fixphone'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShopChange from "../../redux/ShopChange";
import ShopChangeRight from "../../redux/ShopChangeRight";
import ShopSlide from "./ShopSlide1";
import ShopSlide2 from "./Shopslide2";
import Deleinput from "../../redux/dateinput";
import ChangeBackInput from "../../redux/chnageInput";
import Delebottnav from "../../redux/deletebottnav";


const Shop = () => {
    const [valiable, setvaliable] = useState()
    const borderStyle = useSelector(state => state.ShopChange.borderStyle)
    const borderWidth = useSelector(state => state.ShopChange.borderWidth)
    const color = useSelector(state => state.ShopChange.color)
    const marginLe = useSelector(state => state.ShopChange.marginLe)
    const marginRight = useSelector(state => state.ShopChange.marginRight)
    const borderStyle2 = useSelector(state => state.ShopChangeRight.borderStyle)
    const borderWidth2 = useSelector(state => state.ShopChangeRight.borderWidth)
    const color2 = useSelector(state => state.ShopChangeRight.color)
    const marginLe2 = useSelector(state => state.ShopChangeRight.marginLe)
    const marginRight2 = useSelector(state => state.ShopChangeRight.marginRight)

    const dispatch = useDispatch()
    const sele = useSelector((state) => state.ChageInput.Background);
    const filter = useSelector((state) => state.ChageInput.filter);
    const dele = () => {
        dispatch(Deleinput.actions.deleinput());
        dispatch(ChangeBackInput.actions.Back());
    dispatch(Delebottnav.actions.deletebot());

    }
    const right = () => {
        dispatch(ShopChange.actions.chaneshopRight())
        dispatch(ShopChangeRight.actions.shop())
        setvaliable(false)
    }
    const left = () => {
        dispatch(ShopChange.actions.chaneshop());
        dispatch(ShopChangeRight.actions.shopRight());
        setvaliable(true)
    }
    return (<>
        <div  >
         
            <Header />
            <Navbare />
            <Bootomnav />
            <div onClick={dele}>
            <span  style={{ background: sele, filter: filter }} className="ShopSpan" >
                <span
                    style={{
                        marginRight: marginRight2,
                        marginLe: marginLe2, color: color2,
                        borderStyle: borderStyle2, borderWidth: borderWidth2,
                    }}
                    className="ShopSpan1" onClick={right}>سبد خرید</span>
                <span style={{
                    marginRight: marginRight,
                    marginLe: marginLe, color: color,
                    borderStyle: borderStyle, borderWidth: borderWidth,
                }} className="ShopSpan2" onClick={left}>خرید بعدی</span>
            </span>
            {!valiable ? <ShopSlide /> :<ShopSlide2 />}
       <Fixphone/>
       </div>
        </div>
    </>)
}
export default Shop
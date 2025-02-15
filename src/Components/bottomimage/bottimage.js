import { useDispatch, useSelector } from "react-redux"
import Booiamge1 from "../image/caouselimage4.jpg.webp"
import Booiamge2 from "../image/amazing-summer.916.500-1.jpg"
import Booiamge3 from "../image/image2.jpg"
import Booiamge4 from "../image/caouselimage4.jpg.webp"
import Booiamge5 from "../image/caouselimage4.jpg.webp"
import Booiamge6 from "../image/caouselimage4.jpg.webp"
import Booiamge7 from "../image/caouselimage4.jpg.webp"
import Booiamge8 from "../image/caouselimage4.jpg.webp"

import Deleinput from "../../redux/dateinput"
import ChangeBackInput from "../../redux/chnageInput"
import Delebottnav from "../../redux/deletebottnav"
const Booiamge =[Booiamge3 ,Booiamge2,Booiamge1,Booiamge5 , Booiamge6 , Booiamge4 ,Booiamge7,Booiamge8 ]
const Bottimage = () => {
    const dispatch = useDispatch()
    const sele = useSelector((state) => state.ChageInput.Background);
    const filter = useSelector((state) => state.ChageInput.filter);
    const deleteinput = ()=>{
        dispatch(Deleinput.actions.deleinput())
        dispatch(ChangeBackInput.actions.Back())
        dispatch(Delebottnav.actions.deletebot());

    }
    return (
    <div style={{background:sele , filter :filter}} onClick={deleteinput} className="Bottimage">
        {Booiamge.map((img, inx) => {
            return <div key={inx}>
                <img alt="" src={img.src} className="Bottimageitem"></img>
                <div  className="Bottimageelement">{img.name}</div>
            </div>
        })}
    </div>)

}
export default Bottimage
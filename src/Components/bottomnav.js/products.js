import { IoMdPhonePortrait } from "react-icons/io";
import { IoIosLaptop } from "react-icons/io";
import { LuSofa } from "react-icons/lu";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaTshirt } from "react-icons/fa";
import { TbHealthRecognition } from "react-icons/tb";
import { MdCardGiftcard } from "react-icons/md";
import { GiFruitBowl } from "react-icons/gi";
import Mobile from "./mobilenav";
import { useState } from "react";
import KalaDigit from "./kalaDijit";
import HomeNave from "./HomeNave";
import LavazemNav from "./LavazemNav";
import ModNav from "./ModNav";
import HealthNav from "./HealthNav";
import GiftNav from "./giftNave";
import KalaSuperNav from "./KalaSupernav";
import { useSelector } from "react-redux";


const ProductsBotnav = () => {
    const [isvalible, setisvalibe] = useState(true)
    const [kala, setkala] = useState(false)
    const [Home, setHome] = useState(false)
    const [lavazem, setlavazem] = useState(false)
    const [mod, setmod] = useState(false)
    const [health, sethealth] = useState(false)
    const [gift, setgift] = useState(false)
    const [KalaSuper, setkalasuper] = useState(false)
    const display = useSelector(state => state.deletebottnav.display)


    const togglemobile = () => {
        setisvalibe(true)
        setkala(false)
        setHome(false)
        setlavazem(false)
        setmod(false)
        sethealth(false)
        setgift(false)
        setkalasuper(false)



    }
    const toggleDigital = () => {
        setkala(true)
        setHome(false)
        setisvalibe(false)
        setlavazem(false)
        setmod(false)
        sethealth(false)
        setgift(false)
        setkalasuper(false)
    }
    const toggleHome = () => {
        setHome(true)
        setisvalibe(false)
        setkala(false)
        setlavazem(false)
        setmod(false)
        sethealth(false)
        setgift(false)
        setkalasuper(false)


    }
    const toggleLavazem = () => {
        setlavazem(true)
        setHome(false)
        setisvalibe(false)
        setkala(false)
        setmod(false)
        sethealth(false)
        setkalasuper(false)

        setgift(false)


    }
    const toggleMod = () => {
        setmod(true)
        setgift(false)
        setkalasuper(false)
        setlavazem(false)
        setHome(false)
        setisvalibe(false)
        setkala(false)
        sethealth(false)
    }
    const toggleHealth = () => {
        sethealth(true)
        setgift(false)
        setkalasuper(false)
        setmod(false)
        setlavazem(false)
        setHome(false)
        setisvalibe(false)
        setkala(false)
    }
    const toggleGift = () => {
        setgift(true)
        sethealth(false)
        setmod(false)
        setlavazem(false)
        setHome(false)
        setisvalibe(false)
        setkala(false)
        setkalasuper(false)

    }
    const toggleKalaSuper = () => {
        setkalasuper(true)
        setgift(false)
        sethealth(false)
        setmod(false)
        setlavazem(false)
        setHome(false)
        setisvalibe(false)
        setkala(false)
    }
    return (
        <>
            <div style={{ display: display }}>
                <div className="reactbotstrap" style={{ display: 'flex' }} >
                    <div className="ProductsBotnav ">
                        <span onClick={togglemobile}><IoMdPhonePortrait style={{ marginLeft: '5px' }} />موبایل </span>
                        <span onClick={toggleDigital}><IoIosLaptop style={{ marginLeft: '5px' }} /> کالایه دیجیتال</span>
                        <span onClick={toggleHome}><LuSofa style={{ marginLeft: '5px' }} /> خانه و آشپزخانه</span>
                        <span onClick={toggleLavazem}> <CgSmartHomeRefrigerator style={{ marginLeft: '5px' }} />     لوازم خانگی برقی</span>
                        <span onClick={toggleMod}><FaTshirt style={{ marginLeft: '5px' }} />مد و پوشاک</span>
                        <span onClick={toggleHealth}><TbHealthRecognition style={{ marginLeft: '5px' }} /> زیبایی  و سلامت  </span>
                        <span onClick={toggleGift}><MdCardGiftcard style={{ marginLeft: '5px' }} />کارت هدیه</span>
                        <span onClick={toggleKalaSuper}><GiFruitBowl style={{ marginLeft: '5px' }} />کالاهای سوپرمارکتی</span>
                    </div>
                    <div style={{ overflowY: "scroll", height: '528px' }}>


                        {isvalible && <Mobile />}
                        {kala && <KalaDigit />}
                        {Home && <HomeNave />}
                        {lavazem && <LavazemNav />}
                        {mod && <ModNav />}
                        {health && <HealthNav />}
                        {gift && <GiftNav />}
                        {KalaSuper && <KalaSuperNav />}


                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductsBotnav
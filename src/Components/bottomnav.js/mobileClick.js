import Navbare from "../../navbar/navbar"
import Header from "../header/header"
import Bootomnav from "./bottomnav"


import image1 from "../image/caouselimage4.jpg.webp"
import image2 from "../image/caouselimage4.jpg.webp"
import image3 from "../image/caouselimage4.jpg.webp"
import image4 from "../image/caouselimage4.jpg.webp"
import image5 from "../image/caouselimage4.jpg.webp"
import image6 from "../image/caouselimage4.jpg.webp"
import image7 from "../image/caouselimage4.jpg.webp"
import image8 from "../image/caouselimage4.jpg.webp"
import image9 from "../image/caouselimage4.jpg.webp"
import image10 from "../image/caouselimage4.jpg.webp"
import image11 from "../image/caouselimage4.jpg.webp"
import image12 from "../image/caouselimage4.jpg.webp"



import { useDispatch, useSelector } from "react-redux"
import Deleinput from "../../redux/dateinput"
import ChangeBackInput from "../../redux/chnageInput"
import Delebottnav from "../../redux/deletebottnav"
import Fixphone from "../fixphone"
import HeaderIcon from "../header/header-icon"
import Header2 from "../header/Header2"
const MobileClick = () => {
    const dispatch = useDispatch()
    const change = () => {
        dispatch(Deleinput.actions.deleinput());
        dispatch(ChangeBackInput.actions.Back());
        dispatch(Delebottnav.actions.deletebot());
    }

    const sele = useSelector((state) => state.ChageInput.Background);
    const filter = useSelector((state) => state.ChageInput.filter);
    return (<>


        <Header />
        <Navbare />
        <Bootomnav />
        <HeaderIcon />
        <Header2 />
        <div style={{ background: sele, filter: filter }} onClick={change}>
            <div className="MobileClick">
                <span>
                    <img alt="" src={image1} ></img>
                    <img alt="" src={image8} ></img>
                </span>
                <span>
                    <img alt="" src={image12} ></img>
                    <img alt="" src={image11} ></img>
                </span>
            </div>





            <div className="MobileClickbottom">
                <div>
                    <img alt="" src={image2} ></img>
                    <img alt="" src={image3} ></img>
                </div>
                <div>
                    <img alt="" src={image4} ></img>
                    <img alt="" src={image5} ></img>
                </div>
               
            </div>
            <div className="MobileClickbottom">
                <div>
                    <img alt="" src={image6} ></img>
                    <img alt="" src={image7} ></img>
                </div>
                <div>
                    <img alt="" src={image9} ></img>
                    <img alt="" src={image10} ></img>
                </div>
               
            </div>
            

            <div className="MobileClickbottomtext" >
                <h1 style={{ marginRight: '90px' }}>راهنمای خرید گوشی موبایل بر اساس برند</h1>

                <p style={{ margin: '30px 100px', color: "GrayText" }}>داشتن یک گوشی کاربردی
                    می‌تواند به تمامی برنامه‌های
                    کاری افراد نظم بخشیده و امکان ارتباط با افراد مختلف و بازی و سرگرمی را نیز برای کاربران ممکن سازد. به همین خاطر شرکت‌های مختلف تولیدکننده گوشی موبایل هر روز مدل‌های پیشرفته‌تری از تلفن همراه را به ‌بازار ارائه می‌کنند، تا پاسخگوی نیازهای مخاطبان خود باشند. اما بهترین برند ارائه دهنده گوشی موبایل کدام است
                    و کدام برندها در بازار از طرفداران بیشتری برخوردار هستند؟</p>

                <h3 style={{ marginRight: '90px' }}>گوشی سامسونگ</h3>

                <p style={{ margin: '30px 100px', color: "GrayText" }}>برند سامسونگ نامی آشنا در بازار کالاهای دیجیتال است. سامسونگ یک برند کره‌ای ‌است که در طول 80 سال فعالیت خود توانسته محصولات مختلفی را در اختیار کاربران قرار دهد. از این رو گوشی هوشمند سامسونگ یکی از محصولات پر طرفدار در بازار موبایل است و بسیاری از مردم در سراسر جهان از تولیدات این برند استفاده می‌کنند. در ضمن این برند از پیشگامان تولید پنل‌های LCD با فناوری جدید AMOLED نیز است که به فناوری غالب این روزهای بازار موبایل تبدیل شده است. دوربین جلو و اصلی با کیفیت، رزولوشن FULL HD، پردازنده بسیار قوی، حافظه بالا، عمر باتری طولانی و امکاناتی از این دست، در اغلب گوشی‌های میان‌رده و بالارده سامسونگ به چشم می‌خورند. گوشی‌هایی که از سیستم عامل اندروید پشتیبانی می‌کنند و کاربری ساده‌ اما کارامدی دارند</p>

                <h3 style={{ marginRight: '90px' }}>گوشی اپل</h3>
                <p style={{ margin: '30px 100px', color: "GrayText" }}>معمولاً افرادی که کار با سیستم عامل اندروید را نمی‌پسندند جذب گوشی‌های تولیدی شرکت اپل می‌شوند. اپل یک شرکت آمریکایی چند میلیتی است که در 8 سال پیاپی به ‌عنوان با ارزش‌ترین برند جهان انتخاب شد. این شرکت توسط استیو جابز و دوستانش تاسیس شد و در سال 2017 توانست عنوان تحسین ‌شده‌ترین شرکت فناوری اطلاعات را از آن خود کند. یکی از محصولات پر فروش این برند لوکس، گوشی هوشمند با سیستم عامل IOS است که بسیاری از کاربران را مجذوب خود کرده است. گوشی‌های آیفون به تولید عکس‌های دل ‌انگیز مشهور هستند و دوربین‌ آنها از لحاظ وضوح تصویر، رنگ‌های با کیفیت و زنده‌تری را ارائه می‌کند. حافظه داخلی بالا، وزن کم، پردازنده قوی، کیفیت خروجی صدای بسیار عالی، تاچ قوی و غیره هم از دیگر ویژگی‌های مثبت گوشی هوشمند اپل است.
                </p>

                <h3 style={{ marginRight: '90px' }}>گوشی شیائومی</h3>
                <p style={{ margin: '30px 100px', color: "GrayText" }}>شیائومی را می‌توان یکی از موفق‌ترین شرکت‌های تولیدکننده گوشی تلفن همراه در جهان دانست. این برند در سال 2021 توانست رتبه اول فروش گوشی‌های هوشمند در جهان را به ‌دست آورد. قیمت مناسب و سخت ‌افزار قدرتمند، شیائومی را به برندی محبوب در میان علاقمندان به موبایل تبدیل کرده است. گفتنی است گوشی‌های شیائومی با برندهای مختلف Mi, Redmi, Poco و Black Shark نیز در بازار دیده می‌شوند. تمامی موبایل‌های برند شیائومی کاربری بالا، قیمت مناسب و امکانات زیادی دارند که کاربران سخت‌پسند را از خود راضی نگه می‌دارند.
                </p>
                <h3 style={{ marginRight: '90px' }}>گوشی هوآوی
                </h3>
                <p style={{ margin: '30px 100px', color: "GrayText" }}>هوآوی یک شرکت توسعه محور در زمینه شبکه‌های کامپیوتری و ارتباطات است. جالب است بدانید اولین گوشی سه دوربینهِ جهان توسط کمپانی هوآوی به بازار عرضه شد. گوشی هوآوی یک انتخاب مقرون به ‌صرفه، با قابلیت‌های اصلی و مهم است که به راحتی نیاز کاربر را برطرف می‌کند. شارژدهی مناسب باتری، میزان اندازه صفحه نمایش و دوربین‌های اصلی و سلفی با کیفیت، تمامی آن چیزی است که خریداران از یک گوشی میان‌‌رده هواوی انتظار دارند.
                </p>

                <h3 style={{ marginRight: '90px' }}>دیگر برندهای تولیدکننده گوشی تلفن همراه</h3>
                <p style={{ margin: '30px 100px', color: "GrayText" }}>از دیگر برندهای گوشی تلفن همراه می‌توان ال جی را نام برد. گوشی‌های این برند از کارایی فوق ‌العاده و فناوری متفاوتی برخوردار هستند و نظر بیشتر کاربران را به خود جلب کرده‌اند. برند نوکیا نیز از گذشته‌های دور تا به امروز، همراه کاربران است و حس نوستالژی را به آن‌ها القا می‌کند. با این حال امروزه اسمارت فون‌های نوکیا هم‌پای برندهایی مانند سامسونگ و شیائومی در بازار گام برمی‌دارد. در نهایت از دیگر برندهای مطرح دنیای گوشی می‌توانیم به وان پلاس، اینفینیکس، اوپو، موتورولا، ریملی، آنر، جی پلاس، جی ال ایکس، دوجی، بلو، کاترپیلار و ویوو اشاره کنیم که هر کدام با داشتن ویژگی‌های مثبت فراوان، جای خود را در دنیای دیجیتال باز کرده‌اند.

                </p>
            </div>
            <Fixphone />



        </div>
    </>)
}
export default MobileClick
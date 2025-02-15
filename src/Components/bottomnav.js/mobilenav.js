import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Mobile = () => {
    return (
        <>
            <Link to="/mobile" className="link">
                <div className="mobileBotnav" >
                    <div
                        style={{
                            margin: 'px', color: '#016FFE', cursor: 'pointer'
                        }} >همه محصولات  موبایل<FaAngleLeft />
                    </div>
                    <div className="mobileBotnav1">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <h5>برندهای مختلف گوشی موبایل <FaAngleLeft /></h5>
                            <span>گوشی آیفون</span>
                            <span>گوشی سامسونگ</span>
                            <span>گوشی شیائومی</span>
                            <span>گوشی نوکیا</span>
                            <span>گوشی ریلمی</span>
                            <span>گوشی آنر</span>
                            <span>گوشی موتورولا</span>
                            <span>گوشی نایتینگ فون</span>
                            <span>گوشی جی پلاس</span>
                            <span>گوشی هواوی</span>
                            <span>گوشی جی ال ایکس</span>
                            <span>گوشی های جنرال لوکس</span>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <h5>گوشی بر اساس قیمت<FaAngleLeft /></h5>
                            <span>گوشی موبایل ارزان</span>
                            <span>گوشی موبایل قسطی</span>
                            <span>گوشی تا 2 میلیون تومان</span>
                            <span>گوشی تا 5 میلیون تومان</span>
                            <span>گوشی تا 7 میلیون تومان</span>

                            <br />
                            <h5>گوشی بر اساس عملکرد<FaAngleLeft /></h5>
                            <span>گوشی گیمینگ</span>
                            <span>گوشی 5G</span>
                            <span>گوشی دکمه ای</span>
                            <span>گوشی ضد آب</span>



                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <h5>لوازم جانبی موبایل<FaAngleLeft /></h5>
                            <span>شارژر گوشی</span>
                            <span>قاب  و کاور گوشی</span>
                            <span>گلس گوشی</span>
                            <span>هولدر گوشی موبایل</span>
                            <span>پاور بانک</span>
                            <br />

                            <h5>تبلت<FaAngleLeft /></h5>
                            <span>تبلت سامسونگ</span>
                            <span>تبلت اپل</span>
                            <span>تبلت شیائومی</span>
                            <span>تبلت لنوو</span>
                            <span>تبلت مایکروسافت</span>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <h5>داغ ترینها<FaAngleLeft /></h5>
                            <span>گلکسی  S23 Ultra</span>
                            <span>گلکسی A54</span>
                            <span>گلکسی A34</span>
                            <span>گلکسی A24</span>
                            <span>گلکسی A14</span>
                            <span>گلکسی S23 FE</span>
                            <span>رد می نوت 12</span>
                            <span>پوکو C40</span>
                            <span>پوکو 5G</span>
                            <span>رد می پلاس  A2</span>
                            <span>پوکو M5s</span>
                            <span>آنرX9a</span>





                        </div>
                    </div>

                </div></Link>
        </>
    )
}
export default Mobile
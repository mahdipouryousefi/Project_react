import { FaAngleLeft } from "react-icons/fa";

const KalaSuperNav = () => {
    return (
        <> <div>
         <div className="mobileBotnav" >
                <div
                    style={{
                        margin: 'px', color: '#016FFE', cursor: 'pointer'
                    }} >همه محصولات  کالاهای سوپرمارکتی<FaAngleLeft />
                </div>
                <div className="mobileBotnav1">
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h5> کالاهای اساسی و خوار و بار<FaAngleLeft /></h5>
                        <span>نان</span>
                        <span>ماکرونی</span>
                        <span> برنج</span>
                        <span>نبات </span>
                        <span>قند </span>
                        <span>شکر </span>
                        <span> رب گوجه </span>
                        <span>    رب انار    </span>
                        <br/>
                        <h5 >روغن<FaAngleLeft /></h5>
                        <span> روغن مایع </span>
                        <span>   روغن جامد و نیمه جامد</span>
                        <span>   روغن زیتون</span>
                        <span>   روغن ذرت</span>

                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h5>لبنیات<FaAngleLeft /></h5>
                        <span>شیر</span>
                        <span>پنیر</span>
                        <span>کره</span>
                        <span>دوغ</span>
                        <span>خامه</span>
                        <span>کشک</span>

                        <br />
                        <h5>صبحانه<FaAngleLeft /></h5>
                        <h5>  کره‌ی بادام زمینی <FaAngleLeft /></h5>
                        <span>    شکلات صبحانه </span>
                        <span> غلات صبحانه</span>
                        <span>عسل</span>
                        <span>  پنیر صبحانه</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h5>مواد پروتئینی و تخم‌مرغ<FaAngleLeft /></h5>
                        <span>گوشت گوسفند</span>
                        <span> گوشت گوساله</span>
                        <span>     گوشت مرغ</span>
                        <span>    تخم مرغ</span>
                        <span> ماهی</span>
                        <span> میگو</span>
                        <span>  خاویار </span>
                        <span> سوسیس</span>
                        <br />
                        <h5> میوه جات و سبزیجات <FaAngleLeft /></h5>
                        <span>میوه</span>
                        <span>سبزیجات</span>
                        <span>خرما</span>
                        

                    </div>
                  
                </div>

            </div>
      

        </div></>
    )

}
export default KalaSuperNav
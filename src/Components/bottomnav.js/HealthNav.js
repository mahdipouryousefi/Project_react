import { FaAngleLeft } from "react-icons/fa";

const HealthNav = () => {
    return (
        <> <div> <div className="mobileBotnav" >
            <div
                style={{
                    margin: 'px', color: '#016FFE', cursor: 'pointer'
                }} >همه محصولات   زیبایی و سلامت<FaAngleLeft />
            </div>
            <div className="mobileBotnav1">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h5>لوازم آرایشی<FaAngleLeft /></h5>
                    <span>آرایش صورت</span>
                    <span>آرایش چشم</span>
                    <span>آرایش ابرو</span>
                    <span>آرایش لب </span>
                    <span>بهداشت و زیبایی ناخن</span>
                    <span> ابزار آرایشی</span>
                    <br />
                    <h5>مراقبت پوست<FaAngleLeft /></h5>
                    <span>کرم مرطوب کننده و نرم‌کننده</span>
                    <span>    ماسک صورت و بدن </span>
                    <span>    پاک کننده صورت</span>

                    <span>تونر</span>
                    <span>مراقبت بدن </span>
                    <span>ابزار مراقبت پوست</span>

                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h5>مراقبت و زیبایی مو<FaAngleLeft /></h5>
                    <span>شامپو و مراقبت مو</span>
                    <span>آرایش مو</span>
                    <br />
                    <h5>لوازم بهداشتی<FaAngleLeft /></h5>
                    <span>  مراقبت دندان و دهان</span>
                    <span>مسواک</span>
                    <span> خمیردندان </span>
                    <span>    دئورانت و ضد تعریق </span>
                    <span>محصولات بهداشتی  </span>




                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h5>  عطر و ادکلن<FaAngleLeft /></h5>
                    <span>  عطر و ادکلن زنانه</span>
                    <span>  عطر و ادکلن مردانه</span>
                    <span>   بادی اسلش </span>
                    <span>  عطر جیبی</span>
                    <br />
                    <h5>  لوازم شخصی برقی <FaAngleLeft /></h5>
                    <span> سشوار</span>
                    <span> اتو و حالت دهنده مو </span>
                    <span>    اصلاح موی صورت </span>
                    <span> اصلاح مو سر </span>

                </div>

            </div>

        </div>
        </div></>
    )

}
export default HealthNav 
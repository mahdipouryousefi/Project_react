import image1 from "../image/covermobile.jpg.jpg";
import image2 from "../image/e2.jpg";
import image3 from "../image/e3.jpg";
import image4 from "../image/e4.jpg";
import image5 from "../image/e5.jpg";
import image6 from "../image/e6.jpg";
import image7 from "../image/e7.jpg";
import image8 from "../image/e8.jpg";
import image9 from "../image/e9.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
 
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const BoxMobile = () => {
  return (
    <div>
      <div style={{ height: "400px" }} className="autoimage autoimageheader ">
        <Swiper
          breakpoints={{
            200: {
              slidesPerView: 1.1,
            },
            230: {
              slidesPerView: 1.2,
            },
            250: {
              slidesPerView: 1.5,
            },
            300: {
              slidesPerView: 2,
            },
            350: {
              slidesPerView: 2.2,
            },
            400: {
              slidesPerView: 2.4,
            },
            450: {
              slidesPerView: 2.6,
            },
            500: {
              slidesPerView: 2.8,
            },
            550: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 3.2,
            },
            650: {
              slidesPerView: 3.4,
            },
            700: {
              slidesPerView: 3.8,
            },
            750: {
              slidesPerView: 4,
            },
            800: {
              slidesPerView: 4.2,
            },
            820: {
              slidesPerView: 4.4,
            },

            850: {
              slidesPerView: 4.7,
            },
            880: {
              slidesPerView: 5,
            },

            900: {
              slidesPerView: 5.2,
            },

            1000: {
              slidesPerView: 5.4,
            },
            1050: {
              slidesPerView: 5.8,
            },
            1150: {
              slidesPerView: 6.2,
            },
            1250: {
              slidesPerView: 6.5,
            },
            1300: {
              slidesPerView: 6.8,
            },
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div style={{ marginTop: "40px" }}>
              <span style={{ color: "white", fontSize: "25px" }}>
                کیف و کاور موبایل{" "}
              </span>

              <img
                style={{ borderRadius: "50%", width: "150px", margin: "30px" }}
                src={image1}
              ></img>

              <div className="head-moshahedeh">
                <span
                  style={{ fontSize: "17px", textDecoration: "none" }}
                  className="moshahedeh "
                >
                  مشاهده همه{" "}
                </span>
                <FontAwesomeIcon
                  className="icon-cardslide"
                  icon={faArrowLeft}
                  style={{ color: "white ", fontSize: "13px" }}
                ></FontAwesomeIcon>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div style={{ height: "370px" }} className="swiper-card-item">
              <img src={image2}></img>
              <div style={{ marginTop: "35px" }}>
                کاور لوکسار مدل <span>AF</span>
                <br />
                <span style={{ fontWeight: "600" }}>
                  {" "}
                  مناسب برای گوشی موبایل گلکسی
                </span>
              </div>
              <div className="price">
                <span className="price-item1">۱۸%</span>{" "}
                <span className="price-item2">
                  ۴۷,۵۰۰ <span>تومان</span>
                </span>
              </div>
              <del className="price-item3">۱۸۰,۰۰۰</del>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "370px" }} className="swiper-card-item">
              <img src={image3}></img>
              <div style={{ marginTop: "20px", fontSize: "14px" }}>
                {" "}
                کاور لوکسار مدل <span>Diamond-2320</span>
                <br />
                <span style={{ fontWeight: "600" }}>
                  مناسب برای کیس پاور و اپل{" "}
                </span>
              </div>
              <div className="price">
                <span className="price-item1">۴۳%</span>{" "}
                <span className="price-item2">
                  ۲۲۸,۹۰۰ <span>تومان</span>
                </span>
              </div>
              <del className="price-item3">۴۰۰,۰۰۰</del>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "370px" }} className="swiper-card-item">
              <img src={image4}></img>
              <div style={{ marginTop: "20px" }}>
                کاور لوکسار مدل <span>Silca 2</span>
                <br />
                <span style={{ fontWeight: "600" }}>
                  {" "}
                  مناسب برای گوشی شیائومی
                </span>
              </div>
              <div className="price">
                <span className="price-item1">۵۹%</span>{" "}
                <span className="price-item2">
                  ۱۱۹,۸۰۰ <span>تومان</span>
                </span>
              </div>
              <del className="price-item3">۲۹۰,۰۰۰</del>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "370px" }} className="swiper-card-item">
              <img src={image5}></img>
              <div style={{ marginTop: "20px" }}>
                {" "}
                کاور لوکسار مدل <span>YCADEN</span>
                <br />
                <span style={{ fontWeight: "600" }}>
                  {" "}
                  مناسب برای گوشی موبایل....
                </span>
              </div>
              <div className="price">
                <span className="price-item1">۲۲%</span>{" "}
                <span className="price-item2">
                  ۱۱۳,۱۰۰<span>تومان</span>
                </span>
              </div>
              <del className="price-item3">۱۴۵,۰۰۰</del>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "370px" }} className="swiper-card-item">
              <img src={image6}></img>
              <div style={{ marginTop: "20px" }}>
                {" "}
                کاور لوکسار مدل <span>Wave</span>
                <br />
                <span style={{ fontWeight: "600" }}>
                  {" "}
                  مناسب برای گوشی موبایل سامسونگ
                </span>
              </div>
              <div className="price">
                <span className="price-item1">۵۳%</span>{" "}
                <span className="price-item2">
                  ۱۴۹,۸۰۰<span>تومان</span>
                </span>
              </div>
              <del className="price-item3">۳۲۰,۰۰۰</del>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "370px" }} className="swiper-card-item">
              <img src={image7}></img>
              <div style={{ marginTop: "20px" }}>
                {" "}
                کاور لوکسار مدل <span>AF</span>
                <br />
                <span style={{ fontWeight: "600" }}>
                  {" "}
                  مناسب برای گوشی موبایل گلکسی
                </span>
              </div>
              <div className="price">
                <span className="price-item1">۱۸%</span>{" "}
                <span className="price-item2">
                  ۱۴۷,۶۰۰ <span>تومان</span>
                </span>
              </div>
              <del className="price-item3">۱۸,۰۰۰</del>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "370px" }} className="swiper-card-item">
              <img src={image8}></img>
              <div style={{ marginTop: "20px" }}>
                {" "}
                کاور لوکسار مدل <span>KiKstand-100</span>
                <br />
                <span style={{ fontWeight: "600" }}>
                  {" "}
                  مناسب برای گوشی موبایل ....
                </span>
              </div>
              <div className="price">
                <span className="price-item1">۳۵%</span>{" "}
                <span className="price-item2">
                  ۸۴,۵۰۰<span>تومان</span>
                </span>
              </div>
              <del className="price-item3">۱۳۰,۰۰۰</del>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default BoxMobile;

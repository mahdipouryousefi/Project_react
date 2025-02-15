import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaAngleLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import Deletopinput from "../../redux/deletopinput";

const InputAnimation = () => {

  const dispatch = useDispatch();
  const dele = useSelector((state) => state.deletetopinput.display);

  const deleteinput = () => {

    dispatch(Deletopinput.actions.deleteinput())

  }
  return (
    <>
      <motion.div
        initial={{ y: 190, opacity: 60 }}
        animate={{ y: 0, opacity: 20 }}
        transition={{ duration: 1 }}
      >
        <div style={{ display: dele }} className="InputAnimation">
          <span>
            <FaArrowRight
              onClick={deleteinput}
              className="InputAnimationicon"
            />
          </span>{" "}
          <span>
            <input className="InputAnimationinput" placeholder="جستجو" />
          </span>
          <div className="InputAnimation2">
            <span>
              {" "}
              <FaFire />
            </span>
            <span> جستجو های پرطرفدار</span>
          </div>
          <div className="InputAnimation3">
            <Swiper
              dir="rtl"
              slidesPerView={4}
              spaceBetween={2}
              modules={[Navigation]}
              className="mySwiperinput"
              breakpoints={{

                900: {
                  slidesPerView: 4,
                  spaceBetween: 4,
                },
                800: {
                  slidesPerView: 3.2,
                  spaceBetween: 4,
                },
                750: {
                  slidesPerView: 3.2,
                  spaceBetween: 4,
                },
                736: {
                  slidesPerView: 3.2,
                  spaceBetween: 4,
                },
                720: {
                  slidesPerView: 3,
                  spaceBetween: 4,
                },
                700: {
                  slidesPerView: 3,
                  spaceBetween: 4,
                },
                684: {
                  slidesPerView: 2.7,
                  spaceBetween: 4,
                },
                600: {
                  slidesPerView: 2.2,
                  spaceBetween: 4,
                },

                500: {
                  slidesPerView: 2.2,
                  spaceBetween: 4,
                },

                400: {
                  slidesPerView: 1.7,
                  spaceBetween: 4,
                },

                300: {
                  slidesPerView: 1.5,
                  spaceBetween: 40,
                },
              }}
            >
              <SwiperSlide className="mySwiperinput-span">
                <span>
                  گوشی سامسونگ <span> note 20</span>
                </span>
                <FaAngleLeft style={{ marginRight: "10px" }} />{" "}
              </SwiperSlide>{" "}
              <SwiperSlide className="mySwiperinput-span">
                <span>
                  گوگل <span>pixel</span>
                </span>
                <FaAngleLeft style={{ marginRight: "10px" }} />{" "}
              </SwiperSlide>{" "}
              <SwiperSlide className="mySwiperinput-span">
                <span>ست کت شلوار زنانه</span>
                <FaAngleLeft style={{ marginRight: "10px" }} />{" "}
              </SwiperSlide>{" "}
              <SwiperSlide className="mySwiperinput-span">
                <span>نظم دهنده کیسه</span>
                <FaAngleLeft style={{ marginRight: "10px" }} />{" "}
              </SwiperSlide>{" "}
              <SwiperSlide className="mySwiperinput-span">
                <span>باکس لباس بقچه</span>
                <FaAngleLeft style={{ marginRight: "10px" }} />{" "}
              </SwiperSlide>{" "}
            </Swiper>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default InputAnimation;

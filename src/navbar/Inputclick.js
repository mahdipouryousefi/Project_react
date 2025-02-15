import gifphto from "../Components/image/gif.jpg";
import { FaFireAlt } from "react-icons/fa";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft } from "react-icons/fa6";
import { Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
const Inputclick = () => {
  const dele = useSelector((state) => state.deleinput.display);

  return (
    <>
      <div style={{ display: dele }} className="Inputclick">
        <input className="Inputclick-input" placeholder="جستجو" />
        <img className="Inputcli-ckimage" src={gifphto}></img>
        <div className="span-and-icon">
          <span className="Inputclick-span">
            {" "}
            <FaFireAlt />
          </span>
          <span className="Inputclick-span">جستجو های پرطرفدار </span>
        </div>

        <Swiper
          style={{
            "--swiper-navigation-color": "#666565",
            "--swiper-navigation-size": "100px",
            "--swiper-navigation-border": "red",
          }}
          slidesPerView={2.4}
          spaceBetween={7}
          pagination={{
            clickable: true,
          }}
          className="mySwiper-Inputclick"
          navigation={true}
          modules={[Navigation]}
        >
          <SwiperSlide className="span-inputclick">
            <span>
              پوشک مولفیکس 5 <FaChevronLeft />
            </span>
          </SwiperSlide>
          <SwiperSlide className="span-inputclick">
            <span>
              شکلات نوتلا <FaChevronLeft />
            </span>
          </SwiperSlide>{" "}
          <SwiperSlide className="span-inputclick">
            <span>
              {" "}
              گوشی سامسونگ <span>galaxy a54</span>
              <FaChevronLeft />
            </span>
          </SwiperSlide>{" "}
          <SwiperSlide className="span-inputclick">
            <span>
              شلوار اسکی <FaChevronLeft />
            </span>
          </SwiperSlide>{" "}
          <SwiperSlide className="span-inputclick">
            <span>
              {" "}
              گوشی موبایل سامسونگ <span>s20</span>
              <FaChevronLeft />
            </span>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default Inputclick;

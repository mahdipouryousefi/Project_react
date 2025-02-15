import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import image1 from "../image/im1.jpg.png";
import image2 from "../image/carouselimage2.jpg (2).webp";
import image3 from "../image/carouselimage9.jpg.webp";
import image5 from "../image/carouselimage3.jpg.webp";
import image6 from "../image/caouselimage4.jpg.webp";
import { useDispatch, useSelector } from "react-redux";
import ChangeBackInput from "../../redux/chnageInput";
import Deleinput from "../../redux/dateinput";
import Delebottnav from "../../redux/deletebottnav";

const Carousel = () => {
  const dispatch = useDispatch();
  const sele = useSelector((state) => state.ChageInput.Background);
  const filter = useSelector((state) => state.ChageInput.filter);
  const deleteinput = () => {
    dispatch(Deleinput.actions.deleinput());
    dispatch(ChangeBackInput.actions.Back());
    dispatch(Delebottnav.actions.deletebot());
  };

  return (
    <>
      {" "}
      <Swiper
        style={{ background :sele ,filter :filter,  cursor:"pointer"}}
        onClick={deleteinput}
        loop={true}
        spaceBetween={5}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <img className="mySwiper" src={image1} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mySwiper pop" src={image2} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mySwiper pop" src={image3} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mySwiper pop " src={image5} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mySwiper pop " src={image6} alt=""></img>
        </SwiperSlide>
      </Swiper>
      <img className="mySwiper add" src={image1} alt=""></img>
  
    </>
  );
};
export default Carousel;

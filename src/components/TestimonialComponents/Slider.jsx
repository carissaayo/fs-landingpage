import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import testi1 from "../../assets/images/testi1.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestiCard from "./TestiCard";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        // onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="swiper "
      >
        <SwiperSlide>
          <TestiCard image={testi1} />
        </SwiperSlide>
        <SwiperSlide>
          <TestiCard image={testi1} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <TestiCard image={testi1} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <TestiCard image={testi1} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <TestiCard image={testi1} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;

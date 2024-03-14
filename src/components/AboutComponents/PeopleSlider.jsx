import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import user1 from "../../assets/images/user.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PersonCard from "./PersonCard";

const PeopleSlider = () => {
  return (
    <section className="relative w-full mx-auto  px-8 md:px-16 lg:px-20 2xl:px-32  mb-10 py-12 poppins-regular">
      <h1 className="poppins-semibold text-2xl mb-6 px-12">People</h1>
      <Swiper
        spaceBetween={window.innerWidth > 1024 ? 50 : 20}
        slidesPerView={3}
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
          <PersonCard image={user1} name="Winner Akako" post="CEO / CTO" />
        </SwiperSlide>
        <SwiperSlide>
          <PersonCard image={user2} name="Winner Akako" post="CEO / CTO" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <PersonCard image={user3} name="Winner Akako" post="CEO / CTO" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <PersonCard image={user1} name="Winner Akako" post="CEO / CTO" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <PersonCard image={user2} name="Winner Akako" post="CEO / CTO" />
        </SwiperSlide>
        <SwiperSlide>
          <PersonCard image={user3} name="Winner Akako" post="CEO / CTO" />
        </SwiperSlide>
        <SwiperSlide>
          <PersonCard image={user1} name="Winner Akako" post="CEO / CTO" />
        </SwiperSlide>
        <SwiperSlide>
          <PersonCard image={user2} name="Winner Akako" post="CEO / CTO" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default PeopleSlider;

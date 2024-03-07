import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import gadgetImg from "../../assets/images/gadget.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    original: gadgetImg,
    thumbnail: gadgetImg,
    originalWidth: 0,
    originalHeight: "200px",
  },
  {
    original: gadgetImg,
    thumbnail: gadgetImg,
  },
  {
    original: gadgetImg,
    thumbnail: gadgetImg,
  },
];

const GadgetImageSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="w-full relative">
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        renderLeftNav={(onClick, disabled) => (
          <div className="relative">
            <ChevronLeft
              onClick={onClick}
              disabled={disabled}
              className="absolute top-[210px] cursor-pointer text-white  z-10 h-16 w-16"
            />
          </div>
        )}
        renderRightNav={(onClick, disabled) => (
          <div className="relative">
            <ChevronRight
              onClick={onClick}
              disabled={disabled}
              className="absolute top-[210px] right-0 cursor-pointer text-white  z-10 h-16 w-16"
            />
          </div>
        )}
      />
    </section>
  );
};

export default GadgetImageSlider;

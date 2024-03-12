import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import gadgetImg from "../../assets/images/gadget.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    original: gadgetImg,
    thumbnail: gadgetImg,
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
  return (
    <section className="w-full relative">
      <ImageGallery
        showIndex={window.innerWidth < 480}
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        renderLeftNav={(onClick, disabled) => (
          <div className="relative">
            <ChevronLeft
              onClick={onClick}
              disabled={disabled}
              className="absolute top-[150px] sm:top-[210px] cursor-pointer text-white  z-10 h-16 w-16"
            />
          </div>
        )}
        renderRightNav={(onClick, disabled) => (
          <div className="relative">
            <ChevronRight
              onClick={onClick}
              disabled={disabled}
              className="absolute top-[150px] sm:top-[210px] right-0 cursor-pointer text-white  z-10 h-16 w-16"
            />
          </div>
        )}
      />
    </section>
  );
};

export default GadgetImageSlider;

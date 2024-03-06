import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { useGeneralStore } from "../../store/generalStore";

import heroImg from "../../assets/images/hero.png";
import buyHeroImg from "../../assets/images/hero-buy.png";

const Hero = () => {
  const buyOrSell = useGeneralStore((state) => state.buyOrSell);
  return (
    <section
      className={` w-full md:hero__height pt-52 md:pt-0 px-20 text-center md:text-left md:px-16 lg:px-20 2xl:px-32  text-white relative poppins-regular  ${
        buyOrSell === "sell" ? "bg-[#0E0C4D] py-12" : "sell-hero-bg py-12 pt-28"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full  gap-12 md:gap-4 2xl:gap-8">
        <div className="md:flex-1  mb-8">
          {buyOrSell === "sell" ? (
            <>
              <h2 className="text-white poppins-extrabold text-[40px] mb-8  md:mb-4 2xl:w-4/5">
                Sell your <span className="md:text-[#00FFFC]">smartphone</span>{" "}
                faster and conveniently
              </h2>
              <p className="poppins-semibold text-[20px] w-[90%]">
                Fairshop is the easiest place to sell your smartphone and
                receive payment instantly
              </p>
            </>
          ) : (
            <>
              <h2 className="text-white poppins-extrabold text-[40px] mb-4 2xl:w-4/5">
                Own a <span className="md:text-[#00FFFC]">smartphone</span>{" "}
                today, pay small small.
              </h2>
              <p className="poppins-semibold text-[20px] w-[90%]">
                Fairshop is the easiest place to sell your smartphone and
                receive payment instantly
              </p>
            </>
          )}
        </div>
        <div className="flex-1 md:flex justify-end">
          <img src={buyOrSell === "sell" ? heroImg : buyHeroImg} alt="" />
        </div>
      </div>
      {buyOrSell === "sell" && (
        <div className="text-center  pt-20">
          <Button className="bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-10 rounded-2xl">
            <a href="#brands" className=" flex">
              Sell Now <ChevronDown className="h-6 w-6 ml-2" />
            </a>
          </Button>
        </div>
      )}
    </section>
  );
};

export default Hero;

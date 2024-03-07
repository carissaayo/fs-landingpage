import { Button } from "../../ui/button";
import { ChevronDown } from "lucide-react";
import heroImg from "../../../assets/images/hero.png";
const Hero = () => {
  return (
    <section
      className=" w-full md:hero__height  text-center md:text-left  px-8 md:px-16 lg:px-20 2xl:px-32  text-white relative poppins-regular 
       bg-[#0E0C4D]  pt-40  pb-16 sm:pt-52  md:pt-60  sm:pb-20 lg:pt-12 lg:pb-12 2xl:pt-20  2xl:pb-20
  "
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full  gap-12 md:gap-4 2xl:gap-8 ">
        <div className="md:flex-1  ">
          <h2 className="text-white poppins-bold md:poppins-extrabold text-2xl lg:text-3xl  md:text-[40px] mb-8  md:mb-4 2xl:w-4/5">
            Sell your <span className="md:text-[#00FFFC]">smartphone</span>{" "}
            faster and conveniently
          </h2>
          <p className="poppins-semibold md:text-[20px] md:w-[90%]">
            Fairshop is the easiest place to sell your smartphone and receive
            payment instantly
          </p>
        </div>
        <div className="flex-1 md:flex justify-end">
          <img src={heroImg} alt="" />
        </div>
      </div>

      <div className="text-center  pt-12">
        <Button className="bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-10 rounded-2xl">
          <a href="#brands" className=" flex">
            Sell Now <ChevronDown className="h-6 w-6 ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
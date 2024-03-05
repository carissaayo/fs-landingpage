import { ChevronDown } from "lucide-react";
import heroImg from "../../assets/images/hero.png";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="bg-[#0E0C4D] w-full con__height py-12  px-32  text-white relative poppins-regular">
      <div className="flex items-center justify-between w-full gap-8 ">
        <div className="flex-1">
          <h2 className="text-white poppins-extrabold text-[40px] mb-4 w-4/5">
            Sell your <span className="text-[#00FFFC]">smartphone</span> faster
            and conveniently
          </h2>
          <p className="poppins-semibold text-[20px] w-[90%]">
            Fairshop is the easiest place to sell your smartphone and receive
            payment instantly
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <img src={heroImg} alt="" />
        </div>
      </div>
      <div className="text-center  absolute left-[50%] bottom-12">
        <Button className="bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-10 rounded-2xl">
          <a href="#" className=" flex">
            Sell Now <ChevronDown className="h-6 w-6 ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;

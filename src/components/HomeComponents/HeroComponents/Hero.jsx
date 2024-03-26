import { Button } from "../../ui/button";
import { Plus } from "lucide-react";
import heroImg from "../../../assets/images/hero.png";
const Hero = () => {
  return (
    <section
      className="  w-full min-h-[700px] text-center md:text-left  px-12 md:px-32   bg-[#0E0C4D]  text-white relative poppins-regular  py-10 pb-36 md:pb-10
  "
    >
      <div className="flex flex-col md:h-screen gap-2 justify-center ">
        <div className="flex flex-col md:flex-row items-center justify-between w-full  gap-12 md:gap-8 md:min-h-[700px] ">
          <div className="md:flex-1">
            <h2 className="text-white poppins-medium text-3xl   md:text-[40px]  leading-[50px] mb-8   md:w-[90%] ">
              Sell your <span className="text-[#00FFFC]">smartphone</span>{" "}
              faster and conveniently
            </h2>
            <p className="poppins-medium md:text-[20px] md:w-[90%]">
              Fairshop is the easiest place to sell your smartphone and receive
              payment instantly
            </p>
          </div>
          <div className="flex-1 md:flex justify-end">
            <img
              src={heroImg}
              alt=""
              className="md:min-w-[300px] md:min-h-[300px] max-h-[400px] md:max-h-[500px] "
            />
          </div>
        </div>

        <div className="text-center ">
          <Button className="bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-10 rounded-2xl">
            <a href="#sell" className=" flex items-center">
              Sell Now <Plus className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

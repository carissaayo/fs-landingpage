import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

const AboutUs = () => {
  return (
    <section className="w-full con__height bg-white px-32  relative poppins-regular text-[#0C0F4D] py-8 pt-12">
      <div className="mb-6">
        <h1 className="poppins-bold text-3xl mb-4"> About Us</h1>
        <p className="poppins-semibold text-black text-2xl w-[40%]">
          Fairshop is the easiest place to sell your device conveniently
        </p>
      </div>
      <p className="w-3/4 text-lg text-[#111111] mb-20">
        Our vision is to be the leading provider of smartphone financing
        solutions, helping to bridge the digital divide and bring the latest
        technology to people all over the world.
      </p>
      <div className="w-full bg-[#130D52] h-[250px] rounded-2xl text-white img-bg flex items-center justify-between px-32 ">
        <div className="text-center">
          <h1 className="poppins-bold text-3xl mb-4">5000+</h1>
          <p className="poppins-semibold text-lg">Devices Sold</p>
        </div>
        <div className="text-center">
          <h1 className="poppins-bold text-3xl mb-4">7+</h1>
          <p className="poppins-semibold text-lg">Active Cities</p>
        </div>
        <div className="text-center">
          <h1 className="poppins-bold text-3xl mb-4">100k</h1>
          <p className="poppins-semibold text-lg">Community Members</p>
        </div>
      </div>
      <div className="text-center  absolute left-[50%] bottom-8">
        <Button className="bg-[#140D53]  hover:bg-[#140D53]  rounded-2xl ">
          <a href="#" className=" flex px-2">
            Sell Now <ChevronDown className="h-6 w-6 ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default AboutUs;

import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import CardsCon from "./CardsCon";

const HowItWorks = () => {
  return (
    <section className="w-full md:con__height py-12   xs:px-16  md:px-16 lg:px-20 2xl:px-32  relative poppins-regular bg-[#FAFAFA] md:bg-[#8D8D8D] md:bg-opacity-5 text-[#0C0F4D]">
      <div className="text-center ">
        <h1 className="poppins-semibold text-3xl mb-4">How it works</h1>
        <p className="px-2 xs:px-0 text-lg xs:text-xl">
          Find out how selling to Fairshop works{" "}
        </p>
      </div>
      <CardsCon />
      <div className="text-center  pt-0">
        <Button className="bg-[#D3D2DE] hover:bg-[#D3D2DE] md:bg-[#140D53]  md:hover:bg-[#140D53] text-[#130D52] md:text-inherit rounded-2xl ">
          <a href="#brands" className=" flex px-2">
            Sell Now <ChevronDown className="h-6 w-6 ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HowItWorks;

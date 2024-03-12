import { Search } from "lucide-react";
import { Button } from "../../ui/button";
import BrandsCon from "./BrandsCon";

import Steps from "./Steps";

const ModelsCon = ({ stepContent }) => {
  return (
    <section
      id="brands"
      className={` ${
        stepContent === 2
          ? "translate-x-0 w-full md:con__height px-4 xs:px-8 sm:px-12 md:px-16 lg:px-20 2xl:px-32  relative poppins-regular py-12 md:py-0"
          : "translate-x-[-100%] absolute h-0"
      }`}
    >
      <div className="w-full items-center justify-center md:justify-between flex mb-4 pt-12">
        <h1 className="poppins-semibold text-xl xs:text-3xl">
          Select Phone Model
        </h1>
        <Button
          variant="link"
          className="hidden md:block underline text-[#0E0C4D] text-lg"
        >
          <a href="#how-it-works">How it works</a>
        </Button>
      </div>
      <p className="text-[#111111] text-center md:text-left xs:text-lg md:text-base mb-12">
        Please select the model of smartphone you want to sell
      </p>

      <Steps step={2} />
      <div className="w-[40%] flex flex-col justify-start border-gray-300 ">
        <div className="flex items-center gap-3 mt-4  border lg:border-b border-gray-400 py-4 lg:py-2 lg:w-4/5 px-4 rounded-xl">
          <Search className="w-5 h-5 text-[#7D7E7E]" />

          <input
            type="text"
            placeholder="Search"
            className="border-none focus:border-none outline-none focus:outline-none w-full"
          />
        </div>
      </div>

      <div className="">
        <BrandsCon number={3} />
      </div>
    </section>
  );
};

export default ModelsCon;

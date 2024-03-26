import { Search } from "lucide-react";
import { Button } from "../../ui/button";

import Steps from "./Steps";
import Models from "./Models";

const ModelsCon = ({ stepContent }) => {
  return (
    <section
      className={` ${
        stepContent === 2
          ? "translate-x-0 w-full md:con__height px-6 md:px-32  relative poppins-regular  "
          : "translate-x-[-100%] absolute h-0"
      }`}
    >
      <div className="w-full items-center justify-center md:justify-between flex mb-4 ">
        <h1 className="poppins-semibold text-xl xs:text-3xl">
          Select Phone Model
        </h1>
        <Button
          variant="link"
          className="hidden md:block underline text-[#0E0C4D] text-lg"
        >
          <a href="/sell#how-it-works">How it works</a>
        </Button>
      </div>
      <p className="text-[#111111] text-center md:text-left xs:text-lg md:text-base mb-4">
        Please select the model of smartphone you want to sell
      </p>

      <Steps step={2} />
      <div className="w-[60%] md:w-[40%] flex flex-col justify-start border-gray-300 ">
        <div className="flex items-center gap-3 mt-4  border lg:border-b border-gray-400 py-4 w-full px-4 rounded-xl">
          <Search className="w-5 h-5 text-[#7D7E7E]" />

          <input
            type="text"
            placeholder="Search"
            className="border-none focus:border-none outline-none focus:outline-none w-full py-0 px-0 "
          />
        </div>
      </div>

      <div className="">
        <Models number={3} />
      </div>
    </section>
  );
};

export default ModelsCon;

import { Search } from "lucide-react";

import { Label } from "../../ui/label";

const SellForm = () => {
  return (
    <div className="bg-white w-full  border border-gray-200 rounded-xl  min-h-[150px] flex flex-col md:flex-row items-center justify-center md:justify-start px-8 py-8  z-10 gap-8 md:gap-0 mt-[-80px] mb-[40px]">
      <div className="w-full md:flex-1 px-4  flex flex-col justify-start gap-4 ">
        <Label className="poppins-semibold text-xl ">Search Phone Name</Label>
        <div className="flex items-center gap-3   border md:border-b border-gray-400 py-4 md:py-2 px-4 rounded-xl h-[60px]">
          <Search className="w-5 h-5 text-[#7D7E7E]" />

          <input
            type="text"
            placeholder="Enter phone name"
            className="border-none focus:border-none outline-none focus:outline-none w-full text-sm md:text-base p-0"
          />
        </div>
      </div>

      <div className="w-full md:flex-1  px-4  flex flex-col justify-start gap-4 ">
        <Label className="poppins-semibold text-xl ">Phone Model</Label>
        <div className="custom-select">
          <select className="border border-gray-400 p-4 rounded-lg text-sm md:text-base focus:outline-none">
            <option value="" className="">
              Apple
            </option>{" "}
            <option value="" className="">
              Samsung
            </option>{" "}
            <option value="" className="">
              Tecno
            </option>{" "}
            <option value="" className="">
              Infinix
            </option>{" "}
            <option value="" className="">
              Xiaomi
            </option>
          </select>
        </div>
      </div>

      <div className="w-full md:flex-1  px-4  flex flex-col justify-start gap-4">
        <Label className="poppins-semibold text-xl ">Price Range</Label>

        <div className="custom-select">
          <select className="border border-gray-400 p-4 rounded-lg text-sm md:text-base focus:outline-none">
            <option value="" className="">
              &#8358;30,000.00 - &#8358;100,000.00
            </option>{" "}
            <option value="" className="">
              &#8358;110,000.00 - &#8358;200,000.00
            </option>{" "}
            <option value="" className="">
              &#8358;210,000.00 - &#8358;300,000.00
            </option>{" "}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SellForm;

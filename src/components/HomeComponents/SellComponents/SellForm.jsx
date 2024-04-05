import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";

const SellForm = () => {
  return (
    <div className="bg-white w-full  border border-gray-200 rounded-xl  min-h-[150px] flex flex-col lg:flex-row items-center justify-center lg:justify-between  px-2 md:px-8 py-8   z-20 gap-8  mt-[-50px] mb-[40px] ">
      <div className="w-full lg:flex-1 px-4 lg:px-0   flex flex-col justify-start gap-4 ">
        <Label className="poppins-semibold text-xl ">Select Phone Brand</Label>
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

      <div className="w-full lg:flex-1  px-4 lg:px-0  flex flex-col justify-start gap-4 ">
        <Label className="poppins-semibold text-xl ">Select Phone Model</Label>
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
      <div className=" flex items-center lg:pt-10 ">
        <Button className="bg-[#130D52] hover:bg-[#130D52] px-0 h-[max-content]">
          <Link
            to="/sell/phone-variant"
            className="w-full px-12 text-base py-[7px]"
          >
            Sell Now
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SellForm;

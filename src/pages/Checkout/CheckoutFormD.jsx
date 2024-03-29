import { useEffect } from "react";

import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";

import { useGeneralStore } from "../../store/generalStore";
import { useCheckoutStore } from "../../store/checkoutStore";
import { Link } from "react-router-dom";

const ChecoutFormD = () => {
  const setCheckoutStep = useGeneralStore((state) => state.setCheckoutStep);
  const setShowSteps = useCheckoutStore((state) => state.setShowSteps);
  const goToTop = () => {
    setCheckoutStep(1);
    setShowSteps(true);
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => goToTop(), []);
  return (
    <main className="w-full  ">
      <div className="w-full  mb-4 text-center">
        <h1 className="poppins-semibold text-xl md:text-3xl mb-4">
          Delivery Details
        </h1>
        <p className="text-[rgb(17,17,17)] text-center   md:text-base mb-4 md:mb-12">
          Please provide the location details of where you want the phone to be
          delivered to
        </p>
      </div>
      <div className="mb-6">
        <div className="py-6 px-2  flex flex-col gap-8 md:gap-6 ">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 ">
            {/* State*/}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                State<span className="text-[#E40C0C]">*</span>
              </Label>
              <div className="custom-select">
                <select
                  name=""
                  id=""
                  className=" border border-gray-400  rounded-lg"
                  defaultValue=""
                  placeholder="Select the Phones Fault Condition"
                >
                  <option value="apple" className="">
                    Broken Screen
                  </option>
                  <option value="apple" className="">
                    Broken Screen
                  </option>{" "}
                  <option value="apple" className="">
                    Broken Screen
                  </option>{" "}
                  <option value="apple" className="">
                    Broken Screen
                  </option>{" "}
                  <option value="apple" className="">
                    Broken Screen
                  </option>{" "}
                  <option value="apple" className="">
                    Broken Screen
                  </option>
                </select>
              </div>
            </div>

            {/* City */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                City <span className="text-[#E40C0C]">*</span>
              </Label>
              <Input className="border border-gray-400 " />
            </div>
          </div>
          {/* Address */}
          <div className="flex flex-col gap-4">
            <Label className="">
              Address <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input type="password" className="border border-gray-400 " />
          </div>

          <div className="flex flex-col  gap-4 ">
            <Label className="">
              Contact Phone Number <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="flex gap-4 md:gap-8">
              {/* Number Code */}
              <div className="w-[25%] md:w-[20%]  border border-gray-400  p-3   flex rounded-xl">
                <p className="text-base xs:text-lg flex items-center">+234</p>
              </div>

              {/* Phone Number */}
              <div className="w-[75%] md:w-[90%] flex flex-col gap-4">
                <Input className="border border-gray-400  rounded-xl" />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="use-user-number" />
            <label
              htmlFor="use-user-number"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Same as my phone number
            </label>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center md:justify-end items-center  gap-6 mb-10  ">
        <Link
          to="/buy/checkout/formC"
          className="w-28 bg-[#F0F0F0] hover:bg-[#F0F0F0] text-black hover:text-black text-base rounded-2xl border border-[#ACACAC] h-[50px] flex items-center justify-center "
          onClick={() => setCheckoutStep(3)}
        >
          Back
        </Link>
        <Link
          to="/buy/checkout/info"
          className="bg-[#0C0F4D] hover:bg-[#0C0F4D] rounded-2xl w-28 h-[50px] flex items-center justify-center text-white"
          // onClick={() => setCheckoutStep(4)}
        >
          Next
        </Link>
      </div>
    </main>
  );
};

export default ChecoutFormD;

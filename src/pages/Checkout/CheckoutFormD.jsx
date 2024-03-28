import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";

import { useGeneralStore } from "../../store/generalStore";

const ChecoutFormD = () => {
  const setCheckoutStep = useGeneralStore((state) => state.setCheckoutStep);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => goToTop(), []);
  return (
    <main className="w-full  ">
      <section className="">
        <div className="w-full  mb-4 text-center">
          <h1 className="poppins-semibold text-xl md:text-3xl mb-4">
            Delivery Details
          </h1>
          <p className="text-[rgb(17,17,17)] text-center   md:text-base mb-4 md:mb-12">
            Please provide the location details of where you want the phone to
            be delivered to
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
      </section>
    </main>
  );
};

export default ChecoutFormD;

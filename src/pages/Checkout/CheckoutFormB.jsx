import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

import { useGeneralStore } from "../../store/generalStore";

const CheckoutFormB = () => {
  const setCheckoutStep = useGeneralStore((state) => state.setCheckoutStep);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => goToTop(), []);
  return (
    <section className="w-full ">
      <div className="py-6 px-2  flex flex-col  gap-8  md:gap-12 mb-6">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 ">
          {/* Phone Number */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Phone Number <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-400 p-4 py-[30px]" />
          </div>

          {/* Email */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Email <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-400 p-4 py-[30px]" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 ">
          {/* State */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              State <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="custom-select">
              <select
                name=""
                id=""
                className=" border border-gray-400 p-4 rounded-lg"
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

          {/*City */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              City<span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-400 p-4 py-[30px]" />
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-4">
          <Label className="">
            Address <span className="text-[#E40C0C]">*</span>
          </Label>
          <Input
            type="password"
            className="border border-gray-400 p-4 py-[30px]"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20">
          {/* LGA */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              LGA <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="custom-select">
              <select
                name=""
                id=""
                className=" border border-gray-400 p-4 rounded-lg"
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

          {/*NIN */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              NIN<span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-400 p-4 py-[30px]" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center md:justify-end items-center  gap-6 mb-10  ">
        <Link
          to="/buy/checkout/formA"
          className="w-28 bg-[#F0F0F0] hover:bg-[#F0F0F0] text-black hover:text-black text-base rounded-2xl border border-[#ACACAC] h-[50px] flex items-center justify-center "
          onClick={() => setCheckoutStep(1)}
        >
          Back
        </Link>
        <Link
          to="/buy/checkout/formC"
          className="bg-[#0C0F4D] hover:bg-[#0C0F4D] rounded-2xl w-28 h-[50px] flex items-center justify-center text-white"
          onClick={() => setCheckoutStep(3)}
        >
          Next
        </Link>
      </div>
    </section>
  );
};

export default CheckoutFormB;

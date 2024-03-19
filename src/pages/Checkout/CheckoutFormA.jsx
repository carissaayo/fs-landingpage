import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useGeneralStore } from "../../store/generalStore";

const CheckoutFormA = () => {
  const setCheckoutStep = useGeneralStore((state) => state.setCheckoutStep);
  const goToTop = () => {
    setCheckoutStep(1);
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  };
  useEffect(() => goToTop(), []);
  return (
    <section className="w-full ">
      <div className="py-6 px-2  flex flex-col gap-6 mb-6">
        <div className="flex flex-col sm:flex-row justify-between  gap-8 sm:gap-6 ">
          {/* First Name */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              First Name <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-400 p-4 py-7" />
          </div>

          {/* Last Name */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Last Name <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-400 p-4 py-7" />
          </div>
        </div>

        {/*BVN*/}
        <div className="flex flex-col gap-4">
          <Label className="">
            BVN <span className="text-[#E40C0C]">*</span>
          </Label>
          <Input className="border border-gray-400 p-4 py-7" />
        </div>

        {/* Banks */}
        <div className="flex flex-col gap-4">
          <Label className="">
            Select Bank <span className="text-[#E40C0C]">*</span>
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

        {/* Account Number */}
        <div className="flex flex-col gap-4">
          <Label className="">
            Account Number <span className="text-[#E40C0C]">*</span>
          </Label>
          <Input type="password" className="border border-gray-400 p-4 py-7" />
        </div>
      </div>
      <div className="w-full flex justify-center sm:justify-end items-center  gap-6 mb-10  ">
        <Link
          to="/buy/checkout/formA"
          className="w-28 bg-[#F0F0F0] hover:bg-[#F0F0F0] text-black hover:text-black text-base rounded-2xl border border-[#ACACAC] h-[50px] flex items-center justify-center "
        >
          Back
        </Link>
        <Link
          to="/buy/checkout/formB"
          className="bg-[#0C0F4D] hover:bg-[#0C0F4D] rounded-2xl w-28 h-[50px] flex items-center justify-center text-white"
          onClick={() => setCheckoutStep(2)}
        >
          Next
        </Link>
      </div>
    </section>
  );
};

export default CheckoutFormA;

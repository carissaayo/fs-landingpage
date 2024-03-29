import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

import { useGeneralStore } from "../../store/generalStore";
import { useCheckoutStore } from "../../store/checkoutStore";
const CheckoutFormC = () => {
  const setCheckoutStep = useGeneralStore((state) => state.setCheckoutStep);
  const setShowSteps = useCheckoutStore((state) => state.setShowSteps);
  const goToTop = () => {
    setCheckoutStep(3);
    setShowSteps(true);
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => goToTop(), []);
  return (
    <section className="w-full ">
      <div className="w-full  mb-4 text-center">
        <h1 className="poppins-semibold text-xl md:text-3xl mb-4">
          Guarantors Information
        </h1>
        <p className="text-[rgb(17,17,17)] text-center   md:text-base mb-4 md:mb-12">
          Please provide 3 Guarantor details
        </p>
      </div>
      <div className="mb-6 ">
        {/* First Guarantor */}
        <section className="py-6 px-2  flex flex-col gap-8 md:gap-12">
          <p className="text-[#0E0C4D] text-lg poppins-semibold">
            First Guarantor
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 ">
            {/* First Name */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                First Name <span className="text-[#E40C0C]">*</span>
              </Label>
              <Input className="border border-gray-400 " />
            </div>

            {/* Last Name */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Last Name <span className="text-[#E40C0C]">*</span>
              </Label>
              <Input className="border border-gray-400 " />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 ">
            {/* Relationship */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Relationship <span className="text-[#E40C0C]">*</span>
              </Label>
              <Input className="border border-gray-400 " />
            </div>

            {/* Phone Number */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Contact Phone Number <span className="text-[#E40C0C]">*</span>
              </Label>
              <Input className="border border-gray-400 " />
            </div>
          </div>
        </section>

        {/* Second Guarantor */}
        <section className="py-6 px-2  flex flex-col gap-8 md:gap-12">
          <p className="text-[#0E0C4D] text-lg poppins-semibold">
            Second Guarantor
          </p>
          <div className="flex flex-col md:flex-row  justify-between gap-8 md:gap-20 ">
            {/* First Name */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                First Name <span className="text-[#E40C0C]">*</span>
              </Label>
              <Input className="border border-gray-400 " />
            </div>

            {/* Last Name */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Last Name <span className="text-[#E40C0C]">*</span>
              </Label>
              <Input className="border border-gray-400 " />
            </div>
          </div>

          <div className="flex flex-col md:flex-row   justify-between  gap-8 md:gap-20 ">
            {/* Relationship */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Relationship <span className="text-[#E40C0C]">*</span>
              </Label>
              <Input className="border border-gray-400 p-4  py-[30px]" />
            </div>

            {/* Phone Number */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Contact Phone Number <span className="text-[#E40C0C]">*</span>
              </Label>
              <Input className="border border-gray-400 " />
            </div>
          </div>
        </section>

        {/* Third Guarantor */}
        <section className="py-6 px-2  flex flex-col gap-8 sm:gap-12">
          <p className="text-[#0E0C4D] text-lg poppins-semibold">
            Third Guarantor
          </p>
          <div className="flex flex-col md:flex-row  justify-between gap-8 md:gap-20 ">
            {/* First Name */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                First Name <span className="text-[#E40C0C]">*</span>
              </Label>
              <Input className="border border-gray-400 " />
            </div>

            {/* Last Name */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Last Name <span className="text-[#E40C0C]">*</span>
              </Label>
              <Input className="border border-gray-400 " />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 ">
            {/* Relationship */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Relationship <span className="text-[#E40C0C]">*</span>
              </Label>
              <Input className="border border-gray-400 " />
            </div>

            {/* Phone Number */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Contact Phone Number <span className="text-[#E40C0C]">*</span>
              </Label>
              <Input className="border border-gray-400 " />
            </div>
          </div>
        </section>
      </div>
      <div className="w-full flex justify-center md:justify-end items-center  gap-6 mb-10  ">
        <Link
          to="/buy/checkout/formB"
          className="w-28 bg-[#F0F0F0] hover:bg-[#F0F0F0] text-black hover:text-black text-base rounded-2xl border border-[#ACACAC] h-[50px] flex items-center justify-center "
          onClick={() => setCheckoutStep(2)}
        >
          Back
        </Link>
        <Link
          to="/buy/checkout/formD"
          className="bg-[#0C0F4D] hover:bg-[#0C0F4D] rounded-2xl w-28 h-[50px] flex items-center justify-center text-white"
          onClick={() => setCheckoutStep(4)}
        >
          Next
        </Link>
      </div>
    </section>
  );
};

export default CheckoutFormC;

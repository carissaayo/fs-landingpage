import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

import { useGeneralStore } from "../../store/generalStore";
const CheckoutFormC = () => {
  const setCheckoutStep = useGeneralStore((state) => state.setCheckoutStep);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => goToTop(), []);
  return (
    <section className="w-full ">
      <div className="mb-6 ">
        <p className="text-[#898686] mb-4   xs:text-lg mt-6">
          Please provide 3 Guarantor details
        </p>
        {/* First Guarantor */}
        <section className="py-6 px-2  flex flex-col gap-8 sm:gap-6">
          <p className="text-[#0E0C4D] text-lg poppins-semibold">
            First Guarantor
          </p>
          <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-6 ">
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

          <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-6 ">
            {/* Relationship */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Relationship <span className="text-[#E40C0C]">*</span>
              </Label>
              <Input className="border border-gray-400 p-4 py-7" />
            </div>

            {/* Phone Number */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Contact Phone Number <span className="text-[#E40C0C]">*</span>
              </Label>
              <Input className="border border-gray-400 p-4 py-7" />
            </div>
          </div>
        </section>

        {/* Second Guarantor */}
        <section className="py-6 px-2  flex flex-col gap-8 sm:gap-6">
          <p className="text-[#0E0C4D] text-lg poppins-semibold">
            Second Guarantor
          </p>
          <div className="flex flex-col sm:flex-row  justify-between gap-8 sm:gap-6 ">
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

          <div className="flex flex-col sm:flex-row   justify-between  gap-8 sm:gap-6 ">
            {/* Relationship */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Relationship <span className="text-[#E40C0C]">*</span>
              </Label>
              <Input className="border border-gray-400 p-4  py-7" />
            </div>

            {/* Phone Number */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Contact Phone Number <span className="text-[#E40C0C]">*</span>
              </Label>
              <Input className="border border-gray-400 p-4 py-7" />
            </div>
          </div>
        </section>

        {/* Third Guarantor */}
        <section className="py-6 px-2  flex flex-col gap-8 sm:gap-6">
          <p className="text-[#0E0C4D] text-lg poppins-semibold">
            Third Guarantor
          </p>
          <div className="flex flex-col sm:flex-row  justify-between gap-8 sm:gap-6 ">
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

          <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-6 ">
            {/* Relationship */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Relationship <span className="text-[#E40C0C]">*</span>
              </Label>
              <Input className="border border-gray-400 p-4 py-7" />
            </div>

            {/* Phone Number */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Contact Phone Number <span className="text-[#E40C0C]">*</span>
              </Label>
              <Input className="border border-gray-400 p-4 py-7" />
            </div>
          </div>
        </section>
      </div>
      <div className="w-full flex justify-center sm:justify-end items-center  gap-6 mb-10  ">
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

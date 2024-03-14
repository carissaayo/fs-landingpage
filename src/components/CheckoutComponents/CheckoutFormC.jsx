import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useGeneralStore } from "../../store/generalStore";

const CheckoutFormC = () => {
  const showCheckoutContent = useGeneralStore(
    (state) => state.showCheckoutContent
  );
  return (
    <section
      className={` ${
        showCheckoutContent === 3
          ? "translate-x-0 w-full relative poppins-regular "
          : "translate-x-[-200%] h-0"
      }`}
    >
      <p className="text-[#898686] mb-4   xs:text-lg">
        Please provide 3 Guarantor details
      </p>
      {/* First Guarantor */}
      <section className="py-6 px-2  flex flex-col gap-6">
        <p className="text-[#0E0C4D] text-lg poppins-semibold">
          First Guarantor
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-6 ">
          {/* First Name */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              First Name <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-300 p-4" />
          </div>

          {/* Last Name */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Last Name <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-300 p-4" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-6 ">
          {/* Relationship */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Relationship <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-300 p-4" />
          </div>

          {/* Phone Number */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Contact Phone Number <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-300 p-4" />
          </div>
        </div>
      </section>

      {/* Second Guarantor */}
      <section className="py-6 px-2  flex flex-col gap-6">
        <p className="text-[#0E0C4D] text-lg poppins-semibold">
          Second Guarantor
        </p>
        <div className="flex flex-col sm:flex-row  justify-between gap-6 ">
          {/* First Name */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              First Name <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-300 p-4" />
          </div>

          {/* Last Name */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Last Name <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-300 p-4" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row   justify-between gap-6 ">
          {/* Relationship */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Relationship <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-300 p-4" />
          </div>

          {/* Phone Number */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Contact Phone Number <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-300 p-4" />
          </div>
        </div>
      </section>

      {/* Third Guarantor */}
      <section className="py-6 px-2  flex flex-col gap-6">
        <p className="text-[#0E0C4D] text-lg poppins-semibold">
          Third Guarantor
        </p>
        <div className="flex flex-col sm:flex-row  justify-between gap-6 ">
          {/* First Name */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              First Name <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-300 p-4" />
          </div>

          {/* Last Name */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Last Name <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-300 p-4" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-6 ">
          {/* Relationship */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Relationship <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-300 p-4" />
          </div>

          {/* Phone Number */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Contact Phone Number <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-300 p-4" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default CheckoutFormC;

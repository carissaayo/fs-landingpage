import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { useGeneralStore } from "../../store/generalStore";

const CheckoutFormA = () => {
  const showCheckoutContent = useGeneralStore(
    (state) => state.showCheckoutContent
  );

  return (
    <section
      className={` ${
        showCheckoutContent === 1
          ? "translate-x-0 w-full relative poppins-regular "
          : "translate-x-[-200%] h-0"
      }`}
    >
      <div className="py-6 px-2  flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between  gap-8 sm:gap-6 ">
          {/* First Name */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              First Name <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-300 p-4 py-6" />
          </div>

          {/* Last Name */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Last Name <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-300 p-4 py-6" />
          </div>
        </div>

        {/*BVN*/}
        <div className="flex flex-col gap-4">
          <Label className="">
            BVN <span className="text-[#E40C0C]">*</span>
          </Label>
          <Input className="border border-gray-300 p-4 py-6" />
        </div>

        {/* Banks */}
        <div className="flex flex-col gap-4">
          <Label className="">
            Select Bank <span className="text-[#E40C0C]">*</span>
          </Label>
          <select
            name=""
            id=""
            className="border border-gray-500 p-4 rounded-lg"
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

        {/* Account Number */}
        <div className="flex flex-col gap-4">
          <Label className="">
            Account Number <span className="text-[#E40C0C]">*</span>
          </Label>
          <Input type="password" className="border border-gray-300 p-4 py-6" />
        </div>
      </div>
    </section>
  );
};

export default CheckoutFormA;

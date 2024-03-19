import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { useGeneralStore } from "../../store/generalStore";

const CheckoutFormB = () => {
  const showCheckoutContent = useGeneralStore(
    (state) => state.showCheckoutContent
  );
  return (
    <section
      className={` ${
        showCheckoutContent === 2
          ? "translate-x-0 w-full relative poppins-regular "
          : "translate-x-[-200%] h-0"
      }`}
    >
      <div className="py-6 px-2  flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-6 ">
          {/* Phone Number */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Phone Number <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-400 p-4 py-7" />
          </div>

          {/* Email */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Email <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-400 p-4 py-7" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-6 ">
          {/* State */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              State <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="custom-select">
              <select
                name=""
                id=""
                className=" border border-gray-500 p-4 rounded-lg"
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
            <Input className="border border-gray-400 p-4 py-7" />
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-4">
          <Label className="">
            Address <span className="text-[#E40C0C]">*</span>
          </Label>
          <Input type="password" className="border border-gray-400 p-4 py-7" />
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-6 ">
          {/* LGA */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              LGA <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="custom-select">
              <select
                name=""
                id=""
                className=" border border-gray-500 p-4 rounded-lg"
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
            <Input className="border border-gray-400 p-4 py-7" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutFormB;

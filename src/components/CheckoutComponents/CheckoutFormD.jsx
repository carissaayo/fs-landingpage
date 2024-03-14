import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { useGeneralStore } from "../../store/generalStore";

const ChecoutFormD = () => {
  const showCheckoutContent = useGeneralStore(
    (state) => state.showCheckoutContent
  );
  return (
    <section
      className={` ${
        showCheckoutContent === 4
          ? "translate-x-0 w-full relative poppins-regular "
          : "translate-x-[-200%] h-0"
      }`}
    >
      <div className="py-6 px-2  flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between gap-6 ">
          {/* State*/}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              State<span className="text-[#E40C0C]">*</span>
            </Label>
            <Select>
              <SelectTrigger className="wfull border-gray-300">
                <SelectValue placeholder="Select Your State" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>State</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* City */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              City <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-300 p-4" />
          </div>
        </div>
        {/* Address */}
        <div className="flex flex-col gap-4">
          <Label className="">
            Address <span className="text-[#E40C0C]">*</span>
          </Label>
          <Input type="password" className="border border-gray-300 p-4" />
        </div>

        <div className="flex flex-col  gap-4 ">
          <Label className="">
            Contact Phone Number <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="flex gap-4 xs:gap-8">
            {/* Number Code */}
            <div className="w-[25%] sm:w-[20%] lg:w-[10%] border  p-3 xs:p-3 xs:px-4 flex rounded-xl">
              {/* <Input className="border border-gray-300 p-4 py-6" /> */}
              <p className="text-base xs:text-lg">+234</p>
            </div>

            {/* Phone Number */}
            <div className="w-[75%] sm:w-[80%] lg:w-[90%] flex flex-col gap-4">
              <Input className="border border-gray-300 p-4 py-6 rounded-xl" />
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
    </section>
  );
};

export default ChecoutFormD;

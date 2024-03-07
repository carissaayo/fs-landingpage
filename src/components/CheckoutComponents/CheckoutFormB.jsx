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

const CheckoutFormB = () => {
  return (
    <section className="py-6 px-2  flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row justify-between gap-6 ">
        {/* Phone Number */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            Phone Number <span className="text-[#E40C0C]">*</span>
          </Label>
          <Input className="border p-4" />
        </div>

        {/* Email */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            Email <span className="text-[#E40C0C]">*</span>
          </Label>
          <Input className="border p-4" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-6 ">
        {/* State */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            State <span className="text-[#E40C0C]">*</span>
          </Label>
          <Select>
            <SelectTrigger className="wfull">
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

        {/*City */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            City<span className="text-[#E40C0C]">*</span>
          </Label>
          <Input className="border p-4" />
        </div>
      </div>

      {/* Address */}
      <div className="flex flex-col gap-4">
        <Label className="">
          Address <span className="text-[#E40C0C]">*</span>
        </Label>
        <Input type="password" className="border p-4" />
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-6 ">
        {/* LGA */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            LGA <span className="text-[#E40C0C]">*</span>
          </Label>
          <Select>
            <SelectTrigger className="wfull">
              <SelectValue placeholder="Select Your LGA" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/*NIN */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            NIN<span className="text-[#E40C0C]">*</span>
          </Label>
          <Input className="border p-4" />
        </div>
      </div>
    </section>
  );
};

export default CheckoutFormB;

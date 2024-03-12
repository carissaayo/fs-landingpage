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

const CheckoutFormA = () => {
  return (
    <section className="py-6 px-2  flex flex-col gap-6">
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
          <Input className="border border-gray-300 border-gray-300 p-4" />
        </div>
      </div>

      {/*BVN*/}
      <div className="flex flex-col gap-4">
        <Label className="">
          BVN <span className="text-[#E40C0C]">*</span>
        </Label>
        <Input className="border border-gray-300 p-4" />
      </div>

      {/* Banks */}
      <div className="flex flex-col gap-4">
        <Label className="">
          Select Bank <span className="text-[#E40C0C]">*</span>
        </Label>
        <Select className="">
          <SelectTrigger className="full border-gray-300">
            <SelectValue placeholder="Select A Bank" />
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

      {/* Account Number */}
      <div className="flex flex-col gap-4">
        <Label className="">
          Account Number <span className="text-[#E40C0C]">*</span>
        </Label>
        <Input type="password" className="border border-gray-300 p-4" />
      </div>
    </section>
  );
};

export default CheckoutFormA;

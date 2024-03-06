import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Search } from "lucide-react";

const SellForm = () => {
  return (
    <div className="bg-white w-4/5 border border-gray-200 rounded-xl h-[150px] flex items-center px-8 absolute top-[-5%] z-10">
      <div className="flex-[1.5]">
        <Label className="poppins-semibold text-xl ">Search Phone Name</Label>
        <div className="flex items-center gap-3 mt-4  border-b border-gray-200 py-2 w-4/5">
          <Search className="w-5 h-5 text-[#7D7E7E]" />

          <input
            type="text"
            placeholder="Enter phone name"
            className="border-none focus:border-none outline-none focus:outline-none w-full"
          />
        </div>
      </div>

      <div className="flex-1 border-x px-8">
        <Label className="poppins-semibold text-xl ">Phone Model</Label>
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Apple" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Apple">Apple</SelectItem>
            <SelectItem value="Samsung">Samsung</SelectItem>
            <SelectItem value="Tecno">Tecno</SelectItem>
            <SelectItem value="Infinix">Infinix</SelectItem>
            <SelectItem value="Xiaomi">Xiaomi</SelectItem>
            <SelectItem value="Itel">Itel</SelectItem>
            <SelectItem value="Oppo">Oppo</SelectItem>
            <SelectItem value="Redmi">Redmi</SelectItem>
            <SelectItem value="Google">Google</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1 border-x px-8">
        <Label className="poppins-semibold text-xl ">Price Range</Label>
        <Select>
          <SelectTrigger className="">
            <SelectValue
              placeholder="&#8358;30,000.00 - &#8358;100,000.00"
              className=""
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="&#8358;30,000.00 - &#8358;100,000.00">
              &#8358;30,000.00 - &#8358;100,000.00
            </SelectItem>
            <SelectItem value="&#8358;110,000.00 - &#8358;200,000.00">
              &#8358;110,000.00 - &#8358;200,000.00
            </SelectItem>
            <SelectItem value="  &#8358;210,000.00 - &#8358;300,000.00">
              &#8358;210,000.00 - &#8358;300,000.00
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SellForm;

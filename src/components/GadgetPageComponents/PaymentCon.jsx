import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";

const PaymentCon = () => {
  return (
    <>
      {/* Payment Terms Con */}
      <div className="">
        <h1 className="poppins-semibold text-2xl mb-4">Payment Terms</h1>
        <p className="text-[#898686] mb-6">Choose an easy payment duration</p>

        {/* Payment Con */}
        <div className="border border-gray-100 py-4 rounded-xl px-4 mb-10">
          <p className="flex justify-between mb-4">
            Pay Monthly{" "}
            <span className="">
              <ChevronUp className="w-5 h-5" />
            </span>
          </p>
          <RadioGroup defaultValue="2">
            <div className="flex items-center space-x-2  justify-between border p-4 rounded-xl">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="2" id="r1" />
                <Label htmlFor="r1">2 months</Label>
              </div>
              <p className="">₦329,800/mo</p>
            </div>
            <div className="flex items-center space-x-2 justify-between border p-4 rounded-xl">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="3" id="r1" />
                <Label htmlFor="r1">3 months</Label>
              </div>
              <p className="">₦329,800/mo</p>
            </div>
            <div className="flex items-center space-x-2 justify-between border p-4 rounded-xl">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="4" id="r1" />
                <Label htmlFor="r1">4 months</Label>
              </div>
              <p className="">₦329,800/mo</p>
            </div>

            <div className="flex items-center space-x-2 justify-between border p-4 rounded-xl">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="5" id="r1" />
                <Label htmlFor="r1">5 months</Label>
              </div>
              <p className="">₦329,800/mo</p>
            </div>

            <div className="flex items-center space-x-2 justify-between border p-4 rounded-xl">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="6" id="r1" />
                <Label htmlFor="r1">6 months</Label>
              </div>
              <p className="">₦329,800/mo</p>
            </div>
          </RadioGroup>
        </div>

        {/* Delivery Con */}
        <div className="mb-10">
          <h1 className="poppins-semibold text-2xl mb-4">Select State</h1>
          <p className="text-[#898686] mb-6">Select your delivery state</p>
          <div className=" flex flex-col justify-start gap-4">
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Lagos - #2000" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Lagos">Lagos - #2000</SelectItem>
                <SelectItem value="Kwara">Kwara - #2000</SelectItem>
                <SelectItem value="Oyo">Oyo - #2000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      {/* Payment Summary */}
      <div className="mb-10 relative">
        <h1 className="poppins-semibold text-2xl mb-4">Payment Summary</h1>

        <div className="mb-10 border border-gray-100 py-6 rounded-xl bg-[#FCFCFC] px-4">
          <div className="flex justify-between  items-center ">
            <p className="poppins-semibold text-2xl mb-4">Initial deposit</p>
            <p className="text-xl">₦329,800</p>
          </div>
          {/* Dotted Con Starts*/}
          <div className="flex">
            <div className="">
              <div className=" border border-dashed border-[#6F6F6F] h-[80px] w-0"></div>
            </div>
            <div className="flex items-center justify-between gap-1 w-full">
              <div className="flex items-center gap-1">
                <div className=" border border-dashed border-[#6F6F6F] h-[0px] w-[30px]"></div>
                <p className="text-[#898686]">30% down payment</p>
              </div>
              <p className="text-[#898686]">₦14,000</p>
            </div>
          </div>
          <div className="relative bottom-[13px] left-1 flex gap-1 items-center justify-between">
            <div className="flex items-center gap-1">
              <div className=" border border-dashed border-[#6F6F6F] h-[0px] w-[30px]"></div>
              <p className="text-[#898686]">Loan charges</p>
            </div>
            <p className="text-[#898686]">₦14,000</p>
          </div>
          {/* Dotted Con Ends*/}
        </div>
      </div>
      <hr className="mb-10" />

      {/* Payment structure */}
      <div className=" mb-10">
        <RadioGroup defaultValue="0">
          <div className="flex items-center space-x-2  justify-between  p-4 rounded-xl">
            <div className="flex items-center gap-6">
              <RadioGroupItem value="0" id="r1" />
              <Label htmlFor="r1">1st monthly payment</Label>
            </div>
            <p className="">₦14,000.00</p>
          </div>
          <div className="relative">
            <div className="h-[40px] w-0 border border-black border-dashed ml-6 absolute bottom-[-16px]"></div>
          </div>
          <div className="flex items-center space-x-2  justify-between  p-4 rounded-xl">
            <div className="flex items-center gap-6">
              <RadioGroupItem value="0" id="r1" />
              <Label htmlFor="r1">2nd monthly payment</Label>
            </div>
            <p className="">₦14,000.00</p>
          </div>
          <div className="relative">
            <div className="h-[40px] w-0 border border-black border-dashed ml-6 absolute bottom-[-16px]"></div>
          </div>
          <div className="flex items-center space-x-2  justify-between  p-4 rounded-xl">
            <div className="flex items-center gap-6">
              <RadioGroupItem value="0" id="r1" />
              <Label htmlFor="r1">3rd monthly payment</Label>
            </div>
            <p className="">₦14,000.00</p>
          </div>
        </RadioGroup>
      </div>
      {/* Submit Btn */}
      <div className="w-full ">
        <Button className="bg-[#0E0C4D] border-[#B1B1B1] hover:bg-[#0E0C4D] hover:border-[#B1B1B1] w-full py-8 text-lg">
          Next
        </Button>
      </div>
    </>
  );
};

export default PaymentCon;
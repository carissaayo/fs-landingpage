import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const PaymentSignupForm = () => {
  return (
    <ScrollArea className="   md:h-full w-full bg-white">
      <section className="py-6 px-4 overflow-y-scroll md:overflow-y-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-8 w-full mb-10">
          {/* First Name */}
          <div className="flex flex-col gap-4">
            <Label className="">
              First Name <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border p-4" />
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-4">
            <Label className="">
              Last Name <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border p-4" />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-4">
            <Label className="">
              Phone Number <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border p-4" />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-4">
            <Label className="">
              Email Address <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input type="email" className="border p-4" />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-4">
            <Label className="">
              Email Address <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input type="password" className="border p-4" />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-4">
            <Label className="">
              Confirm Password <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border p-4" type="password" />
          </div>
        </div>
        {/* Submit Btn */}
        <Link to="/buy/checkout">
          <div className=" flex justify-center w-full">
            <Button className="bg-[#0E0C4D] border-[#B1B1B1] hover:bg-[#0E0C4D] hover:border-[#B1B1B1]  py-4 text-lg w-[50%]">
              Sign up
            </Button>
          </div>
        </Link>
      </section>
      <ScrollBar orientation="vertical" className="md:hidden " />
    </ScrollArea>
  );
};

export default PaymentSignupForm;

import { Input } from "../ui/input";
import { Label } from "../ui/label";

const PaymentSignupForm = () => {
  return (
    <section className="py-4  ">
      <div className="grid grid-cols-2  gap-4 gap-x-8 w-full ">
        {/* Email Address */}
        <div className="flex flex-col gap-4">
          <Label className="">
            Email Address <span className="text-[#E40C0C]">*</span>
          </Label>
          <Input type="email" className="border border-gray-400 " />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-4">
          <Label className="">
            Password <span className="text-[#E40C0C]">*</span>
          </Label>
          <Input type="password" className="border border-gray-400 " />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-4">
          <Label className="">
            Confirm Password <span className="text-[#E40C0C]">*</span>
          </Label>
          <Input className="border border-gray-400 " type="password" />
        </div>
      </div>
    </section>
  );
};

export default PaymentSignupForm;

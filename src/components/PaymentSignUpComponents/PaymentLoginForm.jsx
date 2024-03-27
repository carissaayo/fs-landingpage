import { Input } from "../ui/input";
import { Label } from "../ui/label";

const PaymentLoginForm = () => {
  return (
    <section className="py-4  ">
      <div className="grid grid-cols-1  gap-4 gap-x-8 w-full ">
        {/* First Name */}
        <div className="flex flex-col gap-4">
          <Label className="">
            Email <span className="text-[#E40C0C]">*</span>
          </Label>
          <Input
            className="border  border-gray-400 "
            type="email"
            placeholder="Enter your email"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-4">
          <Label className="">
            Password <span className="text-[#E40C0C]">*</span>
          </Label>
          <Input
            className="border border-gray-400 "
            type="password"
            placeholder="Enter your password"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentLoginForm;

import { Input } from "../ui/input";
import { Label } from "../ui/label";

const RegisterForm = () => {
  return (
    <section className="py-4  px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-8 w-full ">
        {/* First Name */}
        <div className="flex flex-col gap-4">
          <Label className="">
            First Name <span className="text-[#E40C0C]">*</span>
          </Label>
          <Input className="border  border-gray-400 " />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-4">
          <Label className="">
            Last Name <span className="text-[#E40C0C]">*</span>
          </Label>
          <Input className="border border-gray-400 " />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-4">
          <Label className="">
            Phone Number <span className="text-[#E40C0C]">*</span>
          </Label>
          <Input className="border border-gray-400 " />
        </div>

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
      <div className="mt-10 ">
        <button className=" flex justify-center items-center  bg-[#0E0C4D] py-2 text-lg text-white rounded-lg w-1/2 mx-auto">
          Register
        </button>
      </div>
    </section>
  );
};

export default RegisterForm;

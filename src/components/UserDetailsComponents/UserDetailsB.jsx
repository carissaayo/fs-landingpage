import { Label } from "../ui/label";

const UserDetailsB = () => {
  return (
    <div className="py-6 px-2  flex flex-col  gap-8  md:gap-12 mb-6">
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 ">
        {/* Phone Number */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            Phone Number <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg">
            09028938458
          </div>
        </div>

        {/* Email */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            Email <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg">
            johndoe@gmail.com
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 ">
        {/* State */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            State <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg">
            Kwara State
          </div>
        </div>

        {/*City */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            City<span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg">
            Ilorin
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="flex flex-col gap-4">
        <Label className="">
          Address <span className="text-[#E40C0C]">*</span>
        </Label>
        <div className="border border-gray-400 py-3 px-4 rounded-lg">
          No 100 fate road, Ilorin.
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20">
        {/* LGA */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            LGA <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg">
            Area Local Government
          </div>
        </div>

        {/*NIN */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            NIN<span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg">
            9028938458
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsB;

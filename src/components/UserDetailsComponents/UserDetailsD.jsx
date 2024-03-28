import { Label } from "../ui/label";

const UserDetailsD = () => {
  return (
    <div className="mb-6">
      <div className="py-6 px-2  flex flex-col gap-8 md:gap-6 ">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 ">
          {/* State*/}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              State<span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="border border-gray-400 py-3 px-4 rounded-lg">
              Kwara State
            </div>
          </div>

          {/* City */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              City <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="border border-gray-400 py-3 px-4 rounded-lg">
              Ilorin
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 ">
          {/* Address */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Address <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="border border-gray-400 py-3 px-4 rounded-lg">
              No. 100 fate road, Ilorin.
            </div>
          </div>

          {/* Contact Number */}
          <div className="flex-1 flex flex-col  gap-4 ">
            <Label className="">
              Contact Phone Number <span className="text-[#E40C0C]">*</span>
            </Label>

            <div className="border border-gray-400 py-3 px-4 rounded-lg">
              09028938458
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsD;

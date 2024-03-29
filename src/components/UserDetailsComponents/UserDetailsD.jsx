import { Label } from "../ui/label";

const UserDetailsD = () => {
  return (
    <div className="mb-6">
      <h1 className="poppins-medium text-lg"> Delivery Details</h1>
      <div className="py-6 px-2  grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 ">
        {/* State*/}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            State<span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
            Kwara State
          </div>
        </div>

        {/* City */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            City <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
            Ilorin
          </div>
        </div>

        {/* Address */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            Address <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
            No. 100 fate road, Ilorin.
          </div>
        </div>

        {/* Contact Number */}
        <div className="flex-1 flex flex-col  gap-4 ">
          <Label className="">
            Contact Phone Number <span className="text-[#E40C0C]">*</span>
          </Label>

          <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
            09028938458
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsD;

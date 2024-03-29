import { Label } from "../ui/label";

const UserDetailsB = () => {
  return (
    <section className="">
      <h1 className="poppins-medium text-lg"> KYC Details 2</h1>
      <div className="py-6 px-2  grid grid-cols-2 md:grid-cols-4  gap-8  mb-6">
        {/* Phone Number */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            Phone Number <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
            09028938458
          </div>
        </div>

        {/* Email */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            Email <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
            johndoe@gmail.com
          </div>
        </div>

        {/* State */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            State <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
            Kwara State
          </div>
        </div>

        {/*City */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            City<span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
            Ilorin
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-4">
          <Label className="">
            Address <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
            No 100 fate road, Ilorin.
          </div>
        </div>

        {/* LGA */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            LGA <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
            Area Local Government
          </div>
        </div>

        {/*NIN */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            NIN<span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
            9028938458
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetailsB;

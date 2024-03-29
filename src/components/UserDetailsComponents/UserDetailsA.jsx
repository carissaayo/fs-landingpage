import { Label } from "../ui/label";

const UserDetailsA = () => {
  return (
    <section className="">
      <h1 className="poppins-medium text-lg"> KYC Details 1</h1>
      <div className="py-6 px-2  grid grid-cols-2 md:grid-cols-4  gap-8  mb-6">
        {/* First Name */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            First Name <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
            John
          </div>
        </div>

        {/* Last Name */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            Last Name <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
            Doe
          </div>
        </div>

        {/*BVN*/}
        <div className="flex flex-col gap-4">
          <Label className="">
            BVN <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
            213456789009
          </div>
        </div>

        {/* Banks */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            Select Bank <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
            United Bank of Africe (UBA)
          </div>
        </div>

        {/* Account Number */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            Account Number <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
            21012345678
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetailsA;

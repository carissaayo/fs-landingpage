import { Label } from "../ui/label";

const UserDetailsA = () => {
  return (
    <section className="">
      <div className="py-6 px-2  flex flex-col  gap-8  md:gap-12 mb-6">
        <div className="flex flex-col md:flex-row justify-between  gap-8 md:gap-20 ">
          {/* First Name */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              First Name <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="border border-gray-400 py-3 px-4 rounded-lg">
              John
            </div>
          </div>

          {/* Last Name */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Last Name <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="border border-gray-400 py-3 px-4 rounded-lg">
              Doe
            </div>
          </div>
        </div>

        {/*BVN*/}
        <div className="flex flex-col gap-4">
          <Label className="">
            BVN <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg">
            213456789009
          </div>
        </div>

        {/* Banks */}
        <div className="flex flex-col gap-4">
          <Label className="">
            Select Bank <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg">
            United Bank of Africe (UBA)
          </div>
        </div>

        {/* Account Number */}
        <div className="flex flex-col gap-4">
          <Label className="">
            Account Number <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="border border-gray-400 py-3 px-4 rounded-lg">
            21012345678
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetailsA;

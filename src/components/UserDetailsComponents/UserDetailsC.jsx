import { Label } from "../ui/label";

const UserDetailsC = () => {
  return (
    <div className="mb-6 ">
      {/* First Guarantor */}
      <section className="py-6 px-2  flex flex-col gap-8 md:gap-12">
        <p className="text-[#0E0C4D] text-lg poppins-semibold">
          First Guarantor
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 ">
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

        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 ">
          {/* Relationship */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Relationship <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="border border-gray-400 py-3 px-4 rounded-lg">
              Sibling
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Contact Phone Number <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="border border-gray-400 py-3 px-4 rounded-lg">
              09028938458
            </div>
          </div>
        </div>
      </section>

      {/* Second Guarantor */}
      <section className="py-6 px-2  flex flex-col gap-8 md:gap-12">
        <p className="text-[#0E0C4D] text-lg poppins-semibold">
          Second Guarantor
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 ">
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

        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 ">
          {/* Relationship */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Relationship <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="border border-gray-400 py-3 px-4 rounded-lg">
              Sibling
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Contact Phone Number <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="border border-gray-400 py-3 px-4 rounded-lg">
              09028938458
            </div>
          </div>
        </div>
      </section>

      {/* Third Guarantor */}
      <section className="py-6 px-2  flex flex-col gap-8 md:gap-12">
        <p className="text-[#0E0C4D] text-lg poppins-semibold">
          Third Guarantor
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 ">
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

        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 ">
          {/* Relationship */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Relationship <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="border border-gray-400 py-3 px-4 rounded-lg">
              Sibling
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Contact Phone Number <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="border border-gray-400 py-3 px-4 rounded-lg">
              09028938458
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserDetailsC;

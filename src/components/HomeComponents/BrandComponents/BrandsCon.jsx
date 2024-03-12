import { Badge } from "../../ui/badge";
import { useGeneralStore } from "../../../store/generalStore";
import { useState } from "react";
const brands = [
  " Apple",
  "Google",
  "Xiaomi",
  "Tecno",
  "Nokia",
  "Itel",
  "Samsung",
  "Infinix",
  "Oppo",
  "Other",
];
const BrandsCon = ({ number }) => {
  const setShowContent = useGeneralStore((state) => state.setShowContent);
  const [brand, setBrand] = useState("");

  return (
    <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-6 gap-4 xs:gap-6 sm:gap-6   my-12">
      {brands.map((phone, i) => (
        <Badge
          variant="outline"
          key={i}
          className={`bg-[#F2F2F2] h-[60px] md:h-[80px]  rounded-2xl flex items-center justify-center poppins-medium text-base md:text-xl px-4 xs:px-2 sm:px-0 cursor-pointer text-[#0C0F4D] hover:border hover:border-[#0C0F4D] ${
            brand === phone && "border-[#0C0F4D]"
          }`}
          onClick={() => setBrand(phone)}
        >
          {phone}
        </Badge>
      ))}
    </div>
  );
};

export default BrandsCon;

import { useState } from "react";
import { Link } from "react-router-dom";

import { Badge } from "../../ui/badge";
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
const BrandsCon = () => {
  const [brand, setBrand] = useState("");

  return (
    <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-6 gap-4  md:gap-8  my-12">
      {brands.map((phone, i) => (
        <Link to={`/sell/brand/model`} key={i} state={{ brand: phone }}>
          <Badge
            variant="outline"
            className={`bg-[#F2F2F2] h-[60px] md:h-[80px]  rounded-2xl flex items-center justify-center poppins-medium text-base md:text-xl px-4 xs:px-2 sm:px-0 cursor-pointer text-[#0C0F4D] hover:border hover:border-[#0C0F4D] ${
              brand === phone && "border-[#0C0F4D]"
            }`}
            onClick={() => setBrand(phone)}
          >
            {phone}
          </Badge>
        </Link>
      ))}
    </div>
  );
};

export default BrandsCon;

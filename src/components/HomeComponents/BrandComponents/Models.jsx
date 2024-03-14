import { Badge } from "../../ui/badge";
import { useGeneralStore } from "../../../store/generalStore";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const brands = [
  "apple",
  "google",
  "xiaomi",
  "tecno",
  "nokia",
  "itel",
  "samsung",
  "infinix",
  "oppo",
  "other",
];

const Models = () => {
  const setShowContent = useGeneralStore((state) => state.setShowContent);
  const [model, setModel] = useState("");
  const location = useLocation();
  console.log(location);
  return (
    <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-6 gap-4 xs:gap-6 sm:gap-6   my-12">
      {brands.map((phone, i) => (
        <Link to={`/sell/brand/model/details`} state={{ model: phone }} key={i}>
          <Badge
            variant="outline"
            className={`bg-[#F2F2F2] h-[60px] md:h-[80px]  rounded-2xl flex items-center justify-center poppins-medium text-base md:text-xl px-4 xs:px-2 sm:px-0 cursor-pointer text-[#0C0F4D] hover:border hover:border-[#0C0F4D] ${
              model === phone && "border-[#0C0F4D]"
            }`}
            onClick={() => setModel(phone)}
          >
            {phone}
          </Badge>
        </Link>
      ))}
    </div>
  );
};

export default Models;

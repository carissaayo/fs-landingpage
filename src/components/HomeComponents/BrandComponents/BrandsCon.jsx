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
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 xs:gap-6 sm:gap-12  md:gap-x-20 xl:gap-x-32 my-12">
      {brands.map((brand, i) => (
        <Badge
          variant="outline"
          key={i}
          className="bg-[#F2F2F2] h-[60px] md:h-[120px]  rounded-2xl flex items-center justify-center poppins-medium text-base xs:text-xl px-2 sm:px-0 "
        >
          {brand}
        </Badge>
      ))}
    </div>
  );
};

export default BrandsCon;

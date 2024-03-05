import { Badge } from "../ui/badge";

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
    <div className="grid grid-cols-4 gap-12 gap-x-32 my-12">
      {brands.map((brand, i) => (
        <Badge
          variant="outline"
          key={i}
          className="bg-[#F2F2F2] h-[120px]  rounded-2xl flex items-center justify-center poppins-medium text-xl"
        >
          {brand}
        </Badge>
      ))}
    </div>
  );
};

export default BrandsCon;

import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../../ui/badge";
import phoneImg from "../../../assets/images/phoneImg.png";

const SellCard = () => {
  return (
    <Link
      to="/buy/gadgets/123"
      className="flex flex-col border border-gray-200  min-w-[200px] lg:min-w-[250px]"
    >
      <div className="w-full flex items-center  justify-center py-6">
        <img src={phoneImg} alt="" className="w-[80%]" />
      </div>
      <div className="flex flex-col gap-4 px-4 py-4">
        <h1 className="text-left">Apple Macbook Air 13 Inch</h1>
        <h1 className="poppins-bold">₦301,490</h1>
        <p className="flex items-center text-[#0E0C4D]">
          <MapPin className="w-4 h-4 mr-2" />
          Kwara
        </p>

        <Badge variant="secondary" className="w-[max-content] p-2 px-4">
          Used
        </Badge>
      </div>
    </Link>
  );
};

export default SellCard;

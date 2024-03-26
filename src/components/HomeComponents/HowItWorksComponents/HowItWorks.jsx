import { useLocation } from "react-router-dom";
import { Plus } from "lucide-react";

import { Button } from "../../ui/button";
import CardsCon from "./CardsCon";

import { useGeneralStore } from "../../../store/generalStore";

const HowItWorks = () => {
  const sellLinkUrl = useGeneralStore((state) => state.sellLinkUrl);

  const location = useLocation();
  let pathname = location.pathname;
  pathname = pathname.slice(1, 4);
  return (
    <section
      id="how-it-works"
      className="w-full md:con__height py-12   px-6 md:px-24 lg:px-32  relative poppins-regular bg-[#FAFAFA] md:bg-[#8D8D8D] md:bg-opacity-5 text-[#0C0F4D]"
    >
      <div className="text-center ">
        <h1 className="poppins-semibold text-3xl mb-4">How it works</h1>
        <p className="px-2 md:px-0 text-lg md:text-xl w-4/5 mx-auto md:w-full md:mx-0">
          Find out how selling to Fairshop works{" "}
        </p>
      </div>
      <CardsCon />
      <div className="text-center ">
        <Button className="bg-[#D3D2DE] hover:bg-[#D3D2DE] md:bg-[#140D53]  md:hover:bg-[#140D53] text-[#130D52] md:text-white rounded-2xl ">
          <a
            href={`${pathname === sellLinkUrl ? "/sell#sell" : "/#buy"}`}
            className=" flex px-2 items-center"
          >
            {pathname === sellLinkUrl ? "Sell Now" : "Buy Now"}{" "}
            <Plus className="h-4 w-4 ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HowItWorks;

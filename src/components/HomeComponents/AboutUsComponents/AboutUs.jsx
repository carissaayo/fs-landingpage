import { useLocation } from "react-router-dom";
import { Plus } from "lucide-react";

import { Button } from "../../ui/button";
import { useGeneralStore } from "../../../store/generalStore";

const AboutUs = () => {
  const sellLinkUrl = useGeneralStore((state) => state.sellLinkUrl);

  const location = useLocation();
  let pathname = location.pathname;
  pathname = pathname.slice(1, 4);
  return (
    <section className="w-full md:con__height bg-white px-6  md:px-32   relative poppins-regular text-[#0C0F4D] py-12 ">
      <div className="mb-6 text-center md:text-left">
        <h1 className="poppins-bold text-3xl mb-4"> About Us</h1>
        <p className="poppins-semibold text-black text-lg md:text-2xl md:w-[40%]">
          Fairshop is the easiest place to sell your device conveniently
        </p>
      </div>
      <p className="md:w-3/4 text-lg text-[#111111] mb-20 text-center md:text-left">
        Our vision is to be the leading provider of smartphone financing
        solutions, helping to bridge the digital divide and bring the latest
        technology to people all over the world.
      </p>
      <div className="w-full bg-[#130D52] md:min-h-[250px] rounded-2xl text-white img-bg flex flex-col md:flex-row md:items-center justify-between px-12  py-16 md:px-32 gap-12 md:gap-0 ">
        <div className="md:text-center">
          <h1 className="poppins-bold text-3xl mb-4">5000+</h1>
          <p className="poppins-semibold text-lg">Devices Sold</p>
        </div>
        <div className="md:text-center">
          <h1 className="poppins-bold text-3xl mb-4">7+</h1>
          <p className="poppins-semibold text-lg">Active Cities</p>
        </div>
        <div className="md:text-center">
          <h1 className="poppins-bold text-3xl mb-4">100k</h1>
          <p className="poppins-semibold text-lg">Community Members</p>
        </div>
      </div>
      <div className="text-center  pt-12">
        <Button className="bg-[#D3D2DE] hover:bg-[#D3D2DE] md:bg-[#140D53]  md:hover:bg-[#140D53] text-[rgb(19,13,82)] md:text-white ]  rounded-2xl   ">
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

export default AboutUs;

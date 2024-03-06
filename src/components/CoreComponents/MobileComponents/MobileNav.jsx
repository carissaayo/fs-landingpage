import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useGeneralStore } from "../../../store/generalStore";
import logoImg from "../../../assets/images/FairShop New Logo PNG 4 1.png";
import avatarImg from "../../../assets/images/testi2.png";
const MobileNav = ({ scroll }) => {
  const [openMobile, setOpenMobile] = useState(false);
  const buyOrSell = useGeneralStore((state) => state.buyOrSell);
  const setBuyOrSell = useGeneralStore((state) => state.setBuyOrSell);
  return (
    <section
      className={`${scroll ? "sticky" : ""}
        md:hidden  z-20 bg-[#0E0C4D] w-full   py-6   px-8  poppins-regular  `}
    >
      <div className="relative">
        <div className="flex w-full items-center justify-between">
          <div className="flex-1">
            <Link to="/" className="text-white poppins-extrabold text-[40px]">
              <img src={logoImg} alt="" />
            </Link>
          </div>
          <div className="">
            <Menu
              className={`w-12 h-12 text-white  ${openMobile && "rotate-90"}`}
              onClick={() => setOpenMobile(!openMobile)}
            />
          </div>
        </div>
        {openMobile && (
          <div
            className={`w-full bg-white absolute h-[max-content]  flex-col z-20  flex  ${
              openMobile ? "translate-y-0 " : " translate-y-[-10%]"
            }`}
          >
            <div className="w-full p-4 border-b px-8">
              <p
                className={`w-full text-xl poppins-semibold flex items-center gap-8`}
              >
                <img src={avatarImg} alt="" className="w-[60px]" />
                John Doe
              </p>
            </div>
            <div className="w-full p-4 border-b px-8">
              <Link
                onClick={() => setBuyOrSell("sell")}
                to="/"
                className={`w-full text-center py-3 text-xl poppins-semibold`}
              >
                Sell A Gadget
              </Link>
            </div>
            <div className="w-full p-4 border-b px-8">
              <Link
                onClick={() => setBuyOrSell("buy")}
                to="/buy"
                className={`w-full text-center py-3 text-xl poppins-semibold`}
              >
                Buy A Gadget
              </Link>
            </div>
            <div className="w-full p-4 border-b px-8">
              <Link
                to="/login"
                className={`w-full text-center py-3 text-xl poppins-semibold`}
              >
                Login
              </Link>
            </div>

            <div className="w-full p-4 border-b px-8">
              <Link
                to="/login"
                className={`w-full text-center py-3 text-xl poppins-semibold`}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MobileNav;

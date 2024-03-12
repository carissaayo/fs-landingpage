import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useGeneralStore } from "../../../store/generalStore";
import logoImg from "../../../assets/images/FairShop New Logo PNG 4 1.png";
import avatarImg from "../../../assets/images/testi2.png";

const MobileNav = ({ scroll, isBuy }) => {
  const [openMobile, setOpenMobile] = useState(false);
  const buyOrSell = useGeneralStore((state) => state.buyOrSell);
  const setBuyOrSell = useGeneralStore((state) => state.setBuyOrSell);

  useEffect(() => {
    if (isBuy === 1) {
      setBuyOrSell("buy");
    } else {
      setBuyOrSell("sell");
    }
  }, [isBuy]);
  return (
    <section
      className={`${scroll ? "sticky" : ""}
        md:hidden  z-20 bg-[#0E0C4D] w-full   py-6   px-4  poppins-regular  `}
    >
      <div className="relative">
        <div className="flex w-full items-center justify-between">
          <div className="flex-1">
            <Link to="/" className="text-white poppins-extrabold text-[40px]">
              <img src={logoImg} alt="" className="w-[100px] h-[50px]" />
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-end gap-6">
            <div className="w-[120px]  rounded-xl  border-[#292761] border-2 flex items-center justify-between">
              <Link
                onClick={() => setBuyOrSell("sell")}
                to="/"
                className={`w-1/2 text-center py-2 rounded-l-lg  ${
                  buyOrSell === "sell"
                    ? "bg-[#292761] text-white "
                    : "text-[#C0C0C0]"
                }`}
              >
                Sell
              </Link>
              <Link
                onClick={() => setBuyOrSell("buy")}
                to="/buy"
                className={`w-1/2 text-center py-2 ${
                  buyOrSell === "buy"
                    ? "bg-[#292761] text-white "
                    : "text-[#C0C0C0]"
                }`}
              >
                Buy
              </Link>
            </div>
            <div className="">
              <Menu
                className={`w-8 h-8 text-white  ${openMobile && "rotate-90"}`}
                onClick={() => setOpenMobile(!openMobile)}
              />
            </div>
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

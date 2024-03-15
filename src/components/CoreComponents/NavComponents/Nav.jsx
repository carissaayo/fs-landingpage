import { Link, useLocation } from "react-router-dom";

import NavMenu from "./NavMenu";
import { Button } from "../../ui/button";

import logoImg from "../../../assets/images/FairShop New Logo PNG 4 1.png";
import { useGeneralStore } from "../../../store/generalStore";
import { useEffect } from "react";
import LoggedInNav from "./LoggedInNav";

const Nav = ({ isBuy }) => {
  const buyOrSell = useGeneralStore((state) => state.buyOrSell);
  const setBuyOrSell = useGeneralStore((state) => state.setBuyOrSell);
  const isLoggedIn = true;
  const location = useLocation();
  const sellLinkUrl = "/sell";

  useEffect(() => {
    console.log(location);
    if (location.pathname.includes(sellLinkUrl)) {
      setBuyOrSell("sell");
    } else {
      setBuyOrSell("buy");
    }
  }, [location.pathname]);

  return (
    <section
      className={`
      hidden md:flex z-20 bg-[#0E0C4D] w-full  items-center justify-between py-6   px-16 lg:px-20 2xl:px-32  poppins-regular fixed `}
    >
      <div className="flex-1">
        <Link to="/" className="text-white poppins-extrabold text-[40px]">
          <img src={logoImg} alt="" className="" />
        </Link>
      </div>
      <div className="flex items-center flex-[1.5]">
        <div className="flex-1">
          <div className="w-[150px]  rounded-xl  border-[#292761] border-2 flex items-center justify-between">
            <Link
              onClick={() => setBuyOrSell("buy")}
              to="/"
              className={`w-1/2 text-center py-3 ${
                buyOrSell === "buy"
                  ? "bg-[#292761] text-white "
                  : "text-[#C0C0C0]"
              }`}
            >
              Buy
            </Link>
            <Link
              onClick={() => setBuyOrSell("sell")}
              to="/sell"
              className={`w-1/2 text-center py-3 rounded-l-lg  ${
                buyOrSell === "sell"
                  ? "bg-[#292761] text-white "
                  : "text-[#C0C0C0]"
              }`}
            >
              Sell
            </Link>
          </div>
        </div>
        <div className="flex justify-end flex-1 gap-20">
          <NavMenu />
          {isLoggedIn ? (
            <div className="">
              <LoggedInNav />
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <Button className="bg-white hover:bg-white text-[#0E0C4D] hover:text-[#0E0C4D] text-base rounded-2xl">
                Login
              </Button>
              <Button className="bg-[#00FFFC] hover:bg-[#00FFFC] text-[#0E0C4D] hover:text-[#0E0C4D] text-base rounded-2xl">
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Nav;

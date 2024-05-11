import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button } from "../../ui/button";
import LoggedInNav from "./LoggedInNav";
import NavMenu from "./NavMenu";

import { useGeneralStore } from "../../../store/generalStore";

import logoImg from "../../../assets/images/FairShop New Logo PNG 4 1.png";
import { useCreateUserStore } from "../../../store/auth/createUser";

const Nav = () => {
  const buyOrSell = useGeneralStore((state) => state.buyOrSell);
  const setBuyOrSell = useGeneralStore((state) => state.setBuyOrSell);
  const user = useCreateUserStore((state) => state.user);
  const location = useLocation();
  const sellLinkUrl = "sel";
  const buyLinkUrl = "buy";
  let pathname = location.pathname;
  pathname = pathname.slice(1, 4);

  useEffect(() => {
    if (pathname === sellLinkUrl) {
      setBuyOrSell("sell");
    } else if (pathname === buyLinkUrl || location.pathname === "/") {
      setBuyOrSell("buy");
    } else if (pathname !== buyLinkUrl || pathname !== sellLinkUrl) {
      setBuyOrSell("");
    }
  }, [pathname]);

  return (
    <section
      className={`
      hidden md:flex z-20 bg-[#0E0C4D] w-full  items-center justify-evenly py-6  px-24 lg:px-32 poppins-regular fixed`}
    >
      <div className="flex-1">
        <Link to="/" className="text-white poppins-extrabold text-[40px]">
          <img src={logoImg} alt="" className="" />
        </Link>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-[150px]  rounded-xl  border-[#292761] border-2 flex items-center justify-between">
          <Link
            onClick={() => setBuyOrSell("buy")}
            to="/"
            className={`w-1/2 text-center py-2 rounded-l-lg ${
              buyOrSell === "buy"
                ? "bg-[#292761] text-white "
                : "text-[#C0C0C0] "
            }`}
          >
            Buy
          </Link>
          <Link
            onClick={() => setBuyOrSell("sell")}
            to="/sell"
            className={`w-1/2 text-center py-2 rounded-r-lg  ${
              buyOrSell === "sell"
                ? "bg-[#292761] text-white "
                : "text-[#C0C0C0] "
            }`}
          >
            Sell
          </Link>
        </div>
      </div>
      <div className="flex items-center flex-1">
        <div className="flex justify-end flex-1 gap-20">
          <NavMenu sellLinkUrl={sellLinkUrl} pathname={pathname} />
          {user?.profile ? (
            <div className="">
              <LoggedInNav />
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <Link
                to="/guest/login"
                className="bg-white hover:bg-white text-[#0E0C4D] hover:text-[#0E0C4D] text-base rounded-2xl px-3 py-1"
              >
                Login
              </Link>
              <Link
                to="/guest/register"
                className="bg-[#00FFFC] hover:bg-[#00FFFC] text-[#0E0C4D] hover:text-[#0E0C4D] text-base rounded-2xl px-3 py-1"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Nav;

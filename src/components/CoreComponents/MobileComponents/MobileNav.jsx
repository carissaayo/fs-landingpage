import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CircleUserRoundIcon, LogOut, Menu, X } from "lucide-react";

import { useGeneralStore } from "../../../store/generalStore";
import logoImg from "../../../assets/images/FairShop New Logo PNG 4 1.png";
import { Drawer } from "@mui/material";
import { Button } from "../../ui/button";

const MobileNav = ({ scroll, isBuy }) => {
  const isLoggedIn = false;
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
      className={`${scroll ? "fixed" : ""}
        md:hidden  z-20 bg-[#0E0C4D] w-full left-0   py-6   px-4  poppins-regular relative `}
    >
      <div className="relative">
        <div className="flex w-full items-center justify-between">
          <div className="flex-1">
            <Link to="/" className="text-white poppins-extrabold text-[40px]">
              <img
                src={logoImg}
                alt=""
                className="w-[80px] xs:w-[100px] xs:h-[50px]"
              />
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-end gap-6">
            <div className="w-[120px]  rounded-xl  border-[#292761] border-2 flex items-center justify-between">
              <Link
                onClick={() => setBuyOrSell("buy")}
                to="/"
                className={`w-1/2 text-center py-2 ${
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
                className={`w-1/2 text-center py-2 rounded-l-lg  ${
                  buyOrSell === "sell"
                    ? "bg-[#292761] text-white "
                    : "text-[#C0C0C0]"
                }`}
              >
                Sell
              </Link>
            </div>
            <div className="">
              <Menu
                className={`w-8 h-8 text-white  ${openMobile && "rotate-90"}`}
                onClick={() => setOpenMobile(true)}
              />
            </div>
            <Drawer
              open={openMobile}
              onClose={() => setOpenMobile(false)}
              anchor="right"
              className=" .MuiDrawer-modal"
            >
              <div className="min-w-[70vw] sm:min-w-[50vw] pt-8 flex flex-col gap-4  text-base text-[#202020] poppins-meidum">
                <div className="px-4" onClick={() => setOpenMobile(false)}>
                  <X className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-4 items-center px-4 ">
                  <CircleUserRoundIcon className="w-8 h-8" />
                  <p className="">Mustapha Sanusi</p>
                </div>
                <hr className="" />
                <Link className="px-4" to="/">
                  How it works
                </Link>
                <Link className="px-4" to="/about-us">
                  About Us
                </Link>
                <Link className="px-4" to="/">
                  Testimonials
                </Link>
                <Link className="px-4" to="/">
                  FAQ
                </Link>
                <hr className="" />
                <Link className="px-4" to="/transactions">
                  My Transactions
                </Link>
                <hr className="" />
                {isLoggedIn ? (
                  <div className="flex  gap-1 justify-center items-center text-[#DD0707]">
                    <LogOut className="w-6 h-6" />
                    <p className="">Sign Out</p>
                  </div>
                ) : (
                  <div className="flex flex-col  gap-4 items-center ">
                    <Button className="bg-white hover:bg-white text-[#0E0C4D] hover:text-[#0E0C4D] text-base rounded-2xl">
                      Login
                    </Button>
                    <Button className="bg-[#00FFFC] hover:bg-[#00FFFC] text-[#0E0C4D] hover:text-[#0E0C4D] text-base rounded-2xl">
                      Sign Up
                    </Button>
                  </div>
                )}
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileNav;

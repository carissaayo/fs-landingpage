import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CircleUserRoundIcon, LogOut, Menu, X } from "lucide-react";

import { useGeneralStore } from "../../../store/generalStore";
import logoImg from "../../../assets/images/FairShop New Logo PNG 4 1.png";
import { Drawer } from "@mui/material";

import { useCreateUserStore } from "../../../store/auth/createUser";

const MobileNav = () => {
  const user = useCreateUserStore((state) => state.user);
  const [openMobile, setOpenMobile] = useState(false);
  const setBuyOrSell = useGeneralStore((state) => state.setBuyOrSell);
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
        md:hidden  z-20 bg-[#0E0C4D] w-full left-0   py-6   px-6  poppins-regular  fixed`}
    >
      <div className="relative">
        <div className="flex w-full items-center justify-between">
          <div className="flex-1">
            <Link to="/" className="text-white poppins-extrabold text-[40px]">
              <img src={logoImg} alt="" className="w-[150px] " />
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-end gap-6   ">
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
              className=" .MuiDrawer-modal md:hidden"
            >
              <div className="min-w-[70vw] pt-8 flex flex-col gap-4  text-base text-[#202020] poppins-meidum">
                <div className="px-4 " onClick={() => setOpenMobile(false)}>
                  <X className="w-6 h-6 cursor-pointer" />
                </div>
                <div className="flex flex-col gap-4 items-center px-4 ">
                  <CircleUserRoundIcon className="w-8 h-8" />
                  <p className="capitalize">
                    {user?.profile.firstName} {user?.profile.lastName}
                  </p>
                </div>
                <hr className="" />
                <Link
                  className="px-4"
                  to={`${
                    pathname === sellLinkUrl
                      ? "/sell#how-it-works"
                      : "/#how-it-works"
                  }`}
                  onClick={() => setOpenMobile(false)}
                >
                  How it works
                </Link>
                <Link
                  className="px-4"
                  to="/about-us"
                  onClick={() => setOpenMobile(false)}
                >
                  About Us
                </Link>
                <Link
                  className="px-4"
                  to={`${
                    pathname === sellLinkUrl
                      ? "/sell#testimonials"
                      : "/#testimonials"
                  }`}
                  onClick={() => setOpenMobile(false)}
                >
                  Testimonials
                </Link>
                <Link
                  className="px-4"
                  to={`${pathname === sellLinkUrl ? "/sell#FAQs" : "/#FAQs"}`}
                  onClick={() => setOpenMobile(false)}
                >
                  FAQs
                </Link>
                <hr className="" />
                <Link
                  className="px-4"
                  to="/transactions"
                  onClick={() => setOpenMobile(false)}
                >
                  My Transactions
                </Link>
                <hr className="" />
                {user?.profile ? (
                  <div className="flex  gap-1 justify-center items-center text-[#DD0707]">
                    <LogOut className="w-6 h-6" />
                    <p className="">Sign Out</p>
                  </div>
                ) : (
                  <div className="flex   gap-6 items-center justify-center">
                    <Link
                      to="/guest/login"
                      className="bg-white hover:bg-white text-[#0E0C4D] hover:text-[#0E0C4D] text-base rounded-2xl"
                    >
                      Login
                    </Link>
                    <Link
                      to="/guest/register"
                      className="bg-[#00FFFC] hover:bg-[#00FFFC] text-[#0E0C4D] hover:text-[#0E0C4D] text-base rounded-2xl px-4 py-2"
                    >
                      Sign Up
                    </Link>
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

import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import Nav from "./NavComponents/Nav";
import MobileNav from "./MobileComponents/MobileNav";
import Footer from "./FooterComponents/Footer";

import { useGeneralStore } from "../../store/generalStore";
import ScrollToAnchor from "./Core/ScrollToAnchor";
import LogoutAlert from "./NavComponents/LogoutAlert";
import { useCreateUserStore } from "../../store/auth/createUser";

const DefaultLayout = () => {
  const navigate = useNavigate();
  const user = useCreateUserStore((state) => state.user);

  const [scroll, setScroll] = useState(false);
  const buyOrSell = useGeneralStore((state) => state.buyOrSell);
  const setBuyOrSell = useGeneralStore((state) => state.setBuyOrSell);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    goToTop();
  }, []);

  return (
    <main className="w-full h-full relative ">
      <LogoutAlert />
      <ScrollToAnchor />
      <Nav />
      <MobileNav scroll={scroll} />
      <Outlet />
      <Footer />

      <div className=" fixed bottom-3 w-[100%] items-center justify-center flex md:hidden z-20 ">
        <div className="  rounded-xl  border-[#292761] border-2 flex items-center justify-between bg-[#292761] ">
          <Link
            onClick={() => setBuyOrSell("buy")}
            to="/"
            className={`w-[100px] text-center  rounded-l-xl p-[14px]  ${
              buyOrSell === "buy"
                ? "text-[#C0C0C0]"
                : "bg-[#0E0C4D] text-white "
            }`}
          >
            Buy
          </Link>
          <Link
            onClick={() => setBuyOrSell("sell")}
            to="/sell"
            className={`w-[100px] text-center  rounded-r-xl p-[14px] ${
              buyOrSell === "sell"
                ? "text-[#C0C0C0] "
                : "  bg-[#0E0C4D] text-white"
            }`}
          >
            Sell
          </Link>
        </div>
      </div>
    </main>
  );
};

export default DefaultLayout;

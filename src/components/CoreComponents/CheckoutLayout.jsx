import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

import Nav from "./NavComponents/Nav";
import MobileNav from "./MobileComponents/MobileNav";
import Footer from "./FooterComponents/Footer";
import Steps from "../CheckoutComponents/Steps";

import { useGeneralStore } from "../../store/generalStore";
import ScrollToAnchor from "./Core/ScrollToAnchor";

const CheckoutLayout = () => {
  const [scroll, setScroll] = useState(false);
  const buyOrSell = useGeneralStore((state) => state.buyOrSell);
  const setBuyOrSell = useGeneralStore((state) => state.setBuyOrSell);
  const checkoutStep = useGeneralStore((state) => state.checkoutStep);
  const setCheckoutStep = useGeneralStore((state) => state.setCheckoutStep);

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
  useEffect(() => goToTop(), []);

  return (
    <main className="w-full h-full relative ">
      <ScrollToAnchor />
      <Nav />
      <MobileNav scroll={scroll} />
      <main className="w-full h-full relative">
        <section className="flex flex-col 2xl:flex-row justify-between px-6 md:px-32 poppins-regular pb-12 gap-12  md:gap-20 w-full mx-auto md:mx-0 pt-24 md:pt-36">
          <div className="flex-[1.5]   ">
            <Steps />
            <Outlet />
          </div>
        </section>
      </main>

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

export default CheckoutLayout;

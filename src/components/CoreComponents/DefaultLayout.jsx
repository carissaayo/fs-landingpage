import { Link, Outlet } from "react-router-dom";
import Nav from "./NavComponents/Nav";
import MobileNav from "./MobileComponents/MobileNav";
import Footer from "./FooterComponents/Footer";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useGeneralStore } from "../../store/generalStore";

const DefaultLayout = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scroll, setScroll] = useState(false);
  const buyOrSell = useGeneralStore((state) => state.buyOrSell);
  const setBuyOrSell = useGeneralStore((state) => state.setBuyOrSell);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  };

  return (
    <main className="w-full h-full relative ">
      <Nav />
      <MobileNav scroll={scroll} />
      <Outlet goToTop={goToTop} />

      <Footer />

      <div className="fixed bottom-3 w-[100%] items-center justify-center flex z-20 ">
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
      <div className="top-to-btm">
        {" "}
        {showTopBtn && (
          <ChevronUp className="icon-position icon-style" onClick={goToTop} />
        )}{" "}
      </div>
    </main>
  );
};

export default DefaultLayout;

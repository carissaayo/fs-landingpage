import { Link, Outlet } from "react-router-dom";
import Nav from "./NavComponents/Nav";
import MobileNav from "./MobileComponents/MobileNav";
import Footer from "./FooterComponents/Footer";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
// import { useGeneralStore } from "../store/generalStore";

const DefaultLayout = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scroll, setScroll] = useState(false);

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

      {/* <div className="fixed ">
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
        
        </div>
      </div> */}
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

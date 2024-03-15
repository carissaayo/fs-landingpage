import { Outlet } from "react-router-dom";
import Nav from "./NavComponents/Nav";
import MobileNav from "./MobileComponents/MobileNav";
import Footer from "./FooterComponents/Footer";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

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
      behavior: "smooth",
    });
  };

  return (
    <main className="w-full h-full relative ">
      <Nav />
      <MobileNav scroll={scroll} />
      <Outlet goToTop={goToTop} />

      <Footer />
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

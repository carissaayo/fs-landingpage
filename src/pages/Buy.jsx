import { useEffect, useState } from "react";

import AboutUs from "../components/HomeComponents/AboutUsComponents/AboutUs";
import Testimonial from "../components/HomeComponents/TestimonialComponents/Testimonial";
import FAQs from "../components/HomeComponents/FAQsComponents/FAQs";
import Footer from "../components/CoreComponents/FooterComponents/Footer";
import { ChevronUp } from "lucide-react";
import MobileNav from "../components/CoreComponents/MobileComponents/MobileNav";
import SellCon from "../components/HomeComponents/SellComponents/SellCon";
import Nav from "../components/CoreComponents/NavComponents/Nav";
import BuyHero from "../components/HomeComponents/BuyNav.jsx/BuyHero";
import HowItWorks from "../components/HomeComponents/HowItWorksComponents/HowItWorks";
const Buy = () => {
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
  useEffect(() => goToTop(), []);

  return (
    <main className="w-full h-full relative">
      <Nav scroll={scroll} />

      <MobileNav />
      <BuyHero />
      <SellCon />
      <HowItWorks />

      <AboutUs />
      <Testimonial />
      <FAQs />
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

export default Buy;

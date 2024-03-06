import { useEffect, useState } from "react";

import Nav from "../components/CoreComponents/NavComponents/Nav";
import Brands from "../components/HomeComponents/BrandComponents/Brands";
import HowItWorks from "../components/HomeComponents/HowItWorksComponents/HowItWorks";
import AboutUs from "../components/HomeComponents/AboutUsComponents/AboutUs";
import Testimonial from "../components/HomeComponents/TestimonialComponents/Testimonial";
import FAQs from "../components/HomeComponents/FAQsComponents/FAQs";
import Footer from "../components/CoreComponents/FooterComponents/Footer";
import { ChevronUp } from "lucide-react";
import MobileNav from "../components/CoreComponents/MobileComponents/MobileNav";
import Hero from "../components/HomeComponents/HeroComponents/Hero";
import BuyHero from "../components/HomeComponents/BuyNav.jsx/BuyHero";
const Home = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [buyOrSell, setBuyOrSell] = useState("sell");

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
  useEffect(() => goToTop(), []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main className="w-full h-full relative">
      <Nav scroll={scroll} />
      <section className="">
        <MobileNav />
        {/* <Hero /> */}
        <Hero />
        <Brands />
        <HowItWorks />
      </section>
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

export default Home;

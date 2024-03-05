import { useEffect, useState } from "react";

import Hero from "../components/HeroComponents/Hero";
import Nav from "../components/NavComponents/Nav";
import Brands from "../components/BrandComponents/Brands";
import HowItWorks from "../components/HowItWorksComponents/HowItWorks";
import AboutUs from "../components/AboutUsComponents/AboutUs";
import Testimonial from "../components/TestimonialComponents/Testimonial";
import FAQs from "../components/FAQsComponents/FAQs";
import Footer from "../components/FooterComponents/Footer";
import { ChevronUp } from "lucide-react";
const Home = () => {
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
    <main className="w-full h-full relative">
      {/* <section className=""> */}
      <Nav scroll={scroll} />
      <Hero />
      {/* </section> */}
      <Brands />
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

export default Home;

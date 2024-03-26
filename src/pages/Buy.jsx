import { useEffect } from "react";

import AboutUs from "../components/HomeComponents/AboutUsComponents/AboutUs";
import Testimonial from "../components/HomeComponents/TestimonialComponents/Testimonial";
import FAQs from "../components/HomeComponents/FAQsComponents/FAQs";
import SellCon from "../components/HomeComponents/SellComponents/SellCon";
import BuyHero from "../components/HomeComponents/BuyNav.jsx/BuyHero";
import HowItWorks from "../components/HomeComponents/HowItWorksComponents/HowItWorks";
const Buy = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => goToTop(), []);

  return (
    <main className="w-full h-full relative">
      <section className="pt-[80px] ">
        <BuyHero />
      </section>
      <SellCon />
      <HowItWorks />

      <AboutUs />
      <Testimonial />
      <FAQs />
    </main>
  );
};

export default Buy;

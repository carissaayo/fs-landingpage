import { useEffect } from "react";

import Brands from "../components/HomeComponents/BrandComponents/Brands";
import HowItWorks from "../components/HomeComponents/HowItWorksComponents/HowItWorks";
import AboutUs from "../components/HomeComponents/AboutUsComponents/AboutUs";
import Testimonial from "../components/HomeComponents/TestimonialComponents/Testimonial";
import FAQs from "../components/HomeComponents/FAQsComponents/FAQs";
import Hero from "../components/HomeComponents/HeroComponents/Hero";
import SellForm from "../components/HomeComponents/SellComponents/SellForm";

const Home = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => goToTop(), []);

  return (
    <main className="w-full h-full relative ">
      <div className="pt-[80px]">
        <Hero />
      </div>
      <section id="sell" className="relative w-full px-6 md:px-32 ">
        <SellForm />
      </section>

      <HowItWorks />

      <AboutUs />
      <Testimonial />
      <FAQs />
    </main>
  );
};

export default Home;

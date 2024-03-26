import { useEffect } from "react";

import Brands from "../components/HomeComponents/BrandComponents/Brands";
import HowItWorks from "../components/HomeComponents/HowItWorksComponents/HowItWorks";
import AboutUs from "../components/HomeComponents/AboutUsComponents/AboutUs";
import Testimonial from "../components/HomeComponents/TestimonialComponents/Testimonial";
import FAQs from "../components/HomeComponents/FAQsComponents/FAQs";
import Hero from "../components/HomeComponents/HeroComponents/Hero";

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
      <section id="sell" className="relative bg-white md:mb-28 ">
        {/* <div className="h-[20px] bg-white rounded-t-2xl absolute left-[2%] top-[-40px] w-[95%] mx-auto z-10"></div> */}

        <Brands />
      </section>

      <HowItWorks />

      <AboutUs />
      <Testimonial />
      <FAQs />
    </main>
  );
};

export default Home;

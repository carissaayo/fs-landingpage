import { useEffect, useState } from "react";

import Brands from "../components/HomeComponents/BrandComponents/Brands";
import HowItWorks from "../components/HomeComponents/HowItWorksComponents/HowItWorks";
import AboutUs from "../components/HomeComponents/AboutUsComponents/AboutUs";
import Testimonial from "../components/HomeComponents/TestimonialComponents/Testimonial";
import FAQs from "../components/HomeComponents/FAQsComponents/FAQs";
import Hero from "../components/HomeComponents/HeroComponents/Hero";

const Home = () => {
  const [stepContent, setStepContent] = useState(1);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  };
  useEffect(() => goToTop(), []);

  return (
    <main className="w-full h-full relative ">
      <section className="pt-12 md:pt-0">
        <Hero />
        <section id="sell" className="relative bg-white ">
          <div className="h-[80px] bg-white rounded-t-2xl absolute left-[2%] top-[-40px] w-[95%] mx-auto z-10"></div>
          <Brands stepContent={stepContent} />
        </section>

        <HowItWorks />
      </section>
      <AboutUs />
      <Testimonial />
      <FAQs />
    </main>
  );
};

export default Home;

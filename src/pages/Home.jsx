import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "../components/ui/button";

import Nav from "../components/CoreComponents/NavComponents/Nav";
import Brands from "../components/HomeComponents/BrandComponents/Brands";
import HowItWorks from "../components/HomeComponents/HowItWorksComponents/HowItWorks";
import AboutUs from "../components/HomeComponents/AboutUsComponents/AboutUs";
import Testimonial from "../components/HomeComponents/TestimonialComponents/Testimonial";
import FAQs from "../components/HomeComponents/FAQsComponents/FAQs";
import Footer from "../components/CoreComponents/FooterComponents/Footer";
import MobileNav from "../components/CoreComponents/MobileComponents/MobileNav";
import Hero from "../components/HomeComponents/HeroComponents/Hero";

const Home = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [stepContent, setStepContent] = useState(1);

  return (
    <main className="w-full h-full relative ">
      <section className="">
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

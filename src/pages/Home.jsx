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

import ModelsCon from "../components/HomeComponents/BrandComponents/ModelsCon";
import PhoneDetails from "../components/HomeComponents/BrandComponents/PhoneDetails";
import { useGeneralStore } from "../store/generalStore";
import DeliveryDetails from "../components/HomeComponents/BrandComponents/DeliveryDetails";
import DeviceImages from "../components/HomeComponents/BrandComponents/DeviceImages";
import { Button } from "../components/ui/button";
const Home = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [stepContent, setStepContent] = useState(1);

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
    <main className="w-full h-full relative ">
      <Nav scroll={scroll} />
      <section className="">
        <MobileNav scroll={scroll} />
        <Hero />
        <section id="sell" className="relative bg-white ">
          <div className="h-[80px] bg-white rounded-t-2xl absolute left-[2%] top-[-40px] w-[95%] mx-auto z-10"></div>
          <Brands stepContent={stepContent} />
          <ModelsCon stepContent={stepContent} />
          <PhoneDetails stepContent={stepContent} />
          <DeliveryDetails stepContent={stepContent} />
          <DeviceImages stepContent={stepContent} />
          <div className="w-full flex justify-center dm:justify-end items-center sm:pr-32 gap-6 mb-10">
            <Button
              disbaled={stepContent === 1}
              className="w-28 bg-[#F0F0F0] hover:bg-[#F0F0F0] text-black hover:text-black text-base rounded-2xl border border-[#ACACAC] h-[50px]"
              onClick={() => {
                if (stepContent === 1) return;
                setStepContent(stepContent - 1);
              }}
            >
              Prev
            </Button>
            <Button
              disbaled={stepContent === 5}
              className="bg-[#0C0F4D] hover:bg-[#0C0F4D] rounded-2xl w-28 h-[50px]"
              onClick={() => {
                if (stepContent === 5) return;
                setStepContent(stepContent + 1);
              }}
            >
              Next
            </Button>
          </div>
        </section>

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

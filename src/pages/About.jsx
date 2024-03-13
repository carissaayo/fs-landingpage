import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

import Nav from "../components/CoreComponents/NavComponents/Nav";
import MobileNav from "../components/CoreComponents/MobileComponents/MobileNav";
import Footer from "../components/CoreComponents/FooterComponents/Footer";
import AboutHero from "../components/AboutComponents/Hero";
import User from "../components/AboutComponents/User";
import Team from "../components/AboutComponents/Team";
import PeopleSlider from "../components/AboutComponents/PeopleSlider";

const About = () => {
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
  useEffect(() => goToTop(), []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main className="poppins-regular">
      <Nav scroll={scroll} />
      <MobileNav scroll={scroll} />
      <AboutHero />
      <User />
      <Team />
      <PeopleSlider />
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

export default About;

import Hero from "../components/HeroComponents/Hero";
import Nav from "../components/NavComponents/Nav";
import Brands from "../components/BrandComponents/Brands";
import HowItWorks from "../components/HowItWorksComponents/HowItWorks";
import AboutUs from "../components/AboutUsComponents/AboutUs";
import Testimonial from "../components/TestimonialComponents/Testimonial";
import FAQs from "../components/FAQsComponents/FAQs";
const Home = () => {
  return (
    <main className="w-full h-full ">
      <section className="">
        <Nav />
        <Hero />
      </section>
      <Brands />
      <HowItWorks />
      <AboutUs />
      <Testimonial />
      <FAQs />
      <Home />
    </main>
  );
};

export default Home;

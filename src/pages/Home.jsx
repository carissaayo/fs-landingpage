import Hero from "../components/HeroComponents/Hero";
import Nav from "../components/NavComponents/Nav";
import "../App.css";
import Brands from "../components/BrandComponents/Brands";
const Home = () => {
  return (
    <main className="w-full h-full ">
      <section className="">
        <Nav />
        <Hero />
      </section>
      <Brands />
    </main>
  );
};

export default Home;

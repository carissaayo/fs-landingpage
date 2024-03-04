import Hero from "../components/HeroComponents/Hero";
import Nav from "../components/NavComponents/Nav";
import "../App.css";
const Home = () => {
  return (
    <main className="w-full h-full ">
      <section className="">
        <Nav />
        <Hero />
      </section>

      <section></section>
    </main>
  );
};

export default Home;

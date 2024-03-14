import AboutHero from "../components/AboutComponents/Hero";
import User from "../components/AboutComponents/User";
import Team from "../components/AboutComponents/Team";
import PeopleSlider from "../components/AboutComponents/PeopleSlider";

const About = () => {
  return (
    <main className="poppins-regular">
      <AboutHero />
      <User />
      <Team />
      <PeopleSlider />
    </main>
  );
};

export default About;

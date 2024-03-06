import Slider from "./Slider";
import TestiCard from "./TestiCard";
import testi1 from "../../assets/images/testi1.png";

const Testimonial = () => {
  return (
    <section className="bg-[#FAFAFA] w-full md:con__height  px-8  md:px-16 lg:px-20 2xl:px-32  relative poppins-regular py-16">
      <div className="flex items-center justify-center w-full flex-col mb-8">
        <h1 className="poppins-bold text-xl xs:text-3xl mb-4  sm:w-[70%] xl:w-1/2 text-center">
          See what our customers have to say about Fairshop
        </h1>
        <p className="xs:text-lg sm:w-[70%] xl:w-2/5 text-center">
          Find out why our customers love us and can’t keep calm about our
          services
        </p>
      </div>

      <div className="relative w-full hidden md:block">
        <Slider />
      </div>
      <div className="flex flex-col md:hidden gap-12">
        <TestiCard image={testi1} />
        <TestiCard image={testi1} />
        <TestiCard image={testi1} />
        <TestiCard image={testi1} />
        <TestiCard image={testi1} />
      </div>
    </section>
  );
};

export default Testimonial;

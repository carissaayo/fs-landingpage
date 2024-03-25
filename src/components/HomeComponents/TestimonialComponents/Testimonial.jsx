import Slider from "./Slider";
import TestiCard from "./TestiCard";
import testi1 from "../../../assets/images/testi1.png";

const Testimonial = () => {
  return (
    <section
      className="bg-[#FAFAFA] w-full md:con__height  px-6  md:px-32  relative poppins-regular py-16"
      id="testimonials"
    >
      <div className="flex items-center justify-center w-full flex-col mb-8">
        <h1 className="poppins-bold text-xl md:text-3xl my-4   md:w-4/5 text-center">
          See what our customers have to say about Fairshop
        </h1>
        <p className="text-center md:text-lg md:w-4/5 ">
          Find out why our customers love us and can’t keep calm about our
          services
        </p>
      </div>

      <div className="relative w-full hidden md:block">
        <Slider />
      </div>
      <div className="flex flex-col md:hidden gap-6">
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

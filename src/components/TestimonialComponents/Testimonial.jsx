import Slider from "./Slider";

const Testimonial = () => {
  return (
    <section className="bg-[#FAFAFA] w-full con__height b px-32  relative poppins-regular py-16">
      <div className="flex items-center justify-center w-full flex-col mb-8">
        <h1 className="poppins-bold text-3xl mb-4 w-1/2 text-center">
          See what our customers have to say about Fairshop
        </h1>
        <p className="text-lg w-2/5 text-center">
          Find out why our customers love us and can’t keep calm about our
          services
        </p>
      </div>

      <div className="relative w-full">
        <Slider />
      </div>
    </section>
  );
};

export default Testimonial;

const AboutHero = () => {
  return (
    <section
      className=" w-full  h-screen  text-center md:text-left  px-6 md:px-32  text-white relative poppins-regular 
       bg-[#0E0C4D]   py-60 md:py-80  
  "
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full  gap-12 md:gap-8 ">
        <h2 className="text-white poppins-medium text-3xl   md:text-[40px]  leading-[50px] mb-8   md:w-[60%] mx-auto text-center">
          Sell and buy a <span className="text-[#00FFFC]">smartphone</span>{" "}
          without any hassles!
        </h2>
      </div>
    </section>
  );
};

export default AboutHero;

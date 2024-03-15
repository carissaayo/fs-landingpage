const AboutHero = () => {
  return (
    <section
      className=" w-full  h-screen  text-center md:text-left  px-8 md:px-16 lg:px-20 2xl:px-32  text-white relative poppins-regular 
       bg-[#0E0C4D]   pb-0     lg:pb-12 pt-48  2xl:pb-[200px]
  "
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full  gap-12 md:gap-4 2xl:gap-8 ">
        <h2 className="text-white poppins-medium text-3xl   md:text-[40px]  leading-[50px] mb-8   sm:w-3/5 mx-auto text-center">
          Sell and buy a <span className="text-[#00FFFC]">smartphone</span>{" "}
          without any hassles!
        </h2>
      </div>
    </section>
  );
};

export default AboutHero;

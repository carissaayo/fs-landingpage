const TestiCard = ({ image }) => {
  return (
    <section className=" px-6 md:px-4 lg:px-6 md:pt-6 bg-white xs:h-[320px] lg:h-[300px] py-8">
      <div className="flex gap-4  items-center mb-8 md:mb-4">
        <img
          src={image}
          alt=""
          className=" h-[40px] w-[40px] xs:h-[80px] xs:w-[80px] md:h-[40px] md:w-[40px]"
        />
        <div className="text-left">
          <h1 className="poppins-medium xs:text-lg  md:text-sm lg:text-base ">
            Pheeqoh Salma
          </h1>
          <p className="text-[#8B8B8B] text-sm md:text-xs xl:text-base">
            Product Designer
          </p>
        </div>
      </div>
      <div className="md:text-sm text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ut
        nesciunt eos repellendus provident reprehenderit quidem blanditiis.
        Rerum accusantium modi magnam velit suscipit dicta fugiat natus beatae,
        cupiditate corporis magni.
      </div>
    </section>
  );
};

export default TestiCard;

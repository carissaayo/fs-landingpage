const TestiCard = ({ image }) => {
  return (
    <section className="px-6 pt-6 bg-white h-[300px]">
      <div className="flex gap-4  items-center mb-4">
        <img src={image} alt="" className=" h-[40px] w-[40px]" />
        <div className="text-left">
          <h1 className="poppins-medium ">Pheeqoh Salma</h1>
          <p className="text-[#8B8B8B] text-sm">Product Designer</p>
        </div>
      </div>
      <div className="text-sm text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ut
        nesciunt eos repellendus provident reprehenderit quidem blanditiis.
        Rerum accusantium modi magnam velit suscipit dicta fugiat natus beatae,
        cupiditate corporis magni.
      </div>
    </section>
  );
};

export default TestiCard;

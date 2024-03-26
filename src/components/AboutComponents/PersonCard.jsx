const PersonCard = ({ image, name, post }) => {
  return (
    <section className=" px-6   bg-white min-h-[450px] py-8 poppins-regular">
      <div className="">
        <img src={image} alt="" className=" w-full   min-h-[320px]  " />
      </div>
      <div className=" text-center sm:text-left md:text-sm pt-4">
        <p className="">{name}</p>
        <p className="">{post}</p>
      </div>
    </section>
  );
};

export default PersonCard;

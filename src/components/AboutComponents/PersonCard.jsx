const PersonCard = ({ image, name, post }) => {
  return (
    <section className=" px-6 md:px-4 lg:px-6 md:pt-6 bg-white xs:h-[320px] lg:h-[300px] py-8 poppins-regular">
      <div className="">
        <img src={image} alt="" className=" w-full sm:w-auto" />
      </div>
      <div className=" text-center sm:text-left md:text-sm pt-4">
        <p className="">{name}</p>
        <p className="">{post}</p>
      </div>
    </section>
  );
};

export default PersonCard;

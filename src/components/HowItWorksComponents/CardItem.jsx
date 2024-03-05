const CardItem = ({ image, title, subtext }) => {
  return (
    <div className="bg-white border border-[#E3E0E0] flex flex-col items-center justify-center py-8 gap-8 rounded-xl flex-1 h-[400px]">
      <div className="">
        <img src={image} alt="" className="h-[200px]" />
      </div>
      <h1 className="poppins-semibold text-xl">{title}</h1>
      <p className="w-4/5 text-center text-lg">{subtext}</p>
    </div>
  );
};

export default CardItem;

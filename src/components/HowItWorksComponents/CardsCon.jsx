// import CardItem from "./CardItem";
import imageA from "../../assets/images/using-phone 4.png";
import imageB from "../../assets/images/using-phone (1) 2.png";
import imageC from "../../assets/images/using-phone (7) 2.png";

const CardsCon = () => {
  return (
    <div className="my-12 flex  flex-col md:flex-row items-center justify-between sm:w-[90%] md:w-full  gap-20 md:gap-6 xl:gap-20 px-6 sm:px-12 md:px-0 mx-auto ">
      <div className="bg-white border border-[#E3E0E0] flex flex-col items-center  justify-center md:justify-start gap-8 rounded-xl md:flex-1 h-[440px] lg:h-[400px] w-full">
        <div className=" md:pt-8">
          <img src={imageA} alt="" className="" />
        </div>
        <h1 className="poppins-semibold text-xl">Select device brand</h1>
        <p className="px-4 md:w-4/5 text-center text-lg">
          Select the brand of the device you want to sell to fairshop
        </p>
      </div>{" "}
      <div className="bg-white border border-[#E3E0E0] flex flex-col items-center  justify-center md:justify-start gap-8 rounded-xl md:flex-1 h-[440px] lg:h-[400px] w-full">
        <div className=" md:pt-3">
          <img src={imageB} alt="" className="" />
        </div>
        <h1 className="poppins-semibold text-xl">Enter device details</h1>
        <p className="px-4 md:w-4/5 text-center text-lg">
          Enter the relevant and accurate details or specifications of your
          device
        </p>
      </div>{" "}
      <div className="bg-white border border-[#E3E0E0] flex flex-col items-center  justify-center md:justify-start  rounded-xl md:flex-1 h-[440px] lg:h-[400px] w-full">
        <div className="md:mb-8">
          <img src={imageC} alt="" className="h-[180px] " />
        </div>
        <h1 className="poppins-semibold text-xl mb-8">Sell to us</h1>
        <p className="px-4 md:w-4/5 text-center text-lg">
          Sell your device to us and get paid instantly
        </p>
      </div>
    </div>
  );
};

export default CardsCon;

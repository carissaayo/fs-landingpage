// import CardItem from "./CardItem";
import imageA from "../../../assets/images/using-phone 4.png";
import imageB from "../../../assets/images/using-phone (1) 2.png";
import imageC from "../../../assets/images/using-phone (7) 2.png";
import { CalendarClock, HandCoins, TicketCheck } from "lucide-react";

const CardsCon = () => {
  return (
    <div className="my-12 flex  flex-col md:flex-row items-center justify-between  md:w-full gap-2 lg:gap-8 mx-auto ">
      <div className="bg-white border border-[#E3E0E0] flex flex-col items-center  justify-center  gap-8 rounded-xl md:flex-1 min-h-[440px] w-full min-w-[230px]">
        <div className=" ">
          {/* <img src={imageA} alt="" className="" />
           */}
          <TicketCheck className="text-xl w-[120px] h-[120px]" />
        </div>
        <h1 className="poppins-semibold text-xl">Select device brand</h1>
        <p className="px-4 md:w-4/5 text-center text-lg">
          Select the brand of the device you want to sell to fairshop
        </p>
      </div>{" "}
      <div className="bg-white border border-[#E3E0E0] flex flex-col items-center  justify-center  gap-8 rounded-xl md:flex-1 min-h-[440px] w-full min-w-[230px]">
        <div className=" ">
          {/* <img src={imageB} alt="" className="" /> */}
          <CalendarClock className="text-xl w-[120px] h-[120px]" />
        </div>
        <h1 className="poppins-semibold text-xl">Enter device details</h1>
        <p className="px-4 md:w-4/5 text-center text-lg">
          Enter the relevant and accurate details or specifications of your
          device
        </p>
      </div>{" "}
      <div className="bg-white border border-[#E3E0E0] flex flex-col items-center  justify-center  gap-8 rounded-xl md:flex-1 min-h-[440px] w-full min-w-[230px]">
        <div className="">
          {/* <img src={imageC} alt="" className="h-[180px] " /> */}
          <HandCoins className="text-xl w-[120px] h-[120px]" />
        </div>
        <h1 className="poppins-semibold text-xl ">Sell to us</h1>
        <p className="px-4 md:w-4/5 text-center text-lg">
          Sell your device to us and get paid instantly
        </p>
      </div>
    </div>
  );
};

export default CardsCon;

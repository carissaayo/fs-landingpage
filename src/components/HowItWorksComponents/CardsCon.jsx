// import CardItem from "./CardItem";
import imageA from "../../assets/images/using-phone 4.png";
import imageB from "../../assets/images/using-phone (1) 2.png";
import imageC from "../../assets/images/using-phone (7) 2.png";

const CardsCon = () => {
  return (
    <div className="my-12 flex items-center justify-between w-full gap-20 ">
      {/* <CardItem
        title="Select device brand"
        subtext="  Select the brand of the device you want to sell to fairshop"
        image={imageA}
      />
      <CardItem
        title="Enter device details"
        subtext="Enter the relevant and accurate details or specifications of your device"
        image={imageB}
      />
      <CardItem
        title="Sell to us"
        subtext="Sell your device to us and get paid instantly"
        image={imageC}
      /> */}
      <div className="bg-white border border-[#E3E0E0] flex flex-col items-center justify-cente gap-8 rounded-xl flex-1 h-[400px]">
        <div className="h-[150px pt-8">
          <img src={imageA} alt="" className="h-[200px" />
        </div>
        <h1 className="poppins-semibold text-xl">Select device brand</h1>
        <p className="w-4/5 text-center text-lg">
          Select the brand of the device you want to sell to fairshop
        </p>
      </div>{" "}
      <div className="bg-white border border-[#E3E0E0] flex flex-col items-center justify-cente  gap-8 rounded-xl flex-1 h-[400px]">
        <div className="h-[150px pt-3">
          <img src={imageB} alt="" className="h-[200px" />
        </div>
        <h1 className="poppins-semibold text-xl">Enter device details</h1>
        <p className="w-4/5 text-center text-lg">
          Enter the relevant and accurate details or specifications of your
          device
        </p>
      </div>{" "}
      <div className="bg-white border border-[#E3E0E0] flex flex-col items-center justify-cente   rounded-xl flex-1 h-[400px]">
        <div className="mb-8">
          <img src={imageC} alt="" className="h-[180px] " />
        </div>
        <h1 className="poppins-semibold text-xl mb-8">Sell to us</h1>
        <p className="w-4/5 text-center text-lg">
          Sell your device to us and get paid instantly
        </p>
      </div>
    </div>
  );
};

export default CardsCon;

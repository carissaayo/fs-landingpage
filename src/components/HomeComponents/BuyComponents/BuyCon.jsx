import { Plus } from "lucide-react";
import BuyCard from "./BuyCard";
import BuyForm from "./BuyForm";
import { ScrollArea, ScrollBar } from "../../ui/scroll-area";

const BuyContainer = ({ title }) => {
  return (
    <div className="w-full  mb-2">
      <h1 className="poppins-medium text-xl mb-4 w-full text-[#130D52] bg-[#130D52] bg-opacity-10 p-4">
        {title}
      </h1>
      <ScrollArea className=" w-full  ">
        <div className="flex items-center  gap-1  mb-6">
          <BuyCard />
          <BuyCard />
          <BuyCard />
          <BuyCard />
          <BuyCard />
          <BuyCard />
          <BuyCard />
          <BuyCard />
          <div className="text-center   flex items-center justify-center bg-[#EAE9EF]  w-[200px] h-[200px] rounded-xl  ">
            <div className="flex gap-4">
              <Plus className="h-5 w-5 " />
              View More
            </div>
          </div>
        </div>
        <ScrollBar orientation="horizontal" className="" />
      </ScrollArea>
    </div>
  );
};

const BuyCon = () => {
  return (
    <section
      className="w-full  px-6  md:px-32  relative poppins-regular  pb-8"
      id="buy"
    >
      <BuyForm />
      <div className="">
        <BuyContainer title="Popular smartphones" />
        <BuyContainer title="Iphones" />
        <BuyContainer title="Other Phones" />
      </div>
    </section>
  );
};

export default BuyCon;

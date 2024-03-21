import { Plus } from "lucide-react";
import SellCard from "./SellCard";
import SellForm from "./SellForm";
import { ScrollArea, ScrollBar } from "../../ui/scroll-area";

const SellContainer = ({ title }) => {
  return (
    <div className="w-full  mb-2">
      <h1 className="poppins-medium text-xl mb-4 w-full text-[#130D52] bg-[#130D52] bg-opacity-10 p-4">
        {title}
      </h1>
      <ScrollArea className=" w-full  ">
        <div className="flex items-center  gap-1 md:gap-8 mb-6">
          <SellCard />
          <SellCard />
          <SellCard />
          <SellCard />
          <SellCard />
          <SellCard />
          <SellCard />
          <SellCard />
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

const SellCon = () => {
  return (
    <section className="w-full  px-6  md:px-32  relative poppins-regular  pb-8">
      <SellForm />
      <div className="">
        <SellContainer title="Popular smartphones" />
        <SellContainer title="Iphones" />
        <SellContainer title="Other Phones" />
      </div>
    </section>
  );
};

export default SellCon;

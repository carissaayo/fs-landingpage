import { Plus } from "lucide-react";
import { Button } from "../../ui/button";
import SellCard from "./SellCard";
import SellForm from "./SellForm";

const SellCon = () => {
  return (
    <section className="w-full   pt-32 pb-20 lg:pt-32 lg:pb-32  px-4 xs:px-8 sm:px-12 md:px-16 lg:px-20 2xl:px-32  relative poppins-regular">
      <SellForm />
      <div className="w-full pt-60 lg:pt-0">
        <h1 className="poppins-bold text-2xl mb-8">Featured Devices</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4 xs:gap-x-8 sm:gap-x-6 md:gap-x-10 lg:gap-x-8 xl:gap-x-16 ">
          <SellCard />
          <SellCard />
          <SellCard />
          <SellCard />
          <SellCard />
          <SellCard />
          <SellCard />
          <SellCard />
        </div>
        <div className="text-center  pt-12 w-full flex justify-center">
          <Button className="bg-[#292761] hover:bg-[##292761] rounded-2xl flex gap-2">
            <Plus className="h-5 w-5 " />
            Load More Phones
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SellCon;

import SellCard from "./SellCard";
import SellForm from "./SellForm";

const SellCon = () => {
  return (
    <section className="w-full con__heigh  py-32  px-32  relative poppins-regular">
      <SellForm />
      <div className="w-full">
        <h1 className="poppins-bold text-2xl mb-8">Featured Devices</h1>
        <div className="grid grid-cols-4 gap-y-8 gap-x-16 ">
          <SellCard />
          <SellCard />
          <SellCard />
          <SellCard />
          <SellCard />
          <SellCard />
          <SellCard />
          <SellCard />
        </div>
      </div>
    </section>
  );
};

export default SellCon;

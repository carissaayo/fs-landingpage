import { Button } from "../ui/button";
import BrandsCon from "./BrandsCon";

const Brands = () => {
  return (
    <section
      id="brands"
      className="w-full con__height    px-32  relative poppins-regular"
    >
      <div className="w-full items-center justify-between flex mb-2 pt-12">
        <h1 className="poppins-semibold text-3xl">Sell your smartphone</h1>
        <Button variant="link" className="underline text-[#0E0C4D] text-lg">
          How it works
        </Button>
      </div>
      <p className="text-[#111111]">
        Please select the brand of smartphone you want to sell
      </p>
      <div className="">
        <BrandsCon />
      </div>
    </section>
  );
};

export default Brands;

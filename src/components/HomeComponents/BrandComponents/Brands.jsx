import { Button } from "../../ui/button";
import BrandsCon from "./BrandsCon";

const Brands = () => {
  return (
    <section
      className={
        " w-full md:con__height px-12  md:px-32 poppins-regular py-12 md:py-0"
      }
    >
      <div className="w-full items-center justify-center md:justify-between flex mb-2 md:pt-12">
        <h1 className="poppins-semibold text-xl md:text-2xl">
          Sell your smartphone
        </h1>
        <Button
          variant="link"
          className="hidden md:block underline text-[#0E0C4D] text-lg"
        >
          <a href="#how-it-works">How it works</a>
        </Button>
      </div>
      <p className="text-[#111111] text-center md:text-left">
        Please select the brand of smartphone you want to sell
      </p>

      <div className="">
        <BrandsCon number={2} />
      </div>
    </section>
  );
};

export default Brands;

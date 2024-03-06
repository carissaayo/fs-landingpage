import { Button } from "../ui/button";
import BrandsCon from "./BrandsCon";

const Brands = () => {
  return (
    <section
      id="brands"
      className="w-full md:con__height px-4 xs:px-8 sm:px-12 md:px-16 lg:px-20 2xl:px-32  relative poppins-regular py-12 md:py-0"
    >
      <div className="w-full items-center justify-center md:justify-between flex mb-2 pt-12">
        <h1 className="poppins-semibold text-xl xs:text-3xl">
          Sell your smartphone
        </h1>
        <Button
          variant="link"
          className="hidden md:block underline text-[#0E0C4D] text-lg"
        >
          How it works
        </Button>
      </div>
      <p className="text-[#111111] text-center md:text-left xs:text-lg md:text-base">
        Please select the brand of smartphone you want to sell
      </p>
      <div className="">
        <BrandsCon />
      </div>
    </section>
  );
};

export default Brands;

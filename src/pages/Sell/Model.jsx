import { useEffect } from "react";
import ModelsCon from "../../components/HomeComponents/BrandComponents/ModelsCon";
import { Link } from "react-router-dom";
const Brands = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => goToTop(), []);

  return (
    <main className="w-full h-full relative ">
      <section id="sell" className="relative bg-white pt-28 ">
        <ModelsCon stepContent={2} />
      </section>
      <div className="w-full flex justify-center md:justify-end items-center  gap-6 mt-12 mb-10 md:pr-16">
        <Link
          to="/sell"
          className="w-28 bg-[#F0F0F0] hover:bg-[#F0F0F0] text-black text-base rounded-2xl border border-[#ACACAC] h-[50px] flex items-center justify-center"
        >
          Back
        </Link>
        <Link
          to="/sell/brand/model/details"
          className="w-28  text-white bg-[#0C0F4D] text-base rounded-2xl h-[50px] flex items-center justify-center"
        >
          Next
        </Link>
      </div>
    </main>
  );
};

export default Brands;

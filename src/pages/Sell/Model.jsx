import { useEffect } from "react";
import ModelsCon from "../../components/HomeComponents/BrandComponents/ModelsCon";
const Brands = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => goToTop(), []);

  return (
    <main className="w-full h-full relative ">
      <section className="">
        <section id="sell" className="relative bg-white pt-32 ">
          <ModelsCon stepContent={2} />
        </section>
      </section>
    </main>
  );
};

export default Brands;

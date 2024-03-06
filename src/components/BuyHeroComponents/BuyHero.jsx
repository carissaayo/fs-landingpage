import buyHeroImg from "../../assets/images/hero-buy.png";

const BuyHero = () => {
  return (
    <section className=" w-full md:hero__height   text-center md:text-left  px-8 md:px-16 lg:px-20 2xl:px-32  text-white relative poppins-regular  sell-hero-bg  pt-40  sm:pt-52  md:pt-20  pb-32 lg:pt-12  2xl:pt-20 lg:pb-40 ">
      <div className="flex flex-col md:flex-row items-center justify-between w-full  gap-12 md:gap-4 2xl:gap-8">
        <div className="md:flex-1  mb-8">
          <h2 className="text-white poppins-bold md:poppins-extrabold text-2xl sm:text-3xl  md:text-[40px] mb-8  md:mb-4 2xl:w-4/5">
            Own a <span className="md:text-[#00FFFC]">smartphone</span> today,
            pay small small.
          </h2>
          <p className="poppins-semibold md:text-[20px] md:w-[90%]">
            Fairshop is the easiest place to sell your smartphone and receive
            payment instantly
          </p>
        </div>
        <div className="flex-1 md:flex justify-end">
          <img src={buyHeroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default BuyHero;

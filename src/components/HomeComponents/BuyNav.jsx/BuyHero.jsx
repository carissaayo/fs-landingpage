import buyHeroImg from "../../../assets/images/hero-buy.png";

const BuyHero = () => {
  return (
    <section className=" w-full min-h-[600px] text-center md:text-left  px-12 md:px-32   bg-[#0E0C4D]  text-white relative poppins-regular  pb-[80px] pt-[-80px] flex flex-col  gap-2 justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <div className="md:flex-1 pt-10 md:pt-20 pb-20">
          <h2 className="text-white poppins-medium text-3xl   md:text-[40px]  leading-[50px] mb-8   md:w-[90%]">
            Own a <span className="text-[#00FFFC]">smartphone</span> today, pay
            small small.
          </h2>
          <p className="poppins-medium md:text-[20px] md:w-[90%]">
            Fairshop is the easiest place to sell your smartphone and receive
            payment instantly
          </p>
        </div>
        <div className="flex-1 md:flex justify-end   pt-0 pb-20  md:pt-20  ">
          <img
            src={buyHeroImg}
            alt=""
            className="w-[300px] h-[250px] lg:w-[400px] lg:h-[350px]  "
          />
        </div>
      </div>
    </section>
  );
};

export default BuyHero;

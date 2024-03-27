import { Link, Outlet } from "react-router-dom";
import bgImg from "../../assets/images/hero-buy.png";
import logoImg from "../../assets/images/FairShop New Logo PNG 4 1.png";

const GuestLayout = () => {
  return (
    <main className="w-full h-screen flex ">
      <section className="hidden lg:flex flex-col flex-1 bg-[#130D52]  pt-10">
        <Link to="/">
          <img src={logoImg} alt="" className="w-32 mx-auto" />
        </Link>
        <div className=" flex items-center h-full  py-12 gap-20 justify-center">
          <img src={bgImg} alt="" />
        </div>
      </section>

      <Outlet />
    </main>
  );
};

export default GuestLayout;

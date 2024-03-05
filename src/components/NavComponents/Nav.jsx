import { Link } from "react-router-dom";
import { useState } from "react";
import NavMenu from "./NavMenu";
import { Button } from "../ui/button";

import logoImg from "../../assets/images/FairShop New Logo PNG 4 1.png";

const Nav = ({ scroll }) => {
  const [buyOrSell, setBuyOrSell] = useState("sell");
  return (
    <section
      className={`z-20 bg-[#0E0C4D] w-full flex items-center justify-between py-6  px-32  poppins-regular ${
        scroll ? "sticky" : ""
      }`}
    >
      <div className="flex-1">
        <Link to="/" className="text-white poppins-extrabold text-[40px]">
          <img src={logoImg} alt="" />
        </Link>
      </div>
      <div className="flex items-center flex-[1.5]">
        <div className="flex-1">
          <div className="w-[150px]  rounded-xl  border-[#292761] border-2 flex items-center justify-between">
            <Link
              onClick={() => setBuyOrSell("sell")}
              to="/"
              className="w-1/2 text-center bg-[#292761] py-3 rounded-l-lg text-white"
            >
              Sell
            </Link>
            <Link
              onClick={() => setBuyOrSell("buy")}
              to="/buy"
              className="w-1/2 text-center text-[#C0C0C0]"
            >
              Buy
            </Link>
          </div>
        </div>
        <div className="flex flex-1 gap-12">
          <NavMenu />
          <div className="flex gap-4 items-center">
            <Button className="bg-white hover:bg-white text-[#0E0C4D] hover:text-[#0E0C4D] text-base rounded-2xl">
              Login
            </Button>
            <Button className="bg-[#00FFFC] hover:bg-[#00FFFC] text-[#0E0C4D] hover:text-[#0E0C4D] text-base rounded-2xl">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;

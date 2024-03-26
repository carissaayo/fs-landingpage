import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

import Nav from "./NavComponents/Nav";
import MobileNav from "./MobileComponents/MobileNav";
import Footer from "./FooterComponents/Footer";
import Steps from "../CheckoutComponents/Steps";

import { useGeneralStore } from "../../store/generalStore";
import ScrollToAnchor from "./Core/ScrollToAnchor";

const CheckoutLayout = () => {
  const [scroll, setScroll] = useState(false);
  const buyOrSell = useGeneralStore((state) => state.buyOrSell);
  const setBuyOrSell = useGeneralStore((state) => state.setBuyOrSell);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => goToTop(), []);

  return (
    <main className="w-full h-full relative ">
      <ScrollToAnchor />
      <Nav />
      <MobileNav scroll={scroll} />
      <main className="w-full h-full relative">
        <section className="flex flex-col 2xl:flex-row justify-between px-6 md:px-32 poppins-regular pb-12 gap-12  md:gap-20 w-full mx-auto md:mx-0 pt-24 md:pt-36">
          <div className="flex-[1.5]   ">
            <Steps />
            <Outlet />
          </div>
          <div className="flex-1">
            {/* Payment Summary */}
            <div className="mb-10 relative">
              <h1 className="poppins-semibold text-2xl mb-4">
                Payment Summary
              </h1>

              <div className="mb-10 border border-gray-100 py-6 rounded-xl bg-[#FCFCFC] px-4">
                <div className="flex justify-between  items-center mb-4">
                  <p className="poppins-semibold text-2xl ">Initial deposit</p>
                  <p className="text-xl">₦329,800</p>
                </div>
                {/* Dotted Con Starts*/}
                <div className="flex">
                  <div className="">
                    <div className=" border border-dashed border-[#6F6F6F] h-[80px] w-0"></div>
                  </div>
                  <div className="flex items-center justify-between gap-1 w-full">
                    <div className="flex items-center gap-1">
                      <div className=" border border-dashed border-[#6F6F6F] h-[0px] w-[30px]"></div>
                      <p className="text-[#898686]">30% down payment</p>
                    </div>
                    <p className="text-[#898686]">₦14,000</p>
                  </div>
                </div>
                <div className="relative bottom-[13px] left-1 flex gap-1 items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className=" border border-dashed border-[#6F6F6F] h-[0px] w-[30px]"></div>
                    <p className="text-[#898686]">Loan charges</p>
                  </div>
                  <p className="text-[#898686]">₦14,000</p>
                </div>
                {/* Dotted Con Ends*/}
              </div>
            </div>
            <hr className="mb-10" />

            {/* Payment structure */}
            <div className=" mb-10">
              <RadioGroup defaultValue="0">
                <div className="flex items-center space-x-2  justify-between  p-4 rounded-xl">
                  <div className="flex items-center gap-6">
                    <RadioGroupItem value="0" id="r1" />
                    <Label htmlFor="r1">1st monthly payment</Label>
                  </div>
                  <p className="">₦14,000.00</p>
                </div>
                <div className="relative">
                  <div className="h-[40px] w-0 border border-black border-dashed ml-6 absolute bottom-[-16px]"></div>
                </div>
                <div className="flex items-center space-x-2  justify-between   p-4 rounded-xl">
                  <div className="flex items-center gap-6">
                    <RadioGroupItem value="0" id="r1" />
                    <Label htmlFor="r1">2nd monthly payment</Label>
                  </div>
                  <p className="">₦14,000.00</p>
                </div>
                <div className="relative">
                  <div className="h-[40px] w-0 border border-black border-dashed ml-6 absolute bottom-[-16px]"></div>
                </div>
                <div className="flex items-center space-x-2  justify-between   p-4 rounded-xl">
                  <div className="flex items-center gap-6">
                    <RadioGroupItem value="0" id="r1" />
                    <Label htmlFor="r1">3rd monthly payment</Label>
                  </div>
                  <p className="">₦14,000.00</p>
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <div className=" fixed bottom-3 w-[100%] items-center justify-center flex md:hidden z-20 ">
        <div className="  rounded-xl  border-[#292761] border-2 flex items-center justify-between bg-[#292761] ">
          <Link
            onClick={() => setBuyOrSell("buy")}
            to="/"
            className={`w-[100px] text-center  rounded-l-xl p-[14px]  ${
              buyOrSell === "buy"
                ? "text-[#C0C0C0]"
                : "bg-[#0E0C4D] text-white "
            }`}
          >
            Buy
          </Link>
          <Link
            onClick={() => setBuyOrSell("sell")}
            to="/sell"
            className={`w-[100px] text-center  rounded-r-xl p-[14px] ${
              buyOrSell === "sell"
                ? "text-[#C0C0C0] "
                : "  bg-[#0E0C4D] text-white"
            }`}
          >
            Sell
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CheckoutLayout;

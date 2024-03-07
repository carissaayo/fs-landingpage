import { ChevronRight, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "../components/CoreComponents/FooterComponents/Footer";
import MobileNav from "../components/CoreComponents/MobileComponents/MobileNav";
import Nav from "../components/CoreComponents/NavComponents/Nav";

import { Button } from "../components/ui/button";
import PaymentCon from "../components/GadgetPageComponents/PaymentCon";
import GadgetImageSlider from "../components/GadgetPageComponents/GadgetImageSlider";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "../components/ui/textarea";
import { useEffect, useState } from "react";
import GoBack from "../components/CoreComponents/Core/GoBack";

const GadgetPage = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [buyOrSell, setBuyOrSell] = useState("sell");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  useEffect(() => goToTop(), []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main className="">
      <Nav isBuy={1} scroll={scroll} />
      <MobileNav />
      <section className="px-8 md:px-16 lg:px-20 2xl:px-32 poppins-regular pb-12 ">
        {/* Mobile Go Back */}
        <GoBack />
        <div className="hidden sm:block py-6 poppins-semibold">
          <p className="flex items-center xs:gap-1 sm:gap-4 text-sm sm:text-base">
            <Link to="/">Home</Link>
            <span className="">
              <ChevronRight className="h-4 w-4" />
            </span>
            <Link
              to="/gadgets"
              className="bg-[#F1F1F1]  px-2 sm:px-4 py-2 rounded-sm"
            >
              Phones
            </Link>
            <span className="">
              <ChevronRight className="h-4 w-4" />
            </span>
            <span className="">Iphone 12 - 6GB 124 Internal Memory</span>
          </p>
        </div>

        <section className="flex flex-col md:flex-row  justify-center md:justify-between my-6 gap-12 lg:gap-20 xs:w-[90%] sm:w-[80%] md:w-full mx-auto">
          <div className="flex-1">
            <div className="max-w-[560px] mb-10">
              {/* <img src={gadgetImg} alt="" className="" /> */}
              <GadgetImageSlider />
            </div>
            <div className="w-full border-b border-gray-100 mb-10"></div>

            {/* Description Con */}
            <div className="border border-gray-100 px-4 py-6 rounded-xl flex flex-col gap-6">
              <Label className="poppins-semibold text-2xl ">Description</Label>
              <Textarea
                placeholder="iPhone 14 Plus, 160.8 x 78.1 x 7.8 mm (6.33 x 3.07 x 0.31 in),"
                className="border-none placeholder:text-[#898686] p-4"
              />
            </div>
          </div>

          {/* Second row */}
          <div className="flex-1 w-full">
            <div className="w-full">
              <h1 className="poppins-semibold text-3xl mb-10">Iphone 11 pro</h1>
              <hr className="w-full border-b border-gray-100 mb-10" />
              <h1 className="poppins-semibold text-2xl mb-4">Payment Method</h1>
              <p className="text-[#898686]">
                Please select your preferred payment type
              </p>
            </div>

            {/* Payment Btns Con */}
            <div className=" flex gap-4 items-center my-4 mb-10">
              <Button
                className="bg-white hover:bg-white px-8 border-[#979797] hover:border-[#979797]"
                variant="outline"
              >
                Pay Monthly
              </Button>
              <Button
                className="bg-white hover:bg-white px-8 border-[#979797] hover:border-[#979797]"
                variant="outline"
              >
                Pay Now
              </Button>
            </div>

            <hr className="w-full border-b border-gray-100 mb-10" />

            {/* Initial Deposit Con */}
            <div className="mb-10">
              <h1 className="poppins-semibold text-2xl mb-4">
                Initial deposit
              </h1>
              <p className="text-[#898686]mb-8">
                Enter your first deposit below
              </p>

              <div className="flex items-center gap-3 mt-4  border lg:border-b border-gray-200    rounded-xl py-1">
                <span className="bg-[#130D52] text-white poppins-semibold text-xl p-2 sm:p-4 px-6 rounded-l-xl">
                  ₦
                </span>
                <input
                  type="text"
                  placeholder="Initial deposit amount"
                  className="border-none focus:border-none outline-none focus:outline-none w-full"
                />
              </div>
            </div>

            <PaymentCon />
          </div>
        </section>
      </section>
      <Footer />
      <div className="top-to-btm">
        {" "}
        {showTopBtn && (
          <ChevronUp className="icon-position icon-style" onClick={goToTop} />
        )}{" "}
      </div>
    </main>
  );
};

export default GadgetPage;

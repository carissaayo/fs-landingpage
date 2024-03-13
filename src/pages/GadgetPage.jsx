import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";

import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";

import Nav from "../components/CoreComponents/NavComponents/Nav";
import MobileNav from "../components/CoreComponents/MobileComponents/MobileNav";
import Footer from "../components/CoreComponents/FooterComponents/Footer";
import PaymentCon from "../components/GadgetPageComponents/PaymentCon";
import GadgetImageSlider from "../components/GadgetPageComponents/GadgetImageSlider";

const GadgetPage = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scroll, setScroll] = useState(false);

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
  // useEffect(() => goToTop(), []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main className="">
      <Nav isBuy={1} scroll={scroll} />
      <MobileNav isBuy={1} scroll={scroll} />
      <section className="xs:px-8 md:px-16 lg:px-20 2xl:px-32 poppins-regular pb-12 ">
        {/* GoBack  */}
        <div className="px-8 xs:px-0 py-6 poppins-semibold ">
          <p className="flex items-center xs:gap-1 sm:gap-4 text-sm sm:text-base">
            <Link to="/" className="flex xs:block items-center">
              <span className="inline-block xs:hidden">
                <ChevronLeft className="h-4 w-4" />
              </span>
              Home
            </Link>
            <span className="hidden sm:inline-block">
              <ChevronRight className="h-4 w-4" />
            </span>
            <Link
              to="/gadgets"
              className="bg-[#F1F1F1]  px-2 sm:px-4 py-2 rounded-sm hidden sm:inline-block"
            >
              Phones
            </Link>
            <span className="hidden sm:inline-block">
              <ChevronRight className="h-4 w-4" />
            </span>
            <span className="hidden sm:inline-block">
              Iphone 12 - 6GB 124 Internal Memory
            </span>
          </p>
        </div>

        <section className="flex flex-col md:flex-row  justify-center md:justify-between my-6 gap-12 lg:gap-20 xs:w-[90%] sm:w-[80%] md:w-full mx-auto relative">
          <div className="flex-1">
            <div className="max-w-[560px] h-[600px] xs:h-auto mb-10">
              <GadgetImageSlider />
            </div>
            <div className="w-full border-b border-gray-100 mb-10"></div>

            {/* Description Con */}
            <div className="border border-gray-100 px-4 py-6 rounded-xl hidden xs:flex flex-col gap-6">
              <Label className="poppins-semibold text-2xl ">Description</Label>
              <p className="border-none placeholder:text-[#898686] p-4">
                Iphone 12 256gb uk used factory unlocked. Black color, in
                excellent working condition. Very Neat with good battery health
              </p>
            </div>
          </div>

          {/* Second row */}
          <div className="xs:flex-1   w-[95%] xs:w-full relative top-[-440px] h-full xs:top-0 px-4   xs:px-0 mx-auto bg-white rounded-t-xl pt-8">
            {/* Mobile */}
            <section className="block xs:hidden">
              <h1 className="  poppins-semibold text-2xl mb-4">
                Iphone 11 pro
              </h1>
              <h2 className="poppins-semibold text-3xl mb-4">₦301,490</h2>
              <Badge className="bg-[#E9F3FF] hover:bg-[#E9F3FF] text-black hover:text-black text-base  px-3 mb-10">
                Used
              </Badge>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-2">
                  <h1 className="poppins-medium">Apple</h1>
                  <p className="text-[#8A8A8A] text-sm">BRAND </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="poppins-medium">Iphone 12</h1>
                  <p className="text-[#8A8A8A] text-sm">MODEL </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h1 className="poppins-medium">Used</h1>
                  <p className="text-[#8A8A8A] text-sm">CONDITION </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="poppins-medium">Used</h1>
                  <p className="text-[#8A8A8A] text-sm">SECOND CONDITION </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="poppins-medium">256 GB</h1>
                  <p className="text-[#8A8A8A] text-sm">INTERNAL STORAGE</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="poppins-medium">256 GB</h1>
                  <p className="text-[#8A8A8A] text-sm">CARD SLOT</p>
                </div>
              </div>
            </section>
            <div className="w-full">
              <h1 className=" hidden xs:block poppins-semibold text-3xl mb-10">
                Iphone 11 pro
              </h1>
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

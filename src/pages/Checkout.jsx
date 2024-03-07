import { useEffect, useState } from "react";
import Nav from "../components/CoreComponents/NavComponents/Nav";
import MobileNav from "../components/CoreComponents/MobileComponents/MobileNav";
import Footer from "../components/CoreComponents/FooterComponents/Footer";
import { ChevronRight, ChevronUp } from "lucide-react";
import GoBack from "../components/CoreComponents/Core/GoBack";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

import CheckoutFormA from "../components/CheckoutComponents/CheckoutFormA";
import CheckoutFormB from "../components/CheckoutComponents/CheckoutFormB";
import CheckoutFormC from "../components/CheckoutComponents/CheckoutFormC";
import CheckoutFormD from "../components/CheckoutComponents/CheckoutFormD";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
const Checkout = () => {
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
    <main className="w-full h-full relative">
      <Nav scroll={scroll} isBuy={1} />
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
            <span className="bg-[#F1F1F1]  px-2 sm:px-4 py-2 rounded-sm">
              Checkout
            </span>
          </p>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row justify-between px-8 md:px-16 lg:px-20 2xl:px-32 poppins-regular pb-12 gap-12  xl:gap-32 xs:w-[80%] sm:w-full mx-auto sm:mx-0">
        <div className="flex-1 lg:flex-[1.5]">
          {/* KYC Details 1 */}
          <Accordion type="single" collapsible className="mb-10">
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline poppins-bold text-lg">
                KYC details (1)
              </AccordionTrigger>
              <AccordionContent>
                <CheckoutFormA />
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* KYC Details 2 */}

          <Accordion type="single" collapsible className="mb-10">
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline poppins-bold text-lg">
                KYC details (2)
              </AccordionTrigger>
              <AccordionContent>
                <CheckoutFormB />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* Guarantor Details */}
          <Accordion type="single" collapsible className="mb-10">
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline poppins-bold text-lg">
                Guarantors Details
              </AccordionTrigger>
              <AccordionContent>
                <CheckoutFormC />
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Delivery Details */}
          <Accordion type="single" collapsible className="mb-10">
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline poppins-bold text-lg">
                Delivery Address
              </AccordionTrigger>
              <AccordionContent>
                <CheckoutFormD />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex-1">
          {/* Payment Summary */}
          <div className="mb-10 relative">
            <h1 className="poppins-semibold text-2xl mb-4">Payment Summary</h1>

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
              <div className="flex items-center space-x-2  justify-between  py-4 xs:p-4 rounded-xl">
                <div className="flex items-center gap-6">
                  <RadioGroupItem value="0" id="r1" />
                  <Label htmlFor="r1">1st monthly payment</Label>
                </div>
                <p className="">₦14,000.00</p>
              </div>
              <div className="relative">
                <div className="h-[40px] w-0 border border-black border-dashed ml-6 absolute bottom-[-16px]"></div>
              </div>
              <div className="flex items-center space-x-2  justify-between  py-4 xs:p-4 rounded-xl">
                <div className="flex items-center gap-6">
                  <RadioGroupItem value="0" id="r1" />
                  <Label htmlFor="r1">2nd monthly payment</Label>
                </div>
                <p className="">₦14,000.00</p>
              </div>
              <div className="relative">
                <div className="h-[40px] w-0 border border-black border-dashed ml-6 absolute bottom-[-16px]"></div>
              </div>
              <div className="flex items-center space-x-2  justify-between  py-4 xs:p-4 rounded-xl">
                <div className="flex items-center gap-6">
                  <RadioGroupItem value="0" id="r1" />
                  <Label htmlFor="r1">3rd monthly payment</Label>
                </div>
                <p className="">₦14,000.00</p>
              </div>
            </RadioGroup>
          </div>
          {/* Checkout Btn */}
          <div className="w-full ">
            <Button className="bg-[#0E0C4D] border-[#B1B1B1] hover:bg-[#0E0C4D] hover:border-[#B1B1B1] w-full py-8 text-lg">
              Buy Now
            </Button>
          </div>
        </div>
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

export default Checkout;

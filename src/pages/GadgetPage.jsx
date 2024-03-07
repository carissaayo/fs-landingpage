import { ChevronRight, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "../components/CoreComponents/FooterComponents/Footer";
import MobileNav from "../components/CoreComponents/MobileComponents/MobileNav";
import Nav from "../components/CoreComponents/NavComponents/Nav";

import gadgetImg from "../assets/images/gadget.png";
import { Button } from "../components/ui/button";
import PaymentCon from "../components/GadgetPageComponents/PaymentCon";
import GadgetImageSlider from "../components/GadgetPageComponents/GadgetImageSlider";

const GadgetPage = () => {
  return (
    <main className="">
      <Nav isBuy={1} />
      <MobileNav />
      <section className="px-8 md:px-16 lg:px-20 2xl:px-32 poppins-regular pb-12">
        <div className="py-6 poppins-semibold">
          <p className="flex items-center gap-4">
            <Link to="/">Home</Link>
            <span className="">
              <ChevronRight className="h-4 w-4" />
            </span>
            <Link to="/gadgets" className="bg-[#F1F1F1] px-4 py-2 rounded-sm">
              Phones
            </Link>
            <span className="">
              <ChevronRight className="h-4 w-4" />
            </span>
            <span className="">Iphone 12 - 6GB 124 Internal Memory</span>
          </p>
        </div>

        <section className="flex justify-between my-6">
          <div className="flex-1">
            <div className="max-w-[560px]">
              {/* <img src={gadgetImg} alt="" className="" /> */}
              <GadgetImageSlider />
            </div>
            <div className="w-full border-b border-gray-100"></div>
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
                <span className="bg-[#130D52] text-white poppins-semibold text-xl p-4 px-6 rounded-l-xl">
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
    </main>
  );
};

export default GadgetPage;

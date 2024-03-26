import { useEffect } from "react";

import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";

import PaymentCon from "../components/GadgetPageComponents/PaymentCon";
import GadgetImageSlider from "../components/GadgetPageComponents/GadgetImageSlider";

const GadgetPage = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => goToTop(), []);

  return (
    <main className="">
      <section className=" poppins-regular   pt-[75px] md:pt-32 mb-12 md:px-32 ">
        <section className="flex flex-col md:flex-row  justify-center md:justify-between md:my-6  md:gap-20  mx-auto relative pt-1">
          <div className="flex-1 ">
            <div className=" max-h-[600px] mb-10 md:fixed ">
              <GadgetImageSlider />
            </div>
          </div>

          {/* Second row */}
          <div className="md:flex-1   w-full relative top-[-40%]  md:h-full md:top-0   mx-auto bg-white rounded-t-xl px-6 md:px-32">
            {/* Mobile */}
            <section className="">
              <h1 className="  poppins-semibold text-xl mb-8 text-gray-700">
                Iphone 11 pro
              </h1>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-2">
                  <h1 className="poppins-medium text-gray-700">Apple</h1>
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
              {/* Description Con */}
              <p className="border-none placeholder:text-[#898686] py-3">
                Iphone 12 256gb uk used factory unlocked. Black color, in
                excellent working condition. Very Neat with good battery health
              </p>

              <hr className="w-full border-b border-gray-100 mb-10" />
              <h1 className="poppins-semibold text-xl mb-4 text-gray-700">
                Payment Method
              </h1>
              <p className="text-[#898686]">
                Please select your purchase preference
              </p>
            </div>

            {/* Payment Btns Con */}
            <div className=" flex gap-4 items-center my-4 mb-10 w-full mt-8">
              <Button
                className="bg-white hover:bg-white px-8 border-[#979797] hover:border-[#979797] flex-1 py-6"
                variant="outline"
              >
                Pay Monthly
              </Button>
              <Button
                className="bg-white hover:bg-white px-8 border-[#979797] hover:border-[#979797] flex-1 py-6"
                variant="outline"
              >
                Pay Now
              </Button>
            </div>

            <hr className="w-full border-b border-gray-100 mb-10" />

            {/* Initial Deposit Con */}
            <div className="mb-10 ">
              <h1 className="poppins-semibold text-xl mb-4 text-[#898686]">
                Initial deposit
              </h1>
              <p className="text-[#898686]mb-8">
                Enter your first deposit below
              </p>

              <div className="flex items-center gap-3 mt-4  border md:border-b border-gray-400    rounded-xl">
                <span className="bg-[#130D52] text-white poppins-semibold text-xl p-2 md:p-4 px-6 rounded-l-xl">
                  ₦
                </span>
                <input
                  type="text"
                  placeholder="Initial deposit amount"
                  className="border-none focus:border-none outline-none focus:outline-none w-full py-0"
                />
              </div>
            </div>

            <PaymentCon />
          </div>
        </section>
      </section>
    </main>
  );
};

export default GadgetPage;

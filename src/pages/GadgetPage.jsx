import { useEffect } from "react";

import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

import PaymentCon from "../components/GadgetPageComponents/PaymentCon";
import GadgetImageSlider from "../components/GadgetPageComponents/GadgetImageSlider";
import { useGadgetPageStore } from "../store/gadgetPageStore";

const GadgetPage = () => {
  const showPayment = useGadgetPageStore((state) => state.showPayment);
  const setShowPayment = useGadgetPageStore((state) => state.setShowPayment);
  const initialDeposit = useGadgetPageStore((state) => state.initialDeposit);
  const setInitialDeposit = useGadgetPageStore(
    (state) => state.setInitialDeposit
  );
  const showInitialDeposit = useGadgetPageStore(
    (state) => state.showInitialDeposit
  );
  const setShowInitialDeposit = useGadgetPageStore(
    (state) => state.setShowInitialDeposit
  );

  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => {
    goToTop();
    // setShowPayment(false);
  }, []);

  return (
    <main className="">
      <section className=" poppins-regular   pt-[75px] lg:pt-[100px] mb-12 lg:px-12 ">
        <section className="flex flex-col lg:flex-row  justify-center lg:justify-between lg:my-6  lg:gap-20  mx-auto relative pt-1">
          <div className="flex-1 lg:w-[50%] ">
            <div className=" lg:max-h-[600px] mb-10 lg:fixed ">
              <GadgetImageSlider />
            </div>
          </div>

          {/* Second row */}
          <div className="lg:flex-1   w-full relative        bg-white rounded-t-xl lg:rounded-t-none px-6 lg:px-12 ">
            {/* Mobile */}
            <section className="">
              <h1 className="  poppins-semibold text-xl mb-8 text-gray-700">
                Iphone 11 pro
              </h1>

              <h1 className="  poppins-semibold text-2xl mb-8 text-gray-900">
                ₦200,000
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
                className={` bg-white hover:bg-white px-8 border-[#979797] hover:border-[#979797] flex-1 py-6 ${
                  showInitialDeposit &&
                  "border-[#0E0C4D]  hover:border-[#0E0C4D] border-2 "
                }`}
                variant="outline"
                onClick={() => setShowInitialDeposit(true)}
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
            <hr className="w-full border-b border-gray-100 mb-10" />{" "}
            {showInitialDeposit && (
              <>
                {/* Initial Deposit Con */}
                <div className="mb-10 ">
                  <h1 className="poppins-semibold text-xl mb-4 ">
                    Initial Deposit
                  </h1>
                  <p className="text-[#898686] mb-8">
                    Enter your first deposit below
                  </p>

                  <div className="flex items-center border border-gray-400  p-1  px-3 rounded-lg">
                    <span className="poppins-bold">₦</span>
                    <input
                      className={`h-12 w-full poppins-medium disabled:cursor-not-allowed`}
                      value={initialDeposit}
                      onChange={(e) => setInitialDeposit(e.target.value)}
                      type="number"
                      disabled={showPayment}
                    />
                    {initialDeposit.length > 1 && (
                      <button
                        className={`bg-[#0E0C4D] text-white  rounded-lg  text-sm p-3 ${
                          showPayment && "px-5"
                        }`}
                        onClick={() => setShowPayment(!showPayment)}
                      >
                        {showPayment ? "Edit" : "Continue"}
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
            <PaymentCon />
          </div>
        </section>
      </section>
    </main>
  );
};

export default GadgetPage;

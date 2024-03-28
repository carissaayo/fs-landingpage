import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

import PaymentDialog from "../PaymentSignUpComponents/PaymentDialog";
import { useGadgetPageStore } from "../../store/gadgetPageStore";

const PaymentCon = () => {
  const showPayment = useGadgetPageStore((state) => state.showPayment);
  const paymentPlan = useGadgetPageStore((state) => state.paymentPlan);
  const setPaymentPlan = useGadgetPageStore((state) => state.setPaymentPlan);
  const deliveryState = useGadgetPageStore((state) => state.deliveryState);
  const setDeliveryState = useGadgetPageStore(
    (state) => state.setDeliveryState
  );
  const initialDeposit = useGadgetPageStore((state) => state.initialDeposit);
  const convertToLocaleString = (value) => Number(value).toLocaleString();
  const getdeliveryFee = (delivery) => delivery.slice(0, 4);
  const getDeliveryAddress = (delivery) => delivery.slice(5);
  const initialPaymentTotal = (a, b) =>
    (Number(a) + Number(b)).toLocaleString();
  return (
    <div className="">
      {/* Payment Terms Con */}
      {showPayment && (
        <div className="">
          <h1 className="poppins-semibold text-xl mb-4 text-gray-700">
            Payment Breakdown
          </h1>
          <p className="text-[#898686] mb-6">Choose an easy payment duration</p>

          {/* Payment Con */}
          <div className="  mb-10">
            <RadioGroup
              value={paymentPlan}
              onValueChange={(value) => setPaymentPlan(value)}
            >
              <label className="flex items-center space-x-2  justify-between border p-4 rounded-xl cursor-pointer">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="2" id="r1" />
                  <Label htmlFor="r1">2 months</Label>
                </div>
                <p className="">₦329,800/mo</p>
              </label>
              <label className="flex items-center space-x-2 justify-between border p-4 rounded-xl cursor-pointer">
                <div className="flex items-center gap-2 cursor-pointer">
                  <RadioGroupItem value="3" id="r2" />
                  <Label htmlFor="r2" className="cursor-pointer">
                    3 months
                  </Label>
                </div>
                <p className="">₦329,800/mo</p>
              </label>
              <label className="flex items-center space-x-2 justify-between border p-4 rounded-xl cursor-pointer">
                <div className="flex items-center gap-2 cursor-pointer">
                  <RadioGroupItem value="4" id="r3" />
                  <Label htmlFor="r3" className="cursor-pointer">
                    4 months
                  </Label>
                </div>
                <p className="">₦329,800/mo</p>
              </label>

              <label className="flex items-center space-x-2 justify-between border p-4 rounded-xl cursor-pointer">
                <div className="flex items-center gap-2 cursor-pointer">
                  <RadioGroupItem value="5" id="r4" />
                  <Label htmlFor="r4" className="cursor-pointer">
                    5 months
                  </Label>
                </div>
                <p className="">₦329,800/mo</p>
              </label>

              <label className="flex items-center space-x-2 justify-between border p-4 rounded-xl cursor-pointer">
                <div className="flex items-center gap-2 cursor-pointer">
                  <RadioGroupItem value="6" id="r5" />
                  <Label htmlFor="r5" className="cursor-pointer">
                    6 months
                  </Label>
                </div>
                <p className="">₦329,800/mo</p>
              </label>
            </RadioGroup>
          </div>
        </div>
      )}
      {/* Delivery Con */}

      {paymentPlan && (
        <div className="mb-10">
          <h1 className="poppins-semibold text-xl mb-4 text-gray-700">
            Select Delivery State
          </h1>
          <p className="text-[#898686] mb-6">Select your delivery state</p>
          <div className=" flex flex-col justify-start gap-4">
            <div className="custom-select">
              <select
                className="border border-gray-400 p-4 rounded-lg text-sm"
                defaultValue="Lagos - #2000"
                value={deliveryState}
                onChange={(e) => setDeliveryState(e.target.value)}
              >
                <option value="2000-Lagos" className="Lagos">
                  Lagos - #2000
                </option>{" "}
                <option value="2000-Kwara " className="">
                  Kwara - #2000
                </option>{" "}
                <option value="2000-Oyo" className="">
                  Oyo - #2000
                </option>{" "}
              </select>
            </div>
          </div>
        </div>
      )}
      {/* Payment Summary */}

      {deliveryState && (
        <>
          <div className="mb-10 relative">
            <h1 className="poppins-semibold text-xl mb-4 text-gray-700">
              Payment Summary
            </h1>
          </div>

          {/* Payment structure */}
          <div className=" mb-10">
            <RadioGroup defaultValue="0">
              <div className="flex items-center space-x-2  justify-between  px-4 pr-0 rounded-xl">
                <div className="flex items-center gap-5">
                  <RadioGroupItem value="0" id="r0" />
                  <Label htmlFor="r0">Initial payment</Label>
                </div>
                <p className="">
                  ₦
                  {initialPaymentTotal(
                    initialDeposit,
                    getdeliveryFee(deliveryState)
                  )}
                  .00
                </p>
              </div>

              <div className="flex items-center space-x-2  justify-between   rounded-xl pl-20">
                <Label htmlFor="r1">Initial Deposit</Label>
                <p className="tex">
                  ₦{initialDeposit && convertToLocaleString(initialDeposit)}.00
                </p>
              </div>

              <div className="flex items-center space-x-2  justify-between   rounded-xl pl-20">
                <Label htmlFor="r1">
                  Delivery Fee (
                  {deliveryState && getDeliveryAddress(deliveryState)})
                </Label>
                <p className="">
                  ₦
                  {deliveryState &&
                    convertToLocaleString(getdeliveryFee(deliveryState))}
                  .00
                </p>
              </div>

              <div className="flex items-center space-x-2  justify-between  p-4 rounded-xl pl-12">
                <Label htmlFor="r1">2nd monthly payment</Label>
                <p className="">₦14,000.00</p>
              </div>

              <div className="flex items-center space-x-2  justify-between  p-4 rounded-xl pl-12">
                <Label htmlFor="r1">3rd monthly payment</Label>

                <p className="">₦14,000.00</p>
              </div>
            </RadioGroup>
          </div>
          {/* Register Dialog */}
          <PaymentDialog />
        </>
      )}
    </div>
  );
};

export default PaymentCon;

import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

import PaymentDialog from "../PaymentSignUpComponents/PaymentDialog";

const PaymentCon = () => {
  return (
    <div className="">
      {/* Payment Terms Con */}
      <div className="">
        <h1 className="poppins-semibold text-xl mb-4 text-gray-700">
          Payment Terms
        </h1>
        <p className="text-[#898686] mb-6">Choose an easy payment duration</p>

        {/* Payment Con */}
        <div className="  mb-10">
          <RadioGroup defaultValue="2">
            <div className="flex items-center space-x-2  justify-between border p-4 rounded-xl">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="2" id="r1" />
                <Label htmlFor="r1">2 months</Label>
              </div>
              <p className="">₦329,800/mo</p>
            </div>
            <div className="flex items-center space-x-2 justify-between border p-4 rounded-xl">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="3" id="r1" />
                <Label htmlFor="r1">3 months</Label>
              </div>
              <p className="">₦329,800/mo</p>
            </div>
            <div className="flex items-center space-x-2 justify-between border p-4 rounded-xl">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="4" id="r1" />
                <Label htmlFor="r1">4 months</Label>
              </div>
              <p className="">₦329,800/mo</p>
            </div>

            <div className="flex items-center space-x-2 justify-between border p-4 rounded-xl">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="5" id="r1" />
                <Label htmlFor="r1">5 months</Label>
              </div>
              <p className="">₦329,800/mo</p>
            </div>

            <div className="flex items-center space-x-2 justify-between border p-4 rounded-xl">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="6" id="r1" />
                <Label htmlFor="r1">6 months</Label>
              </div>
              <p className="">₦329,800/mo</p>
            </div>
          </RadioGroup>
        </div>

        {/* Delivery Con */}
        <div className="mb-10">
          <h1 className="poppins-semibold text-xl mb-4 text-gray-700">
            Select State
          </h1>
          <p className="text-[#898686] mb-6">Select your delivery state</p>
          <div className=" flex flex-col justify-start gap-4">
            <div className="custom-select">
              <select
                className="border border-gray-400 p-4 rounded-lg text-sm"
                defaultValue="Lagos - #2000"
              >
                <option value="" className="Lagos">
                  Lagos - #2000
                </option>{" "}
                <option value="Kwara " className="">
                  Kwara - #2000
                </option>{" "}
                <option value="Oyo" className="">
                  Oyo - #2000
                </option>{" "}
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Payment Summary */}
      <div className="mb-10 relative">
        <h1 className="poppins-semibold text-xl mb-4 text-gray-700">
          Payment Summary
        </h1>
      </div>

      {/* Payment structure */}
      <div className=" mb-10">
        <RadioGroup defaultValue="0">
          <div className="flex items-center space-x-2  justify-between  p-4 rounded-xl">
            <div className="flex items-center gap-6">
              <RadioGroupItem value="0" id="r1" />
              <Label htmlFor="r1">Initial deposit</Label>
            </div>
            <p className="">₦14,000.00</p>
          </div>

          <div className="flex items-center space-x-2  justify-between  p-4 rounded-xl">
            <div className="flex items-center gap-6">
              <RadioGroupItem value="1" id="r1" />
              <Label htmlFor="r1">1st monthly payment</Label>
            </div>
            <p className="">₦14,000.00</p>
          </div>
          <div className="relative">
            <div className="h-[40px] w-0 border border-black border-dashed ml-6 absolute bottom-[-16px]"></div>
          </div>
          <div className="flex items-center space-x-2  justify-between  p-4 rounded-xl">
            <div className="flex items-center gap-6">
              <RadioGroupItem value="2" id="r1" />
              <Label htmlFor="r1">2nd monthly payment</Label>
            </div>
            <p className="">₦14,000.00</p>
          </div>
          <div className="relative">
            <div className="h-[40px] w-0 border border-black border-dashed ml-6 absolute bottom-[-16px]"></div>
          </div>
          <div className="flex items-center space-x-2  justify-between  p-4 rounded-xl">
            <div className="flex items-center gap-6">
              <RadioGroupItem value="3" id="r1" />
              <Label htmlFor="r1">3rd monthly payment</Label>
            </div>
            <p className="">₦14,000.00</p>
          </div>
        </RadioGroup>
      </div>
      {/* Register Dialog */}
      <PaymentDialog />
    </div>
  );
};

export default PaymentCon;

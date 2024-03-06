import { ChevronRight, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "../components/CoreComponents/FooterComponents/Footer";
import MobileNav from "../components/CoreComponents/MobileComponents/MobileNav";
import Nav from "../components/CoreComponents/NavComponents/Nav";

import gadgetImg from "../assets/images/gadget.png";
import { Button } from "../components/ui/button";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const GadgetPage = () => {
  return (
    <main className="">
      <Nav />
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
            <div className="">
              <img src={gadgetImg} alt="" className="" />
            </div>
            <div className="w-full border-b border-gray-100"></div>
          </div>

          {/* Second row */}
          <div className="flex-1">
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

            {/* Payment Terms Con */}
            <div className="">
              <h1 className="poppins-semibold text-2xl mb-4">Payment Terms</h1>
              <p className="text-[#898686] mb-6">
                Choose an easy payment duration
              </p>

              {/* Payment Con */}
              <div className="border border-gray-100 py-4 rounded-xl px-4 mb-10">
                <p className="flex justify-between mb-4">
                  Pay Monthly{" "}
                  <span className="">
                    <ChevronUp className="w-5 h-5" />
                  </span>
                </p>
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
                <h1 className="poppins-semibold text-2xl mb-4">Select State</h1>
                <p className="text-[#898686] mb-6">
                  Select your delivery state
                </p>
                <div className=" flex flex-col justify-start gap-4">
                  <Select>
                    <SelectTrigger className="">
                      <SelectValue placeholder="Lagos - #2000" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Lagos">Lagos - #2000</SelectItem>
                      <SelectItem value="Kwara">Kwara - #2000</SelectItem>
                      <SelectItem value="Oyo">Oyo - #2000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            {/* Payment Summary */}
            <div className="mb-10 relative">
              <h1 className="poppins-semibold text-2xl mb-4">
                Payment Summary
              </h1>

              <div className="mb-10 border border-gray-100 py-6 rounded-xl bg-[#FCFCFC] px-4">
                <div className="flex justify-between  items-center ">
                  <p className="poppins-semibold text-2xl mb-4">
                    Initial deposit
                  </p>
                  <p className="text-xl">₦329,800</p>
                </div>
                {/* Dotted Con Starts*/}
                <div className="flex">
                  <div className="">
                    <div className=" border border-dashed border-[#6F6F6F] h-[80px] w-0"></div>
                  </div>
                  <div className="flex items-center justify-between gap-1 w-full">
                    <div className="flex items-center">
                      <div className=" border border-dashed border-[#6F6F6F] h-[0px] w-[30px]"></div>
                      <p className="text-[#898686]">30% down payment</p>
                    </div>
                    <p className="text-[#898686]">₦14,000</p>
                  </div>
                </div>
                <div className="relative bottom-[13px] left-1 flex gap-1 items-center justify-between">
                  <div className="flex items-center">
                    <div className=" border border-dashed border-[#6F6F6F] h-[0px] w-[30px]"></div>
                    <p className="text-[#898686]">Loan charges</p>
                  </div>
                  <p className="text-[#898686]">₦14,000</p>
                </div>
                {/* Dotted Con Ends*/}
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default GadgetPage;

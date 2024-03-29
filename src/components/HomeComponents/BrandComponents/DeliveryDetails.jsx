import { Button } from "../../ui/button";
import { Label } from "../../ui/label";

import Steps from "./Steps";

const DeliveryDetails = ({ stepContent }) => {
  return (
    <section
      className={` ${
        stepContent === 4
          ? "translate-x-0 w-full md:con__height px-6 md:px-32  relative poppins-regular "
          : "translate-x-[-100%] absolute h-0"
      }`}
    >
      <Steps step={4} />
      <div className="w-full items-center justify-center md:justify-between flex  mb-4">
        <h1 className="poppins-semibold text-xl md:text-3xl">
          Location Details
        </h1>
        <Button
          variant="link"
          className="hidden md:block underline text-[#0E0C4D] text-lg"
        >
          <a href="/sell#how-it-works">How it works</a>
        </Button>
      </div>
      <p className="text-[#111111] text-center md:text-left  md:text-base mb-4 md:mb-12">
        Please select the fairshop location you are selling from
      </p>

      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20  ">
        {/* State */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            State <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="custom-select">
            <select
              name=""
              id=""
              className="border border-gray-400 rounded-lg"
              defaultValue=""
              placeholder="Select the Phones Fault Condition"
            >
              <option value="apple" className="">
                Broken Screen
              </option>
              <option value="apple" className="">
                Broken Screen
              </option>{" "}
              <option value="apple" className="">
                Broken Screen
              </option>{" "}
              <option value="apple" className="">
                Broken Screen
              </option>{" "}
              <option value="apple" className="">
                Broken Screen
              </option>{" "}
              <option value="apple" className="">
                Broken Screen
              </option>
            </select>
          </div>
        </div>

        {/*  City */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            City<span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="custom-select">
            <select
              name=""
              id=""
              className="border border-gray-400 rounded-lg"
              defaultValue=""
              placeholder="Select the Phones Fault Condition"
            >
              <option value="apple" className="">
                Broken Screen
              </option>
              <option value="apple" className="">
                Broken Screen
              </option>{" "}
              <option value="apple" className="">
                Broken Screen
              </option>{" "}
              <option value="apple" className="">
                Broken Screen
              </option>{" "}
              <option value="apple" className="">
                Broken Screen
              </option>{" "}
              <option value="apple" className="">
                Broken Screen
              </option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryDetails;

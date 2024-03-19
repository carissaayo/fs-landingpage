import { Button } from "../../ui/button";
import { Label } from "../../ui/label";

import Steps from "./Steps";

const DeliveryDetails = ({ stepContent }) => {
  return (
    <section
      className={` ${
        stepContent === 4
          ? "translate-x-0 w-full md:con__height px-4 xs:px-8 sm:px-12 md:px-16 lg:px-20 2xl:px-32  relative poppins-regular "
          : "translate-x-[-100%] absolute h-0"
      }`}
    >
      <div className="w-full items-center justify-center md:justify-between flex  mb-4">
        <h1 className="poppins-semibold text-xl xs:text-3xl">
          Location Details
        </h1>
        <Button
          variant="link"
          className="hidden md:block underline text-[#0E0C4D] text-lg"
        >
          <a href="#how-it-works">How it works</a>
        </Button>
      </div>
      <p className="text-[#111111] text-center md:text-left xs:text-lg md:text-base mb-4 sm:mb-12">
        Please enter the location you are selling from
      </p>
      <Steps step={4} />

      <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-20  ">
        {/* State */}
        <div className="flex-1 flex flex-col gap-4">
          <Label className="">
            State <span className="text-[#E40C0C]">*</span>
          </Label>
          <div className="custom-select">
            <select
              name=""
              id=""
              className="border border-gray-500 p-4 rounded-lg"
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
              className="border border-gray-500 p-4 rounded-lg"
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

import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

import Steps from "./Steps";

const PhoneDetails = ({ stepContent }) => {
  return (
    <section
      id="brands"
      className={`${
        stepContent === 3
          ? "translate-x-0 w-full md:con__height px-6 md:px-32  relative poppins-regular    "
          : "translate-x-[-100%] absolute h-0"
      }`}
    >
      <div className="w-full items-center justify-center md:justify-between flex  mb-4">
        <h1 className="poppins-semibold text-xl md:text-3xl">
          Smartphone Details
        </h1>
        <Button
          variant="link"
          className="hidden md:block underline text-[#0E0C4D] text-lg"
        >
          <a href="#how-it-works">How it works</a>
        </Button>
      </div>
      <p className="text-[rgb(17,17,17)] text-center md:text-left  md:text-base mb-4 md:mb-12">
        Please enter the details of smartphone you want to sell
      </p>

      <Steps step={3} />

      <div className=" flex flex-col gap-8  md:gap-12">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20  ">
          {/*  Ram */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Ram <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-400 p-4 py-[30px]" />
          </div>

          {/* Fault condition */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Fault condition <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="custom-select">
              <select
                name=""
                id=""
                className="border border-gray-400 p-4 rounded-lg "
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

        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 ">
          {/* Storage */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Storage <span className="text-[#E40C0C]">*</span>
            </Label>
            <Input className="border border-gray-400 p-4 py-[30px]" />
          </div>

          {/* Phone Type */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Phone Type <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="custom-select">
              <select
                name=""
                id=""
                className="border border-gray-400 p-4 rounded-lg"
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

        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 ">
          {/* Screen Condition */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Screen Condition <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="custom-select">
              <select
                name=""
                id=""
                className="border border-gray-400 p-4 rounded-lg"
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

          {/* Fault */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              How long have you been using the device?
              <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="custom-select">
              <select
                name=""
                id=""
                className="border border-gray-400 p-4 rounded-lg"
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
      </div>
    </section>
  );
};

export default PhoneDetails;

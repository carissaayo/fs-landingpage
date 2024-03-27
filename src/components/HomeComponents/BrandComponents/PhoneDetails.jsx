import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

import Steps from "./Steps";

const PhoneDetails = () => {
  return (
    <section
      id="brands"
      className={`
        w-full md:con__height px-6 md:px-32  relative poppins-regular `}
    >
      <div className="w-full items-center justify-center md:justify-between flex  mb-4">
        <h1 className="poppins-semibold text-xl md:text-3xl">
          Smartphone Details
        </h1>
        <Button
          variant="link"
          className="hidden md:block underline text-[#0E0C4D] text-lg"
        >
          <a href="/sell#how-it-works">How it works</a>
        </Button>
      </div>
      <p className="text-[rgb(17,17,17)] text-center md:text-left  md:text-base mb-4 md:mb-12">
        Please enter the details of smartphone you want to sell
      </p>

      <Steps step={3} />

      <section className=" flex flex-col gap-8  md:gap-12">
        <div className="">
          <h2 className="mb-4 poppins-medium text-xl">Storage</h2>
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20  ">
            {/*  Ram */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Ram <span className="text-[#E40C0C]">*</span>
              </Label>
              <Input className="border border-gray-400 " />
            </div>
            {/* internal memory */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Internal memory <span className="text-[#E40C0C]">*</span>
              </Label>
              <Input className="border border-gray-400 " />
            </div>
          </div>
        </div>

        <div className="w-full">
          <h2 className="mb-2 poppins-medium text-xl">Faults</h2>
          <p className="w-full mb-4">
            Please select the faults your gadget has
          </p>

          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 mb-10 ">
            {/*  Phone Neatness */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Phone Neatness <span className="text-[#E40C0C]">*</span>
              </Label>
              <div className="custom-select">
                <select
                  name=""
                  id=""
                  className="border border-gray-400 rounded-lg "
                  defaultValue=""
                  placeholder="Select the Phones Fault Condition"
                >
                  <option value="apple" className="">
                    Very Neat
                  </option>
                  <option value="apple" className="">
                    Okay
                  </option>{" "}
                  <option value="apple" className="">
                    Very Rough
                  </option>{" "}
                </select>
              </div>
            </div>
            {/* Phone Condition */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Phone Condition <span className="text-[#E40C0C]">*</span>
              </Label>
              <div className="custom-select">
                <select
                  name=""
                  id=""
                  className="border border-gray-400 rounded-lg "
                  defaultValue=""
                  placeholder="Select the Phones Fault Condition"
                >
                  <option value="apple" className="">
                    Working Perfectly
                  </option>
                  <option value="apple" className="">
                    Working But Faulty
                  </option>{" "}
                  <option value="apple" className="">
                    Fully Damaged
                  </option>{" "}
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20  mb-10">
            {/* Screen condition */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Screen <span className="text-[#E40C0C]">*</span>
              </Label>
              <div className="custom-select">
                <select
                  name=""
                  id=""
                  className="border border-gray-400 rounded-lg "
                  defaultValue=""
                  placeholder="Select the Phones Fault Condition"
                >
                  <option value="apple" className="">
                    No Fault
                  </option>
                  <option value="apple" className="">
                    Cracked Screen
                  </option>{" "}
                  <option value="apple" className="">
                    Fully Damaged Screen
                  </option>{" "}
                </select>
              </div>
            </div>

            {/*  Battery Health */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Battery Health <span className="text-[#E40C0C]">*</span>
              </Label>
              <div className="custom-select">
                <select
                  name=""
                  id=""
                  className="border border-gray-400 rounded-lg "
                  defaultValue=""
                  placeholder="Select the Phones Fault Condition"
                >
                  <option value="apple" className="">
                    Very Good Battery
                  </option>
                  <option value="apple" className="">
                    Battery Is Okay
                  </option>{" "}
                  <option value="apple" className="">
                    Very Rough
                  </option>{" "}
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20  mb-10">
            {/* Camera condition */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Camera <span className="text-[#E40C0C]">*</span>
              </Label>
              <div className="custom-select">
                <select
                  name=""
                  id=""
                  className="border border-gray-400 rounded-lg "
                  defaultValue=""
                  placeholder="Select the Phones Fault Condition"
                >
                  <option value="apple" className="">
                    Working Perfectly
                  </option>
                  <option value="apple" className="">
                    No Camera
                  </option>{" "}
                  <option value="apple" className="">
                    Damaged Camera
                  </option>{" "}
                </select>
              </div>
            </div>

            {/*  Charging Port */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Charging Port <span className="text-[#E40C0C]">*</span>
              </Label>
              <div className="custom-select">
                <select
                  name=""
                  id=""
                  className="border border-gray-400 rounded-lg "
                  defaultValue=""
                  placeholder="Select the Phones Fault Condition"
                >
                  <option value="apple" className="">
                    No Fault
                  </option>
                  <option value="apple" className="">
                    Faulty, But Charging
                  </option>{" "}
                  <option value="apple" className="">
                    Fully Damaged
                  </option>{" "}
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20  mb-10">
            {/* Finger Print */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Finger Print <span className="text-[#E40C0C]">*</span>
              </Label>
              <div className="custom-select">
                <select
                  name=""
                  id=""
                  className="border border-gray-400 rounded-lg "
                  defaultValue=""
                  placeholder="Select the Phones Fault Condition"
                >
                  <option value="apple" className="">
                    Working Perfectly
                  </option>
                  <option value="apple" className="">
                    No Fingerprint
                  </option>{" "}
                  <option value="apple" className="">
                    Damaged Fingerprint
                  </option>{" "}
                </select>
              </div>
            </div>

            {/*  Network */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Network <span className="text-[#E40C0C]">*</span>
              </Label>
              <div className="custom-select">
                <select
                  name=""
                  id=""
                  className="border border-gray-400 rounded-lg "
                  defaultValue=""
                  placeholder="Select the Phones Fault Condition"
                >
                  <option value="apple" className="">
                    Working Perfectly
                  </option>
                  <option value="apple" className="">
                    Phone has no network
                  </option>{" "}
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20  mb-10">
            {/*Speaker */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Speaker <span className="text-[#E40C0C]">*</span>
              </Label>
              <div className="custom-select">
                <select
                  name=""
                  id=""
                  className="border border-gray-400 rounded-lg "
                  defaultValue=""
                  placeholder="Select the Phones Fault Condition"
                >
                  <option value="apple" className="">
                    No Fault
                  </option>

                  <option value="apple" className="">
                    Damaged
                  </option>
                </select>
              </div>
            </div>

            {/*  Mouthpiece */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Mouthpiece <span className="text-[#E40C0C]">*</span>
              </Label>
              <div className="custom-select">
                <select
                  name=""
                  id=""
                  className="border border-gray-400 rounded-lg "
                  defaultValue=""
                  placeholder="Select the Phones Fault Condition"
                >
                  <option value="apple" className="">
                    No Fault
                  </option>

                  <option value="apple" className="">
                    Damaged
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20  mb-10">
            {/*Earpiece*/}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Earpiece<span className="text-[#E40C0C]">*</span>
              </Label>
              <div className="custom-select">
                <select
                  name=""
                  id=""
                  className="border border-gray-400 rounded-lg "
                  defaultValue=""
                  placeholder="Select the Phones Fault Condition"
                >
                  <option value="apple" className="">
                    No Fault
                  </option>

                  <option value="apple" className="">
                    Damaged
                  </option>
                </select>
              </div>
            </div>

            {/*  Accessories */}
            <div className="flex-1 flex flex-col gap-4">
              <Label className="">
                Accessories <span className="text-[#E40C0C]">*</span>
              </Label>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  <input type="checkbox" value="Carton" />
                  <Label className="">Carton</Label>
                </div>

                <div className="flex items-center gap-1">
                  <input type="checkbox" value="Charger" />
                  <Label className="">Charger</Label>
                </div>
                <div className="flex items-center gap-1">
                  <input type="checkbox" value="Receipt" />
                  <Label className="">Receipt</Label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PhoneDetails;

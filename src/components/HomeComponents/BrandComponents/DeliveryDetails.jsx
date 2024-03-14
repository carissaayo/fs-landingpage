import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import Steps from "./Steps";

const DeliveryDetails = ({ stepContent }) => {
  return (
    <section
      className={` ${
        stepContent === 4
          ? "translate-x-0 w-full md:con__height px-4 xs:px-8 sm:px-12 md:px-16 lg:px-20 2xl:px-32  relative poppins-regular py-12 md:py-0"
          : "translate-x-[-100%] absolute h-0"
      }`}
    >
      <div className="w-full items-center justify-center md:justify-between flex  pt-12 mb-4">
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
      <p className="text-[#111111] text-center md:text-left xs:text-lg md:text-base mb-12">
        Please enter the location you are selling from
      </p>
      <Steps step={4} />

      <div className="mb-20 flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row justify-between gap-20  ">
          {/* First Name */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              State <span className="text-[#E40C0C]">*</span>
            </Label>
            <Select>
              <SelectTrigger className="border-gray-500 p-4 py-6">
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select State</SelectLabel>
                  <SelectItem value="apple">Broken Screen</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Last Name */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              City<span className="text-[#E40C0C]">*</span>
            </Label>
            <Select>
              <SelectTrigger className="border-gray-500 p-4 py-6">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select City</SelectLabel>
                  <SelectItem value="apple">Broken Screen</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryDetails;

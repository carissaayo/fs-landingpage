import { Label } from "../../components/ui/label";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import gadgetImg from "../../assets/images/gadget.png";

const GagdetSummary = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => goToTop(), []);
  return (
    <main className="w-full h-full poppins-regular text-[10px] md:text-[12px] pt-28 px-6 md:px-32">
      <div className="w-full text-center md:text-left">
        <h1 className="poppins-semibold text-xl md:text-3xl mb-4">
          Gadget{"'"}s Information
        </h1>
        <p className="mb-4 text-lg">
          Please check the provided inforamtion before proceeding
        </p>
      </div>

      {/* Gadget's Name */}
      <div className="mb-4">
        <h1 className="poppins-medium text-lg mb-4">Gadget{"'"}s Name</h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Brand{"'"}s Name <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
              Apple
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Model{"'"}s Name <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
              Iphone 13 pro
            </div>
          </div>
        </div>
      </div>

      {/* Gadget Storage */}
      <div className="mb-4">
        <h1 className="poppins-medium text-lg mb-4">Storage</h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Ram <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
              8GB
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Internal memory <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
              128GB
            </div>
          </div>
        </div>
      </div>
      {/* Gadget's Faults */}
      <section className="mb-4">
        <h1 className="poppins-medium text-lg mb-4">Faults</h1>
        <div className=" px-2  grid grid-cols-2 md:grid-cols-4  gap-8  mb-4">
          {/*  Phone Neatness */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Phone Neatness <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="custom-select">
              <select
                name=""
                id=""
                className="border border-gray-400 rounded-lg px-2 md:px-4 bg-gray-100 "
                disabled
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
                className="border border-gray-400 rounded-lg px-2 md:px-4 bg-gray-100 "
                disabled
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

          {/* Screen condition */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Screen <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="custom-select">
              <select
                name=""
                id=""
                className="border border-gray-400 rounded-lg px-2 md:px-4 bg-gray-100 "
                disabled
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
                className="border border-gray-400 rounded-lg px-2 md:px-4 bg-gray-100 "
                disabled
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

          {/* Camera condition */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Camera <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="custom-select">
              <select
                name=""
                id=""
                className="border border-gray-400 rounded-lg px-2 md:px-4 bg-gray-100 "
                disabled
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
                className="border border-gray-400 rounded-lg px-2 md:px-4 bg-gray-100 "
                disabled
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

          {/* Finger Print */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Finger Print <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="custom-select">
              <select
                name=""
                id=""
                className="border border-gray-400 rounded-lg px-2 md:px-4 bg-gray-100 "
                disabled
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
                className="border border-gray-400 rounded-lg px-2 md:px-4 bg-gray-100 "
                disabled
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

          {/*Speaker */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Speaker <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="custom-select">
              <select
                name=""
                id=""
                className="border border-gray-400 rounded-lg px-2 md:px-4 bg-gray-100 "
                disabled
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
                className="border border-gray-400 rounded-lg px-2 md:px-4 bg-gray-100 "
                disabled
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

          {/*Earpiece*/}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              Earpiece<span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="custom-select">
              <select
                name=""
                id=""
                className="border border-gray-400 rounded-lg px-2 md:px-4 bg-gray-100 "
                disabled
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
      </section>
      {/* Delivery Details */}
      <div className="mb-4">
        <h1 className="poppins-medium text-lg mb-4">Storage</h1>

        <div className="grid grid-cols-2 gap-8">
          {/* State */}
          <div className="flex-1 flex flex-col gap-4">
            <Label className="">
              State <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="custom-select">
              <select
                name=""
                id=""
                className="border border-gray-400 rounded-lg bg-gray-100 "
                disabled
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
                className="border border-gray-400 rounded-lg bg-gray-100 "
                disabled
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

      {/* Gadget's Images */}
      <div className="mb-4">
        <h1 className="poppins-medium text-lg mb-4">Gadget{"'"}s Images</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 md:gap-y-0">
          <img
            src={gadgetImg}
            alt=""
            className="  max-w-[150px] md:max-w-[250px]"
          />
          <img
            src={gadgetImg}
            alt=""
            className="  max-w-[150px] md:max-w-[250px]"
          />{" "}
          <img
            src={gadgetImg}
            alt=""
            className="  max-w-[150px] md:max-w-[250px]"
          />{" "}
          <img
            src={gadgetImg}
            alt=""
            className="  max-w-[150px] md:max-w-[250px]"
          />
        </div>
      </div>

      <div className="w-full flex justify-center md:justify-end items-center  gap-6 mt-12 mb-10 md:pr-16">
        <Link
          to="/sell"
          className="w-28 bg-[#F0F0F0] hover:bg-[#F0F0F0] text-black text-base rounded-2xl border border-[#ACACAC] h-[50px] flex items-center justify-center"
        >
          Edit
        </Link>
        <Link
          to="/sell/gadget-summary"
          className="w-28  text-white bg-[#0C0F4D] text-base rounded-2xl h-[50px] flex items-center justify-center"
        >
          Next
        </Link>
      </div>
    </main>
  );
};

export default GagdetSummary;

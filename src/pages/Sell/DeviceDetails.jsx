import { useEffect } from "react";
import { Link } from "react-router-dom";

import phoneImg from "../../assets/images/phone_14_01.jpg";

const DeviceDetails = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => goToTop(), []);

  return (
    <main className="w-full min-h-[90vh]  px-6  md:px-16  relative poppins-regular pt-36 pb-16 bg-white flex flex-col lg:flex-row  justify-between gap-12 lg:gap-6 text-sm md:text-base">
      <section className="block lg:hidden bg-white flex-1 rounded-md  box-shadow py-16 px-6">
        <div className="flex mb-4 px-3 gap-4 items-center">
          <img src={phoneImg} alt="" className="max-w-[80px] max-h-[80px]" />
          <p className="poppins-bold flex gap-1 ">
            Iphone 14 Pro Max <span className="">(128GB/4GB)</span>
          </p>
        </div>
        <hr className="mb-12" />
        <div className="poppins-bold">
          <h1 className="text-lg">Device Evaluation</h1>
          <ul className="pl-12 pt-4">
            <li className="text-sm list-disc">Can turn on/off</li>
            <li className="text-sm list-disc">Can make calls</li>
          </ul>
        </div>
      </section>
      <section className="w-full bg-white  py-16  px-6 md:px-12 box-shadow flex-[2] rounded-md">
        <p className="poppins-bold text-lg text-center mb-8">
          Tell us a few things about your device!
        </p>

        {/* Check 1 */}
        <div className="flex flex-col gap-4">
          <p className="poppins-bold">
            1. Are you able to switch your phone on/off?
          </p>
          <p className="">Check if your phone is able to start/restart.</p>

          {/* Check Con Starts */}
          <div className="mb-12 text-sm poppins-medium">
            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center w-3/5 poppins-bold">
              <label className="flex items-center gap-4 border rounded-sm px-6 py-2 cursor-pointer flex-1">
                <input type="radio" value="Carton" name="check1" />
                <span className="cursor-pointer">Yes</span>
              </label>

              <label className="flex items-center gap-4 border rounded-sm px-6 py-2 cursor-pointer flex-1">
                <input type="radio" value="Charger" name="check1" />
                <span className="cursor-pointer">No</span>
              </label>
            </div>
          </div>
          {/* Check Con Ends */}
        </div>

        {/* Check 2 */}
        <div className="flex flex-col gap-4">
          <p className="poppins-bold">
            2. Are you able to make and receive calls?
          </p>
          <p className="">
            Check device for cellular network connectivity issues.
          </p>

          {/* Check Con Starts */}
          <div className="mb-12 text-sm poppins-medium">
            <div className="flex gap-4 items-center w-3/5 poppins-bold">
              <label className="flex items-center gap-4 border rounded-sm px-6 py-2 cursor-pointer flex-1">
                <input type="radio" value="Carton" name="check2" />
                <span className="cursor-pointer">Yes</span>
              </label>

              <label className="flex items-center gap-4 border rounded-sm px-6 py-2 cursor-pointer flex-1">
                <input type="radio" value="Charger" name="check2" />
                <span className="cursor-pointer">No</span>
              </label>
            </div>
          </div>
          {/* Check Con Ends */}
        </div>

        <hr className="mb-12" />
        <div className="w-full flex justify-center  items-center  gap-6 ">
          <Link
            to="/sell/phone-variant"
            className="w-28 bg-[#F0F0F0] hover:bg-[#F0F0F0] text-black text-base rounded-2xl border border-[#ACACAC] h-[50px] flex items-center justify-center"
          >
            Back
          </Link>
          <Link
            to="/sell/device-detailsB"
            className="w-28  text-white bg-[#0C0F4D] text-base rounded-2xl h-[50px] flex items-center justify-center"
          >
            Next
          </Link>
        </div>
      </section>
      <section className="hidden lg:block bg-white flex-1 rounded-md  box-shadow py-16 px-6">
        <div className="flex mb-4 px-3 gap-4 items-center">
          <img src={phoneImg} alt="" className="max-w-[80px] max-h-[80px]" />
          <p className="poppins-bold flex gap-1 ">
            Iphone 14 Pro Max <span className="">(128GB/4GB)</span>
          </p>
        </div>
        <hr className="mb-12" />
        <div className="poppins-bold">
          <h1 className="text-lg">Device Evaluation</h1>
          <ul className="pl-12 pt-4">
            <li className="text-sm list-disc">Can turn on/off</li>
            <li className="text-sm list-disc">Can make calls</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default DeviceDetails;

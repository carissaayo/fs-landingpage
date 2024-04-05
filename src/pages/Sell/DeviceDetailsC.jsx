import { useEffect } from "react";
import { Link } from "react-router-dom";

import phoneImg from "../../assets/images/phone_14_01.jpg";

import BodyCon from "../../components/HomeComponents/SellComponents/DeviceBodyCon";

const DeviceDetailsC = () => {
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
      <section className="w-full bg-white  py-16 px-6 md:px-12 lg:px-6 xl:px-12 box-shadow flex-[2] rounded-md">
        <p className="poppins-bold text-lg text-center mb-8">
          Which of the following applies to your device?
        </p>

        <BodyCon />

        <hr className="mb-12" />
        <div className="w-full flex justify-center  items-center  gap-6 ">
          <Link
            to="/sell/device-detailsB"
            className="w-28 bg-[#F0F0F0] hover:bg-[#F0F0F0] text-black text-base rounded-2xl border border-[#ACACAC] h-[50px] flex items-center justify-center"
          >
            Back
          </Link>
          <Link
            to="/sell/phone-accessories"
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

export default DeviceDetailsC;

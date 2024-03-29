import { useEffect } from "react";
import { Link } from "react-router-dom";

import UserDetailsA from "../../components/UserDetailsComponents/UserDetailsA";
import UserDetailsB from "../../components/UserDetailsComponents/UserDetailsB";
import UserDetailsC from "../../components/UserDetailsComponents/UserDetailsC";
import UserDetailsD from "../../components/UserDetailsComponents/UserDetailsD";
import ConfirmDetails from "../../components/UserDetailsComponents/ConfirmDetails";

import { useCheckoutStore } from "../../store/checkoutStore";
import { useGeneralStore } from "../../store/generalStore";

const UserDetails = () => {
  const setCheckoutStep = useGeneralStore((state) => state.setCheckoutStep);
  const setShowSteps = useCheckoutStore((state) => state.setShowSteps);
  const goToTop = () => {
    setShowSteps(false);
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => goToTop(), []);
  return (
    <main className="w-full h-full poppins-regular text-[10px] md:text-[12px]">
      <div className="w-full text-center">
        <h1 className="poppins-semibold text-xl md:text-3xl mb-4">
          Customer{"'"}s Information
        </h1>
        <p className="mb-4 text-lg">
          Please check the provided inforamtion before proceeding
        </p>
      </div>
      <section className="">
        <h1 className=""></h1>
        <UserDetailsA />
        <UserDetailsB />
        <UserDetailsC />
        <UserDetailsD />
      </section>
      <div className="w-full flex justify-center md:justify-end items-center  gap-6 mb-10  ">
        <Link
          to="/buy/checkout/formA"
          className="w-28 bg-[#F0F0F0] hover:bg-[#F0F0F0] text-black hover:text-black text-base rounded-2xl border border-[#ACACAC] h-[50px] flex items-center justify-center "
          onClick={() => setCheckoutStep(1)}
        >
          Edit
        </Link>
        <Link
          to="/buy/checkout/summary"
          className="w-28 bg-[#0C0F4D] hover:bg-[#0C0F4D hover:bg-[#0C0F4D] hover:bg-[#0C0F4D text-white hover:text-white rounded-2xl  text-base h-[50px] flex items-center justify-center "
        >
          Next
        </Link>
        {/* <ConfirmDetails /> */}
      </div>
    </main>
  );
};

export default UserDetails;

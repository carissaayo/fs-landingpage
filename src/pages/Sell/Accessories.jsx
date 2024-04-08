import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import AccessoriesCon from "../../components/HomeComponents/SellComponents/AccessoriesCon";

import SellDialog from "../../components/HomeComponents/SellComponents/SellDialog";
import DeviceDetailsSummary from "../../components/HomeComponents/SellComponents/DeviceDetailsSummary";
import { useDeviceDetailsStore } from "../../store/sell/deviceDetailsStore";
import { useBrandsAndModelsStore } from "../../store/sell/brandsAndModelsStore";
import { useCreateUserStore } from "../../store/auth/createUser";
import { Button } from "../../components/ui/button";

const Accessories = () => {
  const navigate = useNavigate();
  const phoneDetails = useDeviceDetailsStore((state) => state.phoneDetails);

  const phoneConditions = useBrandsAndModelsStore(
    (state) => state.phoneConditions
  );
  const user = useCreateUserStore((state) => state.user);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => goToTop(), []);
  useEffect(() => {
    !phoneDetails.variantId && navigate("/sell");
  }, []);
  return (
    <main className="w-full min-h-[90vh]  px-6  md:px-16  relative poppins-regular pt-36 pb-16 bg-white flex flex-col lg:flex-row justify-between gap-12 lg:gap-6 text-sm md:text-base">
      <section className="w-full bg-white  py-16 px-6 md:px-12 lg:px-6 xl:px-12 box-shadow flex-[2] rounded-md">
        <p className="poppins-bold text-lg text-center mb-8">
          {phoneConditions?.three?.description}
        </p>

        <AccessoriesCon phoneConditions={phoneConditions} />

        <hr className="mb-12" />
        <div className="w-full flex justify-center  items-center  gap-6 ">
          <Link
            to="/sell/device-detailsB"
            className="w-28 bg-[#F0F0F0] hover:bg-[#F0F0F0] text-black text-base rounded-2xl border border-[#ACACAC] h-[50px] flex items-center justify-center"
          >
            Back
          </Link>
          {user?.accessToken ? (
            <Button className="bg-[#0E0C4D] border-[#B1B1B1] hover:bg-[#0E0C4D] hover:border-[#B1B1B1]   h-[50px] px-10 text-lg text-white rounded-2xl">
              Next
            </Button>
          ) : (
            <SellDialog />
          )}
        </div>
      </section>
      <DeviceDetailsSummary />
    </main>
  );
};

export default Accessories;

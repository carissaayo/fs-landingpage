import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDeviceDetailsStore } from "../../store/sell/deviceDetailsStore";
import { useBrandsAndModelsStore } from "../../store/sell/brandsAndModelsStore";
import DeviceDetailsSummary from "../../components/HomeComponents/SellComponents/DeviceDetailsSummary";

const DeviceDetails = () => {
  const navigate = useNavigate();
  const phoneDetails = useDeviceDetailsStore((state) => state.phoneDetails);

  const setPhoneDetails = useDeviceDetailsStore(
    (state) => state.setPhoneDetails
  );

  const phoneConditions = useBrandsAndModelsStore(
    (state) => state.phoneConditions
  );

  const showNextBtn =
    phoneDetails?.phoneConditions?.makeAndReceiveCalls !== null &&
    phoneDetails?.phoneConditions?.phoneStarting !== null;

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
    <main className="w-full min-h-[90vh]  px-6  md:px-16  relative poppins-regular pt-36 pb-16 bg-white flex flex-col lg:flex-row  justify-between gap-12 lg:gap-6 text-sm md:text-base device___details__con">
      <section className="w-full bg-white  py-16  px-6 md:px-12 box-shadow flex-[2] rounded-md details">
        <p className="poppins-bold text-lg text-center mb-8">
          {phoneConditions?.one?.description}
        </p>

        {/* Check 1 */}
        <div className="flex flex-col gap-4">
          <p className="poppins-bold">
            1. {phoneConditions?.one?.options?.phoneStarting?.description}
          </p>
          <p className="">
            {phoneConditions?.one?.options?.phoneStarting?.info}
          </p>

          {/* Check Con Starts */}
          <div className="mb-12 text-sm poppins-medium">
            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center w-3/5 poppins-bold">
              {phoneConditions?.one?.options?.phoneStarting?.options.map(
                (option, id) => (
                  <label
                    className="flex items-center gap-4 border rounded-sm px-6 py-2 cursor-pointer flex-1"
                    key={id}
                    onClick={(e) => {
                      setPhoneDetails({
                        ...phoneDetails,
                        phoneConditions: {
                          ...phoneDetails.phoneConditions,
                          phoneStarting:
                            e.target.value === "true" ? true : false,
                        },
                      });
                      // console.log(phoneDetails);
                    }}
                  >
                    <input type="radio" value={option} name="phoneStarting" />
                    <span className="cursor-pointer">
                      {option === true ? "Yes" : "No"}
                    </span>
                  </label>
                )
              )}
            </div>
          </div>
          {/* Check Con Ends */}
        </div>

        {/* Check 2 */}

        <div className="flex flex-col gap-4">
          <p className="poppins-bold">
            1. {phoneConditions?.one?.options?.makeAndReceiveCalls?.description}
          </p>
          <p className="">
            {phoneConditions?.one?.options?.makeAndReceiveCalls?.info}
          </p>

          {/* Check Con Starts */}
          <div className="mb-12 text-sm poppins-medium">
            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center w-3/5 poppins-bold">
              {phoneConditions?.one?.options?.makeAndReceiveCalls?.options.map(
                (option, id) => (
                  <label
                    className="flex items-center gap-4 border rounded-sm px-6 py-2 cursor-pointer flex-1"
                    key={id}
                    onClick={(e) =>
                      setPhoneDetails({
                        ...phoneDetails,
                        phoneConditions: {
                          ...phoneDetails.phoneConditions,
                          makeAndReceiveCalls:
                            e.target.value === "true" ? true : false,
                        },
                      })
                    }
                  >
                    <input
                      type="radio"
                      value={option}
                      name="makeAndReceiveCalls"
                    />
                    <span className="cursor-pointer">
                      {option === true ? "Yes" : "No"}
                    </span>
                  </label>
                )
              )}
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
            to={showNextBtn ? "/sell/device-detailsB" : "/sell/device-details"}
            className="w-28  text-white bg-[#0C0F4D] text-base rounded-2xl h-[50px] flex items-center justify-center"
          >
            Next
          </Link>
        </div>
      </section>
      <DeviceDetailsSummary />
    </main>
  );
};

export default DeviceDetails;

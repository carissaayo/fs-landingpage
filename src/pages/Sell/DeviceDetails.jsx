import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import phoneImg from "../../assets/images/phone_14_01.jpg";
import { useDeviceDetailsStore } from "../../store/sell/deviceDetailsStore";
import { useBrandsAndModelsStore } from "../../store/sell/brandsAndModelsStore";

const DeviceDetails = () => {
  const navigate = useNavigate();
  const phoneDetails = useDeviceDetailsStore((state) => state.phoneDetails);
  const setPhoneDetails = useDeviceDetailsStore(
    (state) => state.setPhoneDetails
  );
  const selectedModelList = useBrandsAndModelsStore(
    (state) => state.selectedModelList
  );

  const phoneConditions = useBrandsAndModelsStore(
    (state) => state.phoneConditions
  );
  console.log(phoneDetails);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => goToTop(), []);
  useEffect(() => {
    !phoneDetails.variant && navigate("/sell");
  }, []);

  return (
    <main className="w-full min-h-[90vh]  px-6  md:px-16  relative poppins-regular pt-36 pb-16 bg-white flex flex-col lg:flex-row  justify-between gap-12 lg:gap-6 text-sm md:text-base">
      <section className="block lg:hidden bg-white flex-1 rounded-md  box-shadow py-16 px-6">
        <div className="flex mb-4 px-3 gap-4 items-center">
          <img src={phoneImg} alt="" className="max-w-[80px] max-h-[80px]" />
          <p className="poppins-bold flex gap-1 ">
            {phoneDetails && phoneDetails?.model?.name}

            <span className="uppercase">
              (
              {
                phoneDetails?.model?.variants.filter(
                  (variant) => variant.id === phoneDetails.variant
                )[0].name
              }
              )
            </span>
          </p>
        </div>
        <hr className="mb-12" />
        <div className="poppins-bold">
          <h1 className="text-lg">Device Evaluation</h1>
          <ul className="pl-12 pt-4">
            {phoneDetails?.phoneConditions?.phoneStarting && (
              <li className="text-sm list-disc">
                {phoneDetails?.phoneConditions?.phoneStarting === "true"
                  ? "Can turn on/off"
                  : "Can't turn on/off"}
              </li>
            )}

            {phoneDetails?.phoneConditions?.makeAndReceiveCalls && (
              <li className="text-sm list-disc">
                {phoneDetails?.phoneConditions?.makeAndReceiveCalls === "true"
                  ? "Can make calls"
                  : "Can't  make calls"}
              </li>
            )}
          </ul>
        </div>
      </section>
      <section className="w-full bg-white  py-16  px-6 md:px-12 box-shadow flex-[2] rounded-md">
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
                    onClick={(e) =>
                      setPhoneDetails({
                        ...phoneDetails,
                        phoneConditions: {
                          ...phoneDetails.phoneConditions,
                          phoneStarting: e.target.value,
                        },
                      })
                    }
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
                          makeAndReceiveCalls: e.target.value,
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

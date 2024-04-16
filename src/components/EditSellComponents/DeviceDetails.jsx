import { useBrandsAndModelsStore } from "../../store/sell/brandsAndModelsStore";
import { Button } from "../ui/button";
import { useUpdateSaleStore } from "../../store/sell/updateSaleStore";

const DeviceDetails = () => {
  const phoneDetails = useUpdateSaleStore((state) => state.phoneDetails);
  const setPhoneDetails = useUpdateSaleStore((state) => state.setPhoneDetails);
  const setShowDetailsB = useUpdateSaleStore((state) => state.setShowDetailsB);
  const phoneConditions = useBrandsAndModelsStore(
    (state) => state.phoneConditions
  );
  console.log(phoneConditions);

  return (
    <section className="w-full bg-white  py-8  flex-[2] rounded-md details">
      <p className="poppins-bold text-lg text-center mb-8">
        {phoneConditions?.one?.description}
      </p>

      {/* Check 1 */}
      <div className="flex flex-col gap-4">
        <p className="poppins-bold">
          1. {phoneConditions?.one?.options?.phoneStarting?.description}
        </p>
        <p className="">{phoneConditions?.one?.options?.phoneStarting?.info}</p>

        {/* Check Con Starts */}
        <div className="mb-12 text-sm poppins-medium">
          <div className="flex flex-wrap md:flex-nowrap gap-4 items-center w-3/5 poppins-bold">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-4 w-full items-center"
            >
              <label
                className="flex items-center gap-4 border rounded-sm px-6 py-2 cursor-pointer flex-1"
                onClick={() =>
                  setPhoneDetails({
                    ...phoneDetails,
                    phoneCondition: {
                      ...phoneDetails.phoneCondition,
                      phoneStarting: true,
                    },
                  })
                }
              >
                <input
                  type="radio"
                  value={true}
                  checked={phoneDetails?.phoneCondition?.phoneStarting === true}
                  name="phoneStarting"
                />
                <span className="cursor-pointer">
                  {/* {option === true ? "Yes" : "No"} */}
                  Yes
                </span>
              </label>

              <label
                className="flex items-center gap-4 border rounded-sm px-6 py-2 cursor-pointer flex-1"
                onClick={() =>
                  setPhoneDetails({
                    ...phoneDetails,
                    phoneCondition: {
                      ...phoneDetails.phoneCondition,
                      phoneStarting: false,
                    },
                  })
                }
              >
                <input
                  type="radio"
                  value={false}
                  checked={
                    phoneDetails?.phoneCondition?.phoneStarting === false
                  }
                />
                <span className="cursor-pointer">
                  {/* {option === true ? "Yes" : "No"} */}
                  No
                </span>
              </label>
            </form>
            {/* ) */}
            {/* )} */}
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
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-4 w-full items-center"
            >
              <label
                className="flex items-center gap-4 border rounded-sm px-6 py-2 cursor-pointer flex-1"
                onClick={() => {
                  setPhoneDetails({
                    ...phoneDetails,
                    phoneCondition: {
                      ...phoneDetails.phoneCondition,
                      makeAndReceiveCalls: true,
                    },
                  });
                }}
              >
                <input
                  type="radio"
                  value={true}
                  checked={
                    phoneDetails?.phoneCondition?.makeAndReceiveCalls === true
                  }
                />
                <span className="cursor-pointer">Yes</span>
              </label>

              <label
                className="flex items-center gap-4 border rounded-sm px-6 py-2 cursor-pointer flex-1"
                onClick={() =>
                  setPhoneDetails({
                    ...phoneDetails,
                    phoneCondition: {
                      ...phoneDetails.phoneCondition,
                      makeAndReceiveCalls: false,
                    },
                  })
                }
              >
                <input
                  type="radio"
                  value={false}
                  checked={
                    phoneDetails?.phoneCondition?.makeAndReceiveCalls === false
                  }
                  name="makeAndReceiveCalls"
                />
                <span className="cursor-pointer">No</span>
              </label>
            </form>
            {/* ) */}
            {/* )} */}
          </div>
        </div>
        {/* Check Con Ends */}
      </div>
      <div className="w-full flex items-center justify-center">
        <Button
          onClick={() => setShowDetailsB(true)}
          className="w-28  text-white bg-[#0C0F4D] hover:bg-[#0C0F4D] text-base rounded-2xl h-[50px] flex items-center justify-center"
        >
          Continue
        </Button>
      </div>
      <hr className="mb-12 mt-4" />
    </section>
  );
};

export default DeviceDetails;

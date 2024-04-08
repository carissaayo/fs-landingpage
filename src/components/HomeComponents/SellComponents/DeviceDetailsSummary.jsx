import phoneImg from "../../../assets/images/phone_14_01.jpg";
import { useDeviceDetailsStore } from "../../../store/sell/deviceDetailsStore";
import { useBrandsAndModelsStore } from "../../../store/sell/brandsAndModelsStore";
const DeviceDetailsSummary = () => {
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

  const handlePhoneConditions = (phoneConditions = {}) => {};
  return (
    <section className=" bg-white flex-1 rounded-md  box-shadow py-16 px-6 summary">
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
          {/* Phone Starting */}
          {phoneDetails?.phoneConditions?.phoneStarting !== undefined && (
            <li className="text-sm list-disc mb-2">
              {phoneDetails?.phoneConditions?.phoneStarting === true
                ? "Can turn on/off"
                : "Can't turn on/off"}
            </li>
          )}

          {/* makeAndReceiveCalls  */}
          {phoneDetails?.phoneConditions?.makeAndReceiveCalls !== undefined && (
            <li className="text-sm list-disc mb-2">
              {phoneDetails?.phoneConditions?.makeAndReceiveCalls === true
                ? "Can make calls"
                : "Can't  make calls"}
            </li>
          )}

          {/* faultyVolumeButtons  */}
          {phoneDetails?.phoneConditions?.faultyVolumeButtons === true && (
            <li className="text-sm list-disc mb-2">
              Volume buttons not working
            </li>
          )}

          {/* faultyFingerPrint  */}
          {phoneDetails?.phoneConditions?.faultyFingerPrint === true && (
            <li className="text-sm list-disc mb-2">
              Fingerprint scanner not working
            </li>
          )}

          {/* missingSimCardTray  */}
          {phoneDetails?.phoneConditions?.missingSimCardTray === true && (
            <li className="text-sm list-disc mb-2">Simcard tray missing</li>
          )}

          {/* faultySpeakers  */}
          {phoneDetails?.phoneConditions?.faultySpeakers === true && (
            <li className="text-sm list-disc mb-2">Speaker not working</li>
          )}

          {/* faultyEarpiece  */}
          {phoneDetails?.phoneConditions?.faultyEarpiece === true && (
            <li className="text-sm list-disc mb-2">Earpiece not working</li>
          )}

          {/* faultyPowerButton  */}
          {phoneDetails?.phoneConditions?.faultyPowerButton === true && (
            <li className="text-sm list-disc mb-2">Power button not working</li>
          )}

          {/* faultyChargingPort  */}
          {phoneDetails?.phoneConditions?.faultyChargingPort === true && (
            <li className="text-sm list-disc mb-2">
              Charging port not working
            </li>
          )}
          {/* faultyBackCamera  */}
          {phoneDetails?.phoneConditions?.faultyBackCamera === true && (
            <li className="text-sm list-disc mb-2">Main camera not working</li>
          )}

          {/* faultyFrontCamera  */}
          {phoneDetails?.phoneConditions?.faultyFrontCamera === true && (
            <li className="text-sm list-disc mb-2">
              Selfie camera not working
            </li>
          )}

          {/* scratchedScreen  */}
          {phoneDetails?.phoneConditions?.scratchedScreen === true && (
            <li className="text-sm list-disc mb-2">Screen is scratched</li>
          )}

          {/* spottedScreen */}
          {phoneDetails?.phoneConditions?.spottedScreen === true && (
            <li className="text-sm list-disc mb-2">
              Screen has spots or lines
            </li>
          )}

          {/* brokenScreen  */}
          {phoneDetails?.phoneConditions?.brokenScreen === true && (
            <li className="text-sm list-disc mb-2">Screen is broken</li>
          )}

          {/* brokenCameraGlass  */}
          {phoneDetails?.phoneConditions?.brokenCameraGlass === true && (
            <li className="text-sm list-disc mb-2">Camera glass broken</li>
          )}

          {/* damagedBackCoverGlass */}
          {phoneDetails?.phoneConditions?.damagedBackCoverGlass === true && (
            <li className="text-sm list-disc mb-2">
              Back cover/glass broken or scratched
            </li>
          )}

          {/* brokenPhoneBody  */}
          {phoneDetails?.phoneConditions?.brokenPhoneBody === true && (
            <li className="text-sm list-disc mb-2">
              Phone{"'"}s body dented/broken
            </li>
          )}

          {/* scratchedPhoneBody */}
          {phoneDetails?.phoneConditions?.scratchedPhoneBody === true && (
            <li className="text-sm list-disc mb-2">
              Phone{"'"}s body is scratched
            </li>
          )}

          {/* originalCharger  */}
          {phoneDetails?.phoneConditions?.originalCharger === true && (
            <li className="text-sm list-disc mb-2">
              Original charger plug of device present
            </li>
          )}

          {/* originalChargerCable  */}
          {phoneDetails?.phoneConditions?.originalChargerCable === true && (
            <li className="text-sm list-disc mb-2">
              {" "}
              Original charger cable of device present
            </li>
          )}

          {/*  receipt  */}
          {phoneDetails?.phoneConditions?.receipt === true && (
            <li className="text-sm list-disc mb-2">
              receipt with the same IMEI present
            </li>
          )}

          {/* originalBox  */}
          {phoneDetails?.phoneConditions?.originalBox === true && (
            <li className="text-sm list-disc mb-2">Original Box present</li>
          )}

          {/* brandWarranty */}
          {phoneDetails?.phoneConditions?.brandWarranty === true && (
            <li className="text-sm list-disc mb-2">
              Phone under brand warranty
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default DeviceDetailsSummary;

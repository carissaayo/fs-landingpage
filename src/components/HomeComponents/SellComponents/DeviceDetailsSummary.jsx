import phoneImg from "../../../assets/images/phone_14_01.jpg";
import { useDeviceDetailsStore } from "../../../store/sell/deviceDetailsStore";

const DeviceDetailsSummary = () => {
  const phoneDetails = useDeviceDetailsStore((state) => state.phoneDetails);

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
                (variant) => variant.id === phoneDetails.variantId
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
          {phoneDetails?.phoneCondition?.phoneStarting !== undefined && (
            <li className="text-sm list-disc mb-2">
              {phoneDetails?.phoneCondition?.phoneStarting === true
                ? "Can turn on/off"
                : "Can't turn on/off"}
            </li>
          )}

          {/* makeAndReceiveCalls  */}
          {phoneDetails?.phoneCondition?.makeAndReceiveCalls !== undefined && (
            <li className="text-sm list-disc mb-2">
              {phoneDetails?.phoneCondition?.makeAndReceiveCalls === true
                ? "Can make calls"
                : "Can't  make calls"}
            </li>
          )}

          {/* faultyVolumeButtons  */}
          {phoneDetails?.phoneCondition?.faultyVolumeButtons === true && (
            <li className="text-sm list-disc mb-2">
              Volume buttons not working
            </li>
          )}

          {/* faultyFingerPrint  */}
          {phoneDetails?.phoneCondition?.faultyFingerPrint === true && (
            <li className="text-sm list-disc mb-2">
              Fingerprint scanner not working
            </li>
          )}

          {/* missingSimCardTray  */}
          {phoneDetails?.phoneCondition?.missingSimCardTray === true && (
            <li className="text-sm list-disc mb-2">Simcard tray missing</li>
          )}

          {/* faultySpeakers  */}
          {phoneDetails?.phoneCondition?.faultySpeakers === true && (
            <li className="text-sm list-disc mb-2">Speaker not working</li>
          )}

          {/* faultyEarpiece  */}
          {phoneDetails?.phoneCondition?.faultyEarpiece === true && (
            <li className="text-sm list-disc mb-2">Earpiece not working</li>
          )}

          {/* faultyPowerButton  */}
          {phoneDetails?.phoneCondition?.faultyPowerButton === true && (
            <li className="text-sm list-disc mb-2">Power button not working</li>
          )}

          {/* faultyChargingPort  */}
          {phoneDetails?.phoneCondition?.faultyChargingPort === true && (
            <li className="text-sm list-disc mb-2">
              Charging port not working
            </li>
          )}
          {/* faultyBackCamera  */}
          {phoneDetails?.phoneCondition?.faultyBackCamera === true && (
            <li className="text-sm list-disc mb-2">Main camera not working</li>
          )}

          {/* faultyFrontCamera  */}
          {phoneDetails?.phoneCondition?.faultyFrontCamera === true && (
            <li className="text-sm list-disc mb-2">
              Selfie camera not working
            </li>
          )}

          {/* scratchedScreen  */}
          {phoneDetails?.phoneCondition?.scratchedScreen === true && (
            <li className="text-sm list-disc mb-2">Screen is scratched</li>
          )}

          {/* spottedScreen */}
          {phoneDetails?.phoneCondition?.spottedScreen === true && (
            <li className="text-sm list-disc mb-2">
              Screen has spots or lines
            </li>
          )}

          {/* brokenScreen  */}
          {phoneDetails?.phoneCondition?.brokenScreen === true && (
            <li className="text-sm list-disc mb-2">Screen is broken</li>
          )}

          {/* brokenCameraGlass  */}
          {phoneDetails?.phoneCondition?.brokenCameraGlass === true && (
            <li className="text-sm list-disc mb-2">Camera glass broken</li>
          )}

          {/* damagedBackCoverGlass */}
          {phoneDetails?.phoneCondition?.damagedBackCoverGlass === true && (
            <li className="text-sm list-disc mb-2">
              Back cover/glass broken or scratched
            </li>
          )}

          {/* brokenPhoneBody  */}
          {phoneDetails?.phoneCondition?.brokenPhoneBody === true && (
            <li className="text-sm list-disc mb-2">
              Phone{"'"}s body dented/broken
            </li>
          )}

          {/* scratchedPhoneBody */}
          {phoneDetails?.phoneCondition?.scratchedPhoneBody === true && (
            <li className="text-sm list-disc mb-2">
              Phone{"'"}s body is scratched
            </li>
          )}

          {/* originalCharger  */}
          {phoneDetails?.phoneCondition?.originalCharger === true && (
            <li className="text-sm list-disc mb-2">
              Original charger plug of device present
            </li>
          )}

          {/* originalChargerCable  */}
          {phoneDetails?.phoneCondition?.originalChargerCable === true && (
            <li className="text-sm list-disc mb-2">
              {" "}
              Original charger cable of device present
            </li>
          )}

          {/*  receipt  */}
          {phoneDetails?.phoneCondition?.receipt === true && (
            <li className="text-sm list-disc mb-2">
              receipt with the same IMEI present
            </li>
          )}

          {/* originalBox  */}
          {phoneDetails?.phoneCondition?.originalBox === true && (
            <li className="text-sm list-disc mb-2">Original Box present</li>
          )}

          {/* brandWarranty */}
          {phoneDetails?.phoneCondition?.brandWarranty === true && (
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

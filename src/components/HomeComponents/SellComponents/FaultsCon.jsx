import volumeImg from "../../../assets/images/volume.svg";
import fingerprintImg from "../../../assets/images/fingerprint.svg";
import simcardImg from "../../../assets/images/simcard-tray.svg";
import speakerImg from "../../../assets/images/speaker.svg";
import earpieceImg from "../../../assets/images/earpiece.svg";
import powerImg from "../../../assets/images/power-buttons.svg";
import chargingImg from "../../../assets/images/charging-port.svg";
import cameraImg from "../../../assets/images/main-camera.svg";
import selfieImg from "../../../assets/images/selfie-camera.svg";

import { useEffect, useState } from "react";
import { useDeviceDetailsStore } from "../../../store/sell/deviceDetailsStore";

const Fault = ({ image, text, name }) => {
  const phoneDetails = useDeviceDetailsStore((state) => state.phoneDetails);
  const setPhoneDetails = useDeviceDetailsStore(
    (state) => state.setPhoneDetails
  );
  const [selected, setSelected] = useState(phoneDetails.phoneCondition[name]);

  const handleClick = () => {
    setSelected((prevValue) => !prevValue);
  };
  useEffect(() => {
    setPhoneDetails({
      ...phoneDetails,
      phoneCondition: {
        ...phoneDetails.phoneCondition,
        [name]: selected,
      },
    });
  }, [selected]);
  return (
    <div
      className={`${
        selected && "border-[#0C0F4D]"
      } border  cursor-pointer border-gray-400 rounded-lg`}
      onClick={handleClick}
    >
      <img src={image} alt="" className="md:min-h-[100px] mb-4" />
      <p
        className={`text-sm p-4 min-h-[112px] flex items-center justify-center  ${
          selected && "bg-[#0C0F4D] text-white rounded-b-sm"
        }`}
      >
        {text}
      </p>
    </div>
  );
};
const FaultsCon = ({ phoneConditions }) => {
  const phoneConditionsOptions = phoneConditions?.two?.options;
  return (
    <section className="grid grid-cols-2  md:grid-cols-4 gap-4 md:gap-2 xl:gap-4 mb-8">
      <Fault
        image={volumeImg}
        text={phoneConditionsOptions?.faultyVolumeButtons?.description}
        name="faultyVolumeButtons"
      />
      <Fault
        image={fingerprintImg}
        text={phoneConditionsOptions?.faultyFingerPrint?.description}
        name="faultyFingerPrint"
      />
      <Fault
        image={simcardImg}
        text={phoneConditionsOptions?.missingSimCardTray?.description}
        name="missingSimCardTray"
      />
      <Fault
        image={speakerImg}
        text={phoneConditionsOptions?.faultySpeakers?.description}
        name="faultySpeakers"
      />
      <Fault
        image={earpieceImg}
        text={phoneConditionsOptions?.faultyEarpiece?.description}
        name="faultyEarpiece"
      />
      <Fault
        image={powerImg}
        text={phoneConditionsOptions?.faultyPowerButton?.description}
        name="faultyPowerButton"
      />
      <Fault
        image={chargingImg}
        text={phoneConditionsOptions?.faultyChargingPort?.description}
        name="faultyChargingPort"
      />
      <Fault
        image={selfieImg}
        text={phoneConditionsOptions?.faultyFrontCamera?.description}
        name="faultyFrontCamera"
      />
      <Fault
        image={cameraImg}
        text={phoneConditionsOptions?.faultyBackCamera?.description}
        name="faultyBackCamera"
      />
    </section>
  );
};

export default FaultsCon;

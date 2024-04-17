import { useEffect, useState } from "react";

import { useDeviceDetailsStore } from "../../../store/sell/deviceDetailsStore";

import scratchImg from "../../../assets/images/scratch.svg";
import screenlineImg from "../../../assets/images/screenline.svg";
import brokenscreenImg from "../../../assets/images/brokenscreen.svg";
import brokenglassImg from "../../../assets/images/glassbroken.svg";
import backcoverImg from "../../../assets/images/backcover.png";
import dentedImg from "../../../assets/images/dented.svg";
import bodyscratchedImg from "../../../assets/images/bodyscratched.svg";

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
      } border  cursor-pointer border-gray-400 rounded-lg  `}
      onClick={handleClick}
    >
      <img src={image} alt="" className="md:min-h-[100px] mb-4" />
      <p
        className={`text-sm p-4 min-h-[112px]  flex items-center justify-center ${
          selected && "bg-[#0C0F4D] text-white rounded-b-sm"
        }`}
      >
        {text}
      </p>
    </div>
  );
};
const BodyCon = ({ phoneConditions }) => {
  const phoneConditionsOptions = phoneConditions?.three?.options;
  return (
    <section className="grid grid-cols-2  md:grid-cols-4 gap-4 md:gap-2 xl:gap-4 mb-8">
      <Fault
        image={scratchImg}
        text={phoneConditionsOptions?.scratchedScreen?.description}
        name="scratchedScreen"
      />
      <Fault
        image={screenlineImg}
        text={phoneConditionsOptions?.brokenScreen?.description}
        name="brokenScreen"
      />
      <Fault
        image={brokenscreenImg}
        text={phoneConditionsOptions?.brokenCameraGlass?.description}
        name="brokenCameraGlass"
      />
      <Fault
        image={brokenglassImg}
        text={phoneConditionsOptions?.damagedBackCoverGlass?.description}
        name="damagedBackCoverGlass"
      />
      <Fault
        image={backcoverImg}
        text={phoneConditionsOptions?.damagedBackCoverGlass?.description}
        name="damagedBackCoverGlass"
      />
      <Fault
        image={dentedImg}
        text={phoneConditionsOptions?.brokenPhoneBody?.description}
        name="brokenPhoneBody"
      />
      <Fault
        image={bodyscratchedImg}
        text={phoneConditionsOptions?.scratchedPhoneBody?.description}
        name="scratchedPhoneBody"
      />
    </section>
  );
};

export default BodyCon;

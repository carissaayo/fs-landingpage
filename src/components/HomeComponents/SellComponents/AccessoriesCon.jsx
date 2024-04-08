import chargerImg from "../../../assets/images/charger.svg";
import cordImg from "../../../assets/images/cord.svg";
import receiptImg from "../../../assets/images/receipt.svg";
import boxImg from "../../../assets/images/box.svg";
import warrantyImg from "../../../assets/images/warranty.svg";
import { useEffect, useState } from "react";
import { useDeviceDetailsStore } from "../../../store/sell/deviceDetailsStore";

const Fault = ({ image, text, name }) => {
  const [selected, setSelected] = useState(false);
  const setOption = useDeviceDetailsStore((state) => state.setOption);
  const phoneDetails = useDeviceDetailsStore((state) => state.phoneDetails);
  const setPhoneDetails = useDeviceDetailsStore(
    (state) => state.setPhoneDetails
  );

  const handleClick = () => {
    setSelected((prevValue) => !prevValue);
    setOption(selected);
  };
  useEffect(() => {
    setPhoneDetails({
      ...phoneDetails,
      phoneConditions: {
        ...phoneDetails.phoneConditions,
        [name]: selected,
      },
    });
    console.log(phoneDetails);
    console.log(selected);
  }, [selected]);
  return (
    <div
      className={`${
        selected && "border-[#0C0F4D]"
      } border  cursor-pointer border-gray-400 rounded-lg `}
      onClick={handleClick}
    >
      <img src={image} alt="" className=" md:min-h-[100px] mb-4" />
      <p
        className={`text-sm p-4 min-h-[112px] ${
          selected && "bg-[#0C0F4D] text-white rounded-b-sm"
        }`}
      >
        {text}
      </p>
    </div>
  );
};
const AccessoriesCon = ({ phoneConditions }) => {
  const phoneConditionsOptions = phoneConditions?.four?.options;

  return (
    <section className="grid grid-cols-2  md:grid-cols-4 gap-4 md:gap-2 xl:gap-4 mb-8">
      <Fault
        image={chargerImg}
        text={phoneConditionsOptions?.originalCharger?.description}
        name="originalCharger"
      />
      <Fault
        image={cordImg}
        text={phoneConditionsOptions?.originalChargerCable?.description}
        name="originalChargerCable"
      />
      <Fault
        image={receiptImg}
        text={phoneConditionsOptions?.receipt?.description}
        name="receipt"
      />
      <Fault
        image={boxImg}
        text={phoneConditionsOptions?.originalBox?.description}
        name="originalBox"
      />
      <Fault
        image={warrantyImg}
        text={phoneConditionsOptions?.brandWarranty?.description}
        name="brandWarranty"
      />
    </section>
  );
};

export default AccessoriesCon;

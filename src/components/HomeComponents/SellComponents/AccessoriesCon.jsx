import chargerImg from "../../../assets/images/charger.svg";
import cordImg from "../../../assets/images/cord.svg";
import receiptImg from "../../../assets/images/receipt.svg";
import boxImg from "../../../assets/images/box.svg";
import warrantyImg from "../../../assets/images/warranty.svg";

const Fault = ({ image, text }) => {
  return (
    <div className="border p-4 cursor-pointer">
      <img src={image} alt="" className="max-h-[100px] mb-4" />
      <p className="text-sm">{text}</p>
    </div>
  );
};
const AccessoriesCon = () => {
  return (
    <section className="grid grid-cols-2  md:grid-cols-4 gap-4 md:gap-2 xl:gap-4 mb-8">
      <Fault
        image={chargerImg}
        text="Original charger plug of device present"
      />
      <Fault image={cordImg} text="Original charger cable of device present" />
      <Fault image={receiptImg} text="Receipt with the same IMEI present" />
      <Fault image={boxImg} text="Original Box present" />
      <Fault image={warrantyImg} text="Phone under brand warranty" />
    </section>
  );
};

export default AccessoriesCon;

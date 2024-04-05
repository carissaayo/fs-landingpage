import volumeImg from "../../../assets/images/volume.svg";
import fingerprintImg from "../../../assets/images/fingerprint.svg";
import simcardImg from "../../../assets/images/simcard-tray.svg";
import speakerImg from "../../../assets/images/speaker.svg";
import earpieceImg from "../../../assets/images/earpiece.svg";
import powerImg from "../../../assets/images/power-buttons.svg";
import chargingImg from "../../../assets/images/charging-port.svg";
import cameraImg from "../../../assets/images/main-camera.svg";
import selfieImg from "../../../assets/images/selfie-camera.svg";
const Fault = ({ image, text }) => {
  return (
    <div className="border p-4 cursor-pointer">
      <img src={image} alt="" className="max-h-[100px] mb-4" />
      <p className="text-sm">{text}</p>
    </div>
  );
};
const FaultsCon = () => {
  return (
    <section className="grid grid-cols-2  md:grid-cols-4 gap-4 md:gap-2 xl:gap-4 mb-8">
      <Fault image={volumeImg} text="Volume buttons not working" />
      <Fault image={fingerprintImg} text="Fingerprint scanner not working" />
      <Fault image={simcardImg} text="Simcard Tray missing" />
      <Fault image={speakerImg} text="Speakers not working" />
      <Fault image={earpieceImg} text="Earpiece not working" />
      <Fault image={powerImg} text="Power button not working" />
      <Fault image={chargingImg} text="Charging port not working" />
      <Fault image={cameraImg} text="Main  camera not working" />
      <Fault image={selfieImg} text="Selfie camera not working" />
    </section>
  );
};

export default FaultsCon;

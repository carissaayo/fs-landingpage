import scratchImg from "../../../assets/images/scratch.svg";
import screenlineImg from "../../../assets/images/screenline.svg";
import brokenscreenImg from "../../../assets/images/brokenscreen.svg";
import brokenglassImg from "../../../assets/images/glassbroken.svg";
import backcoverImg from "../../../assets/images/backcover.png";
import dentedImg from "../../../assets/images/dented.svg";
import bodyscratchedImg from "../../../assets/images/bodyscratched.svg";

const Fault = ({ image, text }) => {
  return (
    <div className="border p-4 cursor-pointer">
      <img src={image} alt="" className="max-h-[100px] mb-4" />
      <p className="text-sm">{text}</p>
    </div>
  );
};
const BodyCon = () => {
  return (
    <section className="grid grid-cols-2  md:grid-cols-4 gap-4 md:gap-2 xl:gap-4 mb-8">
      <Fault image={scratchImg} text="Screen is scratched" />
      <Fault image={screenlineImg} text="Screen has spots or lines" />
      <Fault image={brokenscreenImg} text="Screen is broken" />
      <Fault image={brokenglassImg} text="Camera glass broken" />
      <Fault image={backcoverImg} text="Bank cover/glass broken or scratched" />
      <Fault image={dentedImg} text="Phone's body dented/broken" />
      <Fault image={bodyscratchedImg} text="Phone's body is scratched" />
    </section>
  );
};

export default BodyCon;

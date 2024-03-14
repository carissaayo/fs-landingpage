import { Star } from "lucide-react";
import { useGeneralStore } from "../../store/generalStore";

const AboutCard = ({ content, index }) => {
  const teamIndex = useGeneralStore((state) => state.teamIndex);
  return (
    <div
      className={`bg-[#00FFFC] bg-opacity-70 px-6 py-8 flex flex-col gap-4 pb-20 rounded-xl h-[280px] ${
        teamIndex === index ? "" : "absolute bottom-[100%] z-[-99]"
      }`}
    >
      <div className="bg-white flex items-center justify-center w-[30px] h-[30px] rounded-full">
        <Star className="h-6 w-6 text-[#00FFFC]" />
      </div>
      <p className="">{content}</p>
    </div>
  );
};

export default AboutCard;

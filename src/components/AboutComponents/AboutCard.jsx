import { Star } from "lucide-react";

const AboutCard = ({ content }) => {
  return (
    <div className="bg-[#00FFFC] bg-opacity-70 px-6 py-8 flex flex-col gap-4 pb-20 rounded-xl flex-[2]">
      <div className="bg-white flex items-center justify-center w-[30px] h-[30px] rounded-full">
        <Star className="h-6 w-6 text-[#00FFFC]" />
      </div>
      <p className="">{content}</p>
    </div>
  );
};

export default AboutCard;

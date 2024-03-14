import { Star } from "lucide-react";
import Carousel from "./Carousel";
import { useGeneralStore } from "../../store/generalStore";

const Team = () => {
  const setTeamIndex = useGeneralStore((state) => state.setTeamIndex);
  return (
    <section className="w-full h-[500px] bg-[#0E0C4D] flex items-center justify-center">
      <div className="w-[60%] h-[300px] flex justify-between  gap-4 text-white">
        <div className="flex flex-col flex-1  gap-8">
          <p className="text-2xl poppins-medium">
            Teams <span className="text-[52px] text-[#00FFFC]">.</span>
          </p>

          <p
            className="text-2xl poppins-medium cursor-pointer"
            onClick={() => setTeamIndex(1)}
          >
            <span className="text-[12px] text-[#00FFFC] ">01</span> Sales
          </p>
          <p
            className="text-2xl poppins-medium cursor-pointer"
            onClick={() => setTeamIndex(2)}
          >
            <span className="text-[12px] text-[#00FFFC] ">02</span> Business
          </p>
          <p
            className="text-2xl poppins-medium cursor-pointer"
            onClick={() => setTeamIndex(3)}
          >
            <span className="text-[12px] text-[#00FFFC] ">03</span> Operations
          </p>
          <p
            className="text-2xl poppins-medium cursor-pointer"
            onClick={() => setTeamIndex(4)}
          >
            <span className="text-[12px] text-[#00FFFC] ">04</span> Procurement
          </p>
        </div>
        <Carousel />
      </div>
    </section>
  );
};

export default Team;

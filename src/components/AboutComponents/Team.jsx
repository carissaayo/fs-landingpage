import { Star } from "lucide-react";
import Carousel from "./Carousel";
import { useGeneralStore } from "../../store/generalStore";

const Team = () => {
  const setTeamIndex = useGeneralStore((state) => state.setTeamIndex);
  return (
    <section className="w-full  h-[830px] xs:h-[600px]  sm:h-[500px] bg-[#0E0C4D] flex  sm:items-center justify-center pt-12 ">
      <div className=" w-[90%] xs:w-[80%] xl:w-[60%] h-[300px] flex flex-col sm:flex-row justify-between gap-12 md:gap-4 text-white">
        <div className="flex flex-col md:flex-1  gap-8 text-center sm:text-left">
          <p className=" poppins-medium">
            Teams <span className="text-[52px] text-[#00FFFC]">.</span>
          </p>
          <div className="flex flex-col xs:flex-row sm:flex-col gap-6 text-xl xs:text-base sm:text-2xl">
            <p
              className=" poppins-medium cursor-pointer "
              onClick={() => setTeamIndex(1)}
            >
              <span className="text-[12px] text-[#00FFFC] ">01</span> Sales
            </p>
            <p
              className=" poppins-medium cursor-pointer "
              onClick={() => setTeamIndex(2)}
            >
              <span className="text-[12px] text-[#00FFFC] ">02</span> Business
            </p>
            <p
              className=" poppins-medium cursor-pointer "
              onClick={() => setTeamIndex(3)}
            >
              <span className="text-[12px] text-[#00FFFC] ">03</span> Operations
            </p>
            <p
              className=" poppins-medium cursor-pointer "
              onClick={() => setTeamIndex(4)}
            >
              <span className="text-[12px] text-[#00FFFC] ">04</span>{" "}
              Procurement
            </p>
          </div>
        </div>
        <Carousel />
      </div>
    </section>
  );
};

export default Team;

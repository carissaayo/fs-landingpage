import TeamCon from "./TeamCon";
import BusinessCon from "./BusinessCon";
import OperationsCon from "./OperationsCon";
import ProcurementCon from "./ProcurementCon";

const Team = () => {
  return (
    <section className="w-full  bg-[#0E0C4D] flex  ,md:items-center justify-center py-16 ">
      <div className=" w-[90%] md:w-[80%] flex flex-col md:flex-row justify-between gap-12 md:gap-4 text-white">
        <div className="flex flex-col md:flex-1  gap-8 text-center md:text-left">
          <p className=" poppins-medium text-xl">
            Teams <span className="text-[52px] text-[#00FFFC]">.</span>
          </p>
          <div className="flex flex-col gap-6  md:text-2xl">
            <div className=" w-full flex flex-col md:flex-row justify-betwen items-center mb-12 gap-6">
              <p className=" poppins-medium cursor-pointer flex-1 ">
                <span className="text-[12px] text-[#00FFFC] ">01</span> Sales
              </p>
              <TeamCon />
            </div>
            <div className="w-full flex flex-col md:flex-row justify-betwen items-center mb-12 gap-6 md:gap-0">
              <p className=" poppins-medium cursor-pointer flex-1">
                <span className="text-[12px] text-[#00FFFC] ">02</span> Business
              </p>
              <BusinessCon />
            </div>
            <div className="w-full flex flex-col md:flex-row justify-betwen items-center mb-12 gap-6 md:gap-0">
              <p className=" poppins-medium cursor-pointer flex-1">
                <span className="text-[12px] text-[#00FFFC]">03</span>{" "}
                Operations
              </p>
              <OperationsCon />
            </div>
            <div className="w-full flex flex-col md:flex-row justify-betwen items-center mb-12 gap-6 md:gap-0">
              <p className=" poppins-medium cursor-pointer flex-1">
                <span className="text-[12px] text-[#00FFFC] ">04</span>{" "}
                Procurement
              </p>
              <ProcurementCon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

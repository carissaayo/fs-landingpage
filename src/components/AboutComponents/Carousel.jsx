import TeamCon from "./TeamCon";
import BusinessCon from "./BusinessCon";
import OperationsCon from "./OperationsCon";
import ProcurementCon from "./ProcurementCon";

const Carousel = () => {
  return (
    <div className="flex-1 flex flex-col gap-16 pt-8">
      <TeamCon />
      <BusinessCon />
      <OperationsCon />
      <ProcurementCon />
    </div>
  );
};

export default Carousel;

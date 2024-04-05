import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div
      className="p-2 px-4 flex gap-2 items-center  w-[max-content] mb-6 rounded-sm cursor-pointer bg-[#0E0C4D] text-white"
      onClick={goBack}
    >
      <MoveLeft className="h-6 w-6" />
      <p className="">Go Back</p>
    </div>
  );
};

export default GoBack;

import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div
      className="p-2 flex gap-2 items-center bg-gray-200 w-[max-content] mt-2 rounded-sm cursor-pointer"
      onClick={goBack}
    >
      <MoveLeft className="h-6 w-6" />
      <p className="">Go Back</p>
    </div>
  );
};

export default GoBack;

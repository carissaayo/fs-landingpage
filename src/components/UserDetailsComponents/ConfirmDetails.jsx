import { Link, useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

const ConfirmDetails = () => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate("/buy/checkout/summary");
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="bg-[#0C0F4D] hover:bg-[#0C0F4D] rounded-2xl w-28 h-[50px] flex items-center justify-center text-white">
          Next
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[90%] md:w-full">
        <AlertDialogHeader>
          <AlertDialogTitle className="poppins-medium text-center text-lg">
            Are you sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-base">
            Please check the provided information before proceeding
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="w-full flex   items-center justify-between flex-row gap-4">
          <AlertDialogCancel className=" w-1/2 md:flex-1 mt-0">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className=" w-1/2 md:flex-1 bg-[#0C0F4D] hover:bg-[#0C0F4D]"
            onClick={goTo}
          >
            {/* <Link to="/buy/checkout/summary" className="w-full"> */}
            Continue
            {/* </Link> */}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmDetails;

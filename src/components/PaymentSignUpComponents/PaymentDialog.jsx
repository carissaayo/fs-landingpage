import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import PaymentSignupForm from "./PaymentSignupForm";

const PaymentDialog = ({ title }) => {
  return (
    <Dialog className="w-full">
      <DialogTrigger className="w-full">
        {/* Submit Btn */}
        <div className="w-full ">
          <Button className="bg-[#0E0C4D] border-[#B1B1B1] hover:bg-[#0E0C4D] hover:border-[#B1B1B1] w-full py-8 text-lg text-white">
            {title}
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[90%] sm:w-full min-w-[60%] max-h-[90%]  overflow-y-scroll md:overflow-y-hidden">
        <DialogHeader className="poppins-medium ">
          <DialogTitle className="mb-2">
            Sign up to apply for this device
          </DialogTitle>
          <DialogDescription className="flex items-center gap-2">
            Already have an account?{" "}
            <Link to="/login" className="text-[#0E0C4D]">
              Log In
            </Link>
          </DialogDescription>
        </DialogHeader>
        <PaymentSignupForm />
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;

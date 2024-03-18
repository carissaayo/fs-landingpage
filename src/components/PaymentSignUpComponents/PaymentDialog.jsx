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
      <DialogContent className="w-[90%] sm:w-full min-w-[60%] max-h-[90%]  overflow-scroll">
        <DialogHeader className="poppins-medium ">
          <DialogTitle className="mb-2">
            Sign up to apply for this device
          </DialogTitle>
          <DialogDescription>
            Already have an account?{" "}
            <span className="text-[#0E0C4D]">Log In</span>
          </DialogDescription>
        </DialogHeader>
        {/* <ScrollArea className=""> */}
        <PaymentSignupForm />
        {/* <ScrollBar orientation="vertical" /> */}
        {/* </ScrollArea> */}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;

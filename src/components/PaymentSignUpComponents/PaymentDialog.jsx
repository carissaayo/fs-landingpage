import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import PaymentSignupForm from "./PaymentSignupForm";

const PaymentDialog = () => {
  return (
    <Dialog className="w-full">
      <DialogTrigger className="w-full">
        {/* Submit Btn */}
        <div className="w-full ">
          <Button className="bg-[#0E0C4D] border-[#B1B1B1] hover:bg-[#0E0C4D] hover:border-[#B1B1B1] w-full py-8 text-lg">
            Next
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="min-w-[60%] max-h-[80%] ">
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

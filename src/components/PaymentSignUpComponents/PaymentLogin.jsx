import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import logoImg from "../../assets/images/FairShop New Logo PNG 4 1.png";
import PaymentLoginForm from "./PaymentLoginForm";

const PaymentLogin = () => {
  return (
    <Dialog className="w-full">
      <DialogTrigger className="w-full">
        <p className="text-center mt-6">
          Already have an account?{" "}
          <span className="text-[#0E0C4D] poppins-medium">Login</span>
        </p>
      </DialogTrigger>
      <DialogContent className="w-[90%] md:w-full min-w-[40%] max-h-[90%] ">
        <DialogHeader className="poppins-medium w-full">
          <img src={logoImg} alt="" className="w-52 mx-auto" />
          <DialogTitle className="mb-6 text-center">Welcome Back</DialogTitle>
          <DialogDescription className="text-center  text-sm">
            <p className="">Glad to see you again 🖐</p>
            <p className="">Login to your account below</p>
          </DialogDescription>
        </DialogHeader>
        <PaymentLoginForm />

        <Link
          to="/buy/checkout/formA"
          className=" flex justify-center items-center  bg-[#0E0C4D] py-2 text-lg text-white rounded-lg"
        >
          Login
        </Link>

        <p className="text-center ">
          Don&apos;t have an account?{" "}
          <span className="text-[#0E0C4D] poppins-medium">
            Sign up for Free
          </span>
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentLogin;

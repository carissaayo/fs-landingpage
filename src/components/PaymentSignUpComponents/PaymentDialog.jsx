import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import PaymentSignupForm from "./PaymentSignupForm";

import logoImg from "../../assets/images/FairShop New Logo PNG 4 1.png";

import { useAuthStore } from "../../store/authStore";
import PaymentLoginForm from "./PaymentLoginForm";

const PaymentDialog = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  const setIsLogin = useAuthStore((state) => state.setIsLogin);

  return (
    <Dialog className="w-full">
      <DialogTrigger className="w-full">
        <div className="w-full ">
          <Button className="bg-[#0E0C4D] border-[#B1B1B1] hover:bg-[#0E0C4D] hover:border-[#B1B1B1] w-full py-8 text-lg text-white">
            Next
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent
        className={` ${
          isLogin
            ? " min-w-[40%] "
            : " min-w-[60%] overflow-y-scroll md:overflow-y-hidden"
        } w-[90%] md:w-full max-h-[90%]`}
      >
        <DialogHeader className="poppins-medium ">
          <img src={logoImg} alt="" className="w-52" />
          {isLogin ? (
            <>
              <DialogTitle className="mb-6 text-center">
                Welcome Back
              </DialogTitle>
              <DialogDescription className="text-center  text-sm">
                <p className="">Glad to see you again 🖐</p>
                <p className="">Login to your account below</p>
              </DialogDescription>
            </>
          ) : (
            <>
              <DialogTitle className="mb-2 text-left">Sign up</DialogTitle>
              <DialogDescription className="flex items-center gap-2">
                Enter your details below to create your account and get started.
              </DialogDescription>
            </>
          )}
        </DialogHeader>
        {!isLogin ? (
          <>
            <PaymentSignupForm />
            <div className=" grid grid-cols-2 gap-x-8 ">
              <DialogClose asChild>
                <button
                  type="button"
                  className="bg-white text-black border  py-2 text-lg flex items-center justify-center  rounded-lg"
                >
                  Cancel
                </button>
              </DialogClose>
              <Link
                to="/buy/checkout/formA"
                className=" flex justify-center items-center  bg-[#0E0C4D] py-2 text-lg text-white rounded-lg"
              >
                Confirm
              </Link>
            </div>
            <p className="text-center mt-6 flex items-center gap-2">
              Already have an account?
              <span
                className="text-[#0E0C4D] poppins-medium"
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>
            </p>
          </>
        ) : (
          <>
            <PaymentLoginForm />

            <Link
              to="/buy/checkout/formA"
              className=" flex justify-center items-center  bg-[#0E0C4D] py-2 text-lg text-white rounded-lg"
            >
              Login
            </Link>

            <p className="text-center flex items-center gap-2">
              Don&apos;t have an account?
              <span
                className="text-[#0E0C4D] poppins-medium"
                onClick={() => setIsLogin(false)}
              >
                Sign up for Free
              </span>
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;

import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import PaymentSignupForm from "../../PaymentSignUpComponents/PaymentSignupForm";

import logoImg from "../../../assets/images/FairShop New Logo PNG 4 1.png";

import { useAuthStore } from "../../../store/authStore";
import PaymentLoginForm from "../../PaymentSignUpComponents/PaymentLoginForm";

const SellDialog = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  const setIsLogin = useAuthStore((state) => state.setIsLogin);

  return (
    <Dialog className="w-full">
      <DialogTrigger className="">
        <Button className="bg-[#0E0C4D] border-[#B1B1B1] hover:bg-[#0E0C4D] hover:border-[#B1B1B1]   h-[50px] px-10 text-lg text-white rounded-2xl">
          Next
        </Button>
      </DialogTrigger>
      <DialogContent
        className={` min-w-[40%] 
              w-[90%] md:w-full max-h-[90%]`}
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
                Create a fairshop account now to sell this gadget
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
                  className="bg-white text-black border  py-2 text-lg flex items-center justify-center border-gray-400  rounded-lg"
                >
                  Cancel
                </button>
              </DialogClose>
              <Link
                to="/buy/checkout/formA"
                className=" flex justify-center items-center  bg-[#0E0C4D] py-2 text-lg text-white rounded-lg"
              >
                Sign Up Now
              </Link>
            </div>
            <p className="text-center mt-6 flex items-center gap-2 text-sm">
              Already have an account?
              <span
                className="text-[#0E0C4D] cursor-pointer"
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

            <p className="text-center flex items-center gap-2 text-sm">
              Don&apos;t have an account?
              <span
                className="text-[#0E0C4D] cursor-pointer"
                onClick={() => setIsLogin(false)}
              >
                Register
              </span>
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SellDialog;

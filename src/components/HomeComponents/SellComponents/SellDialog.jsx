import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";

import logoImg from "../../../assets/images/FairShop New Logo PNG 4 1.png";

import { useAuthStore } from "../../../store/authStore";

import RegisterForm from "../../GuestComponents/RegsiterForm";
import LoginForm from "../../GuestComponents/LoginForm";
import { useState } from "react";
import ShowToaster from "../../CoreComponents/Core/ShowToaster";

const SellDialog = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  const setIsLogin = useAuthStore((state) => state.setIsLogin);
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog
      className="w-full"
      open={openDialog}
      onOpenChange={() => setOpenDialog(!openDialog)}
    >
      <DialogTrigger className="">
        <Button className="bg-[#0E0C4D] border-[#B1B1B1] hover:bg-[#0E0C4D] hover:border-[#B1B1B1]   h-[50px] px-10 text-lg text-white rounded-2xl">
          Next
        </Button>
      </DialogTrigger>
      <DialogContent
        className={` min-w-[70%] 
              w-[90%] md:w-full max-h-[90%]  ${
                !isLogin && "overflow-y-scroll"
              }`}
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
            <RegisterForm fromSell />

            <p className="text-center flex items-center gap-2 text-sm">
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
            <LoginForm fromSell />

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
        <div className="flex w-full items-center z-30 ">
          <ShowToaster />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SellDialog;

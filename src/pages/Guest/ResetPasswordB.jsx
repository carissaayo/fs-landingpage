import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { RefreshCcw } from "lucide-react";

import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";

import ShowToaster from "../../components/CoreComponents/Core/ShowToaster";
import ResetPasswordAlert from "../../components/GuestComponents/ResetPasswordAlert";

import logoImg from "../../assets/images/footerlogo.png";
import axiosClient from "../../lib/axiosClient";

import { useAuthStore } from "../../store/authStore";
import { useCreateUserStore } from "../../store/auth/createUser";

const ResetPasswordB = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state.email;
  console.log(location);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const loading = useAuthStore((state) => state.loading);
  const setLoading = useAuthStore((state) => state.setLoading);
  const success = useAuthStore((state) => state.success);
  const setSuccess = useAuthStore((state) => state.setSuccess);
  const user = useCreateUserStore((state) => state.user);
  const setUser = useCreateUserStore((state) => state.setUser);
  const onSubmit = async (data) => {
    console.log(data.email);
    setLoading(true);
    axiosClient
      .post(`auth/reset_password`, {
        email,
        resetAction: "verify",
        ...data,
      })
      .then((response) => {
        setLoading(false);
        console.log(response);
        toast.success(response.data.message);
        setSuccess(true);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toast.error(err.response.data.message);
      });
  };
  return (
    <main className=" poppins-regular flex-1 pt-10 relative">
      <ResetPasswordAlert />
      <div className="text-center w-full mb-10">
        <div className="flex items-center justify-center w-full mb-12">
          <Link to="/">
            <img src={logoImg} alt="" className="w-32" />
          </Link>
        </div>
        <h1 className="mb-2 text-xl poppins-semibold">Reset Password</h1>

        <p className="">
          Enter your email address and a reset code will be sent to you.
        </p>
      </div>

      <div className="h-[45vh]  flex items-center justify-center flex-col w-full">
        <form className="py-4 px-8 w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4  mb-4">
            <Label className="">
              Reset Code <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="">
              <Input
                className="border  border-gray-400 "
                {...register("passwordResetCode", { required: true })}
              />
              {errors.passwordResetCode && (
                <span className="text-[#E40C0C] text-sm">
                  This field is required
                </span>
              )}
            </div>
          </div>
          {/* Password */}
          <div className="flex flex-col gap-4 mb-4">
            <Label className="">
              New Password <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="">
              <Input
                className="border  border-gray-400 "
                {...register("newPassword", { required: true })}
              />
              {errors.newPassword && (
                <span className="text-[#E40C0C] text-sm">
                  This field is required
                </span>
              )}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-4 mb-4">
            <Label className="">
              Confirm New Password <span className="text-[#E40C0C]">*</span>
            </Label>

            <div className="">
              <Input
                className="border  border-gray-400 "
                {...register("confirmNewPassword", { required: true })}
              />
              {errors.confirmNewPassword && (
                <span className="text-[#E40C0C] text-sm">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="mt-10 ">
            <button
              className=" flex justify-center items-center  bg-[#0E0C4D] py-2 text-lg text-white rounded-lg w-2/5 mx-auto"
              disabled={loading}
              type="submit"
            >
              {loading && <RefreshCcw className="h-4 w-4 animate-spin mr-4" />}

              {loading ? "Submitting" : "Submit"}
            </button>
          </div>
        </form>
      </div>

      <ShowToaster />
    </main>
  );
};

export default ResetPasswordB;

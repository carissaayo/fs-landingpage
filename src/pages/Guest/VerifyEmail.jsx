import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { RefreshCcw } from "lucide-react";

import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import ShowToaster from "../../components/CoreComponents/Core/ShowToaster";

import axiosClient from "../../lib/axiosClient";

import logoImg from "../../assets/images/footerlogo.png";
import { useAuthStore } from "../../store/authStore";
import RegisterAlert from "../../components/GuestComponents/RegisterAlert";
import { useCreateUserStore } from "../../store/auth/createUser";

const VerifyEmail = () => {
  const navigate = useNavigate();
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
    setLoading(true);
    axiosClient
      .post(`auth/verify_email`, { ...data })
      .then((response) => {
        setLoading(false);
        console.log(response);
        setSuccess(true);
        setUser(response.data.data);
        localStorage.setItem("data", JSON.stringify(response.data?.data));
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  const goBack = () => {
    navigate(-1);
  };
  return (
    <main className=" poppins-regular flex-1 pt-10 relative">
      <div className="text-center w-full mb-10">
        <div className="flex items-center justify-center w-full mb-12">
          <Link to="/">
            <img src={logoImg} alt="" className="w-32" />
          </Link>
        </div>
        <h1 className="mb-2 text-xl poppins-semibold">Email Verification</h1>
        {!user?.profile.emailVerified && (
          <p className="">Enter the verification code sent to your email.</p>
        )}
      </div>
      {user?.profile.emailVerified ? (
        <div className="w-full flex-col px-8 text-center  items-center justify-center h-[45vh] ">
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <p className="poppins-medium">
              Your email has already been verified!
            </p>
            <button
              className="flex justify-center items-center  bg-[#0E0C4D] py-2 text-lg text-white rounded-lg w-1/5 mx-auto"
              onClick={goBack}
            >
              Go Back
            </button>
          </div>
        </div>
      ) : (
        <div className="h-[45vh]  flex items-center justify-center flex-col w-full">
          <form className="py-4 px-8 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4 ">
              <Label className="">
                Verification code <span className="text-[#E40C0C]">*</span>
              </Label>
              <div className="">
                <Input
                  className="border  border-gray-400 "
                  {...register("emailCode", { required: true })}
                />
                {errors.emailCode && (
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
                {loading && (
                  <RefreshCcw className="h-4 w-4 animate-spin mr-4" />
                )}

                {loading ? "Submitting" : "Submit"}
              </button>
            </div>
          </form>
          <div className="flex justify-center w-full pb-10 lg:pb-0">
            <Link
              to="/guest/resend-verificationCode"
              className=" flex items-center gap-2 text-[#0E0C4D] "
            >
              resend verification code
            </Link>
          </div>
        </div>
      )}

      <ShowToaster />
    </main>
  );
};

export default VerifyEmail;

import ShowToaster from "../../components/CoreComponents/Core/ShowToaster";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { RefreshCcw } from "lucide-react";

import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";

import axiosClient from "../../lib/axiosClient";

import logoImg from "../../assets/images/footerlogo.png";
import { useAuthStore } from "../../store/authStore";
const ResetPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const loading = useAuthStore((state) => state.loading);
  const setLoading = useAuthStore((state) => state.setLoading);

  const onSubmit = async (data) => {
    console.log(data.email);
    setLoading(true);
    axiosClient
      .post(`auth/reset_password`, {
        email: data.email,
        resetAction: "sendCode",
      })
      .then((response) => {
        setLoading(false);
        console.log(response);
        navigate("/guest/reset-passwordB", { state: { email: data.email } });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toast.error(err.response.data.message, {
          id: "resetPasswordAError",
        });
      });
  };
  return (
    <main className=" poppins-regular flex-1 pt-10 relative">
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
          <div className="flex flex-col gap-4 ">
            <Label className="">
              Email Address <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="">
              <Input
                className="border  border-gray-400 "
                {...register("email", { required: true })}
              />
              {errors.email && (
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

export default ResetPassword;

import { useForm } from "react-hook-form";
import { RefreshCcw } from "lucide-react";
import toast from "react-hot-toast";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import ShowToaster from "../CoreComponents/Core/ShowToaster";

import { useCreateUserStore } from "../../store/auth/createUser";
import axiosClient from "../../lib/axiosClient";
import RegisterAlert from "./RegisterAlert";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const loading = useCreateUserStore((state) => state.loading);
  const setLoading = useCreateUserStore((state) => state.setLoading);
  const success = useCreateUserStore((state) => state.success);
  const setSuccess = useCreateUserStore((state) => state.setSuccess);
  const user = useCreateUserStore((state) => state.user);
  const setUser = useCreateUserStore((state) => state.setUser);

  const onSubmit = async (data) => {
    setLoading(true);
    axiosClient
      .post(`auth/sign_up`, { ...data })
      .then((response) => {
        setLoading(false);
        console.log(response);

        setSuccess(true);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.response.data.message);
        console.log(err);
      });
  };

  return (
    <section className="py-4  px-8">
      {success && (
        <RegisterAlert
          link="/guest/login"
          desc={` A verification code has been sent to the email you registered with.
            Click on {'"'}Continue{'"'} button to verify your email.`}
          title={"Registration Successful"}
        />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-8 w-full ">
          {/* First Name */}
          <div className="flex flex-col gap-4">
            <Label className="">
              First Name <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="">
              <Input
                className="border  border-gray-400 "
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <span className="text-[#E40C0C] text-sm">
                  This field is required
                </span>
              )}
            </div>
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-4">
            <Label className="">
              Last Name <span className="text-[#E40C0C]">*</span>
            </Label>

            <div className="">
              <Input
                className="border  border-gray-400 "
                {...register("lastName", { required: true })}
              />
              {errors.firstName && (
                <span className="text-[#E40C0C] text-sm">
                  This field is required
                </span>
              )}
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-4">
            <Label className="">
              Phone Number <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="">
              <Input
                className="border  border-gray-400 "
                {...register("phoneNumber", { required: true })}
              />
              {errors.firstName && (
                <span className="text-[#E40C0C] text-sm">
                  This field is required
                </span>
              )}
            </div>
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-4">
            <Label className="">
              Email Address <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="">
              <Input
                className="border  border-gray-400 "
                {...register("email", { required: true })}
              />
              {errors.firstName && (
                <span className="text-[#E40C0C] text-sm">
                  This field is required
                </span>
              )}
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-4">
            <Label className="">
              Password <span className="text-[#E40C0C]">*</span>
            </Label>
            <div className="">
              <Input
                className="border  border-gray-400 "
                {...register("password", { required: true })}
              />
              {errors.firstName && (
                <span className="text-[#E40C0C] text-sm">
                  This field is required
                </span>
              )}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-4">
            <Label className="">
              Confirm Password <span className="text-[#E40C0C]">*</span>
            </Label>

            <div className="">
              <Input
                className="border  border-gray-400 "
                {...register("confirmPassword", { required: true })}
              />
              {errors.firstName && (
                <span className="text-[#E40C0C] text-sm">
                  This field is required
                </span>
              )}
            </div>
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
      <ShowToaster />
    </section>
  );
};

export default RegisterForm;

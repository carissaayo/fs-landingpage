import { useForm } from "react-hook-form";
import { RefreshCcw } from "lucide-react";

import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { useCreateUserStore } from "../../store/auth/createUser";
import axiosClient from "../../lib/axiosClient";
import toast from "react-hot-toast";
import ShowToaster from "../CoreComponents/Core/ShowToaster";
import { Link, useNavigate } from "react-router-dom";
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const loading = useCreateUserStore((state) => state.loading);
  const setLoading = useCreateUserStore((state) => state.setLoading);
  const setUser = useCreateUserStore((state) => state.setUser);

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    axiosClient
      .post(`auth/sign_in`, { ...data })
      .then((response) => {
        setLoading(false);
        console.log(response);

        setUser(response.data?.data);
        localStorage.setItem("data", JSON.stringify(response.data?.data));
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.response.data.message, {
          id: "loginError",
        });
        console.log(err);
      });
  };

  return (
    <section className="py-4  px-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1  gap-4 gap-x-8 w-full ">
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
              {errors.email && (
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
              {errors.password && (
                <span className="text-[#E40C0C] text-sm">
                  This field is required
                </span>
              )}
            </div>
          </div>
        </div>
        <Link
          to="/guest/reset-password"
          className="text-[#0E0C4D] text-sm mt-2"
        >
          forgotten password?
        </Link>
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

export default LoginForm;

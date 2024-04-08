import { Link } from "react-router-dom";
import RegisterForm from "../../components/GuestComponents/RegsiterForm";
import logoImg from "../../assets/images/footerlogo.png";

import { useCreateUserStore } from "../../store/auth/createUser";
const Register = () => {
  const loading = useCreateUserStore((state) => state.loading);
  return (
    <main className=" poppins-regular flex-[1.5] pt-10 relative">
      <div className="text-center w-full mb-10">
        <div className="flex items-center justify-center w-full mb-12">
          <Link to="/">
            <img src={logoImg} alt="" className="w-32" />
          </Link>
        </div>
        <h1 className="mb-2 text-xl poppins-semibold">Sign up</h1>
        <p className="">
          Enter your details below to create your account and get started.
        </p>
      </div>
      <RegisterForm onRegisterPage />
      <div className="flex justify-center w-full pb-10 lg:pb-0">
        <Link to="/guest/login" className=" flex items-center gap-2 ">
          Already have an account?
          <span className="text-[#0E0C4D] ">Login</span>
        </Link>
      </div>
    </main>
  );
};

export default Register;

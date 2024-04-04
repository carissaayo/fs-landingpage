import { Link, useNavigate } from "react-router-dom";

import LoginForm from "../../components/GuestComponents/LoginForm";
import logoImg from "../../assets/images/footerlogo.png";
import { useCreateUserStore } from "../../store/auth/createUser";
import { useEffect } from "react";

const Login = () => {
  const user = useCreateUserStore((state) => state.user);
  console.log(user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.accessToken) {
      navigate("/");
    }
  }, [user]);

  return (
    <main className="w-full md:w-[80%] md:mx-auto lg:mx-0  lg:flex-[1] pt-10 poppins-regular">
      <div className="text-center w-full mb-10">
        <div className="flex items-center justify-center w-full mb-12">
          <Link to="/">
            <img src={logoImg} alt="" className="w-32" />
          </Link>
        </div>
        <h1 className="mb-2 text-xl poppins-semibold">Welcome Back</h1>
        <p className="">Glad to see you again 🖐</p>
        <p className="">Login to your account below</p>
      </div>
      <LoginForm />
      <div className="flex justify-center w-full ">
        <Link to="/guest/register" className=" flex items-center gap-2 ">
          Don&apos;t have an account?
          <span className="text-[#0E0C4D] ">Register</span>
        </Link>
      </div>
    </main>
  );
};

export default Login;

import { useNavigate } from "react-router-dom";
import { useCreateUserStore } from "../../store/auth/createUser";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
const ResetPasswordAlert = () => {
  const navigate = useNavigate();
  const success = useCreateUserStore((state) => state.success);
  const setSuccess = useCreateUserStore((state) => state.setSuccess);
  const goToLogin = () => {
    setSuccess(false);
    navigate("/guest/login");
  };
  return (
    <AlertDialog open={success}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Reset Password
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            Your password has been reset successfully
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="flex items-center justify-center w-full">
            <AlertDialogAction
              onClick={goToLogin}
              className="bg-[#0E0C4D] hover:bg-[#0E0C4D]"
            >
              {" "}
              Login{" "}
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ResetPasswordAlert;

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
          <AlertDialogTitle>Reset Password</AlertDialogTitle>
          <AlertDialogDescription>
            Your password has been reset successfully
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="flex items-center justify-center w-full">
            <AlertDialogAction onClick={goToLogin}> Login </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ResetPasswordAlert;

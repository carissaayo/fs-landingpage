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
import { useAuthStore } from "../../store/authStore";

const RegisterAlert = ({ link, title, desc }) => {
  const navigate = useNavigate();
  const success = useAuthStore((state) => state.success);
  const setSuccess = useAuthStore((state) => state.setSuccess);
  const goToVerificationPage = () => {
    setSuccess(!success);
    navigate(link);
  };

  return (
    <AlertDialog open={success} onOpenChange={() => goToVerificationPage()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            {desc}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="flex items-center justify-center w-full">
            <AlertDialogAction className="bg-[#0E0C4D] hover:bg-[#0E0C4D]">
              Continue
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RegisterAlert;

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

const RegisterAlert = (link, title, desc) => {
  const navigate = useNavigate();
  const success = useCreateUserStore((state) => state.success);
  const setSuccess = useCreateUserStore((state) => state.setSuccess);
  const goToVerificationPage = (link) => {
    setSuccess(!success);
    navigate(link);
  };

  return (
    <AlertDialog open={success} onOpenChange={() => goToVerificationPage()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{desc}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="flex items-center justify-center w-full">
            <AlertDialogAction>Continue</AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RegisterAlert;

import { LogOut } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../ui/alert-dialog";

import { useAuthStore } from "../../../store/authStore";
import { useNavigate } from "react-router-dom";
import { useCreateUserStore } from "../../../store/auth/createUser";

const LogoutAlert = () => {
  const navigate = useNavigate();

  const setUser = useCreateUserStore((state) => state.setUser);

  const openAlert = useAuthStore((state) => state.openAlert);
  const setOpenAlert = useAuthStore((state) => state.setOpenAlert);
  const signOut = () => {
    localStorage.removeItem("data");
    setUser({});
    setOpenAlert(false);
    navigate("/guest/login");
  };

  const signOutCancel = () => {
    setOpenAlert(false);
  };

  return (
    <AlertDialog open={openAlert} className="z-40">
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Are you sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            You will have to login again to access your account
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-center gap-10">
          <AlertDialogCancel onClick={signOutCancel}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="text-white bg-[#DD0707] hover:bg-[#DD0707]"
            onClick={signOut}
          >
            Log me out
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogoutAlert;

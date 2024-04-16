import { Home, Notebook } from "lucide-react";
import { Link } from "react-router-dom";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../ui/alert-dialog";

import { useDeviceDetailsStore } from "../../../store/sell/deviceDetailsStore";
import { useUpdateSaleStore } from "../../../store/sell/updateSaleStore";
const SuccessDialog = ({ fromEditPage }) => {
  const success = useDeviceDetailsStore((state) => state.success);
  const setSuccess = useDeviceDetailsStore((state) => state.setSuccess);
  const setPhoneDetails = useUpdateSaleStore((state) => state.setPhoneDetails);
  const setCurrentTransaction = useUpdateSaleStore(
    (state) => state.setCurrentTransaction
  );
  return (
    <AlertDialog open={success}>
      <AlertDialogContent className="min-w-[70vw]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center poppins-medium text-lg">
            {fromEditPage
              ? "Your sell order has been created successfuly"
              : " Your sell order has been updated successfuly"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            <p className="text-center poppins-regular text-base text-black">
              Do you want to go back home or your transaction page?
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className=""></div>

        <AlertDialogFooter>
          <div className="w-full  flex justify-center items-center gap-6">
            <Link
              to="/sell"
              className="px-8 text-base hover:bg-white flex items-center gap-2 border border-gray-500 rounded-lg py-3"
              onClick={() => {
                setCurrentTransaction({});
                setPhoneDetails({});
                setSuccess(false);
              }}
            >
              <Home className="w-6 h-6" />
              Home
            </Link>

            <Link
              to="/transactions"
              className="px-8 text-base hover:bg-white flex items-center gap-2 border border-gray-500 rounded-lg py-3"
              onClick={() => {
                setCurrentTransaction({});
                setPhoneDetails({});
                setSuccess(false);
              }}
            >
              <Notebook className="w-6 h-6" />
              Transactions
            </Link>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SuccessDialog;

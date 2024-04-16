import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { useUpdateSaleStore } from "../../store/sell/updateSaleStore";
import { Home, Notebook } from "lucide-react";
import { Link } from "react-router-dom";
import Loading from "../CoreComponents/Core/Loading";
const EditDialog = () => {
  const setPhoneDetails = useUpdateSaleStore((state) => state.setPhoneDetails);
  const setSuccess = useUpdateSaleStore((state) => state.setSuccess);
  const loading = useUpdateSaleStore((state) => state.loading);
  const openModal = useUpdateSaleStore((state) => state.openModal);
  return (
    <AlertDialog open={openModal}>
      <AlertDialogTrigger asChild>
        <Button className="bg-[#130D52] hover:bg-[#130D52] py-6 px-4 text-lg  text-white flex items-center justify-center rounded-xl">
          Continue
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[70vw]">
        {loading ? (
          <div className="">
            <Loading />
          </div>
        ) : (
          <>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-center poppins-medium text-lg">
                Your sell order has been updated successfuly
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
                    setSuccess(false);
                    setPhoneDetails({});
                  }}
                >
                  <Home className="w-6 h-6" />
                  Home
                </Link>

                <Link
                  to="/transactions"
                  className="px-8 text-base hover:bg-white flex items-center gap-2 border border-gray-500 rounded-lg py-3"
                  onClick={() => {
                    setSuccess(false);
                    setPhoneDetails({});
                  }}
                >
                  <Notebook className="w-6 h-6" />
                  Transactions
                </Link>
              </div>
            </AlertDialogFooter>
          </>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditDialog;

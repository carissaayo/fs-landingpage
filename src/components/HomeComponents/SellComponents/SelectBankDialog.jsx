import { useCallback, useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../ui/alert-dialog";

import { Button } from "../../ui/button";
import axiosClient from "../../../lib/axiosClient";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useCreateUserStore } from "../../../store/auth/createUser";
import { useBankStore } from "../../../store/sell/bankStore";
import Loading from "../../CoreComponents/Core/Loading";
import { Input } from "../../ui/input";
import { Label } from "@radix-ui/react-label";
import ShowToaster from "../../CoreComponents/Core/ShowToaster";
import { RefreshCcw } from "lucide-react";

const SelectBankDialog = () => {
  const [openModal, setOpenModal] = useState(false);
  const user = useCreateUserStore((state) => state.user);

  //   Get supported banks loading
  const loading = useCreateUserStore((state) => state.loading);
  const setLoading = useCreateUserStore((state) => state.setLoading);
  //   verifying account number loading
  const verifyNumberLoading = useBankStore(
    (state) => state.verifyNumberLoading
  );
  const setVerifyNumberLoading = useBankStore(
    (state) => state.setVerifyNumberLoading
  );

  //   adding account number loading
  const addingAccountNumberLoading = useBankStore(
    (state) => state.addingAccountNumberLoading
  );
  const setAddingAccountNumberLoading = useBankStore(
    (state) => state.setAddingAccountNumberLoading
  );

  const setBanks = useBankStore((state) => state.setBanks);
  const banks = useBankStore((state) => state.banks);
  const selectedBank = useBankStore((state) => state.selectedBank);
  const setSelectedBank = useBankStore((state) => state.setSelectedBank);
  const accountNumber = useBankStore((state) => state.accountNumber);
  const setAccountNumber = useBankStore((state) => state.setAccountNumber);
  const accountVerified = useBankStore((state) => state.accountVerified);
  const setAccountVerified = useBankStore((state) => state.setAccountVerified);
  const fetchSupportedBanks = useCallback(async () => {
    setLoading(true);
    await axiosClient
      .get(`/data/banks`)
      .then((response) => {
        console.log(response);
        setBanks(response.data.data.banks);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        toast.error("something went wrong");
      });
  }, [banks]);

  const { mutate: fetchSupportedBanksFn } = useMutation({
    mutationFn: () => fetchSupportedBanks(),
  });

  const verifyAccountNumber = async () => {
    setVerifyNumberLoading(true);
    await axiosClient
      .post(
        `/account/bank`,
        {
          bankCode: selectedBank,
          accountNumber,
          action: "verify",
        },
        {
          headers: {
            refreshtoken: user.refreshtoken && user.refreshtoken,
            authorization: user.accessToken && `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setAccountVerified(true);
        setVerifyNumberLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setVerifyNumberLoading(false);
        toast.error(error.response.data.message), { id: "verifyAccountNumber" };
      });
  };
  const addAccountNumber = async () => {
    setAddingAccountNumberLoading(true);
    await axiosClient
      .post(
        `/account/bank`,
        {
          bankCode: selectedBank,
          accountNumber,
          action: "submit",
        },
        {
          headers: {
            refreshtoken: user.refreshtoken && user.refreshtoken,
            authorization: user.accessToken && `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setAccountVerified(true);
        setAddingAccountNumberLoading(false);
        toast.success("Your account has been verified successfully", {
          id: "verifiedSuccess",
        });
        setOpenModal(false);
      })
      .catch((error) => {
        console.log(error);
        setAddingAccountNumberLoading(false);
        toast.error(error.response.data.message), { id: "verifyAccountNumber" };
      });
  };
  useEffect(() => {
    banks.length === 0 && fetchSupportedBanksFn();
    setAccountNumber("");
    setAccountVerified(false);
  }, []);

  return (
    <AlertDialog open={openModal}>
      <AlertDialogTrigger asChild>
        <Button
          className="bg-[#130D52] hover:bg-[#130D52]"
          onClick={() => setOpenModal(true)}
        >
          Add An Account
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[70vw]">
        {loading ? (
          <div className="w-full flex items-center justify-center">
            <Loading />
          </div>
        ) : (
          <>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-center poppins-medium text-lg">
                Add A New Bank Account{" "}
              </AlertDialogTitle>
              <AlertDialogDescription>
                <p className="text-center poppins-regular text-base text-black">
                  Select A Bank from the supported banks below
                </p>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="">
              <div className="w-full   px-4 lg:px-0  flex flex-col justify-start gap-4 ">
                <Label className="  ">Select A Bank</Label>
                <div className="custom-select w-full mb-6">
                  <select
                    className="border border-gray-400 p-4 rounded-lg text-sm md:text-base focus:outline-none"
                    onChange={(e) => setSelectedBank(e.target.value)}
                  >
                    {banks &&
                      banks.map((bank) => (
                        <option value={bank.code} key={bank.id} className="">
                          {bank.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="w-full   px-4 lg:px-0  flex flex-col justify-start gap-4 ">
                <Label className="  ">Enter the account number</Label>
                <div className="flex items-center gap-6">
                  <Input
                    className="text-black"
                    disabled={!selectedBank}
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                  <Button
                    className="bg-[#130D52] hover:bg-[#130D52] h-[55px]"
                    onClick={verifyAccountNumber}
                    disabled={accountVerified}
                  >
                    {verifyNumberLoading
                      ? "verifying ..."
                      : "verify account number"}
                  </Button>
                </div>
              </div>
            </div>
            <AlertDialogFooter>
              <div className="w-full  flex justify-center items-center gap-6">
                <AlertDialogCancel
                  className="px-8 text-base text-red-600 hover:text-red-600 hover:bg-white"
                  onClick={() => setOpenModal(false)}
                >
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  className="px-8 text-base bg-[#130D52] hover:bg-[#130D52]"
                  //   disabled={!accountVerified}
                  onClick={addAccountNumber}
                >
                  {addingAccountNumberLoading && (
                    <RefreshCcw className="h-4 w-4 animate-spin mr-4" />
                  )}
                  Add Account Number
                </AlertDialogAction>
              </div>
            </AlertDialogFooter>
          </>
        )}
      </AlertDialogContent>
      <ShowToaster />
    </AlertDialog>
  );
};

export default SelectBankDialog;

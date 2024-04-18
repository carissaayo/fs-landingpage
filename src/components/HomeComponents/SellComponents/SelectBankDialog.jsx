import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { RefreshCcw } from "lucide-react";
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
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";

import ShowToaster from "../../CoreComponents/Core/ShowToaster";
import Loading from "../../CoreComponents/Core/Loading";

import axiosClient from "../../../lib/axiosClient";

import { useCreateUserStore } from "../../../store/auth/createUser";
import { useBankStore } from "../../../store/sell/bankStore";

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
  const setVerifiedAccountName = useBankStore(
    (state) => state.setVerifiedAccountName
  );
  const verifiedAccountName = useBankStore(
    (state) => state.verifiedAccountName
  );

  //   adding account number loading
  const addingAccountNumberLoading = useBankStore(
    (state) => state.addingAccountNumberLoading
  );
  const setAddingAccountNumberLoading = useBankStore(
    (state) => state.setAddingAccountNumberLoading
  );
  const setRefreshUserBanks = useBankStore(
    (state) => state.setRefreshUserBanks
  );

  const refreshUserBanks = useBankStore((state) => state.refreshUserBanks);
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
        setVerifiedAccountName(response.data.data.accountBearerName);
        setAccountVerified(true);
        toast.success("account verified", {
          id: "accountNumberVerified",
        });
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
        setAccountVerified(false);
        setAddingAccountNumberLoading(false);
        setVerifiedAccountName("");
        setRefreshUserBanks(true);
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

  const handleEdit = () => {
    setAccountVerified(false);
    setVerifiedAccountName("");
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
          variant="ghost"
          className="poppins-medium"
          onClick={() => setOpenModal(true)}
        >
          Add New Account
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="px-4 max-w-[90%] md:min-w-[70vw] rounded-lg">
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
                    <option className="">Select Bank</option>

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
                <div className="flex items-center gap-6 border-[1px] border-gray-500 rounded-lg pr-4 py-1">
                  <Input
                    className="text-black border-none"
                    disabled={!selectedBank}
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                  <Button className="px-5" onClick={handleEdit}>
                    Edit{" "}
                  </Button>
                </div>
              </div>
              {accountVerified && (
                <p className="text-sm poppins-medium px-4">
                  {verifiedAccountName}
                </p>
              )}
            </div>

            <AlertDialogFooter>
              <div className="w-full  flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 ">
                <AlertDialogCancel
                  className="px-14 sm:px-8 text-base text-red-600 hover:text-red-600 hover:bg-white"
                  onClick={() => setOpenModal(false)}
                >
                  Cancel
                </AlertDialogCancel>
                {accountVerified ? (
                  <AlertDialogAction
                    className="px-8 text-base bg-[#130D52] hover:bg-[#130D52]"
                    disabled={!accountVerified}
                    onClick={addAccountNumber}
                  >
                    {addingAccountNumberLoading && (
                      <RefreshCcw className="h-4 w-4 animate-spin mr-4" />
                    )}
                    Add Account Number
                  </AlertDialogAction>
                ) : (
                  <Button
                    className="bg-[#130D52] hover:bg-[#130D52] h-[40px]"
                    onClick={verifyAccountNumber}
                    disabled={accountVerified}
                  >
                    {verifyNumberLoading
                      ? "verifying ..."
                      : "verify account number"}
                  </Button>
                )}
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

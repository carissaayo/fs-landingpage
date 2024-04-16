import toast from "react-hot-toast";
import { useCallback, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";

import Loading from "../../components/CoreComponents/Core/Loading";
import SelectBankDialog from "../../components/HomeComponents/SellComponents/SelectBankDialog";
import ShowToaster from "../../components/CoreComponents/Core/ShowToaster";

import axiosClient from "../../lib/axiosClient";

import { useBankStore } from "../../store/sell/bankStore";
import { useCreateUserStore } from "../../store/auth/createUser";
import { useDeviceDetailsStore } from "../../store/sell/deviceDetailsStore";

const EditUserDetails = () => {
  const user = useCreateUserStore((state) => state.user);
  const loading = useBankStore((state) => state.loading);
  const setLoading = useBankStore((state) => state.setLoading);
  const selectedBankId = useBankStore((state) => state.selectedBankId);
  const setSelectedBankId = useBankStore((state) => state.setSelectedBankId);
  const userBankAccounts = useBankStore((state) => state.userBankAccounts);
  const setUserBankAccounts = useBankStore(
    (state) => state.setUserBankAccounts
  );
  const setPhoneDetails = useDeviceDetailsStore(
    (state) => state.setPhoneDetails
  );
  const phoneDetails = useDeviceDetailsStore((state) => state.phoneDetails);

  const refreshUserBanks = useBankStore((state) => state.refreshUserBanks);
  const fetchUserBankAccounts = useCallback(async () => {
    setLoading(true);
    await axiosClient
      .get(`/account/bank`, {
        headers: {
          refreshtoken: user.refreshtoken && user.refreshtoken,
          authorization: user.accessToken && `Bearer ${user.accessToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        setUserBankAccounts(response.data.data.banks);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        toast.error("something went wrong");
      });
  }, [refreshUserBanks]);
  const { mutate: fetchUserBankAccountsFn } = useMutation({
    mutationFn: () => fetchUserBankAccounts(),
  });

  useEffect(
    () => setPhoneDetails({ ...phoneDetails, bankId: selectedBankId }),
    [selectedBankId]
  );
  useEffect(() => {
    fetchUserBankAccountsFn();
  }, [refreshUserBanks]);
  return (
    <main className="px-6  md:px-16  relative poppins-regular pt-36 pb-16 bg-white min-h-[50vh]">
      {loading ? (
        <div className=" w-full flex items-center justify-center h-[30vh]">
          <Loading />
        </div>
      ) : (
        <section className="w-full bg-white  py-16 px-6 md:px-12 lg:px-6 xl:px-12 box-shadow rounded-md">
          <h1 className="capitalize poppins-semibold text-xl text-center mb-6">
            Select the Account Number You want to use for this transaction!
          </h1>
          {userBankAccounts.length > 0 ? (
            <div className="flex items-center justify-between mb-6 px-12">
              <p className="poppins-medium ">
                You have not added a bank account yet!
              </p>
              <SelectBankDialog />
            </div>
          ) : (
            <div className="w-full   px-4 lg:px-0  flex flex-col justify-start gap-4 lga">
              <Label className="poppins-semibold text-xl ">
                Select A Bank Account
              </Label>
              <div className="flex items-center w-full gap-12">
                <div className="custom-select w-full">
                  <select
                    className="border border-gray-400 p-4 rounded-lg text-sm md:text-base focus:outline-none"
                    onChange={(e) => {
                      setSelectedBankId(e.target.value);
                    }}
                  >
                    <option className="">Select Bank</option>

                    {userBankAccounts &&
                      userBankAccounts.map((account) => (
                        <option
                          value={account._id}
                          className=""
                          key={account._id}
                        >
                          {account.accountNumber} {account.accountBearerName} (
                          {account.bank})
                        </option>
                      ))}
                  </select>
                </div>
                <span className="">Or</span>
                <SelectBankDialog />
              </div>
            </div>
          )}
        </section>
      )}
      <ShowToaster />
    </main>
  );
};

export default EditUserDetails;

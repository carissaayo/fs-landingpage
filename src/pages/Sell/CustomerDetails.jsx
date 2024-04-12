import { useCallback, useEffect } from "react";
import { useCreateUserStore } from "../../store/auth/createUser";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Label } from "../../components/ui/label";

import SelectBankDialog from "../../components/HomeComponents/SellComponents/SelectBankDialog";
import { useBankStore } from "../../store/sell/bankStore";
import axiosClient from "../../lib/axiosClient";
import toast from "react-hot-toast";
import ShowToaster from "../../components/CoreComponents/Core/ShowToaster";
import { useMutation } from "@tanstack/react-query";
import { AccountBalance } from "@mui/icons-material";

const CustomerDetails = () => {
  const user = useCreateUserStore((state) => state.user);
  const loading = useBankStore((state) => state.loading);
  const setLoading = useBankStore((state) => state.setLoading);

  const userBankAccounts = useBankStore((state) => state.userBankAccounts);
  const setUserBankAccounts = useBankStore(
    (state) => state.setUserBankAccounts
  );

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
        console.log(response.data.data.banks);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        toast.error("something went wrong");
      });
  }, []);
  const { mutate: fetchUserBankAccountsFn } = useMutation({
    mutationFn: () => fetchUserBankAccounts(),
  });
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => goToTop(), []);
  useEffect(() => {
    userBankAccounts.length === 0 && fetchUserBankAccountsFn();
  }, [userBankAccounts]);
  return (
    <main className="px-6  md:px-16  relative poppins-regular pt-36 pb-16 bg-white min-h-[50vh]">
      <div className="flex items-center gap-2 mb-10">
        <Link to="/sell" className="text-[#0E0C4D]">
          Home
        </Link>
        <span className="">
          <ChevronRight className="w-4 h-4" />
        </span>
        <h1 className="poppins-semibold capitalize text-lg">
          {user?.profile?.firstName} {user?.profile?.lastName}
        </h1>
      </div>

      <section className="w-full bg-white  py-16 px-6 md:px-12 lg:px-6 xl:px-12 box-shadow rounded-md">
        <h1 className="capitalize poppins-semibold text-xl text-center mb-6">
          Select the Account Number You want to use for this transaction!
        </h1>
        {userBankAccounts.length === 0 && (
          <div className="flex items-center justify-between mb-6 px-12">
            <p className="poppins-medium ">
              You have not added a bank account yet!
            </p>
            <SelectBankDialog />
          </div>
        )}

        <div className="w-full   px-4 lg:px-0  flex flex-col justify-start gap-4 lga">
          <Label className="poppins-semibold text-xl ">
            Select A Bank Account
          </Label>
          <div className="flex items-center w-full gap-12">
            <div className="custom-select w-full">
              <select className="border border-gray-400 p-4 rounded-lg text-sm md:text-base focus:outline-none">
                {userBankAccounts &&
                  userBankAccounts.map((account) => (
                    <option value={account._id} className="" key={account._id}>
                      {account.accountNumber} ({account.bank})
                    </option>
                  ))}
                <option value="3" className="">
                  Tecno
                </option>
                <option value="1" className="">
                  Apple
                </option>{" "}
                <option value="3" className="">
                  Tecno
                </option>{" "}
                <option value="1" className="">
                  Apple
                </option>{" "}
                <option value="3" className="">
                  Tecno
                </option>
              </select>
            </div>
            <SelectBankDialog />
          </div>
        </div>
      </section>
      <ShowToaster />
    </main>
  );
};

export default CustomerDetails;

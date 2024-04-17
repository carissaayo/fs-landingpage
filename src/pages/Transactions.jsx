import { useCallback, useEffect } from "react";
import toast from "react-hot-toast";

import { useMutation } from "@tanstack/react-query";

import TransactionsTab from "../components/TransactionComponents/TransactionsTab";

import axiosClient from "../lib/axiosClient";

import { useCreateUserStore } from "../store/auth/createUser";
import { useTransactionsStore } from "../store/user/transactionsStore";
import { useBrandsAndModelsStore } from "../store/sell/brandsAndModelsStore";
import Loading from "../components/CoreComponents/Core/Loading";
import { useUpdateSaleStore } from "../store/sell/updateSaleStore";
import { useLocationStore } from "../store/sell/locationsStore";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
  const navigate = useNavigate();
  const user = useCreateUserStore((state) => state.user);
  const setUser = useCreateUserStore((state) => state.setUser);
  const loading = useTransactionsStore((state) => state.loading);
  const setLoading = useTransactionsStore((state) => state.setLoading);
  const setStates = useLocationStore((state) => state.setStates);
  const setSelectedBrandId = useBrandsAndModelsStore(
    (state) => state.setSelectedBrandId
  );
  const setSelectedStateId = useLocationStore(
    (state) => state.setSelectedStateId
  );
  const setSelectedCitiesList = useLocationStore(
    (state) => state.setSelectedCitiesList
  );
  const setSelectedModel = useBrandsAndModelsStore(
    (state) => state.setSelectedModel
  );
  const setSelectedVariant = useBrandsAndModelsStore(
    (state) => state.setSelectedVariant
  );

  const setSelectedModelList = useBrandsAndModelsStore(
    (state) => state.setSelectedModelList
  );
  const setBrands = useBrandsAndModelsStore((state) => state.setBrands);

  const setModels = useBrandsAndModelsStore((state) => state.setModels);
  const setPhoneConditions = useBrandsAndModelsStore(
    (state) => state.setPhoneConditions
  );
  const setTransactions = useTransactionsStore(
    (state) => state.setTransactions
  );

  const setCurrentTransaction = useUpdateSaleStore(
    (state) => state.setCurrentTransaction
  );
  const setShowDetails = useUpdateSaleStore((state) => state.setShowDetails);
  const setShowDetailsB = useUpdateSaleStore((state) => state.setShowDetailsB);

  const setPhoneDetails = useUpdateSaleStore((state) => state.setPhoneDetails);

  const fetchSells = useCallback(async () => {
    setLoading(true);
    await axiosClient
      .get(`/sell`, {
        headers: {
          refreshtoken: user.refreshtoken && user.refreshtoken,
          authorization: user.accessToken && `Bearer ${user.accessToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        setTransactions(response.data.data.sales);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        if (error.response.data.statusCode === 403) {
          setUser({});
          navigate("/guest/login");
        }

        toast.error("something went wrong");
      });
  }, []);
  const fetchBrandsAndModels = useCallback(async () => {
    setLoading(true);
    await axiosClient
      .get(`/data/brand-and-models`)
      .then((response) => {
        console.log(response);
        setBrands(response.data.data.brands);
        setModels(response.data.data.models);
        setPhoneConditions(response.data.data.phoneCondition);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        toast.error("something went wrong");
      });
  }, []);
  const { mutate: fetchBrandsAndModelsFn } = useMutation({
    mutationFn: () => fetchBrandsAndModels(),
  });

  const { mutate: fetchSellsFn } = useMutation({
    mutationFn: () => fetchSells(),
  });
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => {
    goToTop();
  }, []);

  useEffect(() => {
    fetchSellsFn();
    fetchBrandsAndModelsFn();
    setCurrentTransaction({});
    setPhoneDetails({});
    setShowDetails(false);
    setShowDetailsB(false);
    setStates([]);
    setSelectedBrandId("");
    setSelectedModelList("");
    setSelectedStateId("");
    setSelectedCitiesList();
    setSelectedModel("");
    setSelectedVariant("");
  }, []);

  return (
    <main className="w-full h-full relative">
      <section className=" px-6  md:px-32 poppins-regular pb-12 pt-28">
        <div className="mb-10">
          <h1 className="poppins-semibold  text-2xl mb-4">
            Transaction History
          </h1>
          <p className="">View your purchases and sold item’s history below</p>
        </div>
        {/* Tabs */}
        {loading ? (
          <div className="w-full flex items-center justify-center min-h-[45vh]">
            <Loading />
          </div>
        ) : (
          <TransactionsTab />
        )}
      </section>
    </main>
  );
};

export default Transactions;

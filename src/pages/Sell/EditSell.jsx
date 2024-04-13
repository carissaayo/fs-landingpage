import { useCallback, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import axiosClient from "../../lib/axiosClient";
import EditSellForm from "../../components/HomeComponents/SellComponents/EditSellForm";

import { useUpdateSaleStore } from "../../store/sell/updateSaleStore";
import { useCreateUserStore } from "../../store/auth/createUser";
import { useLocationStore } from "../../store/sell/locationsStore";
import { useBrandsAndModelsStore } from "../../store/sell/brandsAndModelsStore";
import EditSellVariant from "../../components/EditSellComponents/EditSellVariant";
import DeviceDetails from "../../components/EditSellComponents/DeviceDetails";

const EditSell = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useCreateUserStore((state) => state.user);

  console.log(location);
  const queryClient = useQueryClient();

  const brands = useBrandsAndModelsStore((state) => state.brands);
  const setBrands = useBrandsAndModelsStore((state) => state.setBrands);
  const models = useBrandsAndModelsStore((state) => state.models);
  const setModels = useBrandsAndModelsStore((state) => state.setModels);
  const setPhoneConditions = useBrandsAndModelsStore(
    (state) => state.setPhoneConditions
  );
  const selectedModel = useBrandsAndModelsStore((state) => state.selectedModel);

  // Location States

  const states = useLocationStore((state) => state.states);
  const setStates = useLocationStore((state) => state.setStates);
  const cities = useLocationStore((state) => state.cities);
  const setCities = useLocationStore((state) => state.setCities);

  const showDetails = useUpdateSaleStore((state) => state.showDetails);
  const setShowDetails = useUpdateSaleStore((state) => state.setShowDetails);
  const currentTransaction = useUpdateSaleStore(
    (state) => state.currentTransaction
  );
  const setCurrentTransaction = useUpdateSaleStore(
    (state) => state.setCurrentTransaction
  );
  const loading = useUpdateSaleStore((state) => state.loading);
  const setLoading = useUpdateSaleStore((state) => state.setLoading);

  const fetchLocations = useCallback(async () => {
    setLoading(true);
    await axiosClient
      .get(`/data/procurement-locations`)
      .then((response) => {
        console.log(response);
        setStates(response.data.data.state);
        setCities(response.data.data.city);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        toast.error("something went wrong");
      });
  }, []);
  const updateSale = useCallback(async () => {
    setLoading(true);
    await axiosClient
      .get(`/data/brand-and-models`)
      .then((response) => {
        console.log(response);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

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
  const { mutate: updateSaleFn } = useMutation({
    mutationFn: () => updateSale(),
  });

  const { mutate: fetchLocationsFn } = useMutation({
    mutationFn: () => fetchLocations(),
  });
  useEffect(() => {
    (cities.length === 0 || states.length === 0) && fetchLocationsFn();
    (brands.length === 0 || models.length === 0) && fetchBrandsAndModelsFn();
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => {
    goToTop();
  }, []);

  useEffect(() => {
    setCurrentTransaction(location?.state?.transaction);
  }, []);
  return (
    <main className="w-full  px-6  md:px-16  relative poppins-regular pt-36 pb-16 bg-white justify-between gap-12 lg:gap-6 text-sm md:text-base">
      <EditSellForm />
      {selectedModel && <EditSellVariant />}
      {showDetails && <DeviceDetails />}
    </main>
  );
};

export default EditSell;

import { useCallback, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import EditSellForm from "../../components/HomeComponents/SellComponents/EditSellForm";
import EditSellVariant from "../../components/EditSellComponents/EditSellVariant";
import DeviceDetails from "../../components/EditSellComponents/DeviceDetails";
import DeviceDetailsB from "../../components/EditSellComponents/DeviceDetailsB";
import DeviceDetailsC from "../../components/EditSellComponents/DeviceDetailsC";

import Accessories from "../../components/EditSellComponents/Accessories";

import { useUpdateSaleStore } from "../../store/sell/updateSaleStore";
import { useLocationStore } from "../../store/sell/locationsStore";
import { useBrandsAndModelsStore } from "../../store/sell/brandsAndModelsStore";

import axiosClient from "../../lib/axiosClient";

import { Button } from "../../components/ui/button";

const EditSell = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  //   Brands and Models states
  const brands = useBrandsAndModelsStore((state) => state.brands);
  const setBrands = useBrandsAndModelsStore((state) => state.setBrands);
  const models = useBrandsAndModelsStore((state) => state.models);
  const setModels = useBrandsAndModelsStore((state) => state.setModels);

  const phoneConditions = useBrandsAndModelsStore(
    (state) => state.phoneConditions
  );
  const setPhoneConditions = useBrandsAndModelsStore(
    (state) => state.setPhoneConditions
  );
  const selectedModel = useBrandsAndModelsStore((state) => state.selectedModel);

  // Location States

  const states = useLocationStore((state) => state.states);
  console.log(states);
  const setStates = useLocationStore((state) => state.setStates);
  const cities = useLocationStore((state) => state.cities);
  const setCities = useLocationStore((state) => state.setCities);
  //   Update Sale States
  const showDetails = useUpdateSaleStore((state) => state.showDetails);
  const showDetailsB = useUpdateSaleStore((state) => state.showDetailsB);

  const currentTransaction = useUpdateSaleStore(
    (state) => state.currentTransaction
  );

  const setCurrentTransaction = useUpdateSaleStore(
    (state) => state.setCurrentTransaction
  );

  const phoneDetails = useUpdateSaleStore((state) => state.phoneDetails);
  const setPhoneDetails = useUpdateSaleStore((state) => state.setPhoneDetails);
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

        toast.error("something went wrong", { id: "editSaleError" });
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

  const { mutate: fetchLocationsFn } = useMutation({
    mutationFn: () => fetchLocations(),
  });
  useEffect(() => {
    (cities.length === 0 || states.length === 0) && fetchLocationsFn();
    (brands.length === 0 ||
      models.length === 0 ||
      phoneConditions.length === 0) &&
      fetchBrandsAndModelsFn();
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => {
    !currentTransaction._id && navigate("/transactions");
    goToTop();
  }, []);

  useEffect(() => {
    setPhoneDetails({
      ...phoneDetails,
      phoneCondition: currentTransaction?.phoneCondition[0],
    });
  }, []);

  return (
    <main className="w-full  px-6  md:px-16  relative poppins-regular pt-36 pb-16 bg-white justify-between gap-12 lg:gap-6 text-sm md:text-base">
      <EditSellForm />
      {selectedModel && <EditSellVariant />}
      {showDetails && <DeviceDetails />}
      {showDetailsB && <DeviceDetailsB />}
      {showDetailsB && <DeviceDetailsC />}
      {showDetailsB && <Accessories />}
      {/* {showUserDetails && <EditUserDetails />} */}

      <div className="w-full flex justify-center md:justify-end items-center  gap-6 mt-12 mb-10 md:pr-16">
        <Link
          to="/transactions"
          className="w-28 bg-[#F0F0F0]  text-black text-base rounded-2xl border border-[#ACACAC] h-[50px] flex items-center justify-center"
        >
          Go Back
        </Link>

        <Button
          disabled={!showDetailsB}
          onClick={() => {
            navigate("/sell/customer-details", {
              state: { currentTransaction },
            });
          }}
          // to="/sell/customer-details"
          // state={{ currentTransaction }}
          className="bg-[#0C0F4D] w-28  text-white text-base rounded-2xl border border-[#ACACAC] h-[50px] flex items-center justify-center"
        >
          Continue
        </Button>
      </div>
    </main>
  );
};

export default EditSell;

import { useEffect } from "react";
import { Label } from "../../ui/label";

import { useBrandsAndModelsStore } from "../../../store/sell/brandsAndModelsStore";
import { useLocationStore } from "../../../store/sell/locationsStore";

import { useUpdateSaleStore } from "../../../store/sell/updateSaleStore";

const EditSellForm = () => {
  const models = useBrandsAndModelsStore((state) => state.models);
  const brands = useBrandsAndModelsStore((state) => state.brands);

  const phoneDetails = useUpdateSaleStore((state) => state.phoneDetails);
  const setPhoneDetails = useUpdateSaleStore((state) => state.setPhoneDetails);
  const setSelectedBrandId = useBrandsAndModelsStore(
    (state) => state.setSelectedBrandId
  );
  const selectedBrandId = useBrandsAndModelsStore(
    (state) => state.selectedBrandId
  );
  //   The Selected Brand Model List
  const selectedModelList = useBrandsAndModelsStore(
    (state) => state.selectedModelList
  );
  const setSelectedModelList = useBrandsAndModelsStore(
    (state) => state.setSelectedModelList
  );
  //   The Selected Model
  const setSelectedModel = useBrandsAndModelsStore(
    (state) => state.setSelectedModel
  );
  const selectedModel = useBrandsAndModelsStore((state) => state.selectedModel);

  //   location State
  const states = useLocationStore((state) => state.states);
  const cities = useLocationStore((state) => state.cities);

  const setSelectedStateId = useLocationStore(
    (state) => state.setSelectedStateId
  );
  const selectedStateId = useLocationStore((state) => state.selectedStateId);
  const selectedCitiesList = useLocationStore(
    (state) => state.selectedCitiesList
  );

  const setSelectedCitiesList = useLocationStore(
    (state) => state.setSelectedCitiesList
  );

  useEffect(() => {
    // Get the selected brand models
    let selectedModels = [];
    selectedModels = models?.filter(
      (model) => model?.brandId?._id === selectedBrandId
    );
    setSelectedModelList(selectedModels);
  }, [selectedBrandId]);

  useEffect(() => {
    // Get the selected state cities
    let selectedState = [];

    selectedState = cities?.filter(
      (city) => city?.stateId?._id === selectedStateId
    );

    setSelectedCitiesList(selectedState);
  }, [selectedStateId]);
  return (
    <div className="bg-white w-full  border border-gray-200 rounded-xl  min-h-[150px]  edit__sellform__grid  px-2 md:px-8 py-8   gap-4 md:gap-8   mb-[40px] ">
      <div className="w-full lg:flex-1 px-4 lg:px-0   flex flex-col justify-start gap-4 state">
        <Label className="poppins-semibold  ">Select Fairshop State</Label>
        <div className="custom-select">
          <select
            className="border border-gray-400 p-4 rounded-lg text-sm md:text-base focus:outline-none"
            onChange={(e) =>
              e.target.value.length > 0 && setSelectedStateId(e.target.value)
            }
            disabled={!states?.length > 0}
          >
            <option className="">Select State</option>

            {states &&
              states.map((state) => (
                <option value={state._id} className="" key={state._id}>
                  {state.name}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className="w-full   px-4 lg:px-0  flex flex-col justify-start gap-4 lga">
        <Label className="poppins-semibold  ">Select City</Label>
        <div className="custom-select">
          <select
            className="border border-gray-400 p-4 rounded-lg text-sm md:text-base focus:outline-none"
            disabled={!selectedStateId}
            onChange={(e) =>
              e.target.value.length > 0 &&
              setPhoneDetails({ ...phoneDetails, cityId: e.target.value })
            }
          >
            <option className="">Select City</option>

            {selectedCitiesList &&
              selectedCitiesList.map((city) => (
                <option value={city._id} className="" key={city._id}>
                  {city.name}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="w-full  px-4 lg:px-0   flex flex-col justify-start gap-4 brand">
        <Label className="poppins-semibold  ">Select Phone Brand</Label>
        <div className="custom-select">
          <select
            className="border border-gray-400 p-4 rounded-lg text-sm md:text-base focus:outline-none"
            onChange={(e) =>
              e.target.value.length > 0 && setSelectedBrandId(e.target.value)
            }
          >
            <option className="">Select Brand</option>

            {brands &&
              brands.map((brand) => (
                <option
                  value={brand._id}
                  className=""
                  key={brand._id}
                  disabled={!brand.isActive}
                >
                  {brand.name}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className="w-full   px-4 lg:px-0  flex flex-col justify-start gap-4 model">
        <Label className="poppins-semibold  ">Select Phone Model</Label>
        <div className="custom-select">
          <select
            className="border border-gray-400 p-4 rounded-lg text-sm md:text-base focus:outline-none"
            disabled={!selectedBrandId}
            onChange={(e) => {
              if (e.target.value.length === 0) return;
              setSelectedModel(e.target.value);
              setPhoneDetails({ ...phoneDetails, modelId: e.target.value });
            }}
          >
            <option className="">Select Model</option>

            {selectedModelList &&
              selectedModelList.map((model) => (
                <option
                  value={model._id}
                  className=""
                  key={model._id}
                  disabled={!model.isActive}
                >
                  {model.name}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default EditSellForm;

import { useEffect } from "react";

import { useBrandsAndModelsStore } from "../../store/sell/brandsAndModelsStore";

import { convertToLocaleString } from "../../lib/utils";
import { useUpdateSaleStore } from "../../store/sell/updateSaleStore";

const EditSellVariant = () => {
  const selectedModel = useBrandsAndModelsStore((state) => state.selectedModel);
  const selectedVariant = useBrandsAndModelsStore(
    (state) => state.selectedVariant
  );
  const setSelectedVariant = useBrandsAndModelsStore(
    (state) => state.setSelectedVariant
  );

  const models = useBrandsAndModelsStore((state) => state.models);
  const selectedModelList = useBrandsAndModelsStore(
    (state) => state.selectedModelList
  );
  const phoneDetails = useUpdateSaleStore((state) => state.phoneDetails);
  const setPhoneDetails = useUpdateSaleStore((state) => state.setPhoneDetails);

  const currentTransaction = useUpdateSaleStore(
    (state) => state.currentTransaction
  );
  const setShowDetails = useUpdateSaleStore((state) => state.setShowDetails);

  useEffect(() => {
    setPhoneDetails({
      ...phoneDetails,
      variantId: selectedVariant.id,
      model: selectedModelList[0],
    });
  }, [selectedVariant]);

  return (
    <main className="w-full   relative poppins-regular  bg-white  text-sm md:text-base">
      <div className="flex flex-col gap-4">
        <p className="">Choose a {selectedModelList[0]?.name} variant</p>
        <div className="flex  flex-col md:flex-row gap-4 md:gap-12 items-center w-full">
          {/* Variant Con Starts */}
          <div className=" text-sm poppins-medium">
            <div className="flex  flex-wrap  gap-4 items-center">
              {selectedModel &&
                models
                  ?.filter((model) => model._id === selectedModel)[0]
                  ?.variants.map((variant) => (
                    <label
                      className="flex items-center gap-4 border px-6 py-2 cursor-pointer"
                      onClick={() => {
                        setShowDetails(true);

                        setSelectedVariant(variant);
                      }}
                      key={variant.id}
                    >
                      <input type="radio" value={variant.id} name="variant" />
                      <span className="cursor-pointer uppercase">
                        {variant.name}
                      </span>
                    </label>
                  ))}
            </div>
          </div>
          {/* Variant Con Ends */}
          {selectedVariant?.maxPurchasePrice && (
            <div className="flex items-center gap-4 ">
              <p className="">Get Up To</p>
              <h1 className="poppins-bold text-3xl text-[#FF6565] ">
                ₦{convertToLocaleString(selectedVariant.maxPurchasePrice)}.00
              </h1>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default EditSellVariant;

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../../components/ui/button";
import GoBack from "../../components/CoreComponents/Core/GoBack";

import phoneImg from "../../assets/images/phone_14_01.jpg";

import { useBrandsAndModelsStore } from "../../store/sell/brandsAndModelsStore";
import { useDeviceDetailsStore } from "../../store/sell/deviceDetailsStore";

import { convertToLocaleString } from "../../lib/utils";

const DeviceVariant = () => {
  const navigate = useNavigate();

  const selectedModel = useBrandsAndModelsStore((state) => state.selectedModel);
  const selectedVariant = useBrandsAndModelsStore(
    (state) => state.selectedVariant
  );
  const setSelectedVariant = useBrandsAndModelsStore(
    (state) => state.setSelectedVariant
  );

  const phoneDetails = useDeviceDetailsStore((state) => state.phoneDetails);
  const setPhoneDetails = useDeviceDetailsStore(
    (state) => state.setPhoneDetails
  );
  const models = useBrandsAndModelsStore((state) => state.models);
  const selectedModelList = useBrandsAndModelsStore(
    (state) => state.selectedModelList
  );
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => goToTop(), []);
  useEffect(() => {
    !selectedModel && navigate("/sell");
  }, []);

  useEffect(() => {
    setPhoneDetails({
      ...phoneDetails,
      variantId: selectedVariant.id,
      model: selectedModelList[0],
    });
    console.log(phoneDetails);
  }, [selectedVariant]);

  return (
    <main className="w-full min-h-[90vh] px-6 md:px-32  relative poppins-regular pt-36 pb-16 bg-white  text-sm md:text-base">
      <GoBack />
      <p className=" text-center md:text-left   mb-12 text-2xl poppins-semibold text-[#0E0C4D]">
        Sell Your Old Iphone 14 Pro Max
      </p>
      <section className="w-4/5 md:w-full bg-white flex flex-col   items-center md:flex-row gap-8 lg:gap-20 py-16 px-10 md:px-8 lg:px-20 box-shadow mx-auto md:mx-0">
        <img
          src={phoneImg}
          alt=""
          className="max-w-[300px] lg:max-w-[350px] max-h-[400px]"
        />
        <div className="flex flex-col gap-4">
          <h1 className="poppins-bold text-lg">Iphone 14 Pro Max</h1>
          <p className="">Choose a variant</p>

          {/* Variant Con Starts */}
          <div className="mb-12 text-sm poppins-medium">
            <div className="flex  flex-wrap  gap-4 items-center">
              {selectedModel &&
                models
                  .filter((model) => model._id === selectedModel)[0]
                  ?.variants.map((variant) => (
                    <label
                      className="flex items-center gap-4 border px-6 py-2 cursor-pointer"
                      onClick={() => setSelectedVariant(variant)}
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
            <div className="">
              <p className="mb-4">Get Up To</p>
              <h1 className="poppins-bold text-3xl text-[#FF6565] mb-4">
                ₦{convertToLocaleString(selectedVariant.maxPurchasePrice)}.00
              </h1>

              <Button className="bg-[#130D52] hover:bg-[#130D52] h-[max-content] px-0">
                <Link
                  to="/sell/device-details"
                  className="w-full px-8 lg:px-12 text-base py-2"
                >
                  Get Exact Price
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default DeviceVariant;

import { useEffect, useState } from "react";

import phoneImg from "../../assets/images/phone_14_01.jpg";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import GoBack from "../../components/CoreComponents/Core/GoBack";

const DeviceVariant = () => {
  const [showPrice, setShowPrice] = useState(false);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => goToTop(), []);

  return (
    <main className="w-full min-h-[90vh] px-6 md:px-32  relative poppins-regular pt-36 pb-16 bg-white  text-sm md:text-base">
      <GoBack />
      <p className=" text-center md:text-left   mb-12 text-2xl poppins-semibold text-[#0E0C4D]">
        Sell Your Old Iphone 14 Pro Max
      </p>
      <section className="w-full bg-white flex flex-col  md:flex-row gap-8 lg:gap-20 py-16 px-10 lg:px-20 box-shadow">
        <img src={phoneImg} alt="" className="max-w-[350px] max-h-[400px]" />
        <div className="flex flex-col gap-4">
          <h1 className="poppins-bold text-lg">Iphone 14 Pro Max</h1>
          <p className="">Choose a variant</p>

          {/* Variant Con Starts */}
          <div className="mb-12 text-sm poppins-medium">
            <div className="flex  flex-wrap  gap-4 items-center">
              <label
                className="flex items-center gap-4 border px-6 py-2 cursor-pointer"
                onClick={() => setShowPrice(true)}
              >
                <input type="radio" value="Carton" name="variant" />
                <span className="cursor-pointer">64GB/4GB</span>
              </label>

              <label
                className="flex items-center gap-4 border px-6 py-2 cursor-pointer"
                onClick={() => setShowPrice(true)}
              >
                <input type="radio" value="Charger" name="variant" />
                <span className="cursor-pointer">128GB/4GB</span>
              </label>
              <label
                className="flex items-center gap-4 border px-6 py-2 cursor-pointer"
                onClick={() => setShowPrice(true)}
              >
                <input type="radio" value="Receipt" name="variant" />
                <span className="cursor-pointer">128GB/8GB</span>
              </label>
            </div>
          </div>
          {/* Variant Con Ends */}
          {showPrice && (
            <div className="">
              <p className="mb-4">Get Up To</p>
              <h1 className="poppins-bold text-3xl text-[#FF6565] mb-4">
                ₦300,000.00
              </h1>

              <Button className="bg-[#130D52] hover:bg-[#130D52] h-[max-content] px-0">
                <Link
                  to="/sell/device-details"
                  className="w-full px-12 text-base py-2"
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

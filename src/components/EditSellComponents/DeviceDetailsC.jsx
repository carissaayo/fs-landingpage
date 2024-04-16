import { useDeviceDetailsStore } from "../../store/sell/deviceDetailsStore";
import { useBrandsAndModelsStore } from "../../store/sell/brandsAndModelsStore";
import EditBodyCon from "./EditBodyCon";

const DeviceDetailsC = () => {
  const phoneDetails = useDeviceDetailsStore((state) => state.phoneDetails);

  const phoneConditions = useBrandsAndModelsStore(
    (state) => state.phoneConditions
  );
  return (
    <section className="w-full bg-white  py-8">
      <p className="poppins-bold text-lg text-center mb-8">
        {phoneConditions?.three?.description}
      </p>

      <EditBodyCon />
    </section>
  );
};

export default DeviceDetailsC;

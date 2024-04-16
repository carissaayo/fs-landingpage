import EditFaultsCon from "./EditFaultsCon";

import { useBrandsAndModelsStore } from "../../store/sell/brandsAndModelsStore";

const DeviceDetailsB = () => {
  const phoneConditions = useBrandsAndModelsStore(
    (state) => state.phoneConditions
  );

  return (
    <section className="w-full bg-white  py-8">
      <p className="poppins-bold text-lg text-center mb-8">
        {phoneConditions?.two?.description}
      </p>

      <EditFaultsCon />
    </section>
  );
};

export default DeviceDetailsB;

import { useBrandsAndModelsStore } from "../../store/sell/brandsAndModelsStore";
import EditAccessoriesCon from "./EditAccessoriesCon";

const Accessories = () => {
  const phoneConditions = useBrandsAndModelsStore(
    (state) => state.phoneConditions
  );

  return (
    <section className="w-full bg-white  py-8">
      <p className="poppins-bold text-lg text-center mb-8">
        {phoneConditions?.three?.description}
      </p>

      <EditAccessoriesCon />
    </section>
  );
};

export default Accessories;

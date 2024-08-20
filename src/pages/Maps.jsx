import CadastralMap from "./widgets/CadastralMap";
import UrbanDevelopmentPlan from "./widgets/UrbanDevelopmentPlan";
import AdjustmentByLocation from "./widgets/AdjustmentByLocation";
import PriceZoning from "./widgets/PriceZoning";

const Maps = () => {
  return (
    <>
      {/* Поиск для профессионалов */}
      <section className="maps none1">
        <div className="container">
          <div className="block block--shadow">
            <div className="maps__cards">
              <AdjustmentByLocation />
              <UrbanDevelopmentPlan />
              <PriceZoning />
              <CadastralMap />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Maps;

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
          <div className="block block--shadow block--padding0">
            <div className="maps__cards">
              {/* Корректировка по местоположению */}
              <div className="adjustment block block--w580">
                <AdjustmentByLocation />
              </div>

              {/* Градостроительный план */}
              <div className="grad-plan block block--w580">
                <UrbanDevelopmentPlan />
              </div>

              {/* Ценовое зонирование */}
              <div className="price-zone block block--w580">
                <PriceZoning />
              </div>

              {/* Публичная кадастровая карта */}
              <div
                className="cad-map block block--w580"
                id="cadastre"
              >
                <CadastralMap />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Maps;

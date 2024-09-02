import images from "../../constants/data";

const AdjustmentByLocation = () => {
  return (
    <>
      {/* Корректировка по местоположению */}
      <div className="correct block block--w380">
        <div className="correct__title">
          <h2 className="title-16">Корректировка по местоположению</h2>
          <p className="subtitle">Для определения стоимости квартиры</p>
          <div className="title-line"></div>
        </div>

        <div className="correct__content">
          <div className="correct__content-img">
            <img
              src={images.wCorrect}
              alt="Корректировка по местоположению - график"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdjustmentByLocation;

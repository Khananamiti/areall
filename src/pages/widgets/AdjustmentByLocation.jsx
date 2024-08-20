import images from "../../constants/data";

const AdjustmentByLocation = () => {
  return (
    <>
      {/* Корректировка по местоположению */}
      <div className="adjustment__title">
        <h2 className="title-16">Корректировка по местоположению</h2>
        <p className="subtitle">Для определения стоимости квартиры</p>
        <div className="title-line"></div>
      </div>

      <div className="adjustment__content">
        <div className="adjustment__content-img">
          <img
            src={images.wCorrect}
            alt="Корректировка по местоположению - график"
          />
        </div>
      </div>
    </>
  );
};

export default AdjustmentByLocation;

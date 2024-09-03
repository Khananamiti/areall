import images from "../../constants/data";

const CadastralMap = () => {
  return (
    <>
      {/* Публичная кадастровая карта */}
      <div className="cad-map block block--w380 block--fix1" id="cadastre">
        <div className="cad-map__title">
          <h2 className="title-16">Публичная кадастровая карта</h2>
          <p className="subtitle">
            ГИС аналитика рынка недвижимости <br />
            Ценовое зонирование
            <br />
            Мониторинг кадастровой оценки
          </p>
          <div className="title-line"></div>
        </div>
        <div className="cad-map__content">
          <p className="subtitle">
            Публичная кадастровая карта: Новосибирская область
          </p>
          <div className="cad-map__content-img">
            <img
              src={images.wCadMap}
              alt="Публичная кадастровая карта - карта"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CadastralMap;

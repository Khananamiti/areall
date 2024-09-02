import images from "../../constants/data";

const PriceZoning = () => {
  return (
    <>
      {/* Ценовое зонирование */}
      <div className="price-zone block block--w380 block--fix1">
        <div className="price-zone__title">
          <h2 className="title-16">Ценовое зонирование</h2>
          <p className="subtitle">
            Территориально-экономическое зонирование города Омск
          </p>
          <div className="title-line"></div>
        </div>
        <div className="price-zone__content">
          <div className="price-zone__content-img">
            <img src={images.wPriceZone} alt="Ценовое зонирование - карта" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceZoning;
